"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BubbleField from "./BubbleField";
import HeroSlideshow from "./HeroSlideshow";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [badgeError, setBadgeError] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-gold-500/10">
      <BubbleField count={16} />
      <div className="container-elite relative z-10 grid min-h-[90vh] items-center gap-12 py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span variants={item} className="eyebrow inline-flex items-center gap-2 text-sm">
            <Sparkles size={15} className="text-gold-400" />
            Mobile Valeting &amp; Detailing &mdash; Glasgow
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-6xl font-bold leading-[1.02] text-mist-100 sm:text-7xl md:text-8xl"
          >
            A showroom finish,
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              wherever you park.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-xl leading-relaxed text-mist-300">
            Elite Autocare brings professional valeting and detailing to your
            driveway, office car park or home &mdash; snow foam washes, paint
            protection, and interior deep cleans, all in one visit.
          </motion.p>

          <motion.div variants={item} className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gold-500 px-10 py-5 text-base font-semibold tracking-wide text-navy-950 shadow-gold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Valet <ArrowRight size={18} />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-mist-500/30 px-10 py-5 text-base font-medium tracking-wide text-mist-100 transition-colors hover:border-gold-500/60 hover:text-gold-300"
            >
              View Packages
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-base text-mist-500">
            <span>Silver from <strong className="text-mist-100">&pound;60</strong></span>
            <span className="h-4 w-px bg-mist-500/30" />
            <span>Gold from <strong className="text-mist-100">&pound;80</strong></span>
            <span className="h-4 w-px bg-mist-500/30" />
            <span>Platinum from <strong className="text-mist-100">&pound;120</strong></span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden aspect-[4/5] w-full lg:block"
        >
          <div className="absolute -inset-6 rounded-sm bg-gold-500/10 blur-3xl" />
          <HeroSlideshow />

          {!badgeError && (
            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full ring-4 ring-navy-900 drop-shadow-2xl sm:h-36 sm:w-36">
              <Image
                src="/images/logo-badge.png"
                alt="Elite Autocare"
                fill
                sizes="144px"
                className="rounded-full object-contain"
                onError={() => setBadgeError(true)}
              />
            </div>
          )}
        </motion.div>
      </div>
      <div className="vignette pointer-events-none absolute inset-0" />
    </section>
  );
}
