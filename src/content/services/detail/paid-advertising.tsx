import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const PAID_ADS_HERO = {
  description:
    "As a specialist B2B PPC agency, we manage paid programs where targeting precision, message relevance, and post-click experience are all structured around one outcome: qualified pipeline for your enterprise sales team.",
  title: "B2B Paid Advertising That Generates Pipeline, Not Just Clicks",
};

export { GLOBAL_PROOF_STATS as PAID_ADS_PROOF_BAR } from "../../shared";

export const PAID_ADS_WHY = {
  description:
    "The right B2B digital marketing agency tracks what happens after the first interaction: conversion quality, lead source, SQL movement, pipeline influenced, cost per qualified opportunity, and revenue attribution. If your current marketing reports stop at click-through rate or cost per lead, you are measuring activity — not commercial performance.",
  heading: "Every Action Has a Number",
  reasons: [
    {
      description:
        "Campaigns aimed at the wrong audience produce the wrong leads at any budget level. We define who your campaigns should actually reach — by ideal customer profile, buying role, pain point, and intent signal.",
      id: "precision",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "ICP-Precise Targeting",
    },
    {
      description:
        "Qualified leads typically begin within 4–8 weeks with strong targeting, messaging, and conversion paths from day one — complementing your longer-term SEO investment.",
      id: "speed",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Speed of Paid Acquisition",
    },
  ],
};

export const PAID_ADS_DELIVERABLES = {
  heading: "Channels We Manage",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "High-intent campaigns around the terms enterprise buyers use when actively comparing vendors — structured for lead quality and cost per qualified opportunity.",
      icon: "Search",
      id: "google-search",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Google Search — PPC",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Awareness and retargeting campaigns keeping your brand visible across relevant digital environments.",
      icon: "Monitor",
      id: "display",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Google Display and Programmatic",
    },
    {
      color: "bg-brand-primary",
      description:
        "Video campaigns for awareness, education, product storytelling, and demand generation.",
      icon: "Play",
      id: "youtube",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      title: "YouTube Advertising",
    },
    {
      color: "bg-brand-blue",
      description:
        "Keeping your brand in front of target accounts and decision-makers who have already shown interest — moving prospects from first touch to deeper consideration.",
      icon: "Target",
      id: "retargeting",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200",
      title: "Retargeting and Account-Based Advertising",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Supplementary paid search for desktop-heavy B2B buyer segments where Microsoft's search share is meaningful.",
      icon: "Globe",
      id: "microsoft",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      title: "Microsoft Ads",
    },
  ],
};

export const PAID_ADS_PROCESS = {
  phases: [
    {
      description:
        "Defining the audience by role, company, industry, company size, and intent before a single pound or dollar is committed.",
      title: "ICP Targeting Strategy",
    },
    {
      description:
        "Built around buyer pain points, decision-making triggers, and commercial urgency — not generic brand messaging.",
      title: "Ad Copy and Creative",
    },
    {
      description:
        "Ensuring paid traffic has a high-quality conversion path: clear messaging, strong proof points, fast loading, and a compelling next step.",
      title: "Landing Page CRO",
    },
    {
      description:
        "Continuous adjustment based on conversion data, pipeline value, and competitive signals.",
      title: "Bid Strategy and Budget Management",
    },
    {
      description:
        "Systematic testing of headlines, copy, creative, landing pages, CTAs, and audiences to reduce guesswork.",
      title: "A/B Testing",
    },
    {
      description:
        "Connecting paid media to form submissions, qualified leads, booked meetings, and pipeline influenced.",
      title: "Full-Funnel Attribution Reporting",
    },
  ],
  title: "How We Build Paid Campaigns That Convert",
};

export const PAID_ADS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const PAID_ADS_FAQ = {
  faqs: [
    {
      answer:
        "B2B paid advertising covers paid media — search, display, social, programmatic, retargeting — managed specifically for B2B buyers: longer conversion timelines, higher deal values, and buying committee targeting.",
      id: "what-is",
      question: "What is B2B paid advertising?",
    },
    {
      answer:
        "Beyond impressions and clicks: qualified leads, booked meetings, SQL movement, pipeline influenced, cost per qualified opportunity, and estimated revenue attribution.",
      id: "reporting",
      question: "How do you report on performance?",
    },
    {
      answer:
        "Qualified leads typically begin within 4–8 weeks with strong targeting, messaging, and conversion paths from day one.",
      id: "timeline",
      question: "How long before results?",
    },
    {
      answer:
        "For meaningful data and consistent lead generation, a minimum monthly spend of £2,000–5,000 on the ad platforms is recommended, plus management. We will advise based on your specific objectives.",
      id: "budget",
      question: "What budget is recommended to start?",
    },
  ],
  heading: "Paid Advertising FAQs",
};

export const PAID_ADS_PAGE = {
  pageId: "service.paid-advertising",
  pageName: "Paid Advertising",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/paid-advertising",
    description:
      "Specialist B2B PPC agency — Google Search, Display, YouTube, programmatic, and LinkedIn Ads managed around qualified pipeline and cost per qualified opportunity. Not just clicks.",
    focusKeyphrase: "B2B paid advertising",
    secondaryKeywords: ["PPC agency", "PPC", "paid search for B2B", "digital marketing agency"],
    title: "B2B Paid Advertising and PPC Agency for Enterprise | B2B Sales Arrow",
  },
} as const;
