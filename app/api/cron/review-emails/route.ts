import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { getResendClient, assertSent, FROM_EMAIL } from "@/lib/resend";

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
          subject: `Your car today, ${booking.name}`,
          html: `<p>Hi ${booking.name},</p>
<p>Thanks for having us out today — hope the car's looking the part.</p>
<p>If you've got a minute, a quick Google review would really help us out: <a href="${GOOGLE_REVIEW_URL}">${GOOGLE_REVIEW_URL}</a></p>
<p>Cheers,<br />Elite Autocare</p>`,
          text: `Hi ${booking.name},

Thanks for having us out today — hope the car's looking the part.

If you've got a minute, a quick Google review would really help us out:
${GOOGLE_REVIEW_URL}

Cheers,
Elite Autocare`,
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
