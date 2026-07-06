import { neon } from "@neondatabase/serverless";

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env.local and to your Vercel project's environment variables (provision a Postgres store under Storage → Create → Postgres, which auto-populates this)."
    );
  }
  return url;
}

// Neon's HTTP driver: rows come back as a plain array, not { rows }.
export function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  return neon(getDatabaseUrl())(strings, ...values);
}

let schemaReady: Promise<void> | null = null;

// Idempotent — safe to call on every request. Runs once per warm serverless
// instance; lib/db/schema.sql is the source of truth if you'd rather apply it by hand.
export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`CREATE EXTENSION IF NOT EXISTS btree_gist`;
      await sql`
        CREATE TABLE IF NOT EXISTS bookings (
          id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
          name                  TEXT NOT NULL,
          email                 TEXT NOT NULL,
          phone                 TEXT NOT NULL,
          address               TEXT NOT NULL,
          vehicle               TEXT NOT NULL,
          package_slug          TEXT NOT NULL,
          package_name          TEXT NOT NULL,
          price                 NUMERIC(6,2),
          booking_date          DATE NOT NULL,
          start_time            TIME NOT NULL,
          end_time              TIME NOT NULL,
          notes                 TEXT,
          review_email_sent_at  TIMESTAMPTZ,
          time_range            tsrange GENERATED ALWAYS AS (
                                   tsrange(booking_date + start_time, booking_date + end_time)
                                 ) STORED,
          EXCLUDE USING gist (time_range WITH &&)
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings (booking_date)`;
      await sql`
        CREATE INDEX IF NOT EXISTS idx_bookings_unsent ON bookings (booking_date)
        WHERE review_email_sent_at IS NULL
      `;
    })();
  }
  return schemaReady;
}
