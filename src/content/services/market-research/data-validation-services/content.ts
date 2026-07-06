import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import BLOG_DATA from "./blog.json";

export const DATA_VALIDATION_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export { default as DATA_VALIDATION_CLIENT_LOGOS } from "./client-logos.json";
export { default as DATA_VALIDATION_CONTACT_CTA } from "./contact.json";
export { default as DATA_VALIDATION_FAQ } from "./faq.json";
export { default as DATA_VALIDATION_HERO } from "./hero.json";
export { default as DATA_VALIDATION_INTRO } from "./intro.json";
export { default as DATA_VALIDATION_PAGE } from "./page.json";
export { default as DATA_VALIDATION_PROCESS } from "./process.json";
export { default as DATA_VALIDATION_DELIVERABLES } from "./services.json";
