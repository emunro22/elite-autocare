import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import {
  durationForPackage,
  generateCandidateSlots,
  dropPastSlots,
  isBookableDate,
  addMinutes,
} from "@/lib/scheduling";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date") || "";
  const packageSlug = (req.nextUrl.searchParams.get("package") || "").toLowerCase();

  const durationMin = durationForPackage(packageSlug);
  if (!durationMin) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !isBookableDate(date)) {
    return NextResponse.json({ slots: [] });
  }

  await ensureSchema();

  const rows = await sql`
    SELECT start_time, end_time FROM bookings WHERE booking_date = ${date}
  `;

  const candidates = dropPastSlots(date, generateCandidateSlots(durationMin));

  const freeSlots = candidates.filter((start) => {
    const end = addMinutes(start, durationMin);
    return !rows.some(
      (b) => start < String(b.end_time).slice(0, 5) && end > String(b.start_time).slice(0, 5)
    );
  });

  return NextResponse.json({ slots: freeSlots });
}
