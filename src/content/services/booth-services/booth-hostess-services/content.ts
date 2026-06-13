import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const BOOTH_HOSTESS_PROOF_BAR = {
  heading: "About Booth Hostess Services",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_HOSTESS_INTRO = DATA.hostessIntro;

export const BOOTH_HOSTESS_DELIVERABLES = DATA.hostessDeliverables;

export const BOOTH_HOSTESS_CAPABILITIES = DATA.hostessCapabilities;

export const BOOTH_HOSTESS_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_HOSTESS_INDUSTRIES_SECTION = {
  ...DATA.hostessIndustriesSection,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const BOOTH_HOSTESS_BLOGS_SECTION = DATA.hostessBlogsSection;

export const BOOTH_HOSTESS_RELATED_SERVICES = DATA.hostessRelatedServices;

export const BOOTH_HOSTESS_CONTACT_CTA = {
  ...DATA.hostessContactCta,
  headingLines: ["Looking for Professional", "Event Hostess Services?"] as [string, string],
};

export { default as BOOTH_HOSTESS_FAQ } from "./faq.json";
export { default as BOOTH_HOSTESS_IMAGE_HERO } from "./hero.json";
export { default as BOOTH_HOSTESS_PAGE } from "./page.json";
export { default as BOOTH_HOSTESS_WHY_CHOOSE_US } from "./why-choose-us.json";
