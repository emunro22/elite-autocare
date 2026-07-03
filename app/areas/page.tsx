import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { areas, regions } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Elite Autocare provides mobile valeting and detailing across Glasgow, Renfrewshire, Lanarkshire and the surrounding Central Scotland area — see the full list of towns we cover.",
  keywords: [
    "mobile valeting areas Glasgow",
    "car valeting near me",
    "mobile detailing coverage area",
  ],
};

export default function AreasPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <MapPin size={13} className="text-gold-400" /> Areas
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Mobile valeting across Glasgow &amp; Central Scotland
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        We bring everything with us, so all we need is space to park and
        access to your car. Here are the {areas.length} areas we cover
        regularly, from Glasgow&apos;s city centre out through Renfrewshire,
        Dunbartonshire and Lanarkshire &mdash; if you&apos;re nearby but not
        listed, get in touch and we&apos;ll do our best to fit you in.
      </p>

      {regions.map((region) => (
        <div key={region} className="mt-16">
          <h2 className="font-display text-xl font-semibold text-gold-300">{region}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas
              .filter((area) => area.region === region)
              .map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex flex-col gap-2 rounded-sm border border-mist-500/15 bg-navy-800/40 p-7 transition-colors hover:border-gold-500/50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-mist-100 group-hover:text-gold-300">
                      {area.name}
                    </h3>
                    <ArrowRight size={15} className="text-mist-500 group-hover:text-gold-400" />
                  </div>
                  <p className="text-sm text-mist-500">{area.blurb}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}

      <SectionHeading
        eyebrow="Outside these areas?"
        title="We're always expanding our rounds"
        description="Send us your postcode and preferred package on the contact page, and we'll let you know the next available slot near you."
      />
      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-sm border border-gold-500 px-7 py-3 text-sm font-medium tracking-wide text-gold-300 hover:bg-gold-500 hover:text-navy-950"
        >
          Check your area <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
