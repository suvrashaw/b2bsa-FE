import type { BlogItem } from "./home";

import rawBlogPosts from "./blogs.json";

export interface SharedBlogPost extends BlogItem {
  href: string;
}

type ImportedBlogPost = {
  date: string;
  image: string;
  title: string;
  url: string;
};

const BLOG_HOST = "https://b2bsalesarrow.com";

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
  .map((post, index) => ({
    date: post.date,
    href: post.url,
    id: createBlogId(post.url, index),
    image: post.image,
    sortIndex: index,
    title: post.title,
  }))
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
