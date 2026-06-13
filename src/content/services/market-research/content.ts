import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";

import RESEARCHCASESTUDIES_DATA from "./research-case-studies.json";
import RESEARCHCONTACTCTA_DATA from "./research-contact-cta.json";
import RESEARCHPROOFBAR_DATA from "./research-proof-bar.json";

export const RESEARCH_PROOF_BAR = {
  ...RESEARCHPROOFBAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const RESEARCH_CASE_STUDIES = {
  ...RESEARCHCASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_CONTACT_CTA = {
  ...RESEARCHCONTACTCTA_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as RESEARCH_FAQ } from "./faq.json";
export { default as RESEARCH_HERO } from "./hero.json";
export { default as RESEARCH_PAGE } from "./page.json";
export { default as RESEARCH_PROCESS } from "./process.json";
export { default as RESEARCH_SERVICES } from "./services.json";
export { default as RESEARCH_WHY } from "./why.json";
