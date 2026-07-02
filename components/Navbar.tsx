"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_HREF } from "@/lib/contact";

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
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-gold-500/15 bg-navy-900/95 shadow-panel backdrop-blur-md"
          : "border-gold-500/10 bg-navy-900/70 backdrop-blur-md"
      )}
    >
      <div className="container-elite flex h-28 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          {!logoError && (
            <span className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
              <Image
                src="/images/logo-badge.png"
                alt="Elite Autocare"
                fill
                sizes="112px"
                className="object-contain"
                onError={() => setLogoError(true)}
              />
            </span>
          )}
          <span className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold tracking-tight bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Elite
            </span>
            <span className="font-display text-3xl font-medium text-mist-100">
              Autocare
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative font-body text-base tracking-wide transition-colors hover:text-gold-400",
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

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:07946089183"
            className="flex items-center gap-2 text-base text-mist-300 hover:text-gold-400"
          >
            <Phone size={17} />
            07946 089 183
          </a>
          <Link
            href="/booking"
            className="rounded-sm border border-gold-500 bg-gold-500/10 px-6 py-3 text-base font-medium tracking-wide text-gold-300 transition-colors hover:bg-gold-500 hover:text-navy-950"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 text-mist-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-28 z-40 overflow-y-auto border-t border-gold-500/10 bg-navy-900 md:hidden"
          >
            <div className="container-elite flex flex-col gap-1 py-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block rounded-sm border-b border-mist-500/10 px-3 py-5 text-2xl font-display font-medium",
                      pathname === link.href ? "text-gold-400" : "text-mist-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:07946089183"
                className="mt-6 flex items-center gap-3 px-3 py-3 text-lg text-mist-300"
              >
                <Phone size={19} /> 07946 089 183
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-3 text-lg text-mist-300"
              >
                <WhatsAppIcon size={20} className="text-[#25D366]" /> Message us on WhatsApp
              </a>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-sm border border-gold-500 bg-gold-500/10 px-5 py-4 text-center text-lg font-semibold text-gold-300"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
