import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MARKET_INTELLIGENCE_HERO = {
  description:
    "AI tools scrape. Humans understand. Our human-powered market intelligence delivers the strategic context, competitive insight, and buyer intelligence that automated platforms consistently miss.",
  title: "Human-Powered Market Intelligence — The Insight Automated Tools Cannot Deliver",
};

export const MARKET_INTELLIGENCE_SPOTLIGHT = {
  description:
    "Automated market research tools are effective at aggregating publicly available data quickly — competitor website content, keyword rankings, industry publications. What they cannot do: interpret why a competitor's pricing changed, what a buyer's stated objection actually signals about their procurement process, or whether a market trend is structural or cyclical.\n\nMarkets are shaped by motives, timing, and nuance that require human judgment to interpret correctly. Our analyst team goes beyond what the data suggests and tells you what it means — and what you should do about it.",
  imageUrl: "/images/services/data/data-2.avif",
  titleLine1: "What Automated Research",
  titleLine2: "Tools Cannot Do",
};

export const MARKET_INTELLIGENCE_DELIVERABLES = {
  heading: "What We Research and Deliver",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Analysing your competitive environment — positioning, audiences, messaging, strategic gaps, and where your brand can exploit market whitespace.",
      icon: "Map",
      id: "competitor-analysis",
      image: "/images/services/data/data-1.avif",
      title: "Competitor Analysis and Landscape Mapping",
    },
    {
      color: "bg-brand-cyan",
      description:
        "How buyers in your category discover, evaluate, compare, and choose solutions — buying triggers, objections, decision criteria, and content preferences at each stage.",
      icon: "UserSearch",
      id: "buyer-behaviour",
      image: "/images/services/data/data-2.avif",
      title: "Buyer Behaviour and Purchase Journey Research",
    },
    {
      color: "bg-brand-primary",
      description:
        "Estimating market size and structure by segment, geography, industry, and account type for prioritisation, investment planning, and board communication.",
      icon: "PieChart",
      id: "tam-analysis",
      image: "/images/services/data/data-1.avif",
      title: "Total Addressable Market (TAM) Analysis",
    },
    {
      color: "bg-brand-blue",
      description:
        "Demand potential, competitor presence, buyer readiness, regulatory context, pricing expectations, and adoption barriers before committing a budget to a new market.",
      icon: "Globe2",
      id: "market-entry",
      image: "/images/services/data/data-2.avif",
      title: "Market Entry Feasibility Studies",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Structured interviews revealing why deals are won, lost, delayed, or displaced. Win/loss analysis is one of the highest-ROI research investments available to B2B enterprise brands.",
      icon: "Trophy",
      id: "win-loss",
      image: "/images/services/data/data-1.avif",
      title: "Win/Loss Interview Programs",
    },
    {
      color: "bg-brand-primary",
      description:
        "Industry specialists and practitioners providing validated perspective for high-stakes strategic decisions.",
      icon: "Users",
      id: "expert-panel",
      image: "/images/services/data/data-2.avif",
      title: "Expert Panel Research",
    },
  ],
};

export const MARKET_INTELLIGENCE_CARDS = {
  heading: "Deliverable Formats",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Concise, leadership-ready findings with context, risks, opportunities, and recommended actions.",
      icon: "Presentation",
      id: "exec-briefing",
      image: "/images/services/data/data-1.avif",
      title: "Executive Strategy Briefing Decks",
    },
    {
      color: "bg-brand-cyan",
      description: "Full-depth documentation with methodology, findings, and source notes.",
      icon: "FileText",
      id: "detailed-reports",
      image: "/images/services/data/data-2.avif",
      title: "Detailed Research Reports",
    },
    {
      color: "bg-brand-primary",
      description: "Interactive findings presentations with real-time Q&A.",
      icon: "Video",
      id: "live-briefings",
      image: "/images/services/data/data-1.avif",
      title: "Live Analyst Briefings",
    },
    {
      color: "bg-brand-blue",
      description: "Continuous tracking of competitors, market shifts, and buyer behaviour.",
      icon: "RefreshCcw",
      id: "ongoing-subscriptions",
      image: "/images/services/data/data-2.avif",
      title: "Ongoing Intelligence Subscriptions",
    },
    {
      color: "bg-brand-cyan",
      description: "Market maps, competitor comparisons, and account views.",
      icon: "LayoutDashboard",
      id: "custom-dashboards",
      image: "/images/services/data/data-1.avif",
      title: "Custom Dashboards and Data Visualisation",
    },
  ],
};

export const MARKET_INTELLIGENCE_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MARKET_INTELLIGENCE_FAQ = {
  faqs: [
    {
      answer:
        "Human-powered market intelligence combines structured research methodology, expert analyst interpretation, and primary interview programs to produce strategic insights that reflect the complexity and nuance of real markets — going beyond what automated data aggregation tools can deliver.",
      id: "what-is-it",
      question: "What is human-powered market intelligence?",
    },
    {
      answer:
        "AI tools aggregate and summarise publicly available data quickly — useful for initial landscape mapping. Human intelligence conducts primary interviews, interprets strategic intent, assesses ambiguous signals, and provides context that purely data-driven tools cannot. For high-stakes commercial decisions, human intelligence is the more reliable input.",
      id: "ai-difference",
      question: "How is this different from an AI research tool?",
    },
    {
      answer:
        "Competitor analysis: 2–3 weeks. Market entry feasibility: 4–8 weeks. Win/loss interview program: 3–6 weeks. Ongoing subscriptions: continuous delivery.",
      id: "timeline",
      question: "How long does a project take?",
    },
  ],
  heading: "Frequently Asked Questions",
};

export const MARKET_INTELLIGENCE_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Commission a Custom Research Report",
  description:
    "The most valuable strategic meetings start with the right intelligence. Human-powered market intelligence is the advantage that makes decisions faster and more grounded.",
  title: "Get The Right Intelligence",
};

export const MARKET_INTELLIGENCE_PAGE = {
  pageId: "service.market-intelligence",
  pageName: "Human-Powered Market Intelligence",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/market-intelligence",
    description:
      "Human-powered market intelligence for B2B — competitor analysis, buyer behaviour research, TAM analysis, win/loss interviews, expert panels, and strategic reports. The insight automated tools cannot deliver.",
    focusKeyphrase: "human-powered market intelligence",
    secondaryKeywords: [
      "B2B market intelligence services",
      "competitive intelligence B2B",
      "competitor analysis",
      "buyer behaviour research",
      "win loss analysis",
    ],
    title: "Human-Powered B2B Market Intelligence Services | B2B Sales Arrow",
  },
} as const;
