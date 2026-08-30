import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Booking, payment, cancellation and weather terms for Elite Autocare's mobile valeting and detailing service.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <FileText size={13} className="text-gold-400" /> Terms &amp; Conditions
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Terms &amp; conditions
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        Last updated 30 August 2026. These terms apply whenever you book a
        valet with Elite Autocare, whether online, by phone or via WhatsApp.
      </p>

      <div className="mt-14 max-w-3xl space-y-10 text-base leading-relaxed text-mist-300">
        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Bookings
          </h2>
          <p className="mt-3">
            A booking is confirmed once we&apos;ve got in touch to acknowledge
            it — by email, phone or WhatsApp. Please provide accurate contact
            details, service address and vehicle information so we can plan
            the visit and arrive with the right equipment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Access &amp; parking
          </h2>
          <p className="mt-3">
            We bring our own water and power, so all we need is somewhere to
            park close to the vehicle and safe access to it at the agreed
            time. If we can&apos;t access the vehicle at the booked slot, we&apos;ll
            try to reach you, but repeated missed access may mean the
            booking needs to be rescheduled.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Weather
          </h2>
          <p className="mt-3">
            We work through the year, including winter, and bring our own
            hot water so cold weather doesn&apos;t stop a booking. If heavy
            rain or snow is falling during the appointment itself, it can
            undo an exterior wash as we go — in that case we&apos;ll contact
            you to reschedule rather than carry out work that won&apos;t last.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Pricing &amp; additional charges
          </h2>
          <p className="mt-3">
            Package prices are shown on our Services page and confirmed at
            booking. Excessive dirt, pet hair, or heavily soiled interiors
            may incur an additional charge, which we&apos;ll always agree
            with you before starting work. Machine polishing and ceramic
            coating are quoted individually based on photos of your
            paintwork.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Payment
          </h2>
          <p className="mt-3">
            Payment is due on completion of the work, by the method agreed
            when you book.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Cancellations &amp; rescheduling
          </h2>
          <p className="mt-3">
            We ask for as much notice as possible if you need to cancel or
            move a booking, so we can offer the slot to someone else.
            Repeated late cancellations or no-shows may affect our ability
            to offer future bookings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Vehicle condition &amp; liability
          </h2>
          <p className="mt-3">
            We take care over every vehicle, but please let us know in
            advance about any pre-existing damage, aftermarket parts, or
            delicate trim that needs special attention. We&apos;re not
            responsible for pre-existing damage, and we&apos;ll always flag
            anything we notice before starting work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-mist-100">
            Contact
          </h2>
          <p className="mt-3">
            Questions about these terms? Email{" "}
            <a href="mailto:eliteautocare10@icloud.com" className="text-gold-400 hover:text-gold-300">
              eliteautocare10@icloud.com
            </a>{" "}
            or call 07946 089 183.
          </p>
        </section>
      </div>
    </div>
  );
}
