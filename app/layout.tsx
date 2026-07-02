import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteautocare.co.uk"),
  title: {
    default: "Elite Autocare | Mobile Valeting & Detailing, Glasgow",
    template: "%s | Elite Autocare",
  },
  description:
    "Professional mobile valeting and detailing across Glasgow. Silver, Gold and Platinum packages, machine polish and ceramic coating. Book online today.",
  keywords: [
    "car valeting Glasgow",
    "mobile detailing Glasgow",
    "ceramic coating Glasgow",
    "Elite Autocare",
  ],
  openGraph: {
    title: "Elite Autocare | Mobile Valeting & Detailing, Glasgow",
    description:
      "Professional mobile valeting and detailing across Glasgow. Book your Silver, Gold or Platinum package today.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-navy-900 text-mist-100 antialiased selection:bg-gold-500">
        <div className="relative min-h-screen bg-navy-900 bg-navy-radial">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
