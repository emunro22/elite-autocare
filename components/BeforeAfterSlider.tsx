"use client";

import Image from "next/image";
import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  className = "",
}: {
  before: string;
  after: string;
  alt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={`group relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm border border-mist-500/15 ${className}`}
    >
      <Image
        src={after}
        alt={`${alt} — after`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} — before`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold-400/80"
        style={{ left: `${pos}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400 bg-navy-950/80 text-gold-300 backdrop-blur"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal size={15} />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-navy-950/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-mist-100 backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-navy-950/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold-300 backdrop-blur">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Before and after comparison slider for ${alt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
