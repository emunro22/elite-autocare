"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import type { Package } from "@/lib/services";

export default function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-sm border p-8 ${
        pkg.featured
          ? "border-gold-500/60 bg-gradient-to-b from-gold-500/[0.07] to-transparent shadow-gold"
          : "border-mist-500/15 bg-navy-800/40"
      }`}
    >
      {pkg.featured && (
        <span className="absolute right-6 top-6 rounded-sm border border-gold-500/50 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold-300">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl font-bold text-mist-100">{pkg.name}</h3>
      <p className="mt-2 text-sm text-mist-500">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-gold-400">&pound;{pkg.price}</span>
      </div>

      <div className="mt-7 space-y-5">
        <div>
          <p className="eyebrow">Exterior</p>
          <ul className="mt-3 space-y-2">
            {pkg.exterior.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                <Check size={15} className="mt-0.5 shrink-0 text-gold-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Interior</p>
          <ul className="mt-3 space-y-2">
            {pkg.interior.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                <Check size={15} className="mt-0.5 shrink-0 text-gold-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={`/booking?package=${pkg.slug}`}
        className="group/btn relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm border border-gold-500/50 px-6 py-3 text-sm font-medium tracking-wide text-gold-300 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
      >
        Book {pkg.name} <ArrowRight size={15} />
      </Link>

      {/* signature shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gold-sheen opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
    </motion.div>
  );
}
