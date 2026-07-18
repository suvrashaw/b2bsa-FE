import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CASESTUDIES_DATA from "./case-studies.json";
import CONTACTCTA_DATA from "./contact-cta.json";
import PROOFBAR_DATA from "./intro.json";

export const SQL_INTRO = {
  ...PROOFBAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const SQL_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const SQL_CONTACT_CTA = {
  ...CONTACTCTA_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as SQL_CLIENT_LOGOS } from "./client-logos.json";
export { default as SQL_FAQ } from "./faq.json";
export { default as SQL_HERO } from "./hero.json";
export { default as SQL_PAGE } from "./page.json";
export { default as SQL_PROCESS } from "./process.json";
export { default as SQL_SERVICES } from "./services.json";
export { default as SQL_WHY } from "./why-spotlight.json";
