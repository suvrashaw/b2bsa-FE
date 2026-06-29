import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import CAPABILITIES_DATA from "./capabilities.json";
import CASESTUDIES_DATA from "./case-studies.json";
import INDUSTRIES_DATA from "./industries.json";

export { default as SMM_BLOGS_SECTION } from "./blog.json";

export const SMM_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const SMM_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export const SMM_INDUSTRIES = {
  heading: INDUSTRIES_DATA.heading,
  items: INDUSTRIES_DATA.items,
};

export const SMM_INDUSTRIES_FEATURES = INDUSTRIES_DATA.features;

export const SMM_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as SMM_CAMPAIGNS } from "./campaigns.json";
export { default as SMM_CLIENT_LOGOS } from "./client-logos.json";
export { default as SMM_CONTACT_CTA } from "./contact.json";
export { default as SMM_FAQ } from "./faq.json";
export { default as SMM_HERO } from "./hero.json";
export { default as SMM_INTRO } from "./intro.json";
export { default as SMM_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as SMM_PAGE } from "./page.json";
export { default as SMM_RELATED_SERVICES } from "./related-services.json";
export { default as SMM_SERVICES } from "./whats-included.json";
export { default as SMM_WHY_CHOOSE_US } from "./why-choose-us.json";
