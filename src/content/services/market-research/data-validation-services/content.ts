import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CONTACT_CTA_DATA from "./validation-cta.json";

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_VALIDATION_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as DATA_VALIDATION_FAQ } from "./faq.json";
export { default as DATA_VALIDATION_HERO } from "./hero.json";
export { default as DATA_VALIDATION_PAGE } from "./page.json";
export { default as DATA_VALIDATION_PROCESS } from "./process.json";

export { default as DATA_VALIDATION_DELIVERABLES } from "./validation-deliverables.json";
export { default as DATA_VALIDATION_SPOTLIGHT } from "./validation-spotlight.json";
