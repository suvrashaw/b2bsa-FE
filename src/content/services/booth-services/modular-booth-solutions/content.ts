import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import MODULARBOOTHSCASESTUDIESDATA from "./case-studies.json";
import MODULARBOOTHSPROOFBARDATA from "./proof-bar.json";

export const MODULAR_BOOTHS_PROOF_BAR = {
  ...MODULARBOOTHSPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const MODULAR_BOOTHS_CASE_STUDIES = {
  ...MODULARBOOTHSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as MODULAR_BOOTHS_CONTACT_CTA } from "./contact-cta.json";

export { default as MODULAR_BOOTHS_FAQ } from "./faq.json";
export { default as MODULAR_BOOTHS_HERO } from "./hero.json";
export { default as MODULAR_BOOTHS_DELIVERABLES } from "./modular-booths-deliverables.json";
export { default as MODULAR_BOOTHS_RANGE_SECTION } from "./modular-booths-range-section.json";

export { default as MODULAR_BOOTHS_PAGE } from "./page.json";
export { default as MODULAR_BOOTHS_RELATED_SERVICES } from "./related-services.json";
export { default as MODULAR_BOOTHS_WHY } from "./why.json";
