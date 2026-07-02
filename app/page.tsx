import Link from "next/link";
import { ArrowRight, Droplets, ShieldCheck, Sparkles, Timer } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import MyWork from "@/components/MyWork";
import BrandIllustration from "@/components/BrandIllustration";
import { packages, packageNote } from "@/lib/services";
import { areas } from "@/lib/areas";

const process = [
  {
    icon: Timer,
    title: "Book a slot",
    text: "Pick your package and a time that suits you. We come to your home or workplace.",
  },
  {
    icon: Droplets,
    title: "We get to work",
    text: "Snow foam pre-wash, hand wash, and a full interior clean, done on site with our own water and power.",
  },
  {
    icon: ShieldCheck,
    title: "Protection applied",
    text: "Sealant or wax is applied depending on your package, so the finish lasts longer.",
  },
  {
    icon: Sparkles,
    title: "Drive away showroom-fresh",
    text: "A final inspection and you're left with a car that looks, and smells, brand new.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Packages preview */}
      <section className="container-elite py-24">
        <SectionHeading
          eyebrow="Packages"
          title="Three levels of clean, built around your car"
          description="Every package is carried out on site, using our own water supply and power. Choose the level of protection and detail that suits your car and your budget."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>
        <p className="mt-6 text-xs text-mist-500">{packageNote}</p>
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300"
          >
            Compare all services &amp; add-ons <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <MyWork />

      {/* Process */}
      <section className="border-y border-gold-500/10 bg-navy-950/60">
        <div className="container-elite py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps to a cleaner car"
            description="No need to drive anywhere. Elite Autocare comes fully equipped to your location."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/5 text-gold-400">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-mist-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-mist-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas preview */}
      <section className="container-elite py-24">
        <SectionHeading
          eyebrow="Where we work"
          title="Covering Glasgow and the surrounding area"
          description="Based in Erskine and working right across Greater Glasgow. Don't see your area listed? Get in touch, we're always expanding our rounds."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex items-center justify-between rounded-sm border border-mist-500/15 bg-navy-800/40 px-6 py-5 transition-colors hover:border-gold-500/50"
            >
              <span className="text-base font-medium text-mist-100 group-hover:text-gold-300">
                {area.name}
              </span>
              <ArrowRight size={16} className="text-mist-500 group-hover:text-gold-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold-500/10">
        <div className="container-elite grid items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="eyebrow text-sm">Ready when you are</span>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] text-mist-100 sm:text-5xl">
              Book your Elite Autocare valet in under two minutes
            </h2>
            <Link
              href="/booking"
              className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-10 py-5 text-base font-semibold tracking-wide text-navy-950 shadow-gold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Now <ArrowRight size={18} />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </Link>
          </div>
          <BrandIllustration className="hidden aspect-[4/3] w-full lg:block" />
        </div>
      </section>
    </>
  );
}
