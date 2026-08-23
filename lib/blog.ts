export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  readingTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wax-vs-sealant",
    title: "Wax vs sealant: which is right for your car?",
    excerpt:
      "Both protect your paintwork and add shine, but they behave differently and suit different budgets. Here's how to choose.",
    date: "2026-01-14",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "It's the question we get asked most when someone's booking a Gold or Platinum package: should you go for wax, sealant, or both? The honest answer is that they do a similar job — protecting your paintwork and adding shine — but they get there in different ways, and last for very different lengths of time.",
        ],
      },
      {
        heading: "What sealant does",
        paragraphs: [
          "Sealant is a synthetic product that bonds tightly to the clear coat, forming a hard, glossy layer that's genuinely durable. It shrugs off rain, road grime and UV better than wax does, which is why it's become the default choice for anyone who wants protection that lasts through weeks of daily driving without much fuss.",
          "On our Gold package we apply a spray wax sealant that holds up for around 6-8 weeks. Platinum steps up to a longer-lasting sealant as its base layer, because on that package we're building toward a full 12 months of protection.",
        ],
      },
      {
        heading: "What wax does",
        paragraphs: [
          "Wax is a natural product — usually carnauba-based — that sits on top of the paint rather than bonding into it. What you lose in durability, you gain in depth: wax gives a warmer, richer shine than sealant on its own, which is why detailers often use it as a finishing layer rather than the only protection.",
          "On its own, a wax layer typically lasts a matter of weeks before it needs topping up. That's why on our Platinum package we apply a high quality wax over the sealant base — you get the sealant's durability underneath and the wax's finish on top, for protection that's built to last around 12 months.",
        ],
      },
      {
        heading: "So which should you choose?",
        paragraphs: [
          "If you want low-maintenance protection between valets and aren't too fussed about squeezing out the last word in gloss, sealant alone (our Gold package) does the job well. If you want the best finish and the longest-lasting protection, and you're happy to invest a bit more up front, the wax-over-sealant combination on our Platinum package is the one to go for.",
          "Either way, both start with the same groundwork — a snow foam pre-wash and a full hand wash — because wax and sealant only perform well on paintwork that's genuinely clean underneath. Compare the full package breakdowns on our Services page, or get in touch if you're not sure which suits your car.",
        ],
      },
    ],
  },
  {
    slug: "does-mobile-valeting-work-in-winter",
    title: "Does mobile valeting work in winter?",
    excerpt:
      "Cold weather, road salt and shorter days — here's what changes (and what doesn't) when you book a mobile valet in winter.",
    date: "2026-01-21",
    readingTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "Short answer: yes. We work right through the year, and winter is actually when a lot of cars need it most — road salt, grit and grime build up fast on wheels, arches and lower panels once the cold weather sets in.",
        ],
      },
      {
        heading: "What doesn't change",
        paragraphs: [
          "We bring our own hot water and power to every job, so a cold day doesn't stop a wash the way it might if you were doing it yourself with a bucket and hose. Every package still gets the same snow foam pre-wash, hand wash and interior clean regardless of the season.",
        ],
      },
      {
        heading: "What we adjust for winter",
        paragraphs: [
          "We pay extra attention to wheels, arches and lower panels, where road salt tends to build up and, left long enough, can start to affect paintwork and metal underneath. If you're on a Gold or Platinum package, the sealant or wax we apply also helps protect against salt and grime between valets, which is one of the best reasons to keep up regular appointments over winter rather than skipping them until spring.",
          "The one thing that can genuinely get in the way is heavy rain or snow falling during the appointment itself — that undoes an exterior wash as we go. If the forecast looks bad for your slot, we'll get in touch to rebook rather than turn up and do a job that won't last.",
        ],
      },
      {
        heading: "Booking in winter",
        paragraphs: [
          "Daylight is shorter, so if you'd like a morning slot it's worth booking a little further ahead. Otherwise, nothing else changes — pick your package and a time that works for you on the Booking page.",
        ],
      },
    ],
  },
  {
    slug: "how-often-should-you-valet-your-car",
    title: "How often should you valet your car?",
    excerpt:
      "It depends on how the car's used and how it's stored — here's a realistic guide rather than a one-size-fits-all rule.",
    date: "2026-02-04",
    readingTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "There's no single right answer, but there is a sensible range: most owners find a valet every 6-8 weeks keeps a car looking properly cared for without becoming a chore or an unnecessary expense. That timing also happens to line up with how long the sealant on our Gold package holds up, which isn't a coincidence.",
        ],
      },
      {
        heading: "It depends on how the car's used",
        paragraphs: [
          "A car that's parked on the street and driven daily through Glasgow traffic collects grime, brake dust and road film much faster than one that mostly sits on a driveway and does the occasional weekend run. Families with kids or pets, or anyone doing a lot of motorway miles, usually find the interior needs attention more often too.",
          "If your car is protected with a sealant or ceramic coating, dirt and water bead off more easily between valets, which stretches out how long it looks fresh — one of the main reasons people upgrade from Silver to Gold or Platinum.",
        ],
      },
      {
        heading: "A rough guide",
        paragraphs: [
          "Every 4-6 weeks: daily drivers, street-parked cars, or anyone who wants the car looking its best at all times. Every 6-8 weeks: the most common choice, and where our Gold package's protection window is aimed. Every 2-3 months: driveway-kept cars used less often, especially with a longer-lasting Platinum wax finish already applied.",
          "If you're not sure where you fall, get in touch and tell us how the car's kept and driven — we're happy to suggest a realistic schedule rather than just upselling the most expensive package.",
        ],
      },
    ],
  },
  {
    slug: "what-is-snow-foam",
    title: "What is snow foam, and why does every valet start with it?",
    excerpt:
      "It looks dramatic, but snow foam earns its place at the start of every package we offer. Here's the reasoning.",
    date: "2026-02-18",
    readingTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "Snow foam is a thick, clinging foam sprayed over the entire car before any hand washing starts. It looks like the most theatrical part of a valet, but it's doing genuinely useful work — which is why it's the first step on every package we offer, from Silver right through to Platinum.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The biggest risk to paintwork during a wash isn't the wash itself — it's grit and grime getting dragged across the surface by a wash mitt, leaving fine scratches known as swirl marks. Snow foam loosens and lifts a lot of that loose dirt before any physical contact happens, so there's less abrasive material left on the panel by the time we start hand washing.",
          "It also softens tougher, baked-on grime — bird droppings, tree sap, road film — making it easier to remove safely rather than having to scrub at it.",
        ],
      },
      {
        heading: "What comes after it",
        paragraphs: [
          "On our Platinum package we go a step further and follow snow foam with an iron fallout treatment, which chemically dissolves embedded brake dust particles that a wash alone won't shift — you'll sometimes see it bleed a deep purple colour off the wheels and lower panels as it works.",
          "After that it's a full hand wash, then whichever protection layer suits your package. See the complete step-by-step for each package on our Services page.",
        ],
      },
    ],
  },
  {
    slug: "ceramic-coating-vs-wax",
    title: "Ceramic coating vs wax: is the upgrade worth it?",
    excerpt:
      "Ceramic coating costs more up front than a wax finish, but the two aren't really competing for the same job.",
    date: "2026-03-03",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Wax gives you weeks of protection and a warm shine for a modest cost. Ceramic coating is a bigger step — both in price and in what it does — so it's worth understanding the difference before deciding whether it's the right upgrade for your car.",
        ],
      },
      {
        heading: "How they're different",
        paragraphs: [
          "Wax sits on the surface and needs reapplying every few weeks. Ceramic coating is a liquid polymer that chemically bonds to the paintwork, curing into a hard, glass-like layer that keeps its hydrophobic (water-repelling) properties for months, not weeks. Water and dirt bead up and slide off far more readily, which means less grime sticks between valets and the car generally stays cleaner for longer.",
          "It's also more resistant to light chemical staining, UV fading and the kind of fine scratching that builds up over years of regular washing — though it's worth being clear that no coating makes a car scratch-proof or removes the need for regular washing altogether.",
        ],
      },
      {
        heading: "Is it worth it?",
        paragraphs: [
          "If you keep a car for years rather than trading in every couple of years, drive it daily and want to spend less time and money on maintenance in between valets, ceramic coating tends to pay for itself in reduced upkeep. If you mainly care about a great finish for a single event, or you change cars often, a Platinum wax finish is a more proportionate choice.",
          "Ceramic coating is priced after a quick assessment of your paintwork, since the prep work needed varies from car to car — get in touch with a few photos and we'll give you an honest price and opinion on whether it's worth it for your situation.",
        ],
      },
    ],
  },
  {
    slug: "preparing-for-a-mobile-valet",
    title: "Getting ready for your mobile valet: a quick checklist",
    excerpt:
      "We bring everything we need — but a few minutes of prep on your end helps the appointment run smoothly.",
    date: "2026-03-17",
    readingTime: "2 min read",
    sections: [
      {
        paragraphs: [
          "One of the main advantages of mobile valeting is that there's very little for you to organise — we bring our own water, power and equipment. Still, a few small things on your end make the appointment run more smoothly.",
        ],
      },
      {
        heading: "Before we arrive",
        paragraphs: [
          "Clear personal belongings, especially loose items in footwells and door pockets, so we can get into every corner for the interior clean. Let us know about any child seats you'd like left in place or removed. If you're parked on the street, try to keep your usual spot free around your appointment time, or let us know your postcode in advance so we can plan for nearby parking.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "All we need is space to park within reach of a hose-length of your car and clear access to it — driveway, street parking or a works car park all work fine. If the appointment's for a workplace vehicle, having someone available to unlock the car (or leaving keys with reception) saves any delay.",
          "That's genuinely it. Book your package, date and time on the Booking page and we'll take care of the rest.",
        ],
      },
    ],
  },
];
