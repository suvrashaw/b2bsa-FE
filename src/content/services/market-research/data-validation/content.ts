import { GLOBAL_CASE_STUDIES } from "@/content/shared";





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



export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};



export const DATA_VALIDATION_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Validate My List",
  description:
    "Do not prospect with broken data. Before launching another campaign, make sure the list is worth using.",
  title: "Ready for Clean Data?",
};



export {default as DATA_VALIDATION_FAQ} from "./faq.json";
export {default as DATA_VALIDATION_HERO} from "./hero.json";
export {default as DATA_VALIDATION_PAGE} from "./page.json";
export {default as DATA_VALIDATION_PROCESS} from "./process.json";