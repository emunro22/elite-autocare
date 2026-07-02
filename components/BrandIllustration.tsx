"use client";

import Image from "next/image";
import { useState } from "react";

export default function BrandIllustration({ className = "" }: { className?: string }) {
  const [error, setError] = useState(false);
  if (error) return null;

  return (
    <div className={`relative overflow-hidden rounded-sm border border-gold-500/20 bg-navy-950/40 shadow-panel ${className}`}>
      <Image
        src="/images/logo-illustration.png"
        alt="Elite Autocare team washing a van"
        fill
        sizes="420px"
        className="object-contain p-4"
        onError={() => setError(true)}
      />
    </div>
  );
}
