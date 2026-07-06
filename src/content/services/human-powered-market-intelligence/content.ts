import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CONTACT_CTA_DATA from "./contact.json";

export const MARKET_INTELLIGENCE_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MARKET_INTELLIGENCE_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as MARKET_INTELLIGENCE_CLIENT_LOGOS } from "./client-logos.json";
export { default as MARKET_INTELLIGENCE_FAQ } from "./faq.json";
export { default as MARKET_INTELLIGENCE_HERO } from "./hero.json";

export { default as MARKET_INTELLIGENCE_INTRO } from "./intro.json";
export { default as MARKET_INTELLIGENCE_PAGE } from "./page.json";
export { default as MARKET_INTELLIGENCE_CARDS } from "./secondary-services.json";
export { default as MARKET_INTELLIGENCE_DELIVERABLES } from "./services.json";
