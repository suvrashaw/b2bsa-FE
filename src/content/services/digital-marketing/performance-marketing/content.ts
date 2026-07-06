import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import type { BlogsSectionContent } from "@/content/blogs";

import BLOG_DATA from "./blog.json";
import CASESTUDIES_DATA from "./case-studies.json";

export const PPC_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const PPC_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as PPC_CLIENT_LOGOS } from "./client-logos.json";
export { default as PPC_CONTACT_CTA } from "./contact.json";
export { default as PPC_FAQ } from "./faq.json";
export { default as PPC_HERO } from "./hero.json";
export { default as PPC_INDUSTRIES } from "./industries.json";
export { default as PPC_INTRO } from "./intro.json";
export { default as PPC_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as PPC_PAGE } from "./page.json";
export { default as PPC_SERVICES } from "./services.json";
export { default as PPC_WHY_CHOOSE_US } from "./why-choose-us.json";
