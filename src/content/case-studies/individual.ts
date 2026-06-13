export interface CaseStudyDetail {
  challenges: string;
  client: string;
  event: string;
  image: string;
  location: string;
  outcome: string;
  outcomeStats: string[];
  requirements: string;
  services: string[];
  slug: string;
  solution: string;
  title: string;
}

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  {
    challenges:
      "An ultra-compressed 10-day campaign cycle left almost no margin for error. Working solely from the client's internal database in a heavily contested sponsorship landscape, the team had to cut through intense competitive noise, surpass the previous year's benchmark of 40 meetings, and curate a premium VIP guest list - all simultaneously.",
    client: "Global Leader in Digital Services",
    event: "World Aviation Festival (WAF) 2025",
    image: "/images/case-studies/cs-new-2.avif",
    location: "Lisbon, Portugal",
    outcome:
      "The campaign delivered 60 qualified meetings, including 34 engagements with $1B+ enterprises and direct conversations with C-suite leaders. The client praised the team's active prospecting capabilities, and the partnership has since been extended across key 2026 aviation and digital innovation summits.",
    outcomeStats: ["60 Qualified Meetings", "34 $1B+ Enterprise Engagements"],
    requirements:
      "As a Platinum Sponsor at WAF 2025, the client needed 60 pre-qualified executive meetings secured within a 10–12-day window, targeting senior decision-makers across global airlines and airports, while also driving high-caliber attendance for their exclusive “Sail with Client” leadership networking experience.",
    services: [
      "Active Prospecting & Lead Generation",
      "VIP Event Audience Acquisition (Sail with Client)",
      "Pre-Fix Meeting Coordination",
      "On-Ground Event Support",
      "Executive Calendar Management",
    ],
    slug: "waf-2025",
    solution:
      "We deployed AI-supported precision prospecting, segmenting the database by account tier and decision-maker seniority. Hyper-personalized outreach, round-the-clock coordination, and seamless on-ground facilitation ensured every qualified conversation translated into a confirmed meeting - while the “Sail with Client” VIP campaign attracted 40+ senior leaders within days.",
    title: "How B2B Sales Arrow Delivered 50% YoY Growth at World Aviation Festival 2025?",
  },
  {
    challenges:
      "Full booth construction in just 30 hours, last-minute graphic changes one week out, zero pre-event attendee list, and a tight budget for an ambitious, complex 40x40 ft build.",
    client: "Multi-Billion-Dollar Global IT",
    event: "Adobe Summit 2025",
    image: "/images/events/adobe_summit_2026.avif",
    location: "The Venetian Convention and Expo Center, Las Vegas",
    outcome:
      "70+ SQLs generated. 48+ hot and warm leads secured. 65+ decision-makers engaged. 60+ unique billion-dollar accounts captured - the booth became a live, high-converting revenue engine.",
    outcomeStats: ["70+ SQLs Generated", "60+ Billion-Dollar Accounts Captured"],
    requirements:
      "A 1,600 sq. ft. island booth with two meeting rooms, lounge areas, LED screen, and demo stations, within a $160K–170K budget, plus on-ground SQL generation at scale.",
    services: ["40x40 Ft Island Booth Design & Production", "Active Prospecting & SQL Generation"],
    slug: "adobe-summit-2025",
    solution:
      "Iterative design using sustainable wood and aluminum delivered 360° brand visibility on time. Floor specialists used real-time social profiling and sharp qualifying questions to surface and instantly hand off high-value prospects.",
    title: "How B2B Sales Arrow Engineered End-to-End Impact at Adobe Summit 2025?",
  },
  {
    challenges:
      "Client A: Late app access compressed outreach timelines; booth design demanded multiple revisions under a ticking clock.\n\nClient B: Contact list shrank mid-campaign, APAC was excluded, and off-booth meeting venues raised no-show risk significantly.",
    client:
      "Client A: Global Revenue Management & Pricing Leader | Client B: Europe's #1 Core Banking Platform",
    event: "SIBOS 2025",
    image: "/images/case-studies/cs-new-1.avif",
    location: "Messe Frankfurt, Germany",
    outcome:
      "Client A: 200+ badge scans, 34 qualified leads, 3 hot leads, 17 pre-scheduled meetings, 22 leads from $1B+ organizations.\n\nClient B: 125 badge scans, 64 qualified leads - high-value conversations across five global regions, exceeding strategic expectations.",
    outcomeStats: ["200+ Badge Scans (Client A)", "64 Qualified Leads (Client B)"],
    requirements:
      "Client A: TAL-only targeted prospecting, plus a sustainable booth with creative engagement activities and premium giveaways, delivered through multiple design iterations.\n\nClient B: Balanced outreach across five global regions, curating high-value executive meetings within a strict cap of 30 pre-approved slots.",
    services: [
      "Active Prospecting",
      "Booth Design & Production",
      "Premium Giveaways",
      "AI Sketch Bot Engagement",
      "Global Multi-Region Outreach",
      "Real-Time Meeting Coordination",
      "On-Ground Execution Support",
    ],
    slug: "sibos-2025",
    solution:
      "Client A: Multi-touch TAL campaign via calls, emails, and app nudges; AI Sketch Bots conceptualized and launched in nine days, drawing consistent booth crowds.\n\nClient B: Hyper-personalized three-channel outreach, a live meeting tracker, dedicated coordination pod, and daily client stand-ups ensured zero missed opportunities across all regions.",
    title:
      "Two Clients. One Event. Unstoppable Outcomes. How B2B Sales Arrow Drove Dual Client Success at SIBOS 2025",
  },
  {
    challenges:
      "Outreach was restricted to opt-in attendees only, significantly limiting the prospect pool for pre-event meetings. QR Code standees also had to be sourced internationally within a near-impossible three-day window.",
    client: "Multi-Billion-Dollar Global IT and Consulting Leader",
    event: "SAP Sapphire 2023",
    image: "/images/case-studies/cs-10.avif",
    location: "Orlando, US",
    outcome:
      "31 Sales-Qualified Leads delivered, including decision-makers. 80% were hot and warm leads. 45% came from accounts with revenue exceeding $10 billion. Every single account was unique.",
    outcomeStats: ["31 Sales-Qualified Leads Delivered", "45% From $10B+ Revenue Accounts"],
    requirements:
      "Generate 30 Sales-Qualified Leads from key decision-makers across target industries, while driving global brand recognition and creating a memorable, high-impact attendee experience throughout the event.",
    services: [
      "Active Prospecting and SQL Generation",
      "Attendee Engagement and Experience Creation",
      "Live Art Performance",
      "Event Stationery and Brand Merchandise",
      "Pre-Event Meeting Setup",
    ],
    slug: "sap-sapphire-2023",
    solution:
      "Active Prospecting specialists secured 100% ICP-matched SQLs on the floor. QR Code standees were sourced internationally to beat the deadline. A renowned mentalist and magician headlined the cocktail night, while branded merchandise created a strong, unified team presence throughout.",
    title:
      "B2B Sales Arrow Delivered Tremendous Success for a Multi-Billion-Dollar IT Titan at SAP Sapphire 2023, Orlando",
  },
  {
    challenges:
      "Event app launched just one day before the show with limited access. No attendee list was available. A packed event agenda made connecting with delegates on the floor exceptionally difficult throughout.",
    client: "Global IT & Consulting Leader",
    event: "ONS 2022",
    image: "/images/case-studies/cs-new-2.avif",
    location: "Stavanger, Norway",
    outcome:
      "35+ highly qualified SQLs delivered, outperforming the client target by over 80%. 27 hot and warm leads secured. 29 unique accounts engaged, with combined revenues exceeding $1.5 trillion.",
    outcomeStats: ["35+ Qualified SQLs Delivered", "29 Unique Accounts Engaged"],
    requirements:
      "Focused on-ground lead generation targeting CXOs and Key Decision-makers from Fortune 500 and Global 2000 Oil and Gas organizations with immediate or long-term business requirements.",
    services: [
      "Active Prospecting",
      "On-Ground SQL Generation",
      "Pre-Fixed Meeting Coordination",
      "Multilingual Native European Sales Specialist",
      "Customized Script Development",
      "Meeting Notes Documentation",
    ],
    slug: "ons-2022",
    solution:
      "Active Prospecting specialists executed rigorous on-floor qualification using a custom-developed Oil and Gas industry script. A multilingual native European sales specialist sharpened brand positioning and helped break through cultural and language barriers with senior delegates.",
    title: "How B2B Sales Arrow Made a Triumphant Debut in Oil and Gas at ONS 2022, Norway?",
  },
  {
    challenges:
      "Attendee lists were unavailable on the event portal, causing database development delays and significantly compressing the window for pre-event outreach campaigns.",
    client: "Global IT and Consulting Leader",
    event: "DistribuTECH 2023",
    image: "/images/case-studies/cs-9.avif",
    location: "San Diego, US",
    outcome:
      "42 SQLs delivered against a target of 30, a 40% over achievement. 32 hot and warm leads secured. 39 accounts with annual revenue exceeding $1 billion captured directly into the sales pipeline.",
    outcomeStats: ["42 SQLs vs Target 30", "39 $1B+ Revenue Accounts Captured"],
    requirements:
      "A brand-forward trade show booth with wall graphics and LED screen, plus 30 Sales-Qualified Leads from Energy and Oil and Gas organizations with minimum annual revenue of $500 million.",
    services: [
      "Booth Design and Production",
      "Active Prospecting",
      "On-Ground SQL Generation",
      "Pre-Event Meeting Setup",
      "Database Development",
      "Multilingual Sales Specialist",
    ],
    slug: "distributech-2023",
    solution:
      "Built a 500+ prospect database aligned to the client's ICP from scratch. Deployed multi-channel outreach via emails, calls, and app messaging. Active Prospecting specialists ran rigorous on-floor qualification to surface CXO-level decision-makers with precision.",
    title:
      "How B2B Sales Arrow Powered a $16B IT Giant's Lead Generation Success at DistribuTECH 2023?",
  },
  {
    challenges:
      "Just one week to execute outreach from a TAL of 1,000 prospects, Amsterdam public holidays compressing timelines further, no access to delegate contact data, and an immersive booth to deliver within tight budget.",
    client: "World's #1 Pricing & Billing Organization ($450M+)",
    event: "Money 20/20 Europe",
    image: "/images/case-studies/cs-4.avif",
    location: "Amsterdam",
    outcome:
      "37 high-quality SQLs delivered against a target of 30 - from Fortune 500 accounts including Bank of America, Barclays, American Express, AWS, and Lloyds Bank. Plus 1,000+ prospects captured for future pipeline.",
    outcomeStats: ["37 SQLs vs Target 30", "1000+ Prospects Captured for Future Pipeline"],
    requirements:
      "An eye-catching booth with LED screen, dedicated meeting spaces, and conceptualized giveaways, along with 30 C-level SQLs from Fortune 500 and Global 2000 banking and fintech organizations.",
    services: [
      "Booth Design & Production",
      "On-Ground Lead Generation",
      "Attendee Engagement & Experience Creation",
      "Database Development",
      "Pre-Fixed Meeting Coordination",
    ],
    slug: "money-2020-2023",
    solution:
      "Hyper-targeted email and call campaigns secured pre-fixed C-level meetings. A visually striking booth with temperature-sensitive digital flasks, branded coffee station, and a 1,000+ prospect database was built from scratch by a multilingual European specialist.",
    title:
      "How B2B Sales Arrow Powered the World's #1 Pricing & Billing Organisation at Money 20/20 Amsterdam",
  },
  {
    challenges:
      "Just one week to execute outreach from a TAL of 1,000 prospects, Amsterdam public holidays compressing timelines further, no access to delegate contact data, and an immersive booth to deliver within tight budget.",
    client: "World's No. 1 Pricing and Billing Organization",
    event: "Money 20/20 Europe",
    image: "/images/case-studies/cs-3.avif",
    location: "Amsterdam",
    outcome:
      "37 high-quality SQLs delivered against a target of 30, from Fortune 500 accounts. Plus 1,000+ prospects captured for future pipeline.",
    outcomeStats: ["37 SQLs vs Target 30", "1000+ Prospects Captured for Future Pipeline"],
    requirements:
      "An eye-catching booth with LED screen, dedicated meeting spaces, and conceptualized giveaways, plus 30 C-level SQLs from Fortune 500 and Global 2000 banking and fintech organizations.",
    services: [
      "Booth Design and Production",
      "On-Ground Lead Generation",
      "Attendee Engagement and Experience Creation",
      "Database Development",
      "Pre-Fixed Meeting Coordination",
    ],
    slug: "money-2020-2022",
    solution:
      "Hyper-targeted email and call campaigns secured pre-fixed C-level meetings. A striking booth with temperature-sensitive digital flasks, branded coffee station, and a 1,000+ prospect database was built by a multilingual European specialist.",
    title:
      "How B2B Sales Arrow Powered the World's No. 1 Pricing and Billing Organization at Money 20/20 Amsterdam?",
  },
  {
    challenges:
      "Event fell right before the new year holiday season, leaving minimal preparation time. Zero access to attendee contact data made pre-fixed meeting setup significantly harder to execute.",
    client: "Global IT & Consulting Leader ($16B+ Revenue)",
    event: "NRF 2023 - Retail's Big Show",
    image: "/images/case-studies/cs-7.avif",
    location: "Javits Center, New York",
    outcome:
      "60 SQLs delivered against a target of 30 - a clean 100% over delivery. 50 hot and warm leads secured. 46 meetings with decision-makers. 29 accounts with revenue exceeding $10 billion.",
    outcomeStats: ["60 SQLs vs Target 30", "29 Accounts With $10B+ Revenue"],
    requirements:
      "Generate 30 Sales-Qualified Leads from retail and eCommerce organizations with a minimum annual revenue of $500 million, with laser-focused, on-ground prospecting.",
    services: [
      "Active Prospecting",
      "On-Ground SQL Generation",
      "Pre-Fixed Meeting Coordination",
      "Multilingual Native Sales Specialist",
      "Executive & Company Profiling",
      "Meeting Notes Documentation",
    ],
    slug: "nrf-2023",
    solution:
      "Active Prospecting specialists ran rigorous on-floor qualification exercises, filtering the most relevant prospects against the client's ICP. A multilingual native sales specialist sharpened brand positioning, while detailed meeting notes enabled personalized lead nurturing post-event.",
    title: "How Active Prospecting Powered a 100% Surge in SQLs at NRF 2023, New York?",
  },
  {
    challenges:
      "At the eleventh hour, the cruise operator could not proceed due to a missing Coast Guard permit. Simultaneously, tight timelines made bulk giveaway procurement a race against the clock, while hotel billing discrepancies demanded careful resolution.",
    client: "Global IT & Consulting Leader (Infosys)",
    event: "Sales ConnectMI Conference (Manufacturing & Insurance Divisions)",
    image: "/images/case-studies/cs-5.avif",
    location: "Washington, D.C.",
    outcome:
      "The client praised the event as seamless, with zero technical or logistical hitches. The B2B Sales Arrow team earned glowing testimonials for their agility, professionalism, and ability to engineer a genuine “wow” factor under pressure.",
    outcomeStats: ["150+ Global Attendees", "Zero Technical or Logistical Hitches"],
    requirements:
      "A multi-division, multi-day conference for 150+ global attendees, spanning a 3-day manufacturing summit and 1-day insurance conference, complete with impactful speaker sessions, curated dining experiences, branded giveaways, and a farewell cruise gala.",
    services: [
      "End-to-End F&B Management",
      "Cruise Gala Dinner",
      "Welcome Soirée",
      "AV Setup",
      "Conceptualized Giveaways",
      "Event Logistics & Coordination",
    ],
    slug: "annual-sales-connect",
    solution:
      "We swiftly negotiated enhanced cruise deliverables, secured 50 VIP cruise passes as goodwill compensation, and arranged a scenic water taxi experience, turning a crisis into a highlight. Tailored giveaways and a flawless AV setup sealed the experience.",
    title:
      "When an $18 Billion IT Giant Needed a Global Sales Connect, We Delivered the Extraordinary",
  },
  {
    challenges:
      "Event fell during the holiday season when executives were least reachable. Virtual events were still new territory with uncertain ROI expectations. Dry runs, script tailoring, and data security compliance added significant coordination complexity throughout.",
    client: "Global Leader in Digital Services and Consulting",
    event: "Virtual Panel Discussion (Hi-Tech and Manufacturing Industries)",
    image: "/images/case-studies/cs-new-9.avif",
    location: "Virtual",
    outcome:
      "144 registrations delivered against a target of 100, a 44% over delivery. 89% of registrants were Director level and above. 113 Fortune 500 and Global 2000 organizations participated, with combined revenue exceeding USD 1.83 trillion.",
    outcomeStats: ["144 Registrations vs Target 100", "113 Fortune 500 Organizations Participated"],
    requirements:
      "Secure 100 CXO-level registrations from Fortune 500 and Global 2000 Hi-tech and Manufacturing organizations in the US and UK, plus produce pre-recorded panelist sessions synced seamlessly with a live Q&A.",
    services: [
      "Audience Acquisition Campaign",
      "Virtual Event Design and Production",
      "Pre-Event Media Production",
      "Platform Customization",
      "Live Event Support",
      "Post-Event Media Management and Analytics",
    ],
    slug: "virtual-panel-2022",
    solution:
      "Omnichannel audience acquisition combining customized database creation, targeted email and call outreach, content syndication, and registrant nurturing campaigns. Full virtual platform customization, two dry runs, flawless live support, and post-event media editing ensured an immersive experience from start to finish.",
    title: "One Virtual Event. 113 Global Giants. USD 1.83 Trillion in the Room.",
  },
];
