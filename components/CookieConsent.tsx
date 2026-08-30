"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "elite-autocare-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable — don't block rendering
    }
  }, []);

  function dismiss(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write failures (e.g. private browsing)
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-500/20 bg-navy-950/98 backdrop-blur">
      <div className="container-elite flex flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-3 text-sm leading-relaxed text-mist-300 sm:items-center">
          <Cookie size={18} className="mt-0.5 shrink-0 text-gold-400 sm:mt-0" />
          We use privacy-friendly, cookieless analytics to see how the site
          is used. No tracking or advertising cookies. See our{" "}
          <Link href="/privacy" className="text-gold-400 hover:text-gold-300">
            privacy policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="rounded-sm border border-mist-500/30 px-5 py-2.5 text-sm font-medium text-mist-200 hover:border-gold-500/60 hover:text-gold-300"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="rounded-sm bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
