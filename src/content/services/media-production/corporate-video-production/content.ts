import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CORPORATEVIDEOPORTFOLIO_DATA from "./corporate-video-portfolio.json";

export const CORPORATE_VIDEO_PORTFOLIO = {
  ...CORPORATEVIDEOPORTFOLIO_DATA,
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export { default as CORPORATE_VIDEO_DELIVERABLES } from "./corporate-video-deliverables.json";
export { default as CORPORATE_VIDEO_INDUSTRIES } from "./corporate-video-industries.json";
export { default as CORPORATE_VIDEO_INTRO } from "./corporate-video-intro.json";
export { default as CORPORATE_VIDEO_PROOF_BAR } from "./corporate-video-proof-bar.json";

export { default as CORPORATE_VIDEO_FAQ } from "./faq.json";
export { default as CORPORATE_VIDEO_HERO } from "./hero.json";
export { default as CORPORATE_VIDEO_PAGE } from "./page.json";
export { default as CORPORATE_VIDEO_WHY } from "./why.json";
