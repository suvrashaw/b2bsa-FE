import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const SQL_PROOF_BAR = {
  ...DATA.proofBar,
  stats: GLOBAL_PROOF_STATS,
};

export const SQL_CASE_STUDIES = {
  ...DATA.caseStudies,
  items: GLOBAL_CASE_STUDIES,
};

export const SQL_CONTACT_CTA = {
  ...DATA.contactCta,
  ...CINEMATIC_CTA_SHARED,
  headingLines: ["Give Your Team", "Leads That Are Ready."] as [string, string],
};

export { default as SQL_FAQ } from "./faq.json";
export { default as SQL_HERO } from "./hero.json";
export { default as SQL_PAGE } from "./page.json";
export { default as SQL_PROCESS } from "./process.json";
export { default as SQL_SERVICES } from "./services.json";
export { default as SQL_WHY } from "./why.json";
