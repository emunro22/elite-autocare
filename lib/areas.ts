export type Area = {
  slug: string;
  name: string;
  blurb: string;
};

// NOTE: The poster didn't specify a service area, so this assumes a
// Glasgow-based mobile valeting radius. Edit freely in this file.
export const areas: Area[] = [
  {
    slug: "glasgow-city-centre",
    name: "Glasgow City Centre",
    blurb: "Office car parks and city centre residences, early morning and evening slots available.",
  },
  {
    slug: "west-end",
    name: "West End",
    blurb: "Covering Partick, Hyndland, Dowanhill and the surrounding West End streets.",
  },
  {
    slug: "southside",
    name: "Southside",
    blurb: "Shawlands, Pollokshields, Newlands and the wider Southside.",
  },
  {
    slug: "clydebank",
    name: "Clydebank",
    blurb: "Full mobile valeting across Clydebank and Faifley.",
  },
  {
    slug: "erskine",
    name: "Erskine",
    blurb: "Home base coverage with flexible weekday and weekend appointments.",
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    blurb: "Regular rounds through Renfrew and Braehead.",
  },
  {
    slug: "paisley",
    name: "Paisley",
    blurb: "Covering Paisley town centre and surrounding residential areas.",
  },
  {
    slug: "bearsden-milngavie",
    name: "Bearsden & Milngavie",
    blurb: "Driveway valeting across Bearsden and Milngavie.",
  },
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    blurb: "Serving Newton Mearns and the wider East Renfrewshire area.",
  },
];
