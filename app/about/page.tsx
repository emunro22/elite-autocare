import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Autocare is a mobile valeting and detailing team based in Glasgow, focused on careful, consistent work on every car.",
};

const values = [
  {
    icon: Sparkles,
    title: "Attention to detail",
    text: "Every panel, vent and edge gets checked before we call a job finished.",
  },
  {
    icon: ShieldCheck,
    title: "Products that protect",
    text: "We use sealants and waxes chosen for how well they hold up, not just how they look on the day.",
  },
  {
    icon: Users,
    title: "Reliable, on time",
    text: "We turn up when we say we will, fully equipped, so you're not left waiting around.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow">About</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Careful, consistent valeting &mdash; on your driveway
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-300">
        Elite Autocare is a mobile valeting and detailing service covering
        Glasgow and the surrounding area. We started with a simple idea:
        bring the same standard of finish you&apos;d expect from a detailing
        studio, straight to your home or workplace, without the hassle of
        booking a slot and driving across the city.
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist-300">
        Every job is carried out using our own water supply and power, so
        there&apos;s nothing for you to set up. From a light Silver refresh to
        a full Platinum detail with a twelve-month wax, we take the same
        care over every car that comes through.
      </p>

      <div className="mt-20 grid gap-8 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/5 text-gold-400">
              <v.icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-mist-100">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-500">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Get in touch"
          title="Questions before you book?"
          description="Send us a message with your car and postcode and we'll get back to you with availability and the right package for your car."
        />
        <div className="mt-8 flex flex-wrap gap-4">
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
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
