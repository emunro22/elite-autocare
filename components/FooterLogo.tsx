"use client";

import Image from "next/image";
import { useState } from "react";

export default function FooterLogo() {
  const [error, setError] = useState(false);
  if (error) return null;

  return (
    <span className="relative h-10 w-10 shrink-0">
      <Image
        src="/images/logo-badge.png"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
        onError={() => setError(true)}
      />
    </span>
  );
}
