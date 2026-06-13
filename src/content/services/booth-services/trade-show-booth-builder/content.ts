import { SHARED_BLOG_POSTS } from "@/content/blogs/data";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as BOOTH_BUILDER_PROOF_BAR } from "../../shared";



export const BOOTH_BUILDER_FUTURE_READY = DATA.builderFutureReady;

export const BOOTH_BUILDER_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};



export const BOOTH_BUILDER_RELATED_SERVICES = DATA.builderRelatedServices;

export const BOOTH_BUILDER_BLOGS_SECTION = DATA.builderBlogsSection;

const BOOTH_BUILDER_BLOG_IDS = [
  "hiring-trade-show-booth-design-company",
  "5-trade-show-booth-design-setup",
  "b2b-exhibit-booth-design-features",
  "booth-design-metrics",
  "mid-event-trade-show-engagement-ideas",
  "eco-booth-design-5-unexpected-materials-that-make-a-big-impact",
];

export const BOOTH_BUILDER_BLOG_POSTS = BOOTH_BUILDER_BLOG_IDS.flatMap((id) => {
  const post = SHARED_BLOG_POSTS.find((blogPost) => blogPost.id === id);
  return post ? [post] : [];
});

export const BOOTH_BUILDER_CONTACT_CTA = {
    ...DATA.builderContactCta,
    headingLines: ["Let's Build Your Next", "Exhibition Stand"] as [string, string]
};



export {default as BOOTH_BUILDER_FAQ} from "./faq.json";
export {default as BOOTH_BUILDER_HERO} from "./hero.json";
export {default as BOOTH_BUILDER_PAGE} from "./page.json";
export {default as BOOTH_BUILDER_PROCESS} from "./process.json";