import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const SQL_HERO = {
  description:
    "Your team does not need more names on a list. Our sales qualified lead generation programs deliver verified decision-makers with ICP fit, buying authority, qualification notes, and a recommended next action, not a badge scan CSV.",
  title: "Sales Qualified Lead Generation, Decision-Makers, Not Data",
};

export { GLOBAL_PROOF_STATS as SQL_PROOF_BAR } from "../shared";

export const SQL_SERVICES = {
  description:
    "In the enterprise world, quantity is the enemy of quality. Your sales team doesn't need more 'leads', they need more 'qualified conversations.' We specialize in human-powered prospecting that cuts through the noise of automated spam. Our specialists act as a seamless extension of your brand, engaging decision-makers at your most valuable target accounts and qualifying them against strict BANT criteria before they ever reach your sales team's calendar.",
  heading: "How We Generate Sales Qualified Leads",
  headingHighlight: "Sales Qualified Leads",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Target companies and roles by industry, size, geography, tech stack, seniority, and buying committee structure.",
      icon: "Users",
      id: "prospecting",
      image: "/images/services/sql-generation-1.avif",
      title: "ICP Definition and Firmographic Targeting",
    },
    {
      color: "bg-brand-cyan",
      description:
        "LinkedIn outbound, paid campaigns, content-led inbound, event capture, cold email simultaneously.",
      icon: "CalendarCheck",
      id: "appointment",
      image: "/images/services/sql-generation-2.avif",
      title: "Multi-Channel Demand Generation",
    },
    {
      color: "bg-brand-primary",
      description:
        "Content engagement, ad responses, website behaviour, and buying signals tracked across channels.",
      icon: "Database",
      id: "database",
      image: "/images/services/sql-generation-revised.avif",
      title: "Intent Signal Scoring",
    },
    {
      color: "bg-brand-blue",
      description: "BANT/CHAMP in live conversations, not retrospectively from contact lists.",
      icon: "Target",
      id: "icp",
      image: "/images/services/market-intelligence.avif",
      title: "Human-Verified Qualification",
    },
  ],
};

export const SQL_WHY = {
  description:
    "Generic lists create activity, not revenue. MQLs often lack the intent, context, or urgency that makes them actionable for a sales team. Cold data delivers names without conversations. The result: SDRs spend most of their time chasing the wrong people, conversion rates stay low, and leadership loses confidence in the pipeline.\n\nWe solve this by defining qualification standards with your sales team first, tracking intent signals across multiple channels, applying BANT or CHAMP qualification frameworks, and routing only prospects meeting agreed criteria, with full conversation context.",
  imageUrl: "/images/services/database-research-revised.avif",
  titleLine1: "Why Most Lead Generation",
  titleLine2: "Programs Fail Sales Teams",
};

export const SQL_PROCESS = {
  heading: "Your Sales-Ready Prospect Profile Includes",
  headingHighlight: "Sales-Ready Prospect",
  phases: [
    {
      description: "Name, direct email, LinkedIn URL, direct phone where available.",
      title: "Verified contact",
    },
    {
      description: "Size, industry, revenue range, technology stack, and account tier.",
      title: "Company profile",
    },
    {
      description: "Confirmed job title, seniority, and buying committee relevance.",
      title: "Buying role",
    },
    {
      description: "BANT/CHAMP notes on need, urgency, and authority confirmed.",
      title: "Qualification outcome",
    },
    {
      description: "Specific outreach based on profile and engagement context.",
      title: "Recommended next action",
    },
  ],
};

export const SQL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const SQL_FAQ = {
  faqs: [
    {
      answer:
        "An MQL has engaged enough with marketing content to be considered a potential prospect. A Sales Qualified Lead has been evaluated against agreed criteria with the sales team and confirmed ready for a direct conversation. SQLs convert at significantly higher rates.",
      id: "mql-vs-sql",
      question: "What is the difference between MQL and SQL?",
    },
    {
      answer:
        "LinkedIn outbound and paid campaigns: 4–6 weeks. Event-driven capture: immediately post-event. SEO-led inbound: 4–9 months.",
      id: "timeline",
      question: "How long before the first qualified leads arrive?",
    },
    {
      answer:
        "BANT or CHAMP depending on your sales motion, agreed with your sales leadership before the program begins. Qualification happens in real conversations, not retrospectively from lists.",
      id: "framework",
      question: "What qualification framework do you use?",
    },
    {
      answer:
        "Yes, LinkedIn outbound, paid campaigns, content-led inbound, cold email, and event capture running concurrently for consistent qualified lead volume.",
      id: "multi-channel",
      question: "Can you run multi-channel SQL programs simultaneously?",
    },
  ],
  heading: "Frequently Asked Questions",
  headingHighlight: "Asked Questions",
};

export const SQL_PAGE = {
  pageId: "service.sales-qualified-lead-generation",
  pageName: "Sales Qualified Lead Generation",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/sales-qualified-lead-generation",
    description:
      "Enterprise sales qualified lead generation, verified decision-makers, BANT/CHAMP qualification, intent signals, and CRM-ready prospect profiles. Leads your sales team can act on immediately.",
    focusKeyphrase: "sales qualified lead generation",
    secondaryKeywords: [
      "B2B SQL generation",
      "active prospecting B2B",
      "qualified B2B leads",
      "exhibition lead generation company",
    ],
    title: "Sales Qualified Lead Generation for Enterprise B2B | B2B Sales Arrow",
  },
} as const;
