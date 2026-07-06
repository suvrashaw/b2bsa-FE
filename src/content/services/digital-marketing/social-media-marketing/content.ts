import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import type { BlogsSectionContent } from "@/content/blogs";

import BLOG_DATA from "./blog.json";
import CAPABILITIES_DATA from "./capabilities.json";
import CASESTUDIES_DATA from "./case-studies.json";

export const SMM_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const SMM_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const SMM_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export { default as SMM_CAMPAIGNS } from "./campaigns.json";

export const SMM_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as SMM_CLIENT_LOGOS } from "./client-logos.json";
export { default as SMM_CONTACT_CTA } from "./contact.json";
export { default as SMM_FAQ } from "./faq.json";
export { default as SMM_HERO } from "./hero.json";
export { default as SMM_INDUSTRIES } from "./industries.json";
export { default as SMM_INTRO } from "./intro.json";
export { default as SMM_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as SMM_PAGE } from "./page.json";
export { default as SMM_SERVICES } from "./services.json";
export { default as SMM_WHY_CHOOSE_US } from "./why-choose-us.json";
