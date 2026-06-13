import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";

export const DATA_VALIDATION_DELIVERABLES = DATA.validationDeliverables;

export const DATA_VALIDATION_SPOTLIGHT = DATA.validationSpotlight;

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_VALIDATION_CTA = DATA.validationCta;

export { default as DATA_VALIDATION_FAQ } from "./faq.json";
export { default as DATA_VALIDATION_HERO } from "./hero.json";
export { default as DATA_VALIDATION_PAGE } from "./page.json";
export { default as DATA_VALIDATION_PROCESS } from "./process.json";
