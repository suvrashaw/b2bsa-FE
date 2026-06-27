import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/services";

import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACTCTA_DATA from "./contact-cta.json";
import EVENTCONTACTCTA_DATA from "./event-contact-cta.json";
import EVENTINDUSTRIESSECTION_DATA from "./event-industries-section.json";
import PROOF_BAR_DATA from "./proof-bar.json";

export { default as CORP_EVENT_BLOGS_SECTION } from "./blog.json";

export const CORP_EVENT_PROOF_BAR = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const CORP_EVENT_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

const aviationIndustry = GLOBAL_INDUSTRY_SERVICES.find((s) => s.id === "aviation");
const otherIndustries = GLOBAL_INDUSTRY_SERVICES.filter((s) => s.id !== "aviation");

export const CORP_EVENT_INDUSTRIES_SECTION = {
  ...EVENTINDUSTRIESSECTION_DATA,
  services: aviationIndustry ? [...otherIndustries, aviationIndustry] : GLOBAL_INDUSTRY_SERVICES,
};

export const CORP_EVENT_CONTACT_CTA = {
  ...EVENTCONTACTCTA_DATA,
  headingLines: CONTACTCTA_DATA.headingLines,
};

export { default as CORP_EVENT_CAPABILITIES } from "./event-capabilities.json";
export { default as CORP_EVENT_DELIVERABLES } from "./event-deliverables.json";
export { default as CORP_EVENT_INTRO } from "./event-intro.json";
export { default as CORP_EVENT_RELATED_SERVICES } from "./related-services.json";

export { default as CORP_EVENT_FAQ } from "./faq.json";
export { default as CORP_EVENT_IMAGE_HERO } from "./hero.json";
export { default as CORP_EVENT_PAGE } from "./page.json";
export { default as CORP_EVENT_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as CORP_EVENT_CLIENT_LOGOS } from "./client-logos.json";
