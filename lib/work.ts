export type WorkItem = {
  slug: string;
  title: string;
  vehicle: string;
  category: "Exterior" | "Interior" | "Full Valet";
  before: string;
  after: string;
  featured?: boolean;
};

export type ShowcaseItem = {
  slug: string;
  title: string;
  vehicle: string;
  image: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "transit-custom-exterior",
    title: "Snow foam pre-wash & full exterior valet",
    vehicle: "Ford Transit Custom",
    category: "Exterior",
    before: "/images/work/2.jpg",
    after: "/images/work/1.jpg",
    featured: true,
  },
  {
    slug: "transit-custom-rear-interior",
    title: "Rear bench seat & load area clean",
    vehicle: "Ford Transit Custom",
    category: "Interior",
    before: "/images/work/3.jpg",
    after: "/images/work/4.jpg",
  },
  {
    slug: "transit-custom-front-interior",
    title: "Front cab interior detail",
    vehicle: "Ford Transit Custom",
    category: "Interior",
    before: "/images/work/5.jpg",
    after: "/images/work/6.jpg",
  },
  {
    slug: "scania-tipper-cab",
    title: "Cab interior deep clean",
    vehicle: "Scania 420P Tipper",
    category: "Interior",
    before: "/images/work/12.jpg",
    after: "/images/work/14.jpg",
    featured: true,
  },
  {
    slug: "cupra-formentor-exterior",
    title: "Exterior wash & finish",
    vehicle: "Cupra Formentor",
    category: "Exterior",
    before: "/images/work/15.jpg",
    after: "/images/work/16.jpg",
    featured: true,
  },
  {
    slug: "cupra-formentor-front-interior",
    title: "Front interior detail",
    vehicle: "Cupra Formentor",
    category: "Interior",
    before: "/images/work/17.jpg",
    after: "/images/work/19.jpg",
  },
  {
    slug: "cupra-formentor-rear-interior",
    title: "Rear seats deep clean",
    vehicle: "Cupra Formentor",
    category: "Interior",
    before: "/images/work/21.jpg",
    after: "/images/work/22.jpg",
    featured: true,
  },
  {
    slug: "skoda-interior",
    title: "Interior valet",
    vehicle: "Skoda",
    category: "Interior",
    before: "/images/work/26.jpg",
    after: "/images/work/27.jpg",
    featured: true,
  },
];

export const featuredWork = workItems.filter((w) => w.featured);

export const showcaseItems: ShowcaseItem[] = [
  {
    slug: "bmw-3-series",
    title: "M Sport saloon, fresh from a valet",
    vehicle: "BMW 3 Series",
    image: "/images/work/25.jpg",
  },
  {
    slug: "skoda-kamiq",
    title: "Snow foam pre-wash",
    vehicle: "Skoda Kamiq",
    image: "/images/work/28.jpg",
  },
  {
    slug: "mercedes-a-class-exterior",
    title: "Full exterior detail",
    vehicle: "Mercedes A-Class",
    image: "/images/work/29.jpg",
  },
  {
    slug: "mercedes-a-class-interior",
    title: "Full interior detail",
    vehicle: "Mercedes A-Class",
    image: "/images/work/30.jpg",
  },
  {
    slug: "ford-puma",
    title: "Exterior wash & interior tidy",
    vehicle: "Ford Puma",
    image: "/images/work/31.jpg",
  },
  {
    slug: "skoda-estate",
    title: "Snow foam wash & interior clean",
    vehicle: "Skoda",
    image: "/images/work/32.jpg",
  },
  {
    slug: "audi-a4-exterior",
    title: "Snow foam wash & exterior finish",
    vehicle: "Audi A4",
    image: "/images/work/33.jpg",
  },
  {
    slug: "audi-a4-interior",
    title: "Interior detail",
    vehicle: "Audi A4",
    image: "/images/work/34.jpg",
  },
  {
    slug: "audi-s3",
    title: "Interior deep clean",
    vehicle: "Audi S3",
    image: "/images/work/35.jpg",
  },
  {
    slug: "vw-golf-exterior",
    title: "Full exterior valet",
    vehicle: "VW Golf",
    image: "/images/work/36.jpg",
  },
  {
    slug: "vw-golf-interior",
    title: "Full interior valet",
    vehicle: "VW Golf",
    image: "/images/work/37.jpg",
  },
];
