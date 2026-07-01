import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, CalendarCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Valet",
  description:
    "Book your Elite Autocare mobile valet online. Choose your package, pick a time, and we'll confirm your slot.",
};

export default function BookingPage() {
  return (
    <div className="container-elite py-20">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <span className="eyebrow inline-flex items-center gap-2">
            <CalendarCheck size={13} className="text-gold-400" /> Booking
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-mist-100 sm:text-5xl">
            Book your valet
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist-300">
            Fill in the form and we&apos;ll confirm your slot by phone or
            email. Prefer to speak to someone directly?
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:07946089183" className="flex items-center gap-3 text-sm text-mist-200 hover:text-gold-400">
              <Phone size={16} className="text-gold-500" /> 07946 089 183
            </a>
            <a
              href="mailto:eliteautocare10@icloud.com"
              className="flex items-center gap-3 text-sm text-mist-200 hover:text-gold-400"
            >
              <Mail size={16} className="text-gold-500" /> eliteautocare10@icloud.com
            </a>
          </div>

          <div className="mt-12 rounded-sm border border-mist-500/15 bg-navy-800/40 p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-400">
              Good to know
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-mist-400">
              <li>We bring our own water and power.</li>
              <li>Additional charges may apply for excessive dirt or pet hair.</li>
              <li>Machine polish &amp; ceramic coating are quoted separately.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-sm border border-gold-500/20 bg-navy-800/40 p-8 shadow-panel sm:p-10">
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
