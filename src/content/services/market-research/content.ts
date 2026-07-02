import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import RESEARCHCASESTUDIES_DATA from "./case-studies.json";
import RESEARCHPROOFBAR_DATA from "./research-proof-bar.json";

export const RESEARCH_INTRO = {
  ...RESEARCHPROOFBAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const RESEARCH_CASE_STUDIES = {
  ...RESEARCHCASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as RESEARCH_CLIENT_LOGOS } from "./client-logos.json";
export { default as RESEARCH_FAQ } from "./faq.json";
export { default as RESEARCH_HERO } from "./hero.json";
export { default as RESEARCH_PAGE } from "./page.json";
export { default as RESEARCH_PROCESS } from "./process.json";
export { default as RESEARCH_SERVICES } from "./services.json";
export { default as RESEARCH_WHY } from "./why.json";
