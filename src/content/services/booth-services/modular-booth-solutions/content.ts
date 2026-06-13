import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as MODULAR_BOOTHS_PROOF_BAR } from "../../shared";

export const MODULAR_BOOTHS_DELIVERABLES = DATA.modularBoothsDeliverables;

export const MODULAR_BOOTHS_RANGE_SECTION = DATA.modularBoothsRangeSection;

export const MODULAR_BOOTHS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export { default as MODULAR_BOOTHS_FAQ } from "./faq.json";
export { default as MODULAR_BOOTHS_HERO } from "./hero.json";
export { default as MODULAR_BOOTHS_PAGE } from "./page.json";
export { default as MODULAR_BOOTHS_WHY } from "./why.json";
