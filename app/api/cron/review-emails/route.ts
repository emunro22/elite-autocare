import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { getResendClient, assertSent, FROM_EMAIL, wrapEmailHtml, emailButton } from "@/lib/resend";

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
          subject: `Thanks, ${booking.name}!`,
          html: wrapEmailHtml(
            `Thanks, ${booking.name}!`,
            `
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#f5f7fa;line-height:1.6;">We hope you're happy with how your vehicle turned out today. If you have a minute, we'd really appreciate a quick Google review — it helps us a lot.</p>
          ${emailButton(GOOGLE_REVIEW_URL, "Leave a review")}
        `
          ),
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
