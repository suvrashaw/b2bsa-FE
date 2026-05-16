import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MARKET_INTEL_HERO = {
  description:
    "AI tools scrape. Humans understand. Our human-powered market intelligence delivers the strategic context, competitive insight, and buyer intelligence that automated platforms consistently miss.",
  title: "Human-Powered Market Intelligence — The Insight Automated Tools Cannot Deliver",
};

export { GLOBAL_PROOF_STATS as MARKET_INTEL_PROOF_BAR } from "../../shared";

export const MARKET_INTEL_WHY = {
  description:
    "Automated market research tools are effective at aggregating publicly available data quickly — competitor website content, keyword rankings, industry publications. What they cannot do: interpret why a competitor's pricing changed, what a buyer's stated objection actually signals about their procurement process, or whether a market trend is structural or cyclical.",
  heading: "What Automated Research Tools Cannot Do",
  reasons: [
    {
      description:
        "Automated market research tools can aggregate publicly available data quickly, but they cannot interpret why a competitor's pricing changed or what a buyer's stated objection signals about procurement.",
      id: "limits",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Automation Misses Context",
    },
    {
      description:
        "Markets are shaped by motives, timing, and nuance that require human judgment to interpret correctly. Our analysts go beyond what the data suggests and tell you what it means.",
      id: "judgment",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Human Judgment Finds Meaning",
    },
  ],
};

export const MARKET_INTEL_DELIVERABLES = {
  heading: "What We Research and Deliver",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Analysing your competitive environment — positioning, audiences, messaging, strategic gaps, and where your brand can exploit market whitespace.",
      icon: "Shield",
      id: "competitor",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Competitor Analysis and Landscape Mapping",
    },
    {
      color: "bg-brand-cyan",
      description:
        "How buyers in your category discover, evaluate, compare, and choose solutions — buying triggers, objections, decision criteria, and content preferences at each stage.",
      icon: "Activity",
      id: "buyer-behaviour",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      title: "Buyer Behaviour and Purchase Journey Research",
    },
    {
      color: "bg-brand-primary",
      description:
        "Estimating market size and structure by segment, geography, industry, and account type for prioritisation, investment planning, and board communication.",
      icon: "BarChart3",
      id: "tam",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      title: "Total Addressable Market (TAM) Analysis",
    },
    {
      color: "bg-brand-blue",
      description:
        "Demand potential, competitor presence, buyer readiness, regulatory context, pricing expectations, and adoption barriers before committing a budget to a new market.",
      icon: "Map",
      id: "market-entry",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Market Entry Feasibility Studies",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Structured interviews revealing why deals are won, lost, delayed, or displaced. Win/loss analysis is one of the highest-ROI research investments available to B2B enterprise brands.",
      icon: "MessagesSquare",
      id: "win-loss",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Win/Loss Interview Programs",
    },
    {
      color: "bg-brand-primary",
      description:
        "Industry specialists and practitioners providing validated perspective for high-stakes strategic decisions.",
      icon: "Users",
      id: "expert-panel",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Expert Panel Research",
    },
  ],
};

export const MARKET_INTEL_TIERS = {
  headers: ["Format", "Description"],
  rows: [
    {
      description:
        "Concise, leadership-ready findings with context, risks, opportunities, and recommended actions.",
      format: "Executive Strategy Briefing Decks",
    },
    {
      description: "Full-depth documentation with methodology, findings, and source notes.",
      format: "Detailed Research Reports",
    },
    {
      description: "Interactive findings presentations with real-time Q&A.",
      format: "Live Analyst Briefings",
    },
    {
      description: "Continuous tracking of competitors, market shifts, and buyer behaviour.",
      format: "Ongoing Intelligence Subscriptions",
    },
    {
      description: "Market maps, competitor comparisons, and account views.",
      format: "Custom Dashboards and Data Visualisation",
    },
  ],
  title: "Deliverable Formats",
};

export const MARKET_INTEL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MARKET_INTEL_FAQ = {
  faqs: [
    {
      answer:
        "Human-powered market intelligence combines structured research with analyst judgment to interpret competitor behaviour, buyer motivations, market shifts, and strategic opportunities that automated tools often miss.",
      id: "what-is",
      question: "What is human-powered market intelligence?",
    },
    {
      answer:
        "AI research tools aggregate information. Human-powered intelligence interprets meaning, validates assumptions, identifies nuance, and connects market facts to commercial decisions.",
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

export const MARKET_INTEL_PAGE = {
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
      "brand research",
      "AI market research",
    ],
    title: "Human-Powered B2B Market Intelligence Services | B2B Sales Arrow",
  },
} as const;
