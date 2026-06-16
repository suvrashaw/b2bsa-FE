import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";

import CONTACT_CTA_DATA from "./augmentation-cta.json";

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as DATA_AUGMENTATION_DEFINITION } from "./augmentation-definition.json";
export { default as DATA_AUGMENTATION_DELIVERABLES } from "./augmentation-deliverables.json";

export { default as DATA_AUGMENTATION_FAQ } from "./faq.json";
export { default as DATA_AUGMENTATION_HERO } from "./hero.json";
export { default as DATA_AUGMENTATION_PAGE } from "./page.json";
export { default as DATA_AUGMENTATION_PROCESS } from "./process.json";
