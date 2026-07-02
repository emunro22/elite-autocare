"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  { src: "/images/hero.jpg", alt: "Elite Autocare mobile valeting and detailing" },
  { src: "/images/work/25.jpg", alt: "BMW 3 Series, fresh from an Elite Autocare valet" },
  { src: "/images/work/29.jpg", alt: "Mercedes A-Class after a full exterior detail" },
  { src: "/images/work/33.jpg", alt: "Audi A4 after a snow foam wash and exterior finish" },
  { src: "/images/work/36.jpg", alt: "VW Golf after a full exterior valet" },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm border border-gold-500/20 shadow-panel">
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[active].src}
            alt={SLIDES[active].alt}
            fill
            priority={active === 0}
            sizes="45vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-gold-400" : "w-1.5 bg-mist-100/40 hover:bg-mist-100/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
