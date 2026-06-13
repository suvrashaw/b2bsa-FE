import { SHARED_BLOG_POSTS } from "@/content/blogs/data";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import BUILDERCONTACTCTA_DATA from "./builder-contact-cta.json";
import BOOTHBUILDERCASESTUDIESDATA from "./case-studies.json";
import BOOTHBUILDERPROOFBARDATA from "./proof-bar.json";

export const BOOTH_BUILDER_PROOF_BAR = {
  ...BOOTHBUILDERPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_BUILDER_CASE_STUDIES = {
  ...BOOTHBUILDERCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

import BOOTH_BUILDER_BLOG_IDS from "./blog-ids.json";

export const BOOTH_BUILDER_BLOG_POSTS = BOOTH_BUILDER_BLOG_IDS.flatMap((id) => {
  const post = SHARED_BLOG_POSTS.find((blogPost) => blogPost.id === id);
  return post ? [post] : [];
});

export const BOOTH_BUILDER_CONTACT_CTA = {
  ...BUILDERCONTACTCTA_DATA,
};

export { default as BOOTH_BUILDER_BLOGS_SECTION } from "./builder-blogs-section.json";
export { default as BOOTH_BUILDER_FUTURE_READY } from "./builder-future-ready.json";
export { default as BOOTH_BUILDER_RELATED_SERVICES } from "./builder-related-services.json";
export { default as BOOTH_BUILDER_FAQ } from "./faq.json";

export { default as BOOTH_BUILDER_HERO } from "./hero.json";
export { default as BOOTH_BUILDER_PAGE } from "./page.json";
export { default as BOOTH_BUILDER_PROCESS } from "./process.json";
