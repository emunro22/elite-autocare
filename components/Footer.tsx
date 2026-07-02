import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { areas } from "@/lib/areas";
import FooterLogo from "./FooterLogo";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_HREF } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-navy-950">
      <div className="container-elite grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <FooterLogo />
            <span className="font-display text-2xl font-bold bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Elite
            </span>
            <span className="font-display text-2xl font-medium text-mist-100">
              Autocare
            </span>
          </div>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-mist-500">
            Mobile valeting and detailing that comes to you. Snow foam
            washes, paint protection and full interior deep cleans across
            Glasgow and the surrounding area.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-base text-mist-300">
            <a href="tel:07946089183" className="flex items-center gap-2 hover:text-gold-400">
              <Phone size={16} /> 07946 089 183
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-400"
            >
              <WhatsAppIcon size={16} /> WhatsApp us
            </a>
            <a
              href="mailto:eliteautocare10@icloud.com"
              className="flex items-center gap-2 hover:text-gold-400"
            >
              <Mail size={16} /> eliteautocare10@icloud.com
            </a>
            <span className="flex items-center gap-2 text-mist-500">
              <MapPin size={16} /> Mobile service, Glasgow &amp; surrounding areas
            </span>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-sm">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-base text-mist-300">
            <li><Link href="/services" className="hover:text-gold-400">Services &amp; Packages</Link></li>
            <li><Link href="/areas" className="hover:text-gold-400">Areas We Cover</Link></li>
            <li><Link href="/about" className="hover:text-gold-400">About Us</Link></li>
            <li><Link href="/booking" className="hover:text-gold-400">Book a Valet</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-sm">Nearby Areas</h3>
          <ul className="mt-4 space-y-2.5 text-base text-mist-300">
            {areas.slice(0, 5).map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`} className="hover:text-gold-400">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-500/10 py-6">
        <div className="container-elite flex flex-col items-center justify-between gap-3 text-xs text-mist-500 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Elite Autocare. All rights reserved.</span>
          <span>Built with care in Glasgow.</span>
        </div>
      </div>
    </footer>
  );
}
