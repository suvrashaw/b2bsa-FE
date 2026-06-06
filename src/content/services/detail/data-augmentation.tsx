import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const DATA_AUGMENTATION_HERO = {
  description:
    "Blank job titles, missing emails, outdated company names — incomplete data creates misdirected outreach and wasted SDR time. Our data augmentation services turn what your CRM has into what your sales team actually needs.",
  title: "B2B Data Augmentation Services — Transform Incomplete CRM Data Into Sales Intelligence",
};

export { GLOBAL_PROOF_STATS as DATA_AUGMENTATION_PROOF_BAR } from "../../shared";

export const DATA_AUGMENTATION_DELIVERABLES = {
  heading: "Data Fields We Enrich",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Verified job title, direct business email, LinkedIn profile URL, direct phone number where available, department, seniority level, and buying committee relevance.",
      icon: "UserPlus",
      id: "contact-level",
      image: "/images/home/services/database-research-1.avif",
      title: "Contact-Level Enrichment",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Revenue range, employee count, industry classification, headquarters location, technology stack, funding signals, expansion indicators, and hiring activity.",
      icon: "Building",
      id: "account-level",
      image: "/images/home/services/database-research-revised.avif",
      title: "Account-Level Enrichment",
    },
    {
      color: "bg-brand-primary",
      description:
        "Content engagement signals, solution research activity, competitor comparison behaviour, event participation data, and category interest indicators.",
      icon: "Activity",
      id: "intent",
      image: "/images/home/services/market-intelligence.avif",
      title: "Intent Data",
    },
    {
      color: "bg-brand-blue",
      description:
        "Any additional fields required by your CRM structure, qualification model, ABM strategy, or territory planning — enriched to match how your team actually sells.",
      icon: "Settings",
      id: "custom-fields",
      image: "/images/home/services/sql-generation-1.avif",
      title: "Custom Fields",
    },
  ],
};

export const DATA_AUGMENTATION_PROCESS = {
  phases: [
    {
      description: "You share your CRM export, prospect list, or target account database.",
      title: "Data Upload",
    },
    {
      description:
        "We identify missing, outdated, or low-value fields and map enrichment requirements.",
      title: "Gap Analysis",
    },
    {
      description:
        "Our research team enriches using trusted sources plus manual verification for key fields.",
      title: "Human-Verified Research",
    },
    {
      description: "Format correction, field verification, and consistency review throughout.",
      title: "QA and Deduplication",
    },
    {
      description:
        "Structured, CRM-ready file in your required format and naming conventions within the agreed timeline.",
      title: "Clean Delivery",
    },
  ],
  title: "How Data Augmentation Works",
};

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_FAQ = {
  faqs: [
    {
      answer:
        "We target 90%+ accuracy on key fields including job title, direct email, and company association. Email deliverability post-enrichment typically reaches 85–95% for business addresses.",
      id: "accuracy",
      question: "How accurate is enriched data?",
    },
    {
      answer:
        "500–2,000 records: 5–10 business days. 10,000+ records scoped individually after reviewing your data file.",
      id: "timeline",
      question: "How long does a project take?",
    },
    {
      answer:
        "Augmentation adds new information to existing records. Validation checks and corrects accuracy of what already exists. The two are complementary — validate first to clean, then augment to complete.",
      id: "augmentation-vs-validation",
      question: "What is the difference between augmentation and validation?",
    },
  ],
  heading: "Frequently Asked Questions",
};

export const DATA_AUGMENTATION_PAGE = {
  pageId: "service.data-augmentation",
  pageName: "Data Augmentation",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/data-augmentation",
    description:
      "B2B data augmentation services — verified firmographic, technographic, contact, and intent data enrichment. Transform your CRM from an incomplete database into a precision sales intelligence asset.",
    focusKeyphrase: "data augmentation services",
    secondaryKeywords: [
      "CRM data enrichment",
      "contact data enrichment",
      "firmographic data enrichment",
      "data validation services",
    ],
    title: "B2B Data Augmentation Services and CRM Enrichment | B2B Sales Arrow",
  },
} as const;
