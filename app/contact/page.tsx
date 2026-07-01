import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elite Autocare for questions, quotes on machine polish and ceramic coating, or to check we cover your area.",
};

export default function ContactPage() {
  return (
    <div className="container-elite py-20">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-bold text-mist-100 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist-300">
            Questions about a package, quotes for machine polish or ceramic
            coating, or just want to check we cover your area &mdash; send
            us a message and we&apos;ll reply as soon as we can.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:07946089183" className="flex items-center gap-3 text-sm text-mist-200 hover:text-gold-400">
              <Phone size={16} className="text-gold-500" /> 07946 089 183
            </a>
            <a
              href="mailto:eliteautocare10@icloud.com"
              className="flex items-center gap-3 text-sm text-mist-200 hover:text-gold-400"
            >
              <Mail size={16} className="text-gold-500" /> eliteautocare10@icloud.com
            </a>
            <span className="flex items-center gap-3 text-sm text-mist-400">
              <MapPin size={16} className="text-gold-500" /> Mobile service across Glasgow
            </span>
          </div>
        </div>

        <div className="rounded-sm border border-gold-500/20 bg-navy-800/40 p-8 shadow-panel sm:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
