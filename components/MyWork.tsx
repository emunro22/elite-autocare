import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { featuredWork } from "@/lib/work";

export default function MyWork() {
  if (featuredWork.length === 0) return null;

  return (
    <section className="container-elite py-24">
      <SectionHeading
        eyebrow="My Work"
        title="See the difference for yourself"
        description="Drag the slider on any photo to see how each car looked before and after an Elite Autocare valet."
      />
      <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((item) => (
          <div key={item.slug}>
            <BeforeAfterSlider before={item.before} after={item.after} alt={item.vehicle} />
            <p className="mt-5 font-display text-xl font-semibold text-mist-100">{item.vehicle}</p>
            <p className="mt-1 text-base text-mist-500">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-base font-medium text-gold-400 hover:text-gold-300"
        >
          View the full gallery <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
