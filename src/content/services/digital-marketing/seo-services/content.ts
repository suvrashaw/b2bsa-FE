import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import BLOG_DATA from "./blog.json";
import CASESTUDIES_DATA from "./case-studies.json";

export const SEO_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const SEO_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as SEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as SEO_CONTACT_CTA } from "./contact.json";
export { default as SEO_FAQ } from "./faq.json";
export { default as SEO_HERO } from "./hero.json";
export { default as SEO_INDUSTRIES } from "./industries.json";
export { default as SEO_INTRO } from "./intro.json";
export { default as SEO_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as SEO_PAGE } from "./page.json";
export { default as SEO_SERVICES } from "./services.json";
export { default as SEO_WHY_CHOOSE_US } from "./why-choose-us.json";
