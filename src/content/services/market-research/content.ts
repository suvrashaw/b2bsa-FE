import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const RESEARCH_PROOF_BAR = {
  ...DATA.researchProofBar,
  stats: GLOBAL_PROOF_STATS,
};

export const RESEARCH_CASE_STUDIES = {
  ...DATA.researchCaseStudies,
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_CONTACT_CTA = {
  ...DATA.researchContactCta,
  ...CINEMATIC_CTA_SHARED,
  headingLines: ["Own Your Competitive", "Intelligence Advantage."] as [string, string],
};

export { default as RESEARCH_FAQ } from "./faq.json";
export { default as RESEARCH_HERO } from "./hero.json";
export { default as RESEARCH_PAGE } from "./page.json";
export { default as RESEARCH_PROCESS } from "./process.json";
export { default as RESEARCH_SERVICES } from "./services.json";
export { default as RESEARCH_WHY } from "./why.json";
