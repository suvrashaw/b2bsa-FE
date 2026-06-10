import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const GES_HERO = {
  description:
    "From GITEX to CES to MWC, B2B Sales Arrow delivers B2B event solutions that create qualified pipeline, not just presence. Strategy, booth design, lead capture and post-event reporting, all under one team, one brief, one outcome.",
  title: "Global Event Solutions That Turn Trade Show Floors Into Revenue Pipelines",
};

export { GLOBAL_PROOF_STATS as GES_PROOF_BAR } from "../shared";

export const GES_SERVICES = {
  description:
    "Running a major trade show program through five separate vendors creates fragmentation, no single partner owns the outcome. Our corporate event solutions consolidate the full journey: event strategy and planning, custom booth design, fabrication, freight, customs compliance, trade show lead generation, CRM integration, and pipeline attribution, all under one team.\n\nWhen the same team that designs your booth also designs your lead qualification workflow, there are no gaps between vendors for budget and buyers to fall through.",
  heading: "End-to-End Corporate Event Solutions Under One Roof",
  headingHighlight: "Under One Roof",
  services: [
    {
      color: "bg-brand-blue",
      description: "exhibition environments engineered for visitor flow and lead conversion",
      href: "/services/global-event-solutions/trade-show-booth-design",
      icon: "Presentation",
      id: "booth-design",
      image: "/images/services/booth/booth-5.avif",
      title: "Trade Show Booth Design",
    },
    {
      color: "bg-brand-cyan",
      description: "modular exhibition systems globally available",
      href: "/services/global-event-solutions/event-booth-rental",
      icon: "Layers",
      id: "booth-rental",
      image: "/images/services/booth/booth-6.avif",
      title: "Event Booth Rental",
    },
    {
      color: "bg-brand-primary",
      description: "fabrication to on-site installation",
      href: "/services/global-event-solutions/trade-show-booth-builder",
      icon: "Globe2",
      id: "booth-builder",
      image: "/images/services/booth/booth-7.avif",
      title: "Trade Show Booth Builder",
    },
  ],
};

export const GES_WHY = {
  description:
    "Enterprise buyers do not commit from a single email or ad. They need trust, context, and conversation. Live events compress months of relationship-building into focused, high-intent days, and brands that show up with a structured presence consistently outperform those treating events as awareness activities.\n\nCEIR research shows 81% of trade show attendees hold buying authority. The question is whether your B2B event solutions are built to capture that opportunity, or simply occupy floor space.",
  imageUrl: "/images/home/hero/home_hero_bg.avif",
  titleLine1: "The Business Case for Live Events",
  titleLine2: "in Enterprise B2B",
};

export const GES_PROCESS = {
  phases: [
    {
      description: "ICP mapping, event selection, ROI forecasting, and commercial goal alignment.",
      title: "Strategic Planning",
    },
    {
      description: "Booth architecture, visitor journey, demo zones, and meeting area placement.",
      title: "Concept Design",
    },
    {
      description: "Production, shipping, customs, and venue scheduling managed in advance.",
      title: "Fabrication and Logistics",
    },
    {
      description:
        "Booth operations, staff briefing, real-time lead capture, and hot-lead routing.",
      title: "On-Ground Execution",
    },
    {
      description:
        "CRM-ready lead file, pipeline attribution, and ROI review delivered within 48 hours of event close.",
      title: "Post-Event Reporting",
    },
  ],
  title: "Our 5-Phase Global Event Execution Framework",
};

export const GES_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const GES_FAQ = {
  faqs: [
    {
      answer:
        "Global event solutions are end-to-end services covering strategy, booth design, lead capture, logistics, and post-event reporting across international markets under one accountable partner.",
      id: "definition",
      question: "What are global event solutions?",
    },
    {
      answer:
        "For custom booths at major international shows, 12–20 weeks ahead is ideal. For modular or rental formats, 6–8 weeks is typically sufficient.",
      id: "engagement",
      question: "How early should we engage an event solutions partner?",
    },
    {
      answer:
        "Through qualified lead volume, meeting conversion rate, cost per qualified opportunity, and CRM pipeline movement within 90 days, benchmarked against pre-event commercial targets.",
      id: "roi",
      question: "How do you measure event ROI?",
    },
    {
      answer:
        "Yes, and this integration is where the greatest commercial gains are made. The physical environment, lead capture workflow, and CRM routing are designed as one system from the first brief.",
      id: "integration",
      question: "Can you manage booth design and lead generation together?",
    },
    {
      answer:
        "Technology, SaaS, financial services, fintech, healthcare, energy, telecom, and professional services, across events including GITEX, CES, MWC, ADIPEC, Arab Health, Money20/20, and Hannover Messe.",
      id: "industries",
      question: "Which industries do you serve?",
    },
    {
      answer:
        "Yes, Southeast Asia, Africa, Latin America, and Eastern Europe, with local logistics partners and compliance knowledge in each region.",
      id: "markets",
      question: "Do you support emerging markets?",
    },
  ],
  heading: "Frequently Asked Questions",
  headingHighlight: "Asked Questions",
};

export const GES_PAGE = {
  pageId: "service.global-event-solutions",
  pageName: "Global Event Solutions",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/global-event-solutions",
    description:
      "End-to-end global event solutions, strategy, booth design, lead capture and on-ground execution across 40+ countries. 250+ enterprise events. $1.2B+ pipeline influenced.",
    focusKeyphrase: "global event solutions",
    secondaryKeywords: [
      "B2B event solutions",
      "corporate event solutions",
      "B2B events agency",
      "trade show lead generation",
    ],
    title: "Global Event Solutions for Enterprise B2B Brands | B2B Sales Arrow",
  },
} as const;
