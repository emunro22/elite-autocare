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

// Table-based layout (not divs) so it renders correctly in Outlook desktop
// and other clients with poor CSS support, not just Gmail/Apple Mail.
function emailFieldRows(fields: [label: string, value: string][]): string {
  return fields
    .map(
      ([label, value], i) => `
        <tr>
          <td style="padding:${i === 0 ? "0" : "10px"} 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#cda15a;width:40%;vertical-align:top;">
            ${label}
          </td>
          <td style="padding:${i === 0 ? "0" : "10px"} 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#f5f7fa;vertical-align:top;">
            ${value}
          </td>
        </tr>`
    )
    .join("");
}

// A bordered card of label/value rows (package, date, time, address, etc.)
export function emailFieldsBox(fields: [label: string, value: string][]): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;border:1px solid rgba(205,161,90,0.25);border-radius:6px;background:#0f2038;">
      <tr>
        <td style="padding:20px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${emailFieldRows(fields)}
          </table>
        </td>
      </tr>
    </table>
  `;
}

// A gold CTA button matching the brand palette.
export function emailButton(href: string, label: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0 auto;">
      <tr>
        <td style="border-radius:6px;background:#cda15a;">
          <a href="${href}" style="display:inline-block;padding:12px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#050b16;text-decoration:none;">${label}</a>
        </td>
      </tr>
    </table>
  `;
}

// Shared shell used by every automatic email (booking notification,
// confirmation, review request) so they read as one consistent branded
// system. Mirrors the site's navy/gold palette from tailwind.config.ts.
export function wrapEmailHtml(heading: string, innerHtml: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#050b16;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050b16;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0a1628;border-radius:10px;border:1px solid rgba(205,161,90,0.18);overflow:hidden;">
            <tr>
              <td style="padding:28px 40px 0 40px;text-align:center;">
                <img
                  src="${SITE_URL}/images/logo-email.png"
                  width="140"
                  alt="Elite Autocare"
                  style="display:block;margin:0 auto;width:140px;max-width:140px;height:auto;"
                />
              </td>
            </tr>
            <tr>
              <td style="padding:8px 40px 0 40px;">
                <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(205,161,90,0.5),transparent);margin:16px 0;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 32px 40px;">
                <h1 style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:bold;color:#e3c584;text-align:center;">
                  ${heading}
                </h1>
                ${innerHtml}
                <div style="height:1px;background:rgba(205,161,90,0.15);margin:28px 0 20px 0;"></div>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#8ea0bc;">
                  Elite Autocare &mdash; mobile valeting &amp; detailing<br />
                  07946 089 183 &nbsp;&bull;&nbsp; eliteautocare.co.uk
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
