import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import CASESTUDIES_DATA from "./case-studies.json";
import CONTACTCTA_DATA from "./contact-cta.json";
import PROOFBAR_DATA from "./proof-bar.json";

export const BS_PROOF_BAR = {
  ...PROOFBAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BS_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BS_CONTACT_CTA = {
  ...CONTACTCTA_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as BS_FAQ } from "./faq.json";
export { default as BS_HERO } from "./hero.json";
export { default as BS_PAGE } from "./page.json";
export { default as BS_PROCESS } from "./process.json";
export { default as BS_SERVICES } from "./services.json";
export { default as BS_WHY } from "./why.json";
