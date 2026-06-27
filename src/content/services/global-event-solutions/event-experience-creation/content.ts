import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/services";

import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import EXPERIENCEINDUSTRIESSECTION_DATA from "./experience-industries-section.json";
import PROOF_BAR_DATA from "./intro.json";

export { default as EVENT_EXPERIENCE_BLOGS_SECTION } from "./blog.json";

export const EVENT_EXPERIENCE_INTRO = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_EXPERIENCE_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_EXPERIENCE_INDUSTRIES_SECTION = {
  ...EXPERIENCEINDUSTRIESSECTION_DATA,
  services: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_EXPERIENCE_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as EVENT_EXPERIENCE_CAPABILITIES } from "./capabilities.json";
export { default as EVENT_EXPERIENCE_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_EXPERIENCE_DESIGNED_FOR } from "./designed-for.json";
export { default as EVENT_EXPERIENCE_DELIVERABLES } from "./experience-deliverables.json";
export { default as EVENT_EXPERIENCE_FAQ } from "./faq.json";
export { default as EVENT_EXPERIENCE_IMAGE_HERO } from "./hero.json";
export { default as EVENT_EXPERIENCE_PAGE } from "./page.json";
export { default as EVENT_EXPERIENCE_RELATED_SERVICES } from "./related-services.json";
export { default as EVENT_EXPERIENCE_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as EVENT_EXPERIENCE_WHY_MATTERS } from "./why-matters.json";
