import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CONTACT_CTA_DATA from "./contact-cta.json";
import CORPORATEVIDEOPORTFOLIO_DATA from "./corporate-video-portfolio.json";

export const CORPORATE_VIDEO_PORTFOLIO = {
  ...CORPORATEVIDEOPORTFOLIO_DATA,
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const CORPORATE_VIDEO_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as CORPORATE_VIDEO_DELIVERABLES } from "./corporate-video-deliverables.json";
export { default as CORPORATE_VIDEO_INDUSTRIES } from "./corporate-video-industries.json";
export { default as CORPORATE_VIDEO_PROOF_BAR } from "./corporate-video-proof-bar.json";
export { default as CORPORATE_VIDEO_WHY_CHOOSE_US } from "./corporate-video-why-choose-us.json";
export { default as CORPORATE_VIDEO_FAQ } from "./faq.json";
export { default as CORPORATE_VIDEO_HERO } from "./hero.json";
export { default as CORPORATE_VIDEO_PAGE } from "./page.json";
export { default as CORPORATE_VIDEO_RELATED_SERVICES } from "./related-services.json";
export { default as CORPORATE_VIDEO_WHY } from "./why.json";
