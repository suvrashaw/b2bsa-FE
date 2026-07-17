import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import RESEARCHCASESTUDIES_DATA from "./case-studies.json";
import CONTACTCTA_DATA from "./contact.json";
import RESEARCH_INTRO_DATA from "./intro.json";

export const RESEARCH_INTRO = {
  ...RESEARCH_INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const RESEARCH_CASE_STUDIES = {
  ...RESEARCHCASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_CONTACT_CTA = {
  ...CONTACTCTA_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as RESEARCH_CLIENT_LOGOS } from "./client-logos.json";
export { default as RESEARCH_FAQ } from "./faq.json";
export { default as RESEARCH_HERO } from "./hero.json";
export { default as RESEARCH_PAGE } from "./page.json";
export { default as RESEARCH_PROCESS } from "./process.json";
export { default as RESEARCH_SERVICES } from "./services.json";
export { default as RESEARCH_WHY } from "./why-spotlight.json";
