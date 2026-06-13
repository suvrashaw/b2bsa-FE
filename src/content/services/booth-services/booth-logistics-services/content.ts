import {
  GLOBAL_CASE_STUDIES,
  GLOBAL_INDUSTRY_SERVICES,
  GLOBAL_PROOF_STATS,
} from "@/content/shared";

import EVENTLOGISTICSCASESTUDIESDATA from "./case-studies.json";
import LOGISTICSCONTACTCTA_DATA from "./logistics-contact-cta.json";
import LOGISTICSINDUSTRIESSECTION_DATA from "./logistics-industries-section.json";
import EVENTLOGISTICSPROOFBARDATA from "./proof-bar.json";

export const EVENT_LOGISTICS_PROOF_BAR = {
  ...EVENTLOGISTICSPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_LOGISTICS_CASE_STUDIES = {
  ...EVENTLOGISTICSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_LOGISTICS_INDUSTRIES_SECTION = {
  ...LOGISTICSINDUSTRIESSECTION_DATA,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_LOGISTICS_CONTACT_CTA = {
  ...LOGISTICSCONTACTCTA_DATA,
};

export { default as EVENT_LOGISTICS_FAQ } from "./faq.json";
export { default as EVENT_LOGISTICS_IMAGE_HERO } from "./hero.json";
export { default as EVENT_LOGISTICS_BLOGS_SECTION } from "./logistics-blogs-section.json";
export { default as EVENT_LOGISTICS_CAPABILITIES } from "./logistics-capabilities.json";

export { default as EVENT_LOGISTICS_DELIVERABLES } from "./logistics-deliverables.json";
export { default as EVENT_LOGISTICS_INTRO } from "./logistics-intro.json";
export { default as EVENT_LOGISTICS_RELATED_SERVICES } from "./logistics-related-services.json";
export { default as EVENT_LOGISTICS_PAGE } from "./page.json";
export { default as EVENT_LOGISTICS_WHY_CHOOSE_US } from "./why-choose-us.json";
