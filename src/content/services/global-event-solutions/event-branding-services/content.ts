import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as EVENT_BRANDING_PROOF_BAR } from "../../shared";

export const EVENT_BRANDING_INTRO = DATA.brandingIntro;

export const EVENT_BRANDING_DELIVERABLES = DATA.brandingDeliverables;

export const EVENT_BRANDING_CAPABILITIES = DATA.brandingCapabilities;

export const EVENT_BRANDING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_BRANDING_INDUSTRIES_SECTION = {
  ...DATA.brandingIndustriesSection,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_BRANDING_BLOGS_SECTION = DATA.brandingBlogsSection;

export const EVENT_BRANDING_RELATED_SERVICES = DATA.brandingRelatedServices;

export const EVENT_BRANDING_CONTACT_CTA = {
  ...DATA.brandingContactCta,
  headingLines: ["Looking for Professional", "Event Branding Services?"] as [string, string],
};

export { default as EVENT_BRANDING_FAQ } from "./faq.json";
export { default as EVENT_BRANDING_IMAGE_HERO } from "./hero.json";
export { default as EVENT_BRANDING_PAGE } from "./page.json";
export { default as EVENT_BRANDING_WHY_CHOOSE_US } from "./why-choose-us.json";
