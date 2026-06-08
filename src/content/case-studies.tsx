import type { CaseStudyIndexEntry } from "@/types/case-studies";

export const CASE_STUDIES_PAGE_CONTENT = {
  cardCtaLabel: "Read Full Study",
  cta: {
    ctaHref: "/contact",
    ctaLabel: "Request a Strategy Consultation",
    title:
      "Enterprise results are not accidental. They are engineered through strategy, creative execution, data quality, and disciplined follow-up. Could your next program become our next case study?",
  },
  emptyState: {
    description:
      "Try a different service lens to browse the current case study portfolio.",
    title: "No case studies match this filter yet.",
  },
  filters: [
    { id: "serviceCategory", label: "Service Category" },
    { id: "industry", label: "Industry" },
    { id: "geography", label: "Geography" },
    { id: "companySize", label: "Company Size" },
  ] as const,
  filtersTitle: "Filter by: Service Category | Industry | Geography | Company Size",
  gridFilters: [
    "All",
    "Event Lead Generation",
    "Custom Booth Design",
    "Full Event Program",
  ] as const,
  hero: {
    description:
      "Results matter more than promises. Documented outcomes from real enterprise B2B programs, trade show lead generation, booth design, video production, performance marketing, and market research.",
    image: {
      alt: "Enterprise growth results dashboard",
      src: "/images/home/hero/home_hero_bg.avif",
    },
    proofBarStats: [
      "250+ events",
      "$1.2B+ pipeline influenced",
      "40+ countries",
      "15,000+ enterprise leads",
      "98% client retention",
      "500+ booth designs",
    ],
    title: "Enterprise Results That Speak for Themselves",
  },
  intro: {
    description:
      "Our results are not accidental. They are engineered through strategic rigor, creative stand design, clean data quality, and disciplined CRM integration. Take a look at our visual case study portfolio.",
    title: "DISCOVER HOW LEADING BRANDS TACKLE CHALLENGES AND ACHIEVE SCALE WITH OUR SOLUTIONS",
  },
  modal: {
    ctaHref: "/contact",
    ctaLabel: "Book a Strategy Session",
  },
  resultsHeading: "Recent Program Results",
  template: {
    items: [
      "Client Context: industry, size, geography, event or campaign type",
      "The Challenge: specific commercial problem or objective",
      "What We Did: exact scope, geography, timeline, and approach",
      "The Results: specific numbers, leads, pipeline, meetings, cost per opportunity",
      "Client Quote: named, attributed, with job title",
      "Service Tags: which B2B Sales Arrow services were involved",
    ],
    title: "Case Study Template, For Future Entries",
  },
};

