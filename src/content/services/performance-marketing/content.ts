import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const PERF_PROOF_BAR = {
  ...DATA.proofBar,
  stats: GLOBAL_PROOF_STATS,
};

export const PERF_CASE_STUDIES = {
  ...DATA.caseStudies,
  items: GLOBAL_CASE_STUDIES,
};

export const PERF_CONTACT_CTA = {
  ...DATA.contactCta,
  ...CINEMATIC_CTA_SHARED,
  headingLines: ["Stop Guessing.", "Start Knowing."] as [string, string],
};

export { default as PERF_FAQ } from "./faq.json";
export { default as PERF_HERO } from "./hero.json";
export { default as PERF_PAGE } from "./page.json";
export { default as PERF_PROCESS } from "./process.json";
export { default as PERF_SERVICES } from "./services.json";
export { default as PERF_WHY } from "./why.json";
