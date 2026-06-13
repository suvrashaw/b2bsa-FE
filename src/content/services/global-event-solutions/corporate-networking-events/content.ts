import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as CORP_NETWORKING_PROOF_BAR } from "../../shared";

export const CORP_NETWORKING_INTRO = DATA.networkingIntro;

export const CORP_NETWORKING_DELIVERABLES = DATA.networkingDeliverables;

export const CORP_NETWORKING_CAPABILITIES = DATA.networkingCapabilities;

export const CORP_NETWORKING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const CORP_NETWORKING_INDUSTRIES_SECTION = {
  ...DATA.networkingIndustriesSection,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const CORP_NETWORKING_BLOGS_SECTION = DATA.networkingBlogsSection;

export const CORP_NETWORKING_RELATED_SERVICES = DATA.networkingRelatedServices;

export const CORP_NETWORKING_CONTACT_CTA = {
  ...DATA.networkingContactCta,
  headingLines: ["Looking to Organize a Professional", "Networking Event?"] as [string, string],
};

export { default as CORP_NETWORKING_FAQ } from "./faq.json";
export { default as CORP_NETWORKING_IMAGE_HERO } from "./hero.json";
export { default as CORP_NETWORKING_PAGE } from "./page.json";
export { default as CORP_NETWORKING_WHY_CHOOSE_US } from "./why-choose-us.json";
