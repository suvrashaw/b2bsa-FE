import type { BlogItem } from "@/content/home/content";

import rawBlogPosts from "./posts.json";

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
  title: string;
  url: string;
};

import BLOGS_CONFIG from "./config.json";

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
      sortIndex: index,
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

export const HOME_BLOG_POSTS = SHARED_BLOG_POSTS.slice(0, 3);
export const RENTAL_BLOG_POSTS = SHARED_BLOG_POSTS.slice(0, 5);
