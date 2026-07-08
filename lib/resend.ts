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

// Shared shell used by every transactional email so notifications (business
// side) and confirmations (customer side) look like one consistent system
// rather than two different templates. Deliberately plain — heavily
// designed, image-heavy HTML reads as "marketing" to Gmail's classifier and
// is more likely to land in Promotions than a simple transactional layout.
export function wrapEmailHtml(bodyHtml: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #16233a; font-size: 15px; line-height: 1.6;">
      <div style="border-bottom: 2px solid #cda15a; padding-bottom: 12px; margin-bottom: 20px;">
        <span style="font-size: 19px; font-weight: 700; color: #16233a;">Elite<span style="color: #a97f3d;"> Autocare</span></span>
      </div>
      ${bodyHtml}
      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 13px; color: #6b7280;">
        Elite Autocare &middot; Mobile Valeting &amp; Detailing, Glasgow<br />
        07946 089 183 &middot; eliteautocare.co.uk
      </div>
    </div>
  `;
}
