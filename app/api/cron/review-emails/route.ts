import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { getResendClient, assertSent, FROM_EMAIL, wrapEmailHtml } from "@/lib/resend";

const GOOGLE_REVIEW_URL =
  process.env.GOOGLE_REVIEW_URL || "https://g.page/r/CR9jW1DER_QgEBM/review";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await ensureSchema();

  const rows = await sql`
    SELECT id, name, email FROM bookings
    WHERE booking_date = (now() AT TIME ZONE 'Europe/London')::date
      AND review_email_sent_at IS NULL
  `;

  const resend = getResendClient();
  let sent = 0;

  for (const booking of rows) {
    try {
      assertSent(
        await resend.emails.send({
          from: FROM_EMAIL,
          to: booking.email,
          subject: "How did we do? Leave us a review",
          html: wrapEmailHtml(`
          <h2 style="margin: 0 0 16px; font-size: 18px;">Thanks for choosing Elite Autocare, ${booking.name}!</h2>
          <p style="margin: 0 0 12px;">We hope you're happy with how your vehicle turned out today.</p>
          <p style="margin: 0 0 12px;">If you have a minute, we'd really appreciate a quick Google review — it helps us a lot:</p>
          <p style="margin: 0;"><a href="${GOOGLE_REVIEW_URL}" style="color: #a97f3d;">${GOOGLE_REVIEW_URL}</a></p>
        `),
          text: `Thanks for choosing Elite Autocare, ${booking.name}!

We hope you're happy with how your vehicle turned out today.

If you have a minute, we'd really appreciate a quick Google review — it helps us a lot:
${GOOGLE_REVIEW_URL}

Thank you for your support!
— Elite Autocare`,
        })
      );

      // Conditional update makes this safe even if the cron fires more than once.
      const updated = await sql`
        UPDATE bookings SET review_email_sent_at = now()
        WHERE id = ${booking.id} AND review_email_sent_at IS NULL
        RETURNING id
      `;
      if (updated.length) sent += 1;
    } catch (err) {
      console.error(`Review email failed for booking ${booking.id}:`, err);
    }
  }

  return NextResponse.json({ sent, checked: rows.length });
}
