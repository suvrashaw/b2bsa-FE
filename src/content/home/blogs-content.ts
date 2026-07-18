import { HOME_BLOG_POSTS } from "@/content/blogs";

import type { BlogsContent } from "./content";

import BLOGS_DATA from "./blogs.json";

// Kept out of content.ts so client components that only need the other home
// sections (StickyScroll, FAQ, Testimonials, etc.) don't transitively pull in
// the full blogs.json parse just by importing from that module.
export const HOME_BLOGS: BlogsContent = {
  ...BLOGS_DATA,
  blogs: HOME_BLOG_POSTS,
};
