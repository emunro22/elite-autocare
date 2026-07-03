export type Area = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
};

// Real Greater Glasgow / Central Scotland towns and neighbourhoods within a
// realistic mobile valeting radius of our Erskine base. Grouped by region so
// the /areas index stays navigable. Edit freely in this file.
export const areas: Area[] = [
  // ---- Glasgow ----
  {
    slug: "glasgow-city-centre",
    name: "Glasgow City Centre",
    region: "Glasgow",
    blurb: "Office car parks and city centre residences, early morning and evening slots available.",
  },
  {
    slug: "west-end",
    name: "West End",
    region: "Glasgow",
    blurb: "Covering Partick, Hyndland, Dowanhill and the surrounding West End streets.",
  },
  {
    slug: "finnieston",
    name: "Finnieston",
    region: "Glasgow",
    blurb: "Mobile valeting for flats and offices around Finnieston and the SEC quarter.",
  },
  {
    slug: "partick",
    name: "Partick",
    region: "Glasgow",
    blurb: "Regular rounds through Partick, Broomhill and Thornwood.",
  },
  {
    slug: "whiteinch",
    name: "Whiteinch",
    region: "Glasgow",
    blurb: "Driveway and street valets across Whiteinch and neighbouring Scotstounhill.",
  },
  {
    slug: "yorkhill",
    name: "Yorkhill",
    region: "Glasgow",
    blurb: "Convenient mobile valeting for residents and staff around Yorkhill.",
  },
  {
    slug: "anniesland",
    name: "Anniesland",
    region: "Glasgow",
    blurb: "Covering Anniesland, Jordanhill and the surrounding streets.",
  },
  {
    slug: "knightswood",
    name: "Knightswood",
    region: "Glasgow",
    blurb: "Full mobile valeting across Knightswood, on your driveway or street.",
  },
  {
    slug: "drumchapel",
    name: "Drumchapel",
    region: "Glasgow",
    blurb: "Regular valeting rounds across Drumchapel and the surrounding estates.",
  },
  {
    slug: "scotstoun",
    name: "Scotstoun",
    region: "Glasgow",
    blurb: "Mobile car valeting for Scotstoun homes and nearby workplaces.",
  },
  {
    slug: "maryhill",
    name: "Maryhill",
    region: "Glasgow",
    blurb: "Covering Maryhill, Gilshochill and the canal-side streets nearby.",
  },
  {
    slug: "springburn",
    name: "Springburn",
    region: "Glasgow",
    blurb: "Mobile valeting for Springburn and the surrounding North Glasgow area.",
  },
  {
    slug: "possilpark",
    name: "Possilpark",
    region: "Glasgow",
    blurb: "Driveway and street valets across Possilpark and Milton.",
  },
  {
    slug: "dennistoun",
    name: "Dennistoun",
    region: "Glasgow",
    blurb: "Regular rounds through Dennistoun's tenement streets and side roads.",
  },
  {
    slug: "bridgeton",
    name: "Bridgeton",
    region: "Glasgow",
    blurb: "Mobile valeting across Bridgeton and the East End riverside.",
  },
  {
    slug: "parkhead",
    name: "Parkhead",
    region: "Glasgow",
    blurb: "Covering Parkhead, Celtic Park and the surrounding East End streets.",
  },
  {
    slug: "shettleston",
    name: "Shettleston",
    region: "Glasgow",
    blurb: "Full mobile valeting across Shettleston and Tollcross.",
  },
  {
    slug: "baillieston",
    name: "Baillieston",
    region: "Glasgow",
    blurb: "Regular valeting rounds through Baillieston and Garrowhill.",
  },
  {
    slug: "tollcross",
    name: "Tollcross",
    region: "Glasgow",
    blurb: "Mobile car valeting for Tollcross and the East End of the city.",
  },
  {
    slug: "southside",
    name: "Southside",
    region: "Glasgow",
    blurb: "Shawlands, Pollokshields, Newlands and the wider Southside.",
  },
  {
    slug: "shawlands",
    name: "Shawlands",
    region: "Glasgow",
    blurb: "Regular rounds through Shawlands and the surrounding Southside streets.",
  },
  {
    slug: "pollokshields",
    name: "Pollokshields",
    region: "Glasgow",
    blurb: "Driveway valeting across Pollokshields, east and west of the railway.",
  },
  {
    slug: "newlands",
    name: "Newlands",
    region: "Glasgow",
    blurb: "Covering Newlands, Cathcart and the leafy Southside suburbs.",
  },
  {
    slug: "cathcart",
    name: "Cathcart",
    region: "Glasgow",
    blurb: "Mobile valeting for Cathcart, Simshill and Merrylee.",
  },
  {
    slug: "mount-florida",
    name: "Mount Florida",
    region: "Glasgow",
    blurb: "Regular valeting around Mount Florida and Hampden Park.",
  },
  {
    slug: "kings-park",
    name: "King's Park",
    region: "Glasgow",
    blurb: "Covering King's Park, Croftfoot and Toryglen.",
  },
  {
    slug: "toryglen",
    name: "Toryglen",
    region: "Glasgow",
    blurb: "Mobile car valeting for Toryglen and the surrounding Southside.",
  },
  {
    slug: "govan",
    name: "Govan",
    region: "Glasgow",
    blurb: "Driveway and street valets across Govan and the riverside.",
  },
  {
    slug: "ibrox",
    name: "Ibrox",
    region: "Glasgow",
    blurb: "Regular rounds through Ibrox and Cessnock.",
  },
  {
    slug: "pollok",
    name: "Pollok",
    region: "Glasgow",
    blurb: "Mobile valeting across Pollok and the Silverburn area.",
  },
  {
    slug: "nitshill",
    name: "Nitshill",
    region: "Glasgow",
    blurb: "Covering Nitshill, Darnley and the southwest edge of the city.",
  },
  {
    slug: "cardonald",
    name: "Cardonald",
    region: "Glasgow",
    blurb: "Driveway valeting across Cardonald and Mosspark.",
  },
  {
    slug: "mosspark",
    name: "Mosspark",
    region: "Glasgow",
    blurb: "Regular valeting rounds through Mosspark and Bellahouston.",
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    region: "Glasgow",
    blurb: "Mobile car valeting across Rutherglen and the Clyde riverside.",
  },
  {
    slug: "cambuslang",
    name: "Cambuslang",
    region: "Glasgow",
    blurb: "Covering Cambuslang and the surrounding residential streets.",
  },

  // ---- Renfrewshire ----
  {
    slug: "erskine",
    name: "Erskine",
    region: "Renfrewshire",
    blurb: "Home base coverage with flexible weekday and weekend appointments.",
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    region: "Renfrewshire",
    blurb: "Regular rounds through Renfrew and Braehead.",
  },
  {
    slug: "paisley",
    name: "Paisley",
    region: "Renfrewshire",
    blurb: "Covering Paisley town centre and surrounding residential areas.",
  },
  {
    slug: "bishopton",
    name: "Bishopton",
    region: "Renfrewshire",
    blurb: "Mobile valeting for Bishopton, close to our Erskine base.",
  },
  {
    slug: "bridge-of-weir",
    name: "Bridge of Weir",
    region: "Renfrewshire",
    blurb: "Driveway valeting across Bridge of Weir and the surrounding countryside.",
  },
  {
    slug: "kilmacolm",
    name: "Kilmacolm",
    region: "Renfrewshire",
    blurb: "Regular appointments for Kilmacolm's driveways and private roads.",
  },
  {
    slug: "houston",
    name: "Houston",
    region: "Renfrewshire",
    blurb: "Covering Houston and Crosslee with flexible weekday slots.",
  },
  {
    slug: "johnstone",
    name: "Johnstone",
    region: "Renfrewshire",
    blurb: "Mobile car valeting across Johnstone and Kilbarchan.",
  },
  {
    slug: "elderslie",
    name: "Elderslie",
    region: "Renfrewshire",
    blurb: "Regular rounds through Elderslie and neighbouring streets.",
  },
  {
    slug: "linwood",
    name: "Linwood",
    region: "Renfrewshire",
    blurb: "Driveway and street valets across Linwood.",
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    region: "Renfrewshire",
    blurb: "Covering Barrhead and the surrounding East Renfrewshire border.",
  },
  {
    slug: "neilston",
    name: "Neilston",
    region: "Renfrewshire",
    blurb: "Mobile valeting for Neilston and nearby villages.",
  },
  {
    slug: "uplawmoor",
    name: "Uplawmoor",
    region: "Renfrewshire",
    blurb: "Appointments available for Uplawmoor and the surrounding countryside.",
  },

  // ---- West Dunbartonshire ----
  {
    slug: "clydebank",
    name: "Clydebank",
    region: "West Dunbartonshire",
    blurb: "Full mobile valeting across Clydebank and Faifley.",
  },
  {
    slug: "dumbarton",
    name: "Dumbarton",
    region: "West Dunbartonshire",
    blurb: "Regular rounds through Dumbarton and the Vale of Leven road.",
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    region: "West Dunbartonshire",
    blurb: "Covering Alexandria and the surrounding Vale of Leven towns.",
  },
  {
    slug: "balloch",
    name: "Balloch",
    region: "West Dunbartonshire",
    blurb: "Mobile valeting for Balloch, at the foot of Loch Lomond.",
  },
  {
    slug: "old-kilpatrick",
    name: "Old Kilpatrick",
    region: "West Dunbartonshire",
    blurb: "Driveway valeting across Old Kilpatrick, close to the Erskine Bridge.",
  },
  {
    slug: "bowling",
    name: "Bowling",
    region: "West Dunbartonshire",
    blurb: "Regular appointments for Bowling and the Clyde-side villages.",
  },
  {
    slug: "helensburgh",
    name: "Helensburgh",
    region: "West Dunbartonshire",
    blurb: "Mobile car valeting across Helensburgh and Rhu.",
  },

  // ---- East Dunbartonshire ----
  {
    slug: "bearsden",
    name: "Bearsden",
    region: "East Dunbartonshire",
    blurb: "Driveway valeting across Bearsden's residential streets.",
  },
  {
    slug: "milngavie",
    name: "Milngavie",
    region: "East Dunbartonshire",
    blurb: "Regular rounds through Milngavie town centre and surrounds.",
  },
  {
    slug: "bishopbriggs",
    name: "Bishopbriggs",
    region: "East Dunbartonshire",
    blurb: "Covering Bishopbriggs and the surrounding new-build estates.",
  },
  {
    slug: "kirkintilloch",
    name: "Kirkintilloch",
    region: "East Dunbartonshire",
    blurb: "Mobile valeting for Kirkintilloch and the canal-side streets.",
  },
  {
    slug: "lenzie",
    name: "Lenzie",
    region: "East Dunbartonshire",
    blurb: "Driveway valeting across Lenzie's residential roads.",
  },
  {
    slug: "torrance",
    name: "Torrance",
    region: "East Dunbartonshire",
    blurb: "Appointments available for Torrance and the surrounding villages.",
  },
  {
    slug: "milton-of-campsie",
    name: "Milton of Campsie",
    region: "East Dunbartonshire",
    blurb: "Covering Milton of Campsie and neighbouring Kirkintilloch.",
  },

  // ---- East Renfrewshire ----
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    region: "East Renfrewshire",
    blurb: "Serving Newton Mearns and the wider East Renfrewshire area.",
  },
  {
    slug: "clarkston",
    name: "Clarkston",
    region: "East Renfrewshire",
    blurb: "Regular rounds through Clarkston and Netherlee.",
  },
  {
    slug: "giffnock",
    name: "Giffnock",
    region: "East Renfrewshire",
    blurb: "Driveway valeting across Giffnock's residential streets.",
  },
  {
    slug: "busby",
    name: "Busby",
    region: "East Renfrewshire",
    blurb: "Mobile car valeting for Busby and nearby Clarkston.",
  },
  {
    slug: "eaglesham",
    name: "Eaglesham",
    region: "East Renfrewshire",
    blurb: "Covering Eaglesham village and the surrounding countryside.",
  },
  {
    slug: "waterfoot",
    name: "Waterfoot",
    region: "East Renfrewshire",
    blurb: "Appointments available for Waterfoot and Newton Mearns.",
  },

  // ---- North Lanarkshire ----
  {
    slug: "cumbernauld",
    name: "Cumbernauld",
    region: "North Lanarkshire",
    blurb: "Regular rounds through Cumbernauld's residential estates.",
  },
  {
    slug: "coatbridge",
    name: "Coatbridge",
    region: "North Lanarkshire",
    blurb: "Mobile valeting across Coatbridge and the surrounding streets.",
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    region: "North Lanarkshire",
    blurb: "Covering Airdrie and neighbouring Coatbridge.",
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    region: "North Lanarkshire",
    blurb: "Driveway valeting across Motherwell's residential areas.",
  },
  {
    slug: "wishaw",
    name: "Wishaw",
    region: "North Lanarkshire",
    blurb: "Regular appointments for Wishaw and the surrounding streets.",
  },
  {
    slug: "bellshill",
    name: "Bellshill",
    region: "North Lanarkshire",
    blurb: "Mobile car valeting across Bellshill and Mossend.",
  },
  {
    slug: "uddingston",
    name: "Uddingston",
    region: "North Lanarkshire",
    blurb: "Covering Uddingston and neighbouring Viewpark.",
  },
  {
    slug: "bothwell",
    name: "Bothwell",
    region: "North Lanarkshire",
    blurb: "Driveway valeting across Bothwell's residential streets.",
  },
  {
    slug: "viewpark",
    name: "Viewpark",
    region: "North Lanarkshire",
    blurb: "Regular rounds through Viewpark and Uddingston.",
  },

  // ---- South Lanarkshire ----
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "South Lanarkshire",
    blurb: "Mobile car valeting across Hamilton and the surrounding towns.",
  },
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    region: "South Lanarkshire",
    blurb: "Covering East Kilbride's residential estates and business parks.",
  },
  {
    slug: "blantyre",
    name: "Blantyre",
    region: "South Lanarkshire",
    blurb: "Driveway valeting across Blantyre and neighbouring streets.",
  },
  {
    slug: "larkhall",
    name: "Larkhall",
    region: "South Lanarkshire",
    blurb: "Regular appointments for Larkhall and the surrounding area.",
  },
  {
    slug: "strathaven",
    name: "Strathaven",
    region: "South Lanarkshire",
    blurb: "Mobile valeting for Strathaven and the wider Avon Valley.",
  },
];

export const regions = Array.from(new Set(areas.map((a) => a.region)));
