"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="border-y border-gold-500/10 bg-navy-950/60">
      <div className="container-elite py-24">
        <SectionHeading
          eyebrow="Reviews"
          title="What our customers say"
          description="Real feedback from real customers across our Google Business profile."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-sm border border-mist-500/15 bg-navy-800/40 p-8"
            >
              <Quote size={28} className="text-gold-500/30" />
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} size={15} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist-300">{review.text}</p>
              <div className="mt-5 flex items-baseline justify-between">
                <span className="font-display text-base font-semibold text-mist-100">
                  {review.name}
                </span>
                <span className="text-xs text-mist-500">{review.timeAgo}</span>
              </div>

              {review.reply && (
                <div className="mt-5 rounded-sm border border-gold-500/15 bg-navy-900/60 p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">
                      {review.reply.author}
                    </span>
                    <span className="text-xs text-mist-500">{review.reply.timeAgo}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">
                    {review.reply.text}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
