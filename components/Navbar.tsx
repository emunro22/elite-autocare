"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/10 bg-navy-900/80 backdrop-blur-md">
      <div className="container-elite flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold tracking-tight bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
            Elite
          </span>
          <span className="font-display text-2xl font-medium text-mist-100">
            Autocare
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative font-body text-sm tracking-wide transition-colors hover:text-gold-400",
                pathname === link.href ? "text-gold-400" : "text-mist-300"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-px w-full bg-gold-500"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:07946089183"
            className="flex items-center gap-2 text-sm text-mist-300 hover:text-gold-400"
          >
            <Phone size={15} />
            07946 089 183
          </a>
          <Link
            href="/booking"
            className="rounded-sm border border-gold-500 bg-gold-500/10 px-5 py-2.5 text-sm font-medium tracking-wide text-gold-300 transition-colors hover:bg-gold-500 hover:text-navy-950"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-mist-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold-500/10 bg-navy-900 md:hidden"
          >
            <div className="container-elite flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-sm px-3 py-3 text-base",
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-mist-300"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:07946089183"
                className="flex items-center gap-2 px-3 py-3 text-base text-mist-300"
              >
                <Phone size={16} /> 07946 089 183
              </a>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm border border-gold-500 bg-gold-500/10 px-5 py-3 text-center text-base font-medium text-gold-300"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
