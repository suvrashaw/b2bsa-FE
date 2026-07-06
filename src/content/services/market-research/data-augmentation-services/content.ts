import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import BLOG_DATA from "./blog.json";

export const DATA_AUGMENTATION_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export { default as DATA_AUGMENTATION_CLIENT_LOGOS } from "./client-logos.json";
export { default as DATA_AUGMENTATION_CONTACT_CTA } from "./contact.json";
export { default as DATA_AUGMENTATION_FAQ } from "./faq.json";
export { default as DATA_AUGMENTATION_HERO } from "./hero.json";
export { default as DATA_AUGMENTATION_INTRO } from "./intro.json";
export { default as DATA_AUGMENTATION_PAGE } from "./page.json";
export { default as DATA_AUGMENTATION_PROCESS } from "./process.json";
export { default as DATA_AUGMENTATION_DELIVERABLES } from "./services.json";
