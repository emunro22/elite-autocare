import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { addOns } from "@/lib/services";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Elite Autocare's mobile valeting service — wax vs sealant, winter valeting, booking, water and power, and more.",
  keywords: [
    "mobile valeting FAQ",
    "wax vs sealant",
    "does mobile valeting work in winter",
    "car valeting questions Glasgow",
  ],
};

const faqs: { question: string; answer: string; readMore?: { href: string; label: string } }[] = [
  {
    question: "What's the difference between wax and sealant?",
    answer:
      "Wax is a natural product that sits on top of the paintwork and gives a warm, deep shine, but it breaks down faster — typically lasting a matter of weeks to a few months depending on how the car's kept. Sealant is a synthetic product that bonds more tightly to the paint, so it lasts longer and holds up better against road grime, rain and UV, though the finish is slightly harder and glossier rather than the classic wax warmth. Our Gold package uses a spray wax sealant that lasts around 6-8 weeks, and Platinum steps up to a longer-lasting sealant plus a high quality wax on top for up to 12 months of protection — see the full breakdown on the Services page.",
    readMore: { href: "/blog/wax-vs-sealant", label: "Read our full wax vs sealant guide" },
  },
  {
    question: "Does mobile valeting work in winter?",
    answer:
      "Yes — we work right through the year, including winter. We bring our own hot water and power, so cold weather doesn't stop a wash, and we adjust products for the conditions (for example using extra protection on wheels and lower panels where road salt builds up). The one thing that can move a booking is heavy rain or snow falling during the appointment itself, since it undoes an exterior wash as we go — if that happens we'll get in touch to rebook rather than turn up and do a job that won't last.",
    readMore: { href: "/blog/does-mobile-valeting-work-in-winter", label: "Read more on winter valeting" },
  },
  {
    question: "Do you bring your own water and power?",
    answer:
      "Yes. Every booking is fully self-contained — we bring our own water supply and power, so all we need from you is space to park and access to the car. There's nothing for you to set up beforehand.",
  },
  {
    question: "How long does a valet take?",
    answer:
      "It depends on the package: Silver typically takes around 90 minutes, Gold around 2.5 hours, and Platinum around 3.5 hours, depending on the size and condition of the vehicle.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based in Erskine and cover towns right across Greater Glasgow, Renfrewshire, Dunbartonshire and Lanarkshire — see the full list on our Areas page. If you're nearby but don't see your town listed, get in touch and we'll do our best to fit you in.",
  },
  {
    question: "How do I book, and how far ahead should I book?",
    answer:
      "You can book online through our Booking page, selecting a package, date and time that suits you, or message us on WhatsApp or by phone. We take bookings Monday to Friday, 9am to 7pm, in three appointment windows a day. Booking a few days ahead gives you the best choice of slot, but it's always worth asking about last-minute availability.",
  },
  {
    question: "Do you offer machine polishing or ceramic coating?",
    answer:
      addOns
        .map((a) => `${a.name} — ${a.description}`)
        .join(" ") +
      " Get in touch with some photos of your paintwork and we'll give you a price.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="container-elite py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <span className="eyebrow inline-flex items-center gap-2">
        <HelpCircle size={13} className="text-gold-400" /> FAQs
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Frequently asked questions
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        Everything we&apos;re most often asked before a first booking. Can&apos;t find
        what you&apos;re after? Send us a message on the Contact page.
      </p>

      <div className="mt-14 max-w-3xl divide-y divide-mist-500/15 border-y border-mist-500/15">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-mist-100 marker:content-none">
              {faq.question}
              <span className="shrink-0 text-gold-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-base leading-relaxed text-mist-300">{faq.answer}</p>
            {faq.readMore && (
              <Link
                href={faq.readMore.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300"
              >
                {faq.readMore.label} <ArrowRight size={14} />
              </Link>
            )}
          </details>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold tracking-wide text-navy-950"
        >
          Book Now <ArrowRight size={15} />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-sm border border-mist-500/30 px-7 py-3 text-sm font-medium tracking-wide text-mist-100 hover:border-gold-500/60 hover:text-gold-300"
        >
          Ask us a question
        </Link>
      </div>
    </div>
  );
}
