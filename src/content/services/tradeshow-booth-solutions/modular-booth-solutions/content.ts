import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import MODULARBOOTHSCASESTUDIESDATA from "./case-studies.json";
import MODULARBOOTHSPROOFBARDATA from "./intro.json";

export const MODULAR_BOOTHS_INTRO = {
  ...MODULARBOOTHSPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const MODULAR_BOOTHS_CASE_STUDIES = {
  ...MODULARBOOTHSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as MODULAR_BOOTHS_CLIENT_LOGOS } from "./client-logos.json";

export { default as MODULAR_BOOTHS_CONTACT_CTA } from "./contact.json";
export { default as MODULAR_BOOTHS_FAQ } from "./faq.json";
export { default as MODULAR_BOOTHS_HERO } from "./hero.json";
export { default as MODULAR_BOOTHS_DELIVERABLES } from "./modular-booths-deliverables.json";

export { default as MODULAR_BOOTHS_RANGE_SECTION } from "./modular-booths-range-section.json";
export { default as MODULAR_BOOTHS_PAGE } from "./page.json";
export { default as MODULAR_BOOTHS_WHY } from "./why.json";
