export type Area = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  intro: string;
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
    intro:
      "The city centre throws up a different job most weeks: a car park space booked between meetings near Bothwell Street, a residents' block off Sauchiehall Street, a courier van that only stops for an hour. We work around the hours the centre keeps, including early mornings before the streets fill up and evenings once the offices empty out.",
  },
  {
    slug: "west-end",
    name: "West End",
    region: "Glasgow",
    blurb: "Covering Partick, Hyndland, Dowanhill and the surrounding West End streets.",
    intro:
      "Byres Road, Hyndland and the streets around Kelvingrove Park are dense with tenement flats and permit parking, so most West End jobs happen kerbside rather than on a driveway. Students, university staff and long-term residents all call on us here, often fitting a valet in around lectures or the daily commute into town.",
  },
  {
    slug: "finnieston",
    name: "Finnieston",
    region: "Glasgow",
    blurb: "Mobile valeting for flats and offices around Finnieston and the SEC quarter.",
    intro:
      "Finnieston has gone from working dockside to one of Glasgow's most talked-about neighbourhoods, its converted warehouse flats a short walk from the SEC and OVO Hydro. Event nights change the whole parking picture, so when there's a concert or conference on we tend to work around it rather than against it.",
  },
  {
    slug: "partick",
    name: "Partick",
    region: "Glasgow",
    blurb: "Regular rounds through Partick, Broomhill and Thornwood.",
    intro:
      "Partick's tenement streets run down toward the Clyde and the subway station that shares its name, which makes it one of the busier corners of the West End for on-street parking. We fit valets around whatever gap opens up outside a close, working quickly so a bay isn't tied up longer than it needs to be.",
  },
  {
    slug: "whiteinch",
    name: "Whiteinch",
    region: "Glasgow",
    blurb: "Driveway and street valets across Whiteinch and neighbouring Scotstounhill.",
    intro:
      "Whiteinch sits on the north bank of the Clyde by the tunnel that carries traffic under the river, a mix of tenements and post-war housing left behind by the shipyards that once lined this stretch. It's a straightforward drive from our Erskine base along the riverside road, which keeps appointments here easy to schedule at short notice.",
  },
  {
    slug: "yorkhill",
    name: "Yorkhill",
    region: "Glasgow",
    blurb: "Convenient mobile valeting for residents and staff around Yorkhill.",
    intro:
      "Tucked between the West End and the river near Kelvingrove, Yorkhill is a small, tightly packed pocket of tenement flats with little private parking of its own. We work quickly and quietly here, usually finding a spot on the street rather than a driveway, and we're happy to time visits around residents' work patterns.",
  },
  {
    slug: "anniesland",
    name: "Anniesland",
    region: "Glasgow",
    blurb: "Covering Anniesland, Jordanhill and the surrounding streets.",
    intro:
      "Anniesland Cross is one of the busiest junctions on Glasgow's north side, and the neighbourhood around it mixes tenements with the semi-detached streets near Jordanhill. That variety means we see everything here, from a quick street valet to a longer driveway job, often on the same afternoon.",
  },
  {
    slug: "knightswood",
    name: "Knightswood",
    region: "Glasgow",
    blurb: "Full mobile valeting across Knightswood, on your driveway or street.",
    intro:
      "Built as one of Glasgow's big inter-war housing schemes, Knightswood is full of semi-detached homes with their own driveways or garden space, which makes it an easy area for us to work in without hunting for a parking spot. Plenty of our regulars here book us in on a rolling basis rather than as a one-off.",
  },
  {
    slug: "drumchapel",
    name: "Drumchapel",
    region: "Glasgow",
    blurb: "Regular valeting rounds across Drumchapel and the surrounding estates.",
    intro:
      "Drumchapel's wide streets and post-war estates sit on Glasgow's northwestern edge, not far from our Erskine base along the boulevard. Most jobs here are driveway or street valets on residential closes, and we can usually offer flexible slots since it's such a short run for us.",
  },
  {
    slug: "scotstoun",
    name: "Scotstoun",
    region: "Glasgow",
    blurb: "Mobile car valeting for Scotstoun homes and nearby workplaces.",
    intro:
      "Scotstoun still carries its shipbuilding history in the yard that operates on its riverbank, and the streets behind it are a mix of tenements and interwar housing. We cover both the residential rounds and the odd workplace booking near the yard, timed around shift patterns where needed.",
  },
  {
    slug: "maryhill",
    name: "Maryhill",
    region: "Glasgow",
    blurb: "Covering Maryhill, Gilshochill and the canal-side streets nearby.",
    intro:
      "The Forth and Clyde Canal runs straight through Maryhill, past the locks that still give the area its industrial-age structure, with tenement streets fanning out on either side. It's a longer run from Erskine than some of our patches, so Maryhill bookings tend to go in as part of a wider North Glasgow round.",
  },
  {
    slug: "springburn",
    name: "Springburn",
    region: "Glasgow",
    blurb: "Mobile valeting for Springburn and the surrounding North Glasgow area.",
    intro:
      "Springburn was once the beating heart of Scotland's railway locomotive industry, and the tenement streets that housed its workers still define the area today. We take on both street valets and small workplace jobs around here, usually as part of the same North Glasgow trip as Possilpark.",
  },
  {
    slug: "possilpark",
    name: "Possilpark",
    region: "Glasgow",
    blurb: "Driveway and street valets across Possilpark and Milton.",
    intro:
      "Possilpark's streets sit just west of Springburn on Glasgow's north side, mostly tenement and terraced housing with on-street parking rather than driveways. We keep visits here brisk and predictable, working the same rough patch as neighbouring Milton so we can offer decent availability.",
  },
  {
    slug: "dennistoun",
    name: "Dennistoun",
    region: "Glasgow",
    blurb: "Regular rounds through Dennistoun's tenement streets and side roads.",
    intro:
      "Dennistoun's red sandstone tenements around Duke Street and Alexandra Park have made it one of the East End's more sought-after addresses in recent years, and parking is tight to match. We work carefully around narrow closes and tenement lanes, and can usually still find a slot even on a busy street.",
  },
  {
    slug: "bridgeton",
    name: "Bridgeton",
    region: "Glasgow",
    blurb: "Mobile valeting across Bridgeton and the East End riverside.",
    intro:
      "Bridgeton sits where the East End meets the Clyde, close to the regenerated riverside around the old Commonwealth Games village at Dalmarnock. New-build flats now stand alongside older tenement blocks, so jobs here range from a tight street valet to an easier space in a modern development's parking area.",
  },
  {
    slug: "parkhead",
    name: "Parkhead",
    region: "Glasgow",
    blurb: "Covering Parkhead, Celtic Park and the surrounding East End streets.",
    intro:
      "Match days at Celtic Park change the whole rhythm of Parkhead, and we plan valets here around fixtures rather than against them. Outside of that, it's a typical East End mix of tenements and terraced streets, with the Forge shopping centre a short walk from most of the closes we work on.",
  },
  {
    slug: "shettleston",
    name: "Shettleston",
    region: "Glasgow",
    blurb: "Full mobile valeting across Shettleston and Tollcross.",
    intro:
      "Shettleston Road runs the length of this East End neighbourhood, with residential streets branching off toward Tollcross Park. It's mostly tenement and terraced housing, so our jobs here are almost all on-street, worked in around whatever parking residents can find that day.",
  },
  {
    slug: "baillieston",
    name: "Baillieston",
    region: "Glasgow",
    blurb: "Regular valeting rounds through Baillieston and Garrowhill.",
    intro:
      "Baillieston sits right by the M8, on the eastern fringe of the city where Glasgow gives way to North Lanarkshire, and its streets mix older village housing with newer estates around Garrowhill. That motorway access makes it a quick add-on to a wider East End round for us.",
  },
  {
    slug: "tollcross",
    name: "Tollcross",
    region: "Glasgow",
    blurb: "Mobile car valeting for Tollcross and the East End of the city.",
    intro:
      "Tollcross Park and the international swimming centre built for the 2014 Commonwealth Games give this East End neighbourhood a landmark most Glaswegians recognise. The surrounding streets are largely tenement and terraced housing, and we work them on the same round as neighbouring Shettleston.",
  },
  {
    slug: "southside",
    name: "Southside",
    region: "Glasgow",
    blurb: "Shawlands, Pollokshields, Newlands and the wider Southside.",
    intro:
      "Southside is the catch-all for the streets between Shawlands, Pollokshields and Newlands, an area with more variety than any single postcode suggests: tenements close to the railway, sandstone villas further out, tree-lined avenues near Queen's Park. Wherever you sit within it, we're usually already passing through on a nearby job.",
  },
  {
    slug: "shawlands",
    name: "Shawlands",
    region: "Glasgow",
    blurb: "Regular rounds through Shawlands and the surrounding Southside streets.",
    intro:
      "Shawlands Cross has become one of the Southside's busier café and restaurant strips, and the tenement flats above and around it keep parking at a premium most of the week. We tend to work early or late here to stay clear of the lunchtime crowds outside the shops and delis.",
  },
  {
    slug: "pollokshields",
    name: "Pollokshields",
    region: "Glasgow",
    blurb: "Driveway valeting across Pollokshields, east and west of the railway.",
    intro:
      "The railway line splits Pollokshields into two quite different halves: broad Victorian villas with driveways to the east, tighter tenement streets to the west, each with its own character and its own parking quirks. We're used to both, and can usually size up which approach a job needs before we've even parked the van.",
  },
  {
    slug: "newlands",
    name: "Newlands",
    region: "Glasgow",
    blurb: "Covering Newlands, Cathcart and the leafy Southside suburbs.",
    intro:
      "Newlands is one of the quieter, leafier Southside suburbs, mostly semi-detached and detached homes with their own driveways rather than tenement blocks. That makes it a straightforward area for us to work in, and a lot of our bookings here turn into standing monthly appointments.",
  },
  {
    slug: "cathcart",
    name: "Cathcart",
    region: "Glasgow",
    blurb: "Mobile valeting for Cathcart, Simshill and Merrylee.",
    intro:
      "Cathcart sits on the White Cart Water on Glasgow's south side, with Linn Park a short walk from most of the streets we cover, and Simshill and Merrylee filling out the neighbourhood around it. Housing here is a mix of tenements and semis, so we plan each visit a little differently depending on which street we're on.",
  },
  {
    slug: "mount-florida",
    name: "Mount Florida",
    region: "Glasgow",
    blurb: "Regular valeting around Mount Florida and Hampden Park.",
    intro:
      "Hampden Park sits right at the edge of Mount Florida, and match or event days at Scotland's national stadium are the one thing that reliably reshapes parking here. The surrounding tenement streets are otherwise a fairly typical Southside patch, and we plan around fixture lists when we know one's coming up.",
  },
  {
    slug: "kings-park",
    name: "King's Park",
    region: "Glasgow",
    blurb: "Covering King's Park, Croftfoot and Toryglen.",
    intro:
      "King's Park is a quieter residential stretch between Mount Florida and Toryglen, mostly semis and bungalows with their own driveways rather than the tenements found closer to Hampden. It's an easy, predictable area for us to schedule, with Croftfoot filling out the neighbourhood to the south.",
  },
  {
    slug: "toryglen",
    name: "Toryglen",
    region: "Glasgow",
    blurb: "Mobile car valeting for Toryglen and the surrounding Southside.",
    intro:
      "Toryglen sits just south of Hampden Park, a mix of newer housing developments and older streets reshaped by regeneration in recent years. We see a good spread of driveway and street jobs here, and it's an easy addition to a Southside round taking in Mount Florida and King's Park.",
  },
  {
    slug: "govan",
    name: "Govan",
    region: "Glasgow",
    blurb: "Driveway and street valets across Govan and the riverside.",
    intro:
      "Govan's shipbuilding past is still visible in the yard by the river and the Fairfield heritage buildings on Govan Road, even as the tenement streets around it have been steadily refreshed. The subway link into town makes it a well-connected patch, and we cover both residential closes and the odd workplace booking near the water.",
  },
  {
    slug: "ibrox",
    name: "Ibrox",
    region: "Glasgow",
    blurb: "Regular rounds through Ibrox and Cessnock.",
    intro:
      "Ibrox Stadium dominates this stretch of the south side, and match days are the one predictable disruption to parking around it. Neighbouring Cessnock shares the same tenement character, and outside of fixtures we find this one of the more straightforward Southside patches to work through.",
  },
  {
    slug: "pollok",
    name: "Pollok",
    region: "Glasgow",
    blurb: "Mobile valeting across Pollok and the Silverburn area.",
    intro:
      "Pollok Country Park, home to the Burrell Collection, gives this part of the south side a genuinely green backdrop, and Silverburn shopping centre sits right on its doorstep. Housing ranges from post-war estates to newer developments near the park, so we see a real mix of driveway and street jobs here.",
  },
  {
    slug: "nitshill",
    name: "Nitshill",
    region: "Glasgow",
    blurb: "Covering Nitshill, Darnley and the southwest edge of the city.",
    intro:
      "Nitshill marks the southwestern edge of the city, where Glasgow's housing gives way to the more open ground around Darnley and out toward Barrhead. It's a bit further out than most of our Southside rounds, so we're happy to schedule Nitshill jobs alongside a Barrhead or Neilston visit to keep the trip worthwhile.",
  },
  {
    slug: "cardonald",
    name: "Cardonald",
    region: "Glasgow",
    blurb: "Driveway valeting across Cardonald and Mosspark.",
    intro:
      "Cardonald sits near the Hillington industrial estate, with a mostly residential character of semis and tenement streets running off the main road. We pick up a fair number of workplace bookings from the industrial estate alongside the usual residential rounds here.",
  },
  {
    slug: "mosspark",
    name: "Mosspark",
    region: "Glasgow",
    blurb: "Regular valeting rounds through Mosspark and Bellahouston.",
    intro:
      "Mosspark is one of Glasgow's early planned garden suburbs, with wider streets and gardens than the tenement districts nearby, and Bellahouston Park — home to the House for an Art Lover — sits right on its edge. Most jobs here are driveway valets rather than street parking.",
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    region: "Glasgow",
    blurb: "Mobile car valeting across Rutherglen and the Clyde riverside.",
    intro:
      "Rutherglen is technically older than Glasgow itself, a Royal Burgh with its own charter and a Main Street that still has its own distinct identity on the south bank of the Clyde. We cover the town centre flats as well as the surrounding residential streets, usually as part of a run that also takes in Cambuslang.",
  },
  {
    slug: "cambuslang",
    name: "Cambuslang",
    region: "Glasgow",
    blurb: "Covering Cambuslang and the surrounding residential streets.",
    intro:
      "Cambuslang sits on Glasgow's southeastern fringe, a mostly residential town of semis and bungalows with good rail links into the city centre. It's an easy add-on to a Rutherglen visit, and most of our bookings here are driveway valets rather than street parking.",
  },

  // ---- Renfrewshire ----
  {
    slug: "erskine",
    name: "Erskine",
    region: "Renfrewshire",
    blurb: "Home base coverage with flexible weekday and weekend appointments.",
    intro:
      "Erskine is where we're based, so it's the one area where we can genuinely offer any-day, any-time flexibility without factoring in travel time. The town sits right by the Erskine Bridge, and our rounds here often expand to fit in a same-day job elsewhere on the north bank.",
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    region: "Renfrewshire",
    blurb: "Regular rounds through Renfrew and Braehead.",
    intro:
      "Renfrew sits on the Clyde opposite Braehead, and the shopping centre's car parks are a regular workplace booking for us alongside the town's residential streets. The old ferry crossing and the airport nearby give Renfrew a slightly different rhythm to other Renfrewshire towns — more passing traffic, more short-stay parking.",
  },
  {
    slug: "paisley",
    name: "Paisley",
    region: "Renfrewshire",
    blurb: "Covering Paisley town centre and surrounding residential areas.",
    intro:
      "Paisley is a proper town in its own right, built on the textile trade that gave the world the Paisley Pattern, with Paisley Abbey still standing at its centre. Between the university, the town centre flats and the residential streets further out, we see a real cross-section of jobs here.",
  },
  {
    slug: "bishopton",
    name: "Bishopton",
    region: "Renfrewshire",
    blurb: "Mobile valeting for Bishopton, close to our Erskine base.",
    intro:
      "Bishopton is one of the closest villages to our Erskine base, just a few minutes down the road, which means we can usually offer same-day or next-day slots here. It's a mix of older village housing and newer estates, mostly driveway work rather than street parking, and often booked as a standing monthly job.",
  },
  {
    slug: "bridge-of-weir",
    name: "Bridge of Weir",
    region: "Renfrewshire",
    blurb: "Driveway valeting across Bridge of Weir and the surrounding countryside.",
    intro:
      "Bridge of Weir has the feel of a proper Renfrewshire village, set among the countryside west of Paisley with larger properties and long driveways typical of the area. Jobs here tend to be more involved detailing work rather than a quick street valet, reflecting the kind of cars and homes we're visiting.",
  },
  {
    slug: "kilmacolm",
    name: "Kilmacolm",
    region: "Renfrewshire",
    blurb: "Regular appointments for Kilmacolm's driveways and private roads.",
    intro:
      "Kilmacolm sits up in the hills west of Bridge of Weir, one of Renfrewshire's more affluent villages with private roads and long driveways rather than kerbside parking. We schedule plenty of return visits here — it's the kind of place where a car gets looked after properly and regularly.",
  },
  {
    slug: "houston",
    name: "Houston",
    region: "Renfrewshire",
    blurb: "Covering Houston and Crosslee with flexible weekday slots.",
    intro:
      "Houston and neighbouring Crosslee sit in open countryside between Paisley and the Renfrewshire hills, a village setting with newer housing estates alongside older cottages. Driveways are the norm here, and we keep weekday slots free for residents working from home or commuting into Glasgow.",
  },
  {
    slug: "johnstone",
    name: "Johnstone",
    region: "Renfrewshire",
    blurb: "Mobile car valeting across Johnstone and Kilbarchan.",
    intro:
      "Johnstone grew up as a weaving and engineering town and still has that solid, working character in its terraced and semi-detached streets, with Kilbarchan just up the road. We split our time here between residential driveways and the occasional workplace booking near the town centre.",
  },
  {
    slug: "elderslie",
    name: "Elderslie",
    region: "Renfrewshire",
    blurb: "Regular rounds through Elderslie and neighbouring streets.",
    intro:
      "Elderslie sits between Johnstone and Paisley, long linked in local tradition to William Wallace, with a mix of older terraces and newer housing along its main road. It's a short hop from our Erskine base, so we can usually fit Elderslie jobs in alongside Bishopton or Paisley bookings.",
  },
  {
    slug: "linwood",
    name: "Linwood",
    region: "Renfrewshire",
    blurb: "Driveway and street valets across Linwood.",
    intro:
      "Linwood was built up around a major car plant that closed decades ago, and the town's housing — much of it post-war estates — still reflects that era of rapid growth. We work mostly street and driveway valets across the residential parts of the town, close enough to Erskine for flexible scheduling.",
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    region: "Renfrewshire",
    blurb: "Covering Barrhead and the surrounding East Renfrewshire border.",
    intro:
      "Barrhead sits right on the border with East Renfrewshire, a town of terraced and semi-detached streets that's a natural pairing with Neilston on our rounds. It's a bit further south than most of our Renfrewshire patch, so we tend to group Barrhead bookings together on the same day.",
  },
  {
    slug: "neilston",
    name: "Neilston",
    region: "Renfrewshire",
    blurb: "Mobile valeting for Neilston and nearby villages.",
    intro:
      "Neilston sits below the hill known locally as the Neilston Pad, a village with a genuinely rural feel despite being only a few miles from Glasgow's southern edge. Most of the work here is driveway valeting for houses set back from the road, often on a repeat monthly basis.",
  },
  {
    slug: "uplawmoor",
    name: "Uplawmoor",
    region: "Renfrewshire",
    blurb: "Appointments available for Uplawmoor and the surrounding countryside.",
    intro:
      "Uplawmoor is one of the smaller, more rural spots we cover, a village on the road between Neilston and Ayrshire surrounded by open farmland. Bookings out this way tend to be planned in advance rather than last-minute, given the distance from our base, but we're always happy to make the trip.",
  },

  // ---- West Dunbartonshire ----
  {
    slug: "clydebank",
    name: "Clydebank",
    region: "West Dunbartonshire",
    blurb: "Full mobile valeting across Clydebank and Faifley.",
    intro:
      "The Titan Crane still stands over the Clyde in Clydebank, a reminder of the John Brown shipyard that built ships like the Queen Mary here. The town's tenement and terraced streets, along with Faifley's estates further up the hill, keep us busy with a genuine mix of street and driveway work.",
  },
  {
    slug: "dumbarton",
    name: "Dumbarton",
    region: "West Dunbartonshire",
    blurb: "Regular rounds through Dumbarton and the Vale of Leven road.",
    intro:
      "Dumbarton Rock and its castle sit at the mouth of the River Leven, once the ancient capital of the kingdom of Strathclyde, giving the town a longer history than most on our patch. We cover the town centre and residential streets here, usually on the same trip as the Vale of Leven towns further up the road.",
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    region: "West Dunbartonshire",
    blurb: "Covering Alexandria and the surrounding Vale of Leven towns.",
    intro:
      "Alexandria sits in the Vale of Leven between Dumbarton and Loch Lomond, a mostly residential town of terraces and semis that we cover on the same round as neighbouring Balloch. It's far enough out from Erskine that we tend to batch appointments here rather than make single trips out.",
  },
  {
    slug: "balloch",
    name: "Balloch",
    region: "West Dunbartonshire",
    blurb: "Mobile valeting for Balloch, at the foot of Loch Lomond.",
    intro:
      "Balloch sits right at the southern tip of Loch Lomond, where the tourist traffic for Loch Lomond Shores meets a small, mostly residential town set back from the water. We work around the seasonal footfall here, which is heavier in summer than the rest of our West Dunbartonshire rounds.",
  },
  {
    slug: "old-kilpatrick",
    name: "Old Kilpatrick",
    region: "West Dunbartonshire",
    blurb: "Driveway valeting across Old Kilpatrick, close to the Erskine Bridge.",
    intro:
      "Old Kilpatrick marks the western end of the Antonine Wall, the Roman frontier that once ran across central Scotland, and today it sits right beside the Erskine Bridge. It's one of the shortest runs from our base, so we can usually turn a booking here around quickly.",
  },
  {
    slug: "bowling",
    name: "Bowling",
    region: "West Dunbartonshire",
    blurb: "Regular appointments for Bowling and the Clyde-side villages.",
    intro:
      "Bowling is a small village where the Forth and Clyde Canal meets the Clyde, quiet and largely residential with a scattering of harbourside housing near the old basin. It's a short detour from our usual Old Kilpatrick and Dumbarton run, so we're happy to add Bowling jobs onto that trip.",
  },
  {
    slug: "helensburgh",
    name: "Helensburgh",
    region: "West Dunbartonshire",
    blurb: "Mobile car valeting across Helensburgh and Rhu.",
    intro:
      "Helensburgh sits on the Clyde estuary and is home to the Hill House, the Charles Rennie Mackintosh building now cared for by the National Trust for Scotland, alongside a grid of grand Victorian terraces along the seafront. It's the furthest point of our West Dunbartonshire round, taking in neighbouring Rhu on the same visit.",
  },

  // ---- East Dunbartonshire ----
  {
    slug: "bearsden",
    name: "Bearsden",
    region: "East Dunbartonshire",
    blurb: "Driveway valeting across Bearsden's residential streets.",
    intro:
      "Bearsden takes its name from the Roman bathhouse remains still visible just off the main road, a reminder that the Antonine Wall once ran through here two thousand years ago. Today it's one of Glasgow's more affluent suburbs, almost entirely driveway work among detached and semi-detached homes.",
  },
  {
    slug: "milngavie",
    name: "Milngavie",
    region: "East Dunbartonshire",
    blurb: "Regular rounds through Milngavie town centre and surrounds.",
    intro:
      "Milngavie's town centre precinct is best known as the official starting point of the West Highland Way, and walkers gathering there each morning are a familiar sight. The surrounding streets are mostly detached and semi-detached housing, and we see a steady flow of driveway bookings here.",
  },
  {
    slug: "bishopbriggs",
    name: "Bishopbriggs",
    region: "East Dunbartonshire",
    blurb: "Covering Bishopbriggs and the surrounding new-build estates.",
    intro:
      "Bishopbriggs has grown fast in recent decades, with new-build estates spreading out from the older core of the town toward the Glasgow boundary. Driveways are standard here rather than street parking, and it's one of the easier, more predictable areas for us to schedule around at short notice.",
  },
  {
    slug: "kirkintilloch",
    name: "Kirkintilloch",
    region: "East Dunbartonshire",
    blurb: "Mobile valeting for Kirkintilloch and the canal-side streets.",
    intro:
      "Kirkintilloch grew up alongside the Forth and Clyde Canal and still carries the nickname 'Canal Town' locally, with towpath streets running through the older parts of town. We cover both the canal-side housing and the newer estates further out, often on the same trip as Torrance or Milton of Campsie.",
  },
  {
    slug: "lenzie",
    name: "Lenzie",
    region: "East Dunbartonshire",
    blurb: "Driveway valeting across Lenzie's residential roads.",
    intro:
      "Lenzie is one of the leafier commuter suburbs on the railway line toward Falkirk, known for its broad streets and larger Victorian and Edwardian villas set well back from the road. Almost every job here is driveway work, and a lot of our Lenzie customers book us in as a standing appointment.",
  },
  {
    slug: "torrance",
    name: "Torrance",
    region: "East Dunbartonshire",
    blurb: "Appointments available for Torrance and the surrounding villages.",
    intro:
      "Torrance is a small village on the edge of East Dunbartonshire, with the Campsie Fells rising just to the north and a distinctly rural feel compared to the busier towns further south. We fit Torrance bookings in alongside Kirkintilloch or Milton of Campsie jobs to keep the trip worthwhile.",
  },
  {
    slug: "milton-of-campsie",
    name: "Milton of Campsie",
    region: "East Dunbartonshire",
    blurb: "Covering Milton of Campsie and neighbouring Kirkintilloch.",
    intro:
      "Milton of Campsie sits at the foot of the Campsie Fells, a small village that's grown a little without losing its rural edge, just along the road from Kirkintilloch. Driveway valets are the norm here, and we're happy to travel out for a single booking or a small cluster of neighbours.",
  },

  // ---- East Renfrewshire ----
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    region: "East Renfrewshire",
    blurb: "Serving Newton Mearns and the wider East Renfrewshire area.",
    intro:
      "Newton Mearns is one of the largest and most affluent suburbs on Glasgow's southern edge, with wide streets of detached and executive-style homes and long driveways to match. We do a steady trade in more detailed, involved valets here rather than quick street jobs, and repeat bookings are common.",
  },
  {
    slug: "clarkston",
    name: "Clarkston",
    region: "East Renfrewshire",
    blurb: "Regular rounds through Clarkston and Netherlee.",
    intro:
      "Clarkston sits between Giffnock and Netherlee, a settled residential suburb of semis and bungalows that's easy for us to work through without hunting for parking. It's a reliable area for standing monthly appointments, and being close to both neighbours means we can usually offer a same-week slot.",
  },
  {
    slug: "giffnock",
    name: "Giffnock",
    region: "East Renfrewshire",
    blurb: "Driveway valeting across Giffnock's residential streets.",
    intro:
      "Giffnock is one of the closer East Renfrewshire suburbs to Glasgow itself, with tree-lined streets of detached and semi-detached homes and driveways as standard. We see plenty of repeat customers here who like their car looked after on a regular schedule rather than as an occasional treat.",
  },
  {
    slug: "busby",
    name: "Busby",
    region: "East Renfrewshire",
    blurb: "Mobile car valeting for Busby and nearby Clarkston.",
    intro:
      "Busby is a small village on the White Cart Water, tucked between Clarkston and East Kilbride with a quieter, more village-like feel than its bigger neighbours. Most jobs here are driveway valets on settled residential streets, and we're happy to combine a Busby booking with one in nearby Clarkston.",
  },
  {
    slug: "eaglesham",
    name: "Eaglesham",
    region: "East Renfrewshire",
    blurb: "Covering Eaglesham village and the surrounding countryside.",
    intro:
      "Eaglesham is a conservation village built around a broad, sloping green, its orange-and-white weavers' cottages still giving the main street a distinctive look. Driveways and private parking are the norm rather than kerbside space, and jobs here tend to be booked well ahead given how popular the village is.",
  },
  {
    slug: "waterfoot",
    name: "Waterfoot",
    region: "East Renfrewshire",
    blurb: "Appointments available for Waterfoot and Newton Mearns.",
    intro:
      "Waterfoot sits just outside Newton Mearns on the way toward Eaglesham, a small, mostly residential spot that we cover as part of the wider East Renfrewshire round. Driveway valets are the standard job here, usually alongside a Newton Mearns booking on the same day.",
  },

  // ---- North Lanarkshire ----
  {
    slug: "cumbernauld",
    name: "Cumbernauld",
    region: "North Lanarkshire",
    blurb: "Regular rounds through Cumbernauld's residential estates.",
    intro:
      "Cumbernauld was built as one of Scotland's post-war New Towns, planned from scratch with its residential estates arranged around a central hub rather than growing organically like older towns. We cover the estates spread across the town, mostly driveway work with the odd business park booking too.",
  },
  {
    slug: "coatbridge",
    name: "Coatbridge",
    region: "North Lanarkshire",
    blurb: "Mobile valeting across Coatbridge and the surrounding streets.",
    intro:
      "Coatbridge was once known as Scotland's 'Iron Burgh', built on the ironworks and foundries that shaped the town through the 19th century, and its terraced streets still carry that industrial-era layout. We work the residential rounds here alongside neighbouring Airdrie, usually on the same trip.",
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    region: "North Lanarkshire",
    blurb: "Covering Airdrie and neighbouring Coatbridge.",
    intro:
      "Airdrie sits right next to Coatbridge, close enough that the two towns effectively run into each other, though Airdrie keeps its own distinct town centre and residential streets. We cover both on the same round, splitting time between driveway valets and street parking depending on the street.",
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    region: "North Lanarkshire",
    blurb: "Driveway valeting across Motherwell's residential areas.",
    intro:
      "Motherwell was built on steel, and though the old Ravenscraig works are long gone, the town's terraced and semi-detached streets still reflect the industrial growth that shaped it. Most of our jobs here are driveway valets, and we cover the residential areas across the town.",
  },
  {
    slug: "wishaw",
    name: "Wishaw",
    region: "North Lanarkshire",
    blurb: "Regular appointments for Wishaw and the surrounding streets.",
    intro:
      "Wishaw sits just south of Motherwell, a residential town of similar character with terraced streets nearer the centre and semis further out toward Cleland and Overtown. We cover it on the same round as Motherwell, working driveway and street jobs depending on the neighbourhood.",
  },
  {
    slug: "bellshill",
    name: "Bellshill",
    region: "North Lanarkshire",
    blurb: "Mobile car valeting across Bellshill and Mossend.",
    intro:
      "Bellshill and neighbouring Mossend grew up together around the area's ironworks and engineering trade, and the residential streets that replaced the old industry still sit close together today. We take on a mix of driveway and street valets here, usually as part of a wider North Lanarkshire round.",
  },
  {
    slug: "uddingston",
    name: "Uddingston",
    region: "North Lanarkshire",
    blurb: "Covering Uddingston and neighbouring Viewpark.",
    intro:
      "Uddingston is home to the Tunnock's factory, whose teacakes and caramel wafers are known well beyond Scotland, and the town's tidy residential streets sit right next door to Bothwell. Driveway valets are the norm here, and we often pair Uddingston bookings with a Bothwell or Viewpark job.",
  },
  {
    slug: "bothwell",
    name: "Bothwell",
    region: "North Lanarkshire",
    blurb: "Driveway valeting across Bothwell's residential streets.",
    intro:
      "Bothwell is one of the more affluent villages on this side of the Clyde, with the ruins of Bothwell Castle sitting on the riverbank nearby and a main street of independent shops rather than a typical high street. Jobs here tend to be more thorough, involved valets on larger driveways rather than a quick street job.",
  },
  {
    slug: "viewpark",
    name: "Viewpark",
    region: "North Lanarkshire",
    blurb: "Regular rounds through Viewpark and Uddingston.",
    intro:
      "Viewpark sits between Uddingston and Motherwell, a residential area of semis and terraces that grew up around the same industrial era as its neighbours. We cover it as part of the same round as Uddingston, mostly driveway and street valets on quiet, settled streets rather than busy through-roads.",
  },

  // ---- South Lanarkshire ----
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "South Lanarkshire",
    blurb: "Mobile car valeting across Hamilton and the surrounding towns.",
    intro:
      "Hamilton is home to Hamilton Park Racecourse, one of Scotland's few remaining flat racing tracks, and the town itself has a solid Victorian centre surrounded by residential streets old and new. We cover both the town centre flats and the wider residential rounds, often alongside a Blantyre or Motherwell trip.",
  },
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    region: "South Lanarkshire",
    blurb: "Covering East Kilbride's residential estates and business parks.",
    intro:
      "East Kilbride was Scotland's first post-war New Town, purpose-built with its residential estates and business parks laid out separately from the start, and that structure still shapes how the town works today. We cover both sides of that — driveway valets across the housing estates and workplace bookings on the business parks.",
  },
  {
    slug: "blantyre",
    name: "Blantyre",
    region: "South Lanarkshire",
    blurb: "Driveway valeting across Blantyre and neighbouring streets.",
    intro:
      "Blantyre is the birthplace of David Livingstone, the explorer and missionary, and the museum built on the site of his childhood home is still one of the town's best-known landmarks. The residential streets around it are a mix of terraces and semis, and we cover Blantyre on the same round as neighbouring Hamilton.",
  },
  {
    slug: "larkhall",
    name: "Larkhall",
    region: "South Lanarkshire",
    blurb: "Regular appointments for Larkhall and the surrounding area.",
    intro:
      "Larkhall sits south of Hamilton, a residential town of terraced and semi-detached streets that we cover as part of the wider South Lanarkshire round. It's a bit further from our base than most of our patch, so we're happy to combine Larkhall bookings with one in Hamilton or Strathaven.",
  },
  {
    slug: "strathaven",
    name: "Strathaven",
    region: "South Lanarkshire",
    blurb: "Mobile valeting for Strathaven and the wider Avon Valley.",
    intro:
      "Strathaven sits in the Avon Valley on the edge of South Lanarkshire, a market town with its own ruined castle in the park and a noticeably more rural feel than the towns closer to Hamilton. It's the furthest point of our regular round, so Strathaven jobs tend to be scheduled a little further in advance.",
  },
];

export const regions = Array.from(new Set(areas.map((a) => a.region)));
