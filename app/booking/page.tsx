import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, CalendarCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const bookingSteps = [
  {
    name: "Choose your package",
    text: "Pick Silver, Gold or Platinum depending on how much of a refresh your car needs, or add machine polish or ceramic coating.",
  },
  {
    name: "Pick a date and time",
    text: "Select an available date and appointment window on the booking form — we take bookings Monday to Friday, 9am to 7pm.",
  },
  {
    name: "We come to you",
    text: "We arrive with our own water and power, so all you need to provide is parking space and access to the vehicle.",
  },
  {
    name: "Drive away happy",
    text: "We confirm the job's finished, take payment, and — for Gold and Platinum packages — your protection lasts weeks to months.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to book a mobile valet with Elite Autocare",
  description:
    "The steps to book a mobile car valet with Elite Autocare, from choosing a package to us arriving at your vehicle.",
  step: bookingSteps.map((step) => ({
    "@type": "HowToStep",
    name: step.name,
    text: step.text,
  })),
};

export const metadata: Metadata = {
  title: "Book a Valet",
  description:
    "Book your Elite Autocare mobile valet online. Choose your package, pick a time, and we'll confirm your slot anywhere across Glasgow and Central Scotland.",
  alternates: { canonical: "/booking" },
  keywords: [
    "book mobile valet Glasgow",
    "book car valeting online",
    "mobile detailing booking",
  ],
};

export default function BookingPage() {
  return (
    <div className="container-elite py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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

          <div className="mt-12">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-400">
              How it works
            </h2>
            <ol className="mt-4 space-y-4">
              {bookingSteps.map((step, i) => (
                <li key={step.name} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/5 text-xs font-semibold text-gold-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-mist-100">{step.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist-400">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
