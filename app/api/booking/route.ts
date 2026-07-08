import { NextRequest, NextResponse } from "next/server";
import { getResendClient, assertSent, BUSINESS_EMAIL, FROM_EMAIL, wrapEmailHtml, emailFieldsBox } from "@/lib/resend";
import { ensureSchema, sql } from "@/lib/db";
import {
  durationForPackage,
  addMinutes,
  isBookableDate,
  generateCandidateSlots,
  dropPastSlots,
  PACKAGE_DISPLAY_NAME,
} from "@/lib/scheduling";
import { packages } from "@/lib/services";

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicle: string;
  packageSlug: string;
  date: string;
  startTime: string;
  notes?: string;
};

function isValidPayload(body: unknown): body is BookingPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 1 &&
    typeof b.email === "string" &&
    /\S+@\S+\.\S+/.test(b.email) &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 4 &&
    typeof b.address === "string" &&
    b.address.trim().length > 3 &&
    typeof b.vehicle === "string" &&
    typeof b.packageSlug === "string" &&
    typeof b.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(b.date) &&
    typeof b.startTime === "string" &&
    /^\d{2}:\d{2}$/.test(b.startTime)
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in all required fields with valid details." },
      { status: 400 }
    );
  }

  const { name, email, phone, address, vehicle, packageSlug, date, startTime, notes } = body;

  const durationMin = durationForPackage(packageSlug);
  if (!durationMin) {
    return NextResponse.json({ error: "Unknown package." }, { status: 400 });
  }

  if (!isBookableDate(date)) {
    return NextResponse.json(
      { error: "That date isn't bookable. Please pick a weekday that hasn't passed." },
      { status: 400 }
    );
  }

  const validSlots = dropPastSlots(date, generateCandidateSlots(durationMin));
  if (!validSlots.includes(startTime)) {
    return NextResponse.json(
      { error: "That time isn't valid for the selected package. Please pick another slot." },
      { status: 400 }
    );
  }

  const endTime = addMinutes(startTime, durationMin);
  const packageName = PACKAGE_DISPLAY_NAME[packageSlug] || packageSlug;
  const price = packages.find((p) => p.slug === packageSlug)?.price ?? null;

  try {
    await ensureSchema();

    await sql`
      INSERT INTO bookings
        (name, email, phone, address, vehicle, package_slug, package_name, price, booking_date, start_time, end_time, notes)
      VALUES
        (${name}, ${email}, ${phone}, ${address}, ${vehicle}, ${packageSlug}, ${packageName}, ${price}, ${date}, ${startTime}, ${endTime}, ${notes || null})
    `;
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code;
    if (code === "23P01") {
      return NextResponse.json(
        { error: "That slot was just taken — please pick another." },
        { status: 409 }
      );
    }
    console.error("Booking insert failed:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your booking. Please call us on 07946 089 183." },
      { status: 500 }
    );
  }

  try {
    const resend = getResendClient();

    assertSent(
      await resend.emails.send({
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        reply_to: email,
        subject: `New booking: ${packageName} — ${name}`,
        html: wrapEmailHtml(
          "New booking",
          emailFieldsBox([
            ["Package", packageName],
            ["Name", name],
            ["Email", email],
            ["Phone", phone],
            ["Address / postcode", address],
            ["Vehicle", vehicle],
            ["Date", date],
            ["Time", `${startTime} – ${endTime}`],
            ["Notes", notes || "—"],
          ])
        ),
        text: `New booking

Package: ${packageName}
Name: ${name}
Email: ${email}
Phone: ${phone}
Address / postcode: ${address}
Vehicle: ${vehicle}
Date: ${date}
Time: ${startTime} – ${endTime}
Notes: ${notes || "—"}`,
      })
    );

    assertSent(
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "We've received your Elite Autocare booking",
        html: wrapEmailHtml(
          `Thanks, ${name}!`,
          `
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#f5f7fa;line-height:1.6;">Your booking is confirmed. We'll see you then — call us on 07946&nbsp;089&nbsp;183 if anything changes.</p>
        ${emailFieldsBox([
          ["Package", packageName],
          ["Date", date],
          ["Time", `${startTime} – ${endTime}`],
          ["Address", address],
        ])}
      `
        ),
        text: `Thanks, ${name}!

Your ${packageName} booking is confirmed.

Package: ${packageName}
Date: ${date}
Time: ${startTime} – ${endTime}
Address: ${address}

We'll see you then — call us on 07946 089 183 if anything changes.

— Elite Autocare`,
      })
    );
  } catch (err) {
    console.error("Booking confirmation email failed:", err);
    // The booking itself is already saved; don't fail the request over email delivery.
  }

  return NextResponse.json({ success: true });
}
