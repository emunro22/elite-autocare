-- Run once against the Vercel Postgres database (also applied automatically
-- and idempotently by ensureSchema() in lib/db.ts on first query).
CREATE EXTENSION IF NOT EXISTS btree_gist;

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
);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings (booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_unsent ON bookings (booking_date)
  WHERE review_email_sent_at IS NULL;
