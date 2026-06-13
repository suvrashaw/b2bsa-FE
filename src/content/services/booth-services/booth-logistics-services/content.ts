import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const EVENT_LOGISTICS_PROOF_BAR = {
  heading: "About Booth Logistics Services",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_LOGISTICS_INTRO = DATA.logisticsIntro;

export const EVENT_LOGISTICS_DELIVERABLES = DATA.logisticsDeliverables;

export const EVENT_LOGISTICS_CAPABILITIES = DATA.logisticsCapabilities;

export const EVENT_LOGISTICS_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_LOGISTICS_INDUSTRIES_SECTION = {
  ...DATA.logisticsIndustriesSection,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_LOGISTICS_BLOGS_SECTION = DATA.logisticsBlogsSection;

export const EVENT_LOGISTICS_RELATED_SERVICES = DATA.logisticsRelatedServices;

export const EVENT_LOGISTICS_CONTACT_CTA = {
  ...DATA.logisticsContactCta,
  headingLines: ["Looking for Reliable", "Booth Logistics Services?"] as [string, string],
};

export { default as EVENT_LOGISTICS_FAQ } from "./faq.json";
export { default as EVENT_LOGISTICS_IMAGE_HERO } from "./hero.json";
export { default as EVENT_LOGISTICS_PAGE } from "./page.json";
export { default as EVENT_LOGISTICS_WHY_CHOOSE_US } from "./why-choose-us.json";