export const CASE_STUDIES_PAGE_STUDIES: CaseStudyIndexEntry[] = [
  {
    anchorId: "adobe-summit-2025",
    card: {
      badge: "Event Lead Generation",
      client: "Adobe Summit 2025",
      href: "#adobe-summit-2025",
      icon: "BarChart3",
      id: "adobe-summit-2025",
      image: "/images/recent-events/adobe_summit_2026.avif",
      inactiveLabel: "Adobe Summit 2025",
      metric: "87",
      metricLabel: "BANT-Qualified Leads",
      primarySummary: {
        label: "The Challenge",
        text: "Generate qualified pipeline at a flagship US event with high exhibitor competition and a technically sophisticated buyer audience who had attended multiple times previously.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Full event lead generation program, pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
      },
      title: "Case Study 1: Adobe Summit 2025, Enterprise Event Lead Generation, Las Vegas",
    },
    challenge:
      "Generate qualified pipeline at a flagship US event with high exhibitor competition and a technically sophisticated buyer audience who had attended multiple times previously.",
    companySize: "Enterprise",
    event: "Adobe Summit, Las Vegas",
    format: "text",
    formatIcon: "BookOpen",
    geography: "Las Vegas",
    id: "adobe-summit-2025",
    industry: "Enterprise Technology / Digital Experience",
    results:
      "320+ qualified conversations recorded over 3 event days. 87 BANT-qualified leads delivered to sales within 48 hours. 22 meetings progressed to pipeline within 30 days. Lead-to-pipeline conversion: 25.3%.",
    serviceCategories: ["Event Lead Generation", "Active Prospecting", "CRM Integration"],
    servicesText: "Event Lead Generation, Active Prospecting, CRM Integration.",
    title: "Case Study 1: Adobe Summit 2025, Enterprise Event Lead Generation, Las Vegas",
    whatWeDid:
      "Full event lead generation program, pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
  },
  {
    anchorId: "money-20-20-europe-2025",
    card: {
      badge: "Custom Booth Design",
      client: "Money 20/20 Europe 2025",
      href: "#money-20-20-europe-2025",
      icon: "Target",
      id: "money-20-20-europe-2025",
      image: "/images/recent-events/event_other_2.avif",
      inactiveLabel: "Money 20/20 Europe 2025",
      metric: "54",
      metricLabel: "CHAMP-Qualified Leads",
      primarySummary: {
        label: "The Challenge",
        text: "First-time European market appearance with limited brand recognition and a sales team unfamiliar with the event environment and European buyer expectations.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Custom 10x20 inline booth design and build, pre-event sales team briefing sessions, priority account list built from registered attendee data, CHAMP-qualified lead capture, and same-day CRM routing.",
      },
      title: "Case Study 2: Money 20/20 Europe 2025, First-Time Market Entry, Amsterdam",
    },
    challenge:
      "First-time European market appearance with limited brand recognition and a sales team unfamiliar with the event environment and European buyer expectations.",
    companySize: "Enterprise",
    event: "Money 20/20 Europe, Amsterdam",
    format: "gallery",
    formatIcon: "Camera",
    geography: "Amsterdam",
    id: "money-20-20-europe-2025",
    industry: "Fintech / Payments / Embedded Finance",
    results:
      "190+ qualified conversations across 3 days. 54 CHAMP-qualified leads delivered to named sales owners. 8 European partnerships initiated from the event. Client signed a 12-month global event program within 6 weeks.",
    serviceCategories: [
      "Custom Booth Design",
      "Event Lead Generation",
      "Active Prospecting",
      "Sales Team Briefing",
    ],
    servicesText:
      "Custom Booth Design, Event Lead Generation, Active Prospecting, Sales Team Briefing.",
    title: "Case Study 2: Money 20/20 Europe 2025, First-Time Market Entry, Amsterdam",
    whatWeDid:
      "Custom 10x20 inline booth design and build, pre-event sales team briefing sessions, priority account list built from registered attendee data, CHAMP-qualified lead capture, and same-day CRM routing.",
  },
  {
    anchorId: "world-aviation-festival-2025",
    card: {
      badge: "Full Event Program",
      client: "World Aviation Festival 2025",
      href: "#world-aviation-festival-2025",
      icon: "Plane",
      id: "world-aviation-festival-2025",
      image: "/images/case-studies/waf.avif",
      inactiveLabel: "World Aviation Festival 2025",
      metric: "110+",
      metricLabel: "Qualified Conversations",
      primarySummary: {
        label: "The Challenge",
        text: "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA, in a high-trust, relationship-driven sector.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
      },
      title:
        "Case Study 3: World Aviation Festival 2025, Relationship-Driven Enterprise Sales, Amsterdam",
    },
    challenge:
      "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA, in a high-trust, relationship-driven sector.",
    companySize: "Enterprise",
    event: "World Aviation Festival, Amsterdam",
    format: "video",
    formatIcon: "Play",
    geography: "Amsterdam",
    id: "world-aviation-festival-2025",
    industry: "Aviation Technology / Digital Transformation",
    results:
      "14 pre-scheduled meetings with C-level and VP-level aviation decision-makers. 110+ qualified conversations captured. 3 existing client relationships advanced to contract expansion discussions within 60 days. 1 net-new enterprise deal initiated directly from an event conversation.",
    serviceCategories: [
      "Full Event Program",
      "Booth",
      "Lead Generation",
      "Meeting Scheduling",
      "Post-Event Follow-Up",
    ],
    servicesText:
      "Full Event Program, Booth, Lead Generation, Meeting Scheduling, Post-Event Follow-Up.",
    title:
      "Case Study 3: World Aviation Festival 2025, Relationship-Driven Enterprise Sales, Amsterdam",
    whatWeDid:
      "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
  },
  {
    anchorId: "sibos-2023",
    card: {
      badge: "Event Lead Generation",
      client: "SIBOS 2023",
      href: "#sibos-2023",
      icon: "Landmark",
      id: "sibos-2023",
      image: "/images/case-studies/sibos.avif",
      inactiveLabel: "SIBOS 2023",
      metric: "47",
      metricLabel: "SQLs Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "Build a sustainable, high-visibility booth for a niche banking audience while still generating senior pipeline from a tightly defined target account list.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Delivered an eco-conscious booth design, two private meeting spaces, bilingual on-ground sales support, and active prospecting aligned to the client's ICP.",
      },
      title:
        "Case Study 4: SIBOS 2023, Sustainable Banking Event Lead Generation, Ontario, Canada",
    },
    challenge:
      "Build a sustainable, high-visibility booth for a niche banking audience while still generating senior pipeline from a tightly defined target account list.",
    companySize: "Enterprise",
    event: "SIBOS 2023, Ontario, Canada",
    format: "text",
    formatIcon: "Landmark",
    geography: "Ontario, Canada",
    id: "sibos-2023",
    industry: "Banking Software / Fintech Infrastructure",
    results:
      "Delivered 47 sales-qualified leads against a target of 34, exceeding target by 38%. More than 40 leads were hot or warm, 35+ leads were director level and above, and 30+ target accounts carried annual revenue above $1 billion.",
    serviceCategories: [
      "Event Lead Generation",
      "Custom Booth Design",
      "Full Event Program",
      "Active Prospecting",
    ],
    servicesText:
      "Event Lead Generation, Eco-Conscious Booth Design, Active Prospecting, Sales Support.",
    title:
      "Case Study 4: SIBOS 2023, Sustainable Banking Event Lead Generation, Ontario, Canada",
    whatWeDid:
      "B2B Sales Arrow designed a booth built around sustainability principles using crushed wood, added two closed meeting spaces, deployed a bilingual sales specialist, and ran active prospecting to outperform the client's SQL target.",
  },
  {
    anchorId: "money-20-20-2023-pricing-billing",
    card: {
      badge: "Full Event Program",
      client: "Money 20/20 2023",
      href: "#money-20-20-2023-pricing-billing",
      icon: "Coins",
      id: "money-20-20-2023-pricing-billing",
      image: "/images/recent-events/event_other_3.avif",
      inactiveLabel: "Money 20/20 2023",
      metric: "35+",
      metricLabel: "SQL Meetings",
      primarySummary: {
        label: "The Challenge",
        text: "Secure C-level fintech meetings from a 1,000-account universe in one week, without direct access to delegate contact data and within a tight booth budget.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Combined pre-event outreach, LED-led booth design, attendee engagement activations, active prospecting, and multilingual senior sales coverage at the event.",
      },
      title:
        "Case Study 5: Money 20/20 2023, Pricing and Billing Leader Expands Pipeline, Amsterdam",
    },
    challenge:
      "Secure C-level fintech meetings from a 1,000-account universe in one week, without direct access to delegate contact data and within a tight booth budget.",
    companySize: "Enterprise",
    event: "Money 20/20 2023, Amsterdam",
    format: "gallery",
    formatIcon: "Coins",
    geography: "Amsterdam",
    id: "money-20-20-2023-pricing-billing",
    industry: "Pricing & Billing Technology / Fintech",
    results:
      "Generated 35+ sales-qualified meetings and delivered 37 results against a 30-result target. The program also built a 1,000+ prospect database for future outreach and engaged brands including Bank of America, American Express, AWS, Barclays, and Lloyds Bank.",
    serviceCategories: [
      "Full Event Program",
      "Event Lead Generation",
      "Custom Booth Design",
      "Active Prospecting",
    ],
    servicesText:
      "End-to-End Event Program, Booth Design, Attendee Experience, Active Prospecting, Database Development.",
    title:
      "Case Study 5: Money 20/20 2023, Pricing and Billing Leader Expands Pipeline, Amsterdam",
    whatWeDid:
      "The team launched highly targeted email and call outreach, produced a booth with smart LED screens and meeting spaces, created giveaway and hospitality activations, documented detailed meeting intelligence, and deployed a senior European technical sales professional fluent in five languages.",
  },
  {
    anchorId: "sap-sapphire-2023",
    card: {
      badge: "Event Lead Generation",
      client: "SAP Sapphire 2023",
      href: "#sap-sapphire-2023",
      icon: "Sparkles",
      id: "sap-sapphire-2023",
      image: "/images/case-studies/sap.jpg",
      inactiveLabel: "SAP Sapphire 2023",
      metric: "31",
      metricLabel: "SQLs Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "The client needed qualified enterprise leads and a memorable brand presence despite opt-in attendee restrictions and a near-impossible three-day delivery window for event assets.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Ran active prospecting, sourced QR-code standees internationally, equipped the sales team with brand wearables, and layered in premium attendee experience touches.",
      },
      title:
        "Case Study 6: SAP Sapphire 2023, High-Intent Enterprise Pipeline in Orlando",
    },
    challenge:
      "The client needed qualified enterprise leads and a memorable brand presence despite opt-in attendee restrictions and a near-impossible three-day delivery window for event assets.",
    companySize: "Enterprise",
    event: "SAP Sapphire 2023, Orlando",
    format: "video",
    formatIcon: "Sparkles",
    geography: "Orlando",
    id: "sap-sapphire-2023",
    industry: "Payments / Enterprise Technology",
    results:
      "Delivered 31 sales-qualified leads against a target of 30, with conversations from major organizations including Abbott Laboratories, Nissan, Shell US, and Robert Bosch GmbH. The campaign combined lead generation and brand experience to exceed expectations.",
    serviceCategories: ["Event Lead Generation", "Full Event Program", "Active Prospecting"],
    servicesText:
      "Event Lead Generation, Active Prospecting, Attendee Experience, Event Stationery, Brand Merchandise.",
    title:
      "Case Study 6: SAP Sapphire 2023, High-Intent Enterprise Pipeline in Orlando",
    whatWeDid:
      "B2B Sales Arrow executed active prospecting for ideal-customer SQLs, solved QR-code standee constraints through international sourcing, added a live mentalist performance for the cocktail night, and strengthened visual branding through coordinated merchandise.",
  },
  {
    anchorId: "distributech-2023",
    card: {
      badge: "Event Lead Generation",
      client: "DistribuTECH 2023",
      href: "#distributech-2023",
      icon: "Zap",
      id: "distributech-2023",
      image: "/images/case-studies/DistribuTECH.jpg",
      inactiveLabel: "DistribuTECH 2023",
      metric: "42",
      metricLabel: "SQLs Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "Attendee list unavailability delayed database development and pre-event outreach for a high-value energy-sector lead generation program.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Built a 500+ prospect database, drove outreach across email, calls, and app messaging, ran active prospecting, and paired the program with booth execution and meeting analytics.",
      },
      title:
        "Case Study 7: DistribuTECH 2023, Energy Event Lead Generation at Scale, San Diego",
    },
    challenge:
      "Attendee list unavailability delayed database development and pre-event outreach for a high-value energy-sector lead generation program.",
    companySize: "Enterprise",
    event: "DistribuTECH 2023, San Diego, US",
    format: "text",
    formatIcon: "Zap",
    geography: "San Diego, US",
    id: "distributech-2023",
    industry: "Energy Technology / IT Consulting",
    results:
      "Secured 42 sales-qualified meetings against a target of 30, with 32 hot and warm leads and 39 accounts carrying annual revenue above $1 billion. The campaign delivered 40% higher results than target and concentrated 92% of engagement in billion-dollar accounts.",
    serviceCategories: [
      "Event Lead Generation",
      "Custom Booth Design",
      "Full Event Program",
      "Active Prospecting",
    ],
    servicesText:
      "Database Development, Pre-Event Outreach, Active Prospecting, Booth Design & Production, Event Lead Analysis.",
    title:
      "Case Study 7: DistribuTECH 2023, Energy Event Lead Generation at Scale, San Diego",
    whatWeDid:
      "The team developed a 500+ ICP-matched prospect database, secured pre-event meetings through multi-channel outreach, captured executive and company intelligence in a delivery matrix, documented meeting notes for nurturing, and elevated event positioning with booth execution and multilingual sales support.",
  },
  {
    anchorId: "nrf-2023",
    card: {
      badge: "Event Lead Generation",
      client: "NRF 2023",
      href: "#nrf-2023",
      icon: "ShoppingBag",
      id: "nrf-2023",
      image: "/images/case-studies/nrf.jpg",
      inactiveLabel: "NRF 2023",
      metric: "60",
      metricLabel: "SQLs Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "The team had limited preparation time ahead of the holiday season and no attendee contact access, while still needing to build a retail-focused senior pipeline.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Used active prospecting, senior-level meeting qualification, multilingual sales support, and a full meeting-intelligence package to double the program target.",
      },
      title:
        "Case Study 8: NRF 2023, Retail Pipeline Growth Through Active Prospecting, New York",
    },
    challenge:
      "The team had limited preparation time ahead of the holiday season and no attendee contact access, while still needing to build a retail-focused senior pipeline.",
    companySize: "Enterprise",
    event: "NRF 2023, New York",
    format: "text",
    formatIcon: "ShoppingBag",
    geography: "New York",
    id: "nrf-2023",
    industry: "Retail Technology / IT Consulting",
    results:
      "Doubled the client target with 60 sales-qualified leads against a 30-lead goal. The program also delivered 50 hot and warm leads, 46 meetings with decision-makers and above, and 29 accounts with annual revenue exceeding $10 billion.",
    serviceCategories: ["Event Lead Generation", "Full Event Program", "Active Prospecting"],
    servicesText:
      "Active Prospecting, Meeting Qualification, Executive Profiling, Event Lead Analysis, Multilingual Sales Support.",
    title:
      "Case Study 8: NRF 2023, Retail Pipeline Growth Through Active Prospecting, New York",
    whatWeDid:
      "B2B Sales Arrow ran focused on-ground active prospecting, guided pre-scheduled prospects to the booth, captured meeting schedules plus executive and company profiling, and documented notes for tailored lead nurturing after the event.",
  },
  {
    anchorId: "itc-2022",
    card: {
      badge: "Event Lead Generation",
      client: "ITC 2022",
      href: "#itc-2022",
      icon: "Shield",
      id: "itc-2022",
      image: "/images/case-studies/cs-7.avif",
      inactiveLabel: "ITC 2022",
      metric: "34",
      metricLabel: "Results Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "Launch an insurance-sector lead generation campaign under tight deadlines, with limited attendee contact access and a large one-to-one meeting requirement.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Created a 3,000+ prospect database, executed pre-event outreach, coordinated scheduled meetings, and ran active prospecting backed by detailed delivery intelligence.",
      },
      title:
        "Case Study 9: ITC 2022, Insurance-Tech Lead Generation Under Tight Deadlines, Las Vegas",
    },
    challenge:
      "Launch an insurance-sector lead generation campaign under tight deadlines, with limited attendee contact access and a large one-to-one meeting requirement.",
    companySize: "Enterprise",
    event: "ITC 2022, Las Vegas",
    format: "text",
    formatIcon: "Shield",
    geography: "Las Vegas",
    id: "itc-2022",
    industry: "Insurtech / IT Consulting",
    results:
      "Exceeded target delivery with 34 results against a 25-result goal and generated meetings from accounts with combined annual revenue above $400 billion. The campaign also produced 80%+ hot and warm leads, with 80% of leads at director level and above.",
    serviceCategories: ["Event Lead Generation", "Full Event Program", "Active Prospecting"],
    servicesText:
      "Database Development, Pre-Event Meeting Setup, Active Prospecting, Meeting Intelligence, Lead Nurturing Support.",
    title:
      "Case Study 9: ITC 2022, Insurance-Tech Lead Generation Under Tight Deadlines, Las Vegas",
    whatWeDid:
      "The team built a custom database of 3,000+ target prospects, launched tailored email, call, and app-based outreach, coordinated pre-event appointments, and delivered a full meeting matrix with executive and company profiling plus detailed notes for follow-up.",
  },
  {
    anchorId: "world-aviation-festival-2022",
    card: {
      badge: "Full Event Program",
      client: "World Aviation Festival 2022",
      href: "#world-aviation-festival-2022",
      icon: "Plane",
      id: "world-aviation-festival-2022",
      image: "/images/case-studies/waf.avif",
      inactiveLabel: "World Aviation Festival 2022",
      metric: "62",
      metricLabel: "Meetings Delivered",
      primarySummary: {
        label: "The Challenge",
        text: "The client needed aviation-sector meetings from $500M+ target accounts while delivering a premium event presence, attendee experience, and post-event momentum.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Combined booth design, a 2,000+ prospect database, pre-event scheduling, active prospecting, attendee engagement activations, and post-event cruise hospitality.",
      },
      title:
        "Case Study 10: World Aviation Festival 2022, End-to-End Aviation Event Growth, Amsterdam",
    },
    challenge:
      "The client needed aviation-sector meetings from $500M+ target accounts while delivering a premium event presence, attendee experience, and post-event momentum.",
    companySize: "Enterprise",
    event: "World Aviation Festival 2022, Amsterdam",
    format: "gallery",
    formatIcon: "Plane",
    geography: "Amsterdam",
    id: "world-aviation-festival-2022",
    industry: "Aviation Technology / IT Consulting",
    results:
      "Delivered 62 sales-qualified meetings against a target of 20, with 70% hot and warm leads and 80% of engaged accounts above $1 billion in annual revenue. The program overshot the client's target by 210% and strengthened post-event pipeline follow-up with meeting intelligence and media capture.",
    serviceCategories: [
      "Full Event Program",
      "Event Lead Generation",
      "Custom Booth Design",
      "Active Prospecting",
    ],
    servicesText:
      "Full Event Program, Booth Design & Production, Active Prospecting, Pre-Event Meeting Setup, Post-Event Engagement.",
    title:
      "Case Study 10: World Aviation Festival 2022, End-to-End Aviation Event Growth, Amsterdam",
    whatWeDid:
      "B2B Sales Arrow produced the booth, built a 2,000+ prospect database, secured pre-qualified meetings, ran intensive active prospecting, created attendee engagement through themed giveaways and a photo booth, and hosted a post-event cruise cocktail experience with supporting video capture.",
  },
  {
    anchorId: "annual-sales-connect-manufacturing-insurance",
    card: {
      badge: "Full Event Program",
      client: "Annual Sales Connect",
      href: "#annual-sales-connect-manufacturing-insurance",
      icon: "Users",
      id: "annual-sales-connect-manufacturing-insurance",
      image: "/images/case-studies/cs-8.avif",
      inactiveLabel: "Annual Sales Connect",
      metric: "150+",
      metricLabel: "Attendees Hosted",
      primarySummary: {
        label: "The Challenge",
        text: "Deliver a multi-division executive conference in Washington, DC while managing tight timelines, giveaway procurement, venue billing issues, and a last-minute cruise permit failure.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Handled end-to-end event production across welcome dinners, farewell gala experiences, AV setup, F&B management, giveaways, and guest experience recovery planning.",
      },
      title:
        "Case Study 11: Annual Sales Connect, Manufacturing and Insurance Executive Program, Washington, DC",
    },
    challenge:
      "Deliver a multi-division executive conference in Washington, DC while managing tight timelines, giveaway procurement, venue billing issues, and a last-minute cruise permit failure.",
    companySize: "Enterprise",
    event: "Annual Sales Connect, Washington, DC",
    format: "video",
    formatIcon: "Users",
    geography: "Washington, DC",
    id: "annual-sales-connect-manufacturing-insurance",
    industry: "Enterprise Technology / Sales Enablement",
    results:
      "Hosted 150+ attendees across manufacturing and insurance division programs and converted the cruise disruption into an upgraded guest experience with 50 VIP cruise passes, extended food and beverage service, and a water taxi solution. Client feedback highlighted flawless execution and a clear 'wow' factor.",
    serviceCategories: ["Full Event Program"],
    servicesText:
      "Custom Event Production, F&B Management, AV Setup, Guest Experience, Giveaways, Vendor Coordination.",
    title:
      "Case Study 11: Annual Sales Connect, Manufacturing and Insurance Executive Program, Washington, DC",
    whatWeDid:
      "The team orchestrated welcome and farewell dining experiences, negotiated around cruise permit restrictions, secured compensation upgrades, arranged a water taxi experience, delivered conference AV, and handled attendee gifting that matched each division's audience expectations.",
  },
];

export const CASE_STUDIES_PAGE = {
  pageId: "case-studies",
  pageName: "Case Studies",
  pageType: "resourceIndex",
  seo: {
    canonicalPath: "/case-studies",
    description:
      "Enterprise B2B marketing case studies, documented results across trade show lead generation, booth design, video production, performance marketing, and market research. Real programs. Verified results.",
    focusKeyphrase: "B2B marketing case studies",
    secondaryKeywords: [
      "event marketing results",
      "enterprise marketing success stories",
      "trade show lead generation results",
    ],
    title: "B2B Marketing Case Studies and Event Results | B2B Sales Arrow",
  },
} as const;
