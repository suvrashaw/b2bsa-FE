import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const LINKEDIN_ADS_HERO = {
  description:
    "LinkedIn is where enterprise buyers reveal their role, their company, and their commercial intent. Our LinkedIn Ads for B2B programs reach your exact ICP and convert professional attention into qualified meetings and pipeline.",
  title: "LinkedIn Ads for B2B — The Highest-Intent Enterprise Pipeline Channel",
};

export { GLOBAL_PROOF_STATS as LINKEDIN_ADS_PROOF_BAR } from "../../shared";

export const LINKEDIN_ADS_WHY = {
  description:
    "LinkedIn targeting gives enterprise marketers verified professional attributes — job title, company size, industry, seniority, department, geography, and named account lists — available for precise campaign targeting. CPL is typically 2–5x higher than Google Display, but lead quality — measured by ICP fit and conversion to sales opportunity — is frequently superior when targeting, creative, and post-click experience are built correctly for the B2B audience.",
  imageUrl: "/images/home/services/performance-marketing.avif",
  titleLine1: "The Most Precise",
  titleLine2: "B2B Targeting Channel",
};

export const LINKEDIN_ADS_DELIVERABLES = {
  heading: "LinkedIn Ad Formats We Specialise In",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "The highest-reach LinkedIn format for brand awareness, content promotion, and lead generation at scale in the LinkedIn feed.",
      icon: "FileText",
      id: "sponsored",
      image: "/images/home/services/media-production-1.avif",
      title: "Sponsored Content — Single Image, Carousel, Video",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Capturing prospect details within LinkedIn without requiring a landing page click — effective for webinar registrations, content downloads, and B2B lead generation where reducing friction improves conversion.",
      icon: "ClipboardList",
      id: "lead-gen",
      image: "/images/home/services/performance-marketing-1.avif",
      title: "LinkedIn Lead Gen Forms",
    },
    {
      color: "bg-brand-primary",
      description:
        "Promoting reports, playbooks, and thought leadership assets directly in the LinkedIn feed — ideal for enterprise buyers who need substance before engaging with sales.",
      icon: "File",
      id: "document",
      image: "/images/home/services/market-intelligence.avif",
      title: "Document Ads",
    },
    {
      color: "bg-brand-blue",
      description:
        "Webinars, roundtables, product launches promoted to precisely targeted professional audiences — connecting event marketing with qualified lead generation.",
      icon: "Calendar",
      id: "event",
      image: "/images/recent-events/event_other_1.avif",
      title: "Event Ads",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Direct-message campaigns for high-relevance personalised outreach tied to a specific action or offer.",
      icon: "Mail",
      id: "message",
      image: "/images/home/services/performance-marketing.avif",
      title: "Message Ads and Sponsored InMail",
    },
  ],
};

export const LINKEDIN_ADS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LINKEDIN_ADS_FAQ = {
  faqs: [
    {
      answer:
        "LinkedIn is the only paid platform that allows targeting by verified professional attributes. For enterprise B2B brands, this precision makes LinkedIn Ads uniquely effective for reaching buying committees and decision-makers.",
      id: "why-linkedin",
      question: "Why should B2B companies advertise on LinkedIn?",
    },
    {
      answer:
        "LinkedIn CPL is typically 2–5x higher than Google Search CPL. However, lead quality — ICP fit and conversion to pipeline — is frequently higher, making cost per qualified opportunity competitive for enterprise B2B.",
      id: "vs-google",
      question: "Is LinkedIn Ads more expensive than Google Ads?",
    },
    {
      answer:
        "Effective B2B programs typically require £3,000–5,000/month minimum to generate statistically meaningful data and consistent qualified leads. We recommend a starting budget based on your objectives during strategy planning.",
      id: "budget",
      question: "What budget is needed?",
    },
    {
      answer:
        "LinkedIn campaigns need 4–6 weeks for meaningful optimisation. Qualified leads typically appear within 4–8 weeks. Full programme optimisation takes 2–3 months.",
      id: "timeline",
      question: "How long does it take to see results?",
    },
    {
      answer:
        "Precise audience, a specific and valuable offer, a clear value proposition in the first line, and a landing page designed for the LinkedIn audience's level of awareness.",
      id: "performance",
      question: "What makes a LinkedIn ad perform well for B2B?",
    },
  ],
  heading: "LinkedIn Ads FAQs",
};

export const LINKEDIN_ADS_PAGE = {
  pageId: "service.linkedin-ads",
  pageName: "LinkedIn Ads for B2B",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/linkedin-ads",
    description:
      "Enterprise LinkedIn Ads for B2B — Sponsored Content, Lead Gen Forms, ABM targeting, and pipeline attribution. Reach decision-makers by title, company, and intent.",
    focusKeyphrase: "LinkedIn Ads for B2B",
    secondaryKeywords: [
      "B2B LinkedIn advertising",
      "LinkedIn lead generation ads",
      "LinkedIn Ads management agency",
      "LinkedIn ABM",
    ],
    title: "LinkedIn Ads for B2B Lead Generation and ABM | B2B Sales Arrow",
  },
} as const;
