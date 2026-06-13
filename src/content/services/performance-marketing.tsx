import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

export const PERF_HERO = {
  description:
    "Clicks are not the goal. Pipeline is. As a specialist B2B digital marketing agency, we manage performance marketing programs where every campaign decision is evaluated against one standard: does it move a qualified buyer measurably closer to a sales conversation?",
  primaryCta: { href: "/contact", label: "Request a Performance Marketing Audit" },
  secondaryCta: { href: "/contact", label: "Book a Free Consultation" },
  title: "B2B Performance Marketing Built to Fill Enterprise Pipeline",
};

export const PERF_PROOF_BAR = {
  heading: "About Performance Marketing",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const PERF_SERVICES = {
  heading: "Our Performance Marketing Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Organic visibility built through technical SEO, content architecture, and authority building that compounds over time.",
      href: "/services/seo-services",
      icon: "Search",
      id: "seo",
      image: "/images/services/performance-marketing.avif",
      title: "B2B SEO Services",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Google Search, Display, YouTube, programmatic, retargeting, and Microsoft Ads managed around lead quality.",
      href: "/services/paid-advertising",
      icon: "Zap",
      id: "paid",
      image: "/images/services/performance-marketing-1.avif",
      title: "Paid Advertising",
    },
  ],
};

export const PERF_WHY = {
  description:
    "The right B2B digital marketing agency tracks what happens after the first interaction: conversion quality, lead source, SQL movement, pipeline influenced, cost per qualified opportunity, and revenue attribution. If your current marketing reports stop at click-through rate or cost per lead, you are measuring activity, not commercial performance.",
  imageUrl: "/images/home/why-choose-us/strategic_creativity.avif",
  titleLine1: "Every Action",
  titleLine2: "Has a Number",
};

export const PERF_PROCESS = {
  heading: "How We Build Your B2B Marketing Engine",
  phases: [
    {
      description:
        "We define who your campaigns should actually reach, by ideal customer profile, buying role, pain point, intent signal, and deal-stage context. Campaigns aimed at the wrong audience produce the wrong leads at any budget level.",
      title: "Audience Intelligence and ICP Definition",
    },
    {
      description:
        "Not every channel deserves equal budget. We evaluate search intent, audience behaviour, deal value, competition, and conversion potential before recommending where spend should go.",
      title: "Channel Selection and Budget Allocation",
    },
    {
      description:
        "Campaigns structured around buyer intent, offer clarity, funnel stage, and commercial objectives, with testing frameworks built in from launch.",
      title: "Campaign Architecture and Messaging",
    },
    {
      description:
        "Traffic only creates value when it converts. We improve landing pages, forms, CTAs, messaging, page speed, and trust signals so more qualified visitors become leads.",
      title: "Conversion Rate Optimisation",
    },
    {
      description:
        "Connecting campaign activity to qualified leads, SQL movement, pipeline influenced, and revenue outcomes, not platform dashboards.",
      title: "Attribution and Revenue Reporting",
    },
  ],
};

export const PERF_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};

export const PERF_FAQ = {
  faqs: [
    {
      answer:
        "B2B performance marketing optimises every campaign for measurable revenue outcomes, qualified leads, pipeline influence, and closed revenue, not vanity metrics like impressions or engagement.",
      id: "what-is",
      question: "What is B2B performance marketing?",
    },
    {
      answer:
        "B2B deals with longer sales cycles (3–18 months), buying committees of 3–7 decision-makers, higher deal values, and complex qualification requirements. B2C tactics rarely translate effectively.",
      id: "b2b-vs-b2c",
      question: "How is B2B marketing different from B2C?",
    },
    {
      answer:
        "Paid channels: 4–8 weeks. SEO: 4–9 months for meaningful organic pipeline. A combined full-funnel program shows compounding returns after 6–12 months.",
      id: "timeline",
      question: "How long before we see results?",
    },
    {
      answer:
        "Technology, SaaS, financial services, healthcare, energy, telecom, and professional services, all with enterprise buyer focus.",
      id: "industries",
      question: "Do you work with specific industries?",
    },
  ],
  heading: "Performance Marketing FAQs",
};

export const PERF_PAGE = {
  pageId: "service.performance-marketing",
  pageName: "Performance Marketing",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/performance-marketing",
    description:
      "Specialist B2B digital marketing agency, SEO, paid advertising, and LinkedIn Ads managed around qualified pipeline and revenue attribution. Every campaign decision tracked to commercial outcomes.",
    focusKeyphrase: "B2B digital marketing agency",
    secondaryKeywords: [
      "digital marketing agency",
      "performance marketing company",
      "digital marketing services",
      "pipeline marketing",
    ],
    title: "B2B Performance Marketing Built to Fill Enterprise Pipeline | B2B Sales Arrow",
  },
} as const;

export const PERF_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Audit Your Pipeline",
  description:
    "Stop guessing. Start knowing. A performance marketing audit reveals where spend is leaking and where pipeline can improve.",
  headingLines: ["Stop Guessing.", "Start Knowing."] as [string, string],
  primaryCta: { href: "/contact", label: "Request a Free Performance Marketing Audit" },
};
