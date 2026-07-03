export type Package = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  exterior: string[];
  interior: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: "silver",
    name: "Silver",
    price: 60,
    tagline: "The essential refresh for a clean, cared-for car.",
    exterior: [
      "Snow foam pre-wash",
      "Full exterior wash",
      "Door shuts cleaned",
      "Wheels cleaned (light soiling removed)",
      "Tyres cleaned and dressed",
    ],
    interior: [
      "Standard light hoover",
      "Windows cleaned inside and out",
      "Topped off with air freshener inside",
    ],
  },
  {
    slug: "gold",
    name: "Gold",
    price: 80,
    tagline: "A deeper clean with lasting paint protection.",
    featured: true,
    exterior: [
      "Snow foam pre-wash",
      "Full exterior wash",
      "Door shuts cleaned",
      "Deep cleanse on wheels",
      "Spray wax sealant applied to paintwork (lasts 6-8 weeks)",
      "Tyres cleaned and dressed with long life tyre dressing",
    ],
    interior: [
      "Full interior hoover",
      "Light stains removed from fabric / leather",
      "Windows cleaned inside and out",
      "Deodorising air freshener inside",
    ],
  },
  {
    slug: "platinum",
    name: "Platinum",
    price: 120,
    tagline: "The complete showroom finish, inside and out.",
    exterior: [
      "Snow foam pre-wash",
      "Iron fallout treatment",
      "Full exterior wash",
      "Door shuts cleaned",
      "Deep cleanse on wheels",
      "Duel Autocare sealant applied to paintwork",
      "High quality wax applied for 12 month protection",
      "Tyres cleaned and dressed with long life tyre dressing",
    ],
    interior: [
      "Full interior hoover",
      "Deep clean of interior",
      "Removal of 95% of staining from fabric / leather",
      "Air vents and awkward areas brushed to remove dirt",
      "Windows cleaned inside and out",
      "Deodorising spray air freshener",
    ],
  },
];

export const addOns = [
  {
    name: "Machine Polish",
    description:
      "Corrects swirl marks and light imperfections for a deeper gloss finish. Priced after a quick assessment of your paintwork.",
  },
  {
    name: "Ceramic Coating",
    description:
      "Long-term hydrophobic protection that keeps your car looking freshly detailed for months. Priced after a quick assessment of your paintwork.",
  },
];

export const packageNote =
  "Additional charges may apply for excessive dirt or pet hair.";
