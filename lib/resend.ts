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
