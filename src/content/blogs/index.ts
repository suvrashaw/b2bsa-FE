import type { BlogItem } from "@/content/home/content";
import type { MarketingPageDefinition } from "@/content/page-definitions";

import rawBlogPosts from "@/content/blogs/blogs.json";
import { PERF_SERVICES } from "@/content/services/digital-marketing/content";
import { GES_SERVICES } from "@/content/services/global-event-solutions/content";
import { RESEARCH_SERVICES } from "@/content/services/market-research/content";
import { MEDIA_SERVICES } from "@/content/services/media-production/content";
import { SQL_SERVICES } from "@/content/services/sales-qualified-lead-generation/content";

import BLOGS_SECTION_DATA from "./blogs-section.json";
import BLOGS_CONFIG from "./config.json";
import CONTACT_DATA from "./contactus.json";
import LINKEDIN_POSTS_DATA from "./linkedin-posts.json";
import PAGE_DATA from "./page.json";
import SERVICECAROUSEL_DATA from "./service-carousel.json";

export type ContentBlock =
  | { alt: string; caption?: string; src: string; type: "image" }
  | { items: string[]; ordered?: boolean; type: "list" }
  | { level: 2 | 3; text: string; type: "heading" }
  | { text: string; type: "paragraph" }
  | { text: string; type: "quote" }
  | { type: "divider" };

export interface SharedBlogPost extends BlogItem {
  body?: ContentBlock[];
  externalUrl: string;
  faqs?: BlogFAQ[];
  href: string;
  linkedinEmbedUrl?: string;
  linkedinUrl?: string;
}

interface BlogFAQ {
  answer: string;
  question: string;
}

type ImportedBlogPost = {
  body?: ContentBlock[];
  category?: string;
  date: string;
  excerpt?: string;
  faqs?: BlogFAQ[];
  image: string;
  linkedinEmbedUrl?: string;
  linkedinUrl?: string;
  serviceIds?: string[];
  tags?: string[];
  title: string;
  url: string;
};

const BLOG_HOST = BLOGS_CONFIG.BLOG_HOST;
export const DEFAULT_BLOG_POST_ID = BLOGS_CONFIG.DEFAULT_BLOG_POST_ID;
export const DEFAULT_BLOG_POST_HREF = `/blogs/${DEFAULT_BLOG_POST_ID}`;

const createBlogId = (url: string, fallbackIndex: number) => {
  try {
    const pathname = new URL(url, BLOG_HOST).pathname;
    const slug = pathname
      .split("/")
      .findLast(Boolean)
      ?.replaceAll(/[^a-z0-9-]+/gi, "-")
      .replaceAll(/(^-|-$)/g, "")
      .toLowerCase();

    return slug || `blog-${fallbackIndex + 1}`;
  } catch {
    return `blog-${fallbackIndex + 1}`;
  }
};

const parseBlogDate = (value: string) => {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : timestamp;
};

export const SHARED_BLOG_POSTS: SharedBlogPost[] = (rawBlogPosts as ImportedBlogPost[])
  .map((post, index) => {
    const id = createBlogId(post.url, index);

    return {
      body: post.body,
      category: post.category,
      date: post.date,
      excerpt: post.excerpt,
      externalUrl: post.url,
      faqs: post.faqs,
      href: DEFAULT_BLOG_POST_HREF,
      id,
      image: post.image,
      linkedinEmbedUrl: post.linkedinEmbedUrl,
      linkedinUrl: post.linkedinUrl,
      serviceIds: post.serviceIds,
      sortIndex: index,
      tags: post.tags,
      title: post.title,
    };
  })
  .toSorted((left, right) => {
    const leftTimestamp = parseBlogDate(left.date ?? "");
    const rightTimestamp = parseBlogDate(right.date ?? "");

    if (leftTimestamp === rightTimestamp) {
      return left.sortIndex - right.sortIndex;
    }

    if (leftTimestamp === null) {
      return 1;
    }

    if (rightTimestamp === null) {
      return -1;
    }

    return rightTimestamp - leftTimestamp;
  })
  .map(({ sortIndex: _sortIndex, ...post }) => post);

export const getBlogsByTags = (tags: string[], minCount = 5): SharedBlogPost[] => {
  if (!tags || tags.length === 0) {
    return SHARED_BLOG_POSTS.slice(0, minCount);
  }

  const exactMatches = SHARED_BLOG_POSTS.filter((blog) =>
    blog.tags?.some((tag) => tags.includes(tag))
  );

  return exactMatches.slice(0, Math.max(exactMatches.length, minCount));
};

export const HOME_BLOG_POSTS = getBlogsByTags([], 5);

export interface LinkedInPost {
  caption: string;
  hashtag: string;
  id: string;
  image: string;
  url: string;
}

export const LINKEDIN_POSTS: LinkedInPost[] = LINKEDIN_POSTS_DATA;

export const BLOG_POSTS = {
  ...BLOGS_SECTION_DATA,
  blogs: SHARED_BLOG_POSTS,
};

export const BLOG_CONTACT = {
  ...CONTACT_DATA,
  illustration: null,
};

export const BLOG_PAGE = PAGE_DATA as MarketingPageDefinition;

export type LooseService = {
  description: string;
  href?: string;
  id: string;
  image: string;
  title: string;
};

const SERVICE_FALLBACK_HREFS: Record<string, string> = {
  appointment: "/sales-qualified-lead-generation",
  database: "/sales-qualified-lead-generation",
  icp: "/sales-qualified-lead-generation",
  intelligence: "/market-research",
  prospecting: "/sales-qualified-lead-generation",
  validation: "/market-research",
};

export const BLOG_SERVICE_CAROUSEL = {
  ...SERVICECAROUSEL_DATA,
  items: (
    [
      ...GES_SERVICES.services,
      ...MEDIA_SERVICES.services,
      ...PERF_SERVICES.services,
      ...RESEARCH_SERVICES.services,
      ...SQL_SERVICES.services,
    ] as LooseService[]
  )
    .map((s) => ({
      description: s.description,
      href: s.href ?? SERVICE_FALLBACK_HREFS[s.id] ?? "/services",
      id: s.id,
      image: s.image,
      title: s.title,
    }))
    .toSorted((a, b) => (b.description?.length || 0) - (a.description?.length || 0)),
};

export { default as BLOG_CATEGORIES } from "./categories.json";

export { default as BLOG_HERO } from "./hero.json";
