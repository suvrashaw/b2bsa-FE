import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import HUB_CASE_STUDIES_DATA from "./case-studies.json";
import HUB_CONTACT_DATA from "./contact-cta.json";
import HUB_INTRO_DATA from "./intro.json";

export const HUB_INTRO = {
  ...HUB_INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const HUB_CASE_STUDIES = {
  ...HUB_CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const HUB_CONTACT_CTA = {
  ...HUB_CONTACT_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as HUB_CLIENT_LOGOS } from "./client-logos.json";
export { default as HUB_FAQ } from "./faq.json";
export { default as HUB_HERO } from "./hero.json";
export { default as HUB_PAGE } from "./page.json";
export { default as HUB_SERVICES } from "./services.json";
export { default as HUB_WHY } from "./why-spotlight.json";
