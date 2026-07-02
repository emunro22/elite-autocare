"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_HREF } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      initial={{ opacity: 0, y: 24, scale: 0.7 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: [
          "0 0 0px 0px rgba(37,211,102,0.55)",
          "0 0 26px 8px rgba(37,211,102,0.55)",
          "0 0 0px 0px rgba(37,211,102,0.55)",
        ],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] },
        boxShadow: { duration: 2.2, delay: 1.5, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white sm:h-24 sm:w-24"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping" />
      <WhatsAppIcon size={40} className="relative z-10 sm:hidden" />
      <WhatsAppIcon size={48} className="relative z-10 hidden sm:block" />
    </motion.a>
  );
}
