# Elite Autocare

Mobile valeting & detailing website, built with Next.js 14 (App Router),
TypeScript, Tailwind CSS and Framer Motion. Bookings are stored in a
Postgres database (Neon, via Vercel), and confirmation/notification
emails are sent using Resend. A daily cron job emails past customers
a Google review request the same evening as their appointment.

## Getting started

```bash
npm install
cp .env.example .env.local
# edit .env.local and add your RESEND_API_KEY and DATABASE_URL
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — pages (App Router): home, services, areas (+ per-area pages),
  booking, contact, about, and the `/api/booking`, `/api/availability`,
  `/api/contact` and `/api/cron/review-emails` routes.
- `components/` — Navbar, Footer, Hero, PackageCard, BookingForm,
  ContactForm, Testimonials, BubbleField (ambient background), SectionHeading.
- `lib/services.ts` — the Silver / Gold / Platinum package data, taken
  from the poster. Edit prices or feature lists here.
- `lib/scheduling.ts` — business hours (Mon–Fri, 9am–7pm), package
  durations (Silver 1.5h, Gold 2.5h, Platinum 3.5h) and the three fixed
  appointment windows (9-1, 1-4, 4-7) behind the booking calendar. Edit
  this if hours, durations, or the slot windows change.
- `lib/db.ts` — the Postgres client and `ensureSchema()`, which creates
  the `bookings` table on first use so there's no manual migration step.
- `lib/areas.ts` — the list of areas covered. The poster didn't specify
  a service area, so this currently assumes a Glasgow-based mobile round
  (city centre, West End, Southside, Clydebank, Erskine, Renfrew,
  Paisley, Bearsden/Milngavie, Newton Mearns). **Edit this file to match
  your real coverage area before launch.**

## Setting up the booking database

1. In your Vercel project, go to **Storage → Create Database → Postgres**
   (powered by Neon) and connect it to this project. Vercel will inject
   `DATABASE_URL` (and a few related vars) into your project automatically.
2. For local development, copy the connection string Vercel/Neon gives you
   into `DATABASE_URL` in `.env.local`.
3. That's it — the `bookings` table and its indexes are created
   automatically the first time any booking-related route runs
   (`lib/db.ts`'s `ensureSchema()`). No manual migration needed, though
   `lib/db/schema.sql` has the same DDL if you'd rather run it by hand in
   the Neon SQL editor.

The database is what makes the booking form show real availability: once
someone books a slot, it's held instantly (enforced at the database level
via a Postgres exclusion constraint, so two people can never double-book
the same overlapping time even if they submit at the same moment).

## Setting up the review-request cron

A Vercel Cron job (see `vercel.json`) hits `/api/cron/review-emails` once a
day. It finds any booking dated "today" (Europe/London) that hasn't had a
review email sent yet, and emails that customer a link to leave a Google
review, then marks it as sent so it's never emailed twice.

1. Generate a random secret, e.g. `openssl rand -hex 32`.
2. Add it as `CRON_SECRET` in your Vercel project's environment variables
   (and `.env.local` if you want to test it locally). Vercel automatically
   sends this as a bearer token when it triggers the cron, so only Vercel
   can call the endpoint.
3. `GOOGLE_REVIEW_URL` defaults to Elite Autocare's review link
   (`https://g.page/r/CR9jW1DER_QgEBM/review`) — override it if that ever
   changes.

Note: Vercel's Hobby (free) plan only runs crons once a day, so the
schedule in `vercel.json` (`0 19 * * *`, i.e. 19:00 UTC) is a fixed
approximation of "evening" rather than an exact time after each job.

## Setting up Resend (the booking system)

1. Create a free account at https://resend.com
2. Add and verify a domain you own under **Domains** (this lets you send
   from an address like `bookings@eliteautocare.co.uk` instead of the
   Resend sandbox address).
3. Create an API key under **API Keys**.
4. Add these environment variables — locally in `.env.local`, and in
   your Vercel project under **Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `BUSINESS_EMAIL` — where booking/contact emails land (defaults to
     eliteautocare10@icloud.com)
   - `RESEND_FROM_EMAIL` — must be on your verified domain, e.g.
     `Elite Autocare <bookings@eliteautocare.co.uk>`

Until a domain is verified, Resend only allows sending to the email
address on your own Resend account — fine for testing the form, not for
real customer bookings.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new
3. Add all the environment variables from `.env.example` in the Vercel
   project settings (`RESEND_API_KEY`, `BUSINESS_EMAIL`, `RESEND_FROM_EMAIL`,
   `DATABASE_URL`, `CRON_SECRET`, `GOOGLE_REVIEW_URL`).
4. Connect the Postgres/Neon storage (see above) so `DATABASE_URL` is set.
5. Deploy. Vercel will build and host the site automatically on every
   push to your main branch, and will start running the review-email
   cron on the schedule in `vercel.json`.

## Things to double check before launch

- Swap the placeholder logo wordmark in `components/Navbar.tsx` /
  `Footer.tsx` for your real logo file if you have a vector version.
- Confirm the areas list in `lib/areas.ts` matches where you actually
  work.
- Machine polish and ceramic coating are listed as "quote after
  assessment" — update `lib/services.ts` if you'd rather list fixed
  prices.
- Update the metadata `metadataBase` URL in `app/layout.tsx` once you
  have a real domain.
