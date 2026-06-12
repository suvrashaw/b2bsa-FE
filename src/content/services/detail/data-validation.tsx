import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const DATA_VALIDATION_HERO = {
  description:
    "Invalid emails, outdated contacts, and duplicate records don't just create inefficiency — they damage sender reputation and cost real SDR time. Our data validation services make your database a reliable commercial asset.",
  title: "B2B Data Validation Services — Clean Data Your Sales Team Can Actually Trust",
};

export const DATA_VALIDATION_DELIVERABLES = {
  heading: "Our Data Validation Services Cover",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Syntax check, domain validity, MX record confirmation, and deliverability indicators — reducing bounce rates and protecting sender reputation.",
      icon: "MailCheck",
      id: "email-verification",
      image: "/images/services/data/data-1.avif",
      title: "Email Address Verification",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Format, country code, carrier data, and active-line indicators — eliminating wasted calling time on disconnected or reassigned numbers.",
      icon: "PhoneCall",
      id: "phone-validation",
      image: "/images/services/data/data-2.avif",
      title: "Phone Number Validation",
    },
    {
      color: "bg-brand-primary",
      description:
        "Confirming company name, website domain, location, and business details are accurate and current.",
      icon: "Building",
      id: "company-verification",
      image: "/images/services/data/data-1.avif",
      title: "Company and Domain Verification",
    },
    {
      color: "bg-brand-blue",
      description:
        "Verifying whether contacts still hold their listed role and whether buying committee relevance is accurate.",
      icon: "UserCheck",
      id: "job-title",
      image: "/images/services/data/data-2.avif",
      title: "Job Title and Role Confirmation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Identifying duplicates across contacts, accounts, emails, and domains — creating a cleaner CRM view and reducing repeated outreach.",
      icon: "CopyMinus",
      id: "duplicate-detection",
      image: "/images/services/data/data-1.avif",
      title: "Duplicate Detection and Merge",
    },
    {
      color: "bg-brand-primary",
      description:
        "Flagging contacts who have left the company, changed roles, or should no longer be in active outreach lists.",
      icon: "UserMinus",
      id: "departed-contact",
      image: "/images/services/data/data-2.avif",
      title: "Departed Contact Removal",
    },
  ],
};

export const DATA_VALIDATION_SPOTLIGHT = {
  description:
    "Gartner estimates poor data quality costs organisations $12.9M per year. In B2B sales: SDRs waste 25–30% of their time on wrong contacts and outdated information, email campaigns generate high bounce rates that damage domain sender score over time, attribution models produce inaccurate ROI data, and CRM forecasting cannot be trusted. Data validation restores confidence — and with it, the commercial effectiveness of every outreach motion your team runs.",
  imageUrl: "/images/services/data/data-1.avif",
  titleLine1: "Why Data Validation",
  titleLine2: "Cannot Be an Afterthought",
};

export const DATA_VALIDATION_PROCESS = {
  phases: [
    {
      description:
        "reviewing your CRM export, contact list, or outreach dataset to understand structure, issues, and business purpose.",
      title: "Data Intake",
    },
    {
      description:
        "format checks, syntax validation, duplicate flagging, and missing field identification.",
      title: "Automated Layer",
    },
    {
      description:
        "manual review of contact status, job title, company association, and role relevance for critical records.",
      title: "Human Verification Layer",
    },
    {
      description:
        "clean records, invalid records, duplicates, missing fields, and recommended next actions.",
      title: "Validation Report",
    },
    {
      description: "structured, CRM-ready file in your required format.",
      title: "Clean Data Delivery",
    },
  ],
  title: "Our Validation Process",
};

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_VALIDATION_FAQ = {
  faqs: [
    {
      answer:
        "B2B data degrades at approximately 25–30% per year. Validate every 6 months for active outreach databases. Validate immediately before major campaign launches.",
      id: "how-often",
      question: "How often should we validate our database?",
    },
    {
      answer:
        "We flag problematic records with clear recommendations. Your team decides whether to delete, archive, or re-verify.",
      id: "delete",
      question: "Will you delete contacts or just flag them?",
    },
    {
      answer:
        "Validation checks and corrects accuracy of existing data. Augmentation adds new information to existing records. Complementary — validate first, then augment.",
      id: "difference",
      question: "What is the difference between validation and augmentation?",
    },
  ],
  heading: "Frequently Asked Questions",
};

export const DATA_VALIDATION_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Validate My List",
  description:
    "Do not prospect with broken data. Before launching another campaign, make sure the list is worth using.",
  title: "Ready for Clean Data?",
};

export const DATA_VALIDATION_PAGE = {
  pageId: "service.data-validation",
  pageName: "Data Validation Services",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/data-validation",
    description:
      "B2B data validation services — email verification, phone validation, job title confirmation, duplicate detection, and CRM data cleansing. Clean data your sales team can trust.",
    focusKeyphrase: "data validation services",
    secondaryKeywords: [
      "email list validation",
      "CRM data cleansing",
      "data cleansing service",
      "B2B email verification",
      "phone number validation",
    ],
    title: "B2B Data Validation and CRM Data Cleansing Services | B2B Sales Arrow",
  },
} as const;
