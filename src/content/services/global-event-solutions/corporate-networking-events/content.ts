import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

import NETWORKINGCONTACTCTA_DATA from "./networking-contact-cta.json";
import NETWORKINGINDUSTRIESSECTION_DATA from "./networking-industries-section.json";

export { default as CORP_NETWORKING_FAQ } from "./faq.json";

export const CORP_NETWORKING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const CORP_NETWORKING_INDUSTRIES_SECTION = {
  ...NETWORKINGINDUSTRIESSECTION_DATA,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const CORP_NETWORKING_CONTACT_CTA = {
  ...NETWORKINGCONTACTCTA_DATA,
};

export { default as CORP_NETWORKING_IMAGE_HERO } from "./hero.json";
export { default as CORP_NETWORKING_BLOGS_SECTION } from "./networking-blogs-section.json";
export { default as CORP_NETWORKING_CAPABILITIES } from "./networking-capabilities.json";
export { default as CORP_NETWORKING_DELIVERABLES } from "./networking-deliverables.json";

export { default as CORP_NETWORKING_INTRO } from "./networking-intro.json";
export { default as CORP_NETWORKING_RELATED_SERVICES } from "./networking-related-services.json";
export { default as CORP_NETWORKING_PAGE } from "./page.json";
export { default as CORP_NETWORKING_WHY_CHOOSE_US } from "./why-choose-us.json";
export { GLOBAL_PROOF_STATS as CORP_NETWORKING_PROOF_BAR } from "@/content/shared";
