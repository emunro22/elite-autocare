import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SectionHeading from "@/components/SectionHeading";
import { workItems, showcaseItems } from "@/lib/work";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after photos from Elite Autocare mobile valets across Glasgow and Central Scotland. Drag each slider to see the transformation.",
  keywords: [
    "car valeting before and after",
    "mobile detailing photos Glasgow",
    "car valet results",
  ],
};

export default function GalleryPage() {
  return (
    <div className="container-elite py-20">
      <span className="eyebrow">Gallery</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-mist-100 sm:text-5xl">
        Before &amp; after, from real jobs
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-300">
        Every photo here is from a genuine Elite Autocare valet. Drag the
        slider left and right on any photo to see the transformation for
        yourself.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <div key={item.slug}>
            <BeforeAfterSlider before={item.before} after={item.after} alt={item.vehicle} />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-mist-100">{item.vehicle}</p>
                <p className="text-sm text-mist-500">{item.title}</p>
              </div>
              <span className="eyebrow shrink-0 text-[10px]">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="More jobs"
          title="A few more from recent bookings"
          description="A mix of full valets and quick refreshes from across Glasgow and the surrounding area."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <div key={item.slug}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-mist-500/15">
                <Image
                  src={item.image}
                  alt={`${item.vehicle} — ${item.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-mist-100">{item.vehicle}</p>
              <p className="text-sm text-mist-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-6 border-t border-gold-500/10 pt-16 text-center">
        <span className="eyebrow">Ready when you are</span>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-mist-100 sm:text-4xl">
          Want your car looking like this?
        </h2>
        <Link
          href="/booking"
          className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-9 py-4 text-sm font-semibold tracking-wide text-navy-950 shadow-gold"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book Now <ArrowRight size={16} />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
        </Link>
      </div>
    </div>
  );
}
