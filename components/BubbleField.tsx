"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Bubble = {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function BubbleField({ count = 14 }: { count?: number }) {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.round(Math.random() * 100)}%`,
      size: 4 + Math.round(Math.random() * 14),
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 8,
      opacity: 0.12 + Math.random() * 0.2,
    }));
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "-20%", opacity: [0, b.opacity, b.opacity, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
          }}
          className="absolute bottom-0 rounded-full border border-ice-400/40 bg-ice-400/5"
        />
      ))}
    </div>
  );
}
