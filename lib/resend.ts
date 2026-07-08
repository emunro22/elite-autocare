import { Resend } from "resend";

// The Resend SDK does not throw on API errors (invalid key, unverified
// domain, rate limit, etc.) — it resolves with { data: null, error }. Callers
// must check this, or a failed send silently looks like a success.
export function assertSent<T extends { error: { message: string } | null }>(result: T): void {
  if (result.error) {
    throw new Error(result.error.message);
  }
}

// Reads RESEND_API_KEY from environment at call time so the module can be
// safely imported even before env vars are configured in local dev.
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local and to your Vercel project's environment variables."
    );
  }
  return new Resend(apiKey);
}

// The address bookings and contact messages are sent to.
export const BUSINESS_EMAIL =
  process.env.BUSINESS_EMAIL || "eliteautocare10@icloud.com";

// The verified "from" address for Resend. Must be on a domain you've
// verified in the Resend dashboard before going live.
export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Elite Autocare <bookings@eliteautocare.co.uk>";

const SITE_URL = "https://eliteautocare.co.uk";

// Shared shell used by every customer-facing email (booking confirmation,
// review request) so they read as one consistent branded system. Mirrors
// the site's navy/gold palette from tailwind.config.ts.
export function wrapEmailHtml(bodyHtml: string): string {
  return `
    <div style="background-color: #050b16; padding: 32px 16px;">
      <div style="max-width: 480px; margin: 0 auto; background-color: #0a1628; border: 1px solid rgba(205,161,90,0.25); border-radius: 16px; padding: 32px 28px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${SITE_URL}/images/logo-email.png" width="120" height="120" alt="Elite Autocare" style="display: inline-block; width: 120px; height: 120px;" />
        </div>
        <div style="height: 1px; background: linear-gradient(to right, transparent, rgba(205,161,90,0.4), transparent); margin-bottom: 24px;"></div>
        ${bodyHtml}
        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #8ea0bc; text-align: center;">
          Elite Autocare &middot; Mobile Valeting &amp; Detailing, Glasgow<br />
          07946 089 183 &middot; eliteautocare.co.uk
        </div>
      </div>
    </div>
  `;
}

// Renders a label/value row used inside the booking details card.
function emailFieldRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="display: block; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #cda15a; font-weight: 600;">${label}</span>
        <span style="display: block; font-size: 15px; color: #f5f7fa; font-weight: 600; margin-top: 3px;">${value}</span>
      </td>
    </tr>
  `;
}

// A rounded card of label/value rows (package, date, time, address, etc.)
export function emailFieldsBox(fields: [label: string, value: string][]): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f2038; border-radius: 12px; padding: 4px 16px; margin: 20px 0;">
      ${fields.map(([label, value]) => emailFieldRow(label, value)).join("")}
    </table>
  `;
}
