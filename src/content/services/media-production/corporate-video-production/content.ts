import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CORPORATEVIDEOPORTFOLIO_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact.json";
import STATS_DATA from "./stats.json";

export const CORPORATE_VIDEO_PORTFOLIO = {
  ...CORPORATEVIDEOPORTFOLIO_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const CORPORATE_VIDEO_INTRO = {
  ...STATS_DATA,
  triggerContactModal: true,
};

export const CORPORATE_VIDEO_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as CORPORATE_VIDEO_DELIVERABLES } from "./capabilities.json";
export { default as CORPORATE_VIDEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as CORPORATE_VIDEO_FAQ } from "./faq.json";
export { default as CORPORATE_VIDEO_HERO } from "./hero.json";
export { default as CORPORATE_VIDEO_INDUSTRIES } from "./industries.json";
export { default as CORPORATE_VIDEO_WHY } from "./intro.json";
export { default as CORPORATE_VIDEO_PAGE } from "./page.json";
export { default as CORPORATE_VIDEO_RELATED_SERVICES } from "./related-services.json";
export { default as CORPORATE_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
