import { areas } from "./areas";
import { packages } from "./services";
import { testimonials } from "./testimonials";

const SITE_URL = "https://eliteauto-care.co.uk";

// Site-wide LocalBusiness JSON-LD, including the Service offers and the
// AggregateRating/Review data derived from the same testimonials shown on
// the homepage, so the two never drift out of sync.
export function buildLocalBusinessSchema() {
  const ratingCount = testimonials.length;
  const ratingSum = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = ratingCount > 0 ? ratingSum / ratingCount : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Elite Autocare",
    image: `${SITE_URL}/images/logo-badge.png`,
    url: SITE_URL,
    telephone: "+447946089183",
    email: "eliteautocare10@icloud.com",
    priceRange: "£60-£120",
    description:
      "Mobile car valeting and detailing across Glasgow, Renfrewshire, Dunbartonshire and Lanarkshire. Snow foam washes, interior deep cleans, paint protection and ceramic coating, carried out on site.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erskine",
      addressRegion: "Renfrewshire",
      addressCountry: "GB",
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area.name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    makesOffer: packages.map((pkg) => ({
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "GBP",
      itemOffered: {
        "@type": "Service",
        name: `${pkg.name} Valet`,
        description: pkg.tagline,
        provider: { "@id": `${SITE_URL}/#business` },
      },
    })),
    ...(averageRating !== undefined && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Number(averageRating.toFixed(1)),
        reviewCount: ratingCount,
      },
    }),
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
    })),
  };
}
