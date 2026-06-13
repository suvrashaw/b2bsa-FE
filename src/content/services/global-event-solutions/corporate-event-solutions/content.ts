import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/shared";

import CASE_STUDIES_DATA from "./case-studies.json";
import EVENTCONTACTCTA_DATA from "./event-contact-cta.json";
import EVENTINDUSTRIESSECTION_DATA from "./event-industries-section.json";
import PROOF_BAR_DATA from "./proof-bar.json";

export { default as CORP_EVENT_BLOGS_SECTION } from "./event-blogs-section.json";

export const CORP_EVENT_PROOF_BAR = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const CORP_EVENT_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const CORP_EVENT_INDUSTRIES_SECTION = {
  ...EVENTINDUSTRIESSECTION_DATA,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const CORP_EVENT_CONTACT_CTA = {
  ...EVENTCONTACTCTA_DATA,
};

export { default as CORP_EVENT_CAPABILITIES } from "./event-capabilities.json";
export { default as CORP_EVENT_DELIVERABLES } from "./event-deliverables.json";
export { default as CORP_EVENT_INTRO } from "./event-intro.json";
export { default as CORP_EVENT_RELATED_SERVICES } from "./event-related-services.json";

export { default as CORP_EVENT_FAQ } from "./faq.json";
export { default as CORP_EVENT_IMAGE_HERO } from "./hero.json";
export { default as CORP_EVENT_PAGE } from "./page.json";
export { default as CORP_EVENT_WHY_CHOOSE_US } from "./why-choose-us.json";
