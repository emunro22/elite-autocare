# Elite Autocare

Mobile valeting & detailing website, built with Next.js 14 (App Router),
TypeScript, Tailwind CSS and Framer Motion. Bookings and contact messages
are sent by email using Resend.

## Getting started

```bash
npm install
cp .env.example .env.local
# edit .env.local and add your RESEND_API_KEY
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — pages (App Router): home, services, areas (+ per-area pages),
  booking, contact, about, and the `/api/booking` and `/api/contact`
  email routes.
- `components/` — Navbar, Footer, Hero, PackageCard, BookingForm,
  ContactForm, BubbleField (ambient background), SectionHeading.
- `lib/services.ts` — the Silver / Gold / Platinum package data, taken
  from the poster. Edit prices or feature lists here.
- `lib/areas.ts` — the list of areas covered. The poster didn't specify
  a service area, so this currently assumes a Glasgow-based mobile round
  (city centre, West End, Southside, Clydebank, Erskine, Renfrew,
  Paisley, Bearsden/Milngavie, Newton Mearns). **Edit this file to match
  your real coverage area before launch.**

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
3. Add the same environment variables listed above in the Vercel project
   settings.
4. Deploy. Vercel will build and host the site automatically on every
   push to your main branch.

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
