import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const RESEARCH_HERO = {
  description:
    "Better strategy starts with better intelligence. Our B2B market research agency helps enterprise teams understand their markets more clearly than the competition — and move on that advantage faster.",
  title: "B2B Market Research That Gives Your Enterprise an Unfair Competitive Advantage",
};

export { GLOBAL_PROOF_STATS as RESEARCH_PROOF_BAR } from "../shared";

export const RESEARCH_SERVICES = {
  description:
    "Data augmentation, data validation, and human-powered market intelligence for sharper B2B commercial decisions.",
  heading: "Our B2B Market Research Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Enriching CRM records with verified firmographic, technographic, role-based, and intent data to create precision sales intelligence.",
      href: "/services/data-augmentation",
      icon: "PlusCircle",
      id: "augmentation",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      title: "Data Augmentation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Cleaning, verifying, and improving B2B data quality: emails, phone numbers, job titles, company details, and duplicates.",
      icon: "CheckCircle",
      id: "validation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      title: "Data Validation",
    },
    {
      color: "bg-brand-primary",
      description:
        "Competitor analysis, buyer behaviour research, TAM analysis, win/loss interviews, expert panels, and strategic reports.",
      icon: "Search",
      id: "intelligence",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      title: "Human-Powered Market Intelligence",
    },
  ],
};

export const RESEARCH_WHY = {
  description:
    "Gartner estimates poor data quality costs organisations $12.9M per year. In B2B specifically: SDRs waste time on wrong contacts, email campaigns damage sender reputation through high bounce rates, attribution models produce inaccurate ROI data, and strategic decisions are made on incorrect market assumptions. Clean, validated, enriched data is the foundation that makes every B2B marketing and sales motion more effective.",
  heading: "Bad Data Costs Enterprise Sales Teams Millions",
  reasons: [
    {
      description:
        "Gartner estimates poor data quality costs organisations $12.9M per year. In B2B specifically: SDRs waste time on wrong contacts, email campaigns damage sender reputation through high bounce rates, attribution models produce inaccurate ROI data, and strategic decisions are made on incorrect market assumptions.",
      id: "accuracy",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Poor Data Is Expensive",
    },
    {
      description:
        "Clean, validated, enriched data is the foundation that makes every B2B marketing and sales motion more effective.",
      id: "actionable",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Validated Intelligence Drives Growth",
    },
  ],
};

export const RESEARCH_PROCESS = {
  heading: "How We Deliver Market Intelligence",
  phases: [
    {
      description:
        "Direct interviews, surveys, and expert panels with buyers, users, partners, and industry stakeholders.",
      title: "Primary Research",
    },
    {
      description:
        "Industry reports, competitor positioning, public datasets, analyst commentary, and event activity analysis.",
      title: "Secondary Research",
    },
    {
      description:
        "Verified firmographic, technographic, role-based, and contextual information added to existing datasets.",
      title: "Data Enrichment and Augmentation",
    },
    {
      description: "Duplicate removal, field verification, and data consistency review.",
      title: "Validation and Quality Assurance",
    },
    {
      description:
        "Executive briefing decks, research reports, live analyst briefings, or ongoing intelligence subscriptions.",
      title: "Insight Delivery",
    },
  ],
};

export const RESEARCH_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_FAQ = {
  faqs: [
    {
      answer:
        "B2B market research is the structured process of gathering, analysing, and interpreting market, competitor, and buyer information specifically to support B2B commercial decisions — including market entry, product-market fit, campaign planning, and sales strategy.",
      id: "what-is",
      question: "What is B2B market research?",
    },
    {
      answer:
        "Primary: new information gathered directly from sources — interviews, surveys, panels. Secondary: analysis of existing information — reports, competitor websites, public data. Best programs combine both.",
      id: "primary-secondary",
      question: "What is the difference between primary and secondary research?",
    },
    {
      answer:
        "Executive briefing decks, detailed research reports, live analyst briefings, ongoing subscriptions, or custom dashboards — format agreed at brief stage based on how your team uses the intelligence.",
      id: "delivery",
      question: "How do you deliver findings?",
    },
  ],
  heading: "Frequently Asked Questions",
};

export const RESEARCH_PAGE = {
  pageId: "service.market-research",
  pageName: "Market Research",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/market-research",
    description:
      "Enterprise B2B market research agency — data augmentation, data validation, and human market intelligence for competitive decisions. Better data. Sharper strategy. Faster market moves.",
    focusKeyphrase: "B2B market research agency",
    secondaryKeywords: [
      "market research",
      "market research companies",
      "market research agency",
      "B2B market intelligence",
    ],
    title: "B2B Market Research Agency and Intelligence Services | B2B Sales Arrow",
  },
} as const;
