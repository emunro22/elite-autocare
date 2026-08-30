import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Elite Autocare collects, uses and protects your personal data when you book a valet, get in touch, or browse our site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <ShieldCheck size={13} className="text-gold-400" /> Privacy Policy
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        Last updated 30 August 2026. This page explains what personal data
        Elite Autocare collects when you use this website, why, and how it&apos;s
        handled.
      </p>

      <div className="mt-14 max-w-3xl space-y-10 text-base leading-relaxed text-mist-300">
        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Who we are
          </h2>
          <p className="mt-3">
            Elite Autocare is a mobile car valeting and detailing service
            based in Erskine, Renfrewshire. For any question about this
            policy or your data, contact us at{" "}
            <a href="mailto:eliteautocare10@icloud.com" className="text-gold-400 hover:text-gold-300">
              eliteautocare10@icloud.com
            </a>{" "}
            or 07946 089 183.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            What we collect
          </h2>
          <p className="mt-3">We only collect what we need to run bookings and answer enquiries:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="text-mist-100">Booking form:</span> name,
              email, phone number, service address, vehicle details, chosen
              package and any notes you add.
            </li>
            <li>
              <span className="text-mist-100">Contact form:</span> name,
              email address and the message you send us.
            </li>
            <li>
              <span className="text-mist-100">Site analytics:</span> we use
              Vercel Web Analytics, a privacy-friendly, cookieless analytics
              service. It doesn&apos;t use tracking cookies or collect
              personal data — it only reports aggregate figures like page
              views and referring pages.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            How we use it
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To confirm, schedule and carry out your booking.</li>
            <li>To reply to questions sent through the contact form.</li>
            <li>
              To send a booking confirmation email and, after your
              appointment, a single follow-up asking for a review. You can
              opt out of review emails at any time by replying or
              contacting us directly.
            </li>
          </ul>
          <p className="mt-3">
            We never sell your data, and we don&apos;t use it for advertising
            or share it with third parties beyond the processors listed
            below.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Who we share it with
          </h2>
          <p className="mt-3">
            Booking and contact details are stored with our database
            provider (Neon, hosted in the EU) and sent as email
            notifications through our transactional email provider (Resend).
            Both process data on our behalf under their own security and
            data protection terms — neither uses your details for their own
            marketing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Cookies
          </h2>
          <p className="mt-3">
            This site doesn&apos;t use advertising or tracking cookies. The
            only local storage used is a small preference the site remembers
            in your browser once you dismiss the cookie notice, and any
            values needed for the booking form to work. See our cookie
            notice on first visit for details.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            How long we keep it
          </h2>
          <p className="mt-3">
            Booking records are kept for as long as needed for scheduling,
            warranty queries and our own accounting records, and then
            deleted. Contact form messages are kept only as long as needed
            to resolve your query.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Your rights
          </h2>
          <p className="mt-3">
            Under UK GDPR you can ask us to access, correct or delete the
            personal data we hold about you, or ask us to stop using it.
            Email{" "}
            <a href="mailto:eliteautocare10@icloud.com" className="text-gold-400 hover:text-gold-300">
              eliteautocare10@icloud.com
            </a>{" "}
            and we&apos;ll respond within 30 days. If you&apos;re unhappy
            with how we&apos;ve handled your data, you can complain to the
            Information Commissioner&apos;s Office (ico.org.uk).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this policy occasionally to reflect changes to the
            site or the law. The date at the top of this page shows when it
            was last revised.
          </p>
        </section>
      </div>
    </div>
  );
}
