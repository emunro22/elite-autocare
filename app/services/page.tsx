import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import { packages, packageNote, addOns } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Silver, Gold and Platinum valeting packages, plus machine polish and ceramic coating add-ons from Elite Autocare.",
};

export default function ServicesPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <Sparkles size={13} className="text-gold-400" /> Services
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Valeting packages built for every level of care
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        Every package includes a full exterior wash and interior clean.
        Gold and Platinum add paint protection so the finish lasts between
        visits. Not sure which one is right for your car? Get in touch and
        we&apos;ll recommend the best fit.
      </p>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.slug} pkg={pkg} index={i} />
        ))}
      </div>
      <p className="mt-6 text-xs text-mist-500">{packageNote}</p>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Add-ons"
          title="Machine polish & ceramic coating"
          description="For cars that need paint correction or long-term protection beyond a standard valet. Pricing depends on the size and condition of your car, so we quote after a quick look or a few photos."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {addOns.map((addOn) => (
            <div
              key={addOn.name}
              className="rounded-sm border border-mist-500/15 bg-navy-800/40 p-8"
            >
              <h3 className="font-display text-xl font-semibold text-gold-300">
                {addOn.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                {addOn.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300"
          >
            Get in touch for machine polish &amp; ceramic coating pricing
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center gap-6 rounded-sm border border-gold-500/20 bg-gold-500/[0.04] px-8 py-16 text-center">
        <h2 className="max-w-xl font-display text-2xl font-bold text-mist-100 sm:text-3xl">
          Not sure which package to choose?
        </h2>
        <p className="max-w-md text-sm text-mist-300">
          Message us the make and condition of your car and we&apos;ll point
          you to the right package before you book.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-sm border border-gold-500 px-7 py-3 text-sm font-medium tracking-wide text-gold-300 hover:bg-gold-500 hover:text-navy-950"
        >
          Ask a question <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
