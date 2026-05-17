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
      "Results matter more than promises. Documented outcomes from real enterprise B2B programs — trade show lead generation, booth design, video production, performance marketing, and market research.",
    image: {
      alt: "Enterprise growth results dashboard",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000",
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
      "The Results: specific numbers — leads, pipeline, meetings, cost per opportunity",
      "Client Quote: named, attributed, with job title",
      "Service Tags: which B2B Sales Arrow services were involved",
    ],
    title: "Case Study Template — For Future Entries",
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
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
      inactiveLabel: "Adobe Summit 2025",
      metric: "87",
      metricLabel: "BANT-Qualified Leads",
      primarySummary: {
        label: "The Challenge",
        text: "Generate qualified pipeline at a flagship US event with high exhibitor competition and a technically sophisticated buyer audience who had attended multiple times previously.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Full event lead generation program — pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
      },
      title: "Case Study 1: Adobe Summit 2025 — Enterprise Event Lead Generation, Las Vegas",
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
    title: "Case Study 1: Adobe Summit 2025 — Enterprise Event Lead Generation, Las Vegas",
    whatWeDid:
      "Full event lead generation program — pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
  },
  {
    anchorId: "money-20-20-europe-2025",
    card: {
      badge: "Custom Booth Design",
      client: "Money 20/20 Europe 2025",
      href: "#money-20-20-europe-2025",
      icon: "Target",
      id: "money-20-20-europe-2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
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
      title: "Case Study 2: Money 20/20 Europe 2025 — First-Time Market Entry, Amsterdam",
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
    title: "Case Study 2: Money 20/20 Europe 2025 — First-Time Market Entry, Amsterdam",
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
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      inactiveLabel: "World Aviation Festival 2025",
      metric: "110+",
      metricLabel: "Qualified Conversations",
      primarySummary: {
        label: "The Challenge",
        text: "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA — in a high-trust, relationship-driven sector.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
      },
      title:
        "Case Study 3: World Aviation Festival 2025 — Relationship-Driven Enterprise Sales, Amsterdam",
    },
    challenge:
      "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA — in a high-trust, relationship-driven sector.",
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
      "Full Event Program — Booth, Lead Generation, Meeting Scheduling, Post-Event Follow-Up.",
    title:
      "Case Study 3: World Aviation Festival 2025 — Relationship-Driven Enterprise Sales, Amsterdam",
    whatWeDid:
      "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
  },
];

export const CASE_STUDIES_PAGE = {
  pageId: "case-studies",
  pageName: "Case Studies",
  pageType: "resourceIndex",
  seo: {
    canonicalPath: "/case-studies",
    description:
      "Enterprise B2B marketing case studies — documented results across trade show lead generation, booth design, video production, performance marketing, and market research. Real programs. Verified results.",
    focusKeyphrase: "B2B marketing case studies",
    secondaryKeywords: [
      "event marketing results",
      "enterprise marketing success stories",
      "trade show lead generation results",
    ],
    title: "B2B Marketing Case Studies and Event Results | B2B Sales Arrow",
  },
} as const;
