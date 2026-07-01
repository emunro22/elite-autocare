import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Check } from "lucide-react";
import { areas } from "@/lib/areas";
import { packages } from "@/lib/services";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Mobile Valeting in ${area.name}`,
    description: `Elite Autocare offers mobile car valeting and detailing in ${area.name}. ${area.blurb}`,
  };
}

export default function AreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  return (
    <div className="container-elite py-20">
      <span className="eyebrow inline-flex items-center gap-2">
        <MapPin size={13} className="text-gold-400" /> Areas / {area.name}
      </span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Mobile valeting in {area.name}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300">
        {area.blurb} We bring our own water and power, so all we need is a
        space to park and access to your car.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.slug}
            className="rounded-sm border border-mist-500/15 bg-navy-800/40 p-7"
          >
            <h2 className="font-display text-xl font-semibold text-mist-100">
              {pkg.name} &mdash; &pound;{pkg.price}
            </h2>
            <p className="mt-2 text-sm text-mist-500">{pkg.tagline}</p>
            <ul className="mt-5 space-y-2">
              {pkg.exterior.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                  <Check size={14} className="mt-0.5 shrink-0 text-gold-500" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/booking?package=${pkg.slug}&area=${area.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300"
            >
              Book {pkg.name} in {area.name} <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link href="/areas" className="inline-flex items-center gap-2 text-sm text-mist-400 hover:text-gold-400">
          &larr; Back to all areas
        </Link>
      </div>
    </div>
  );
}
