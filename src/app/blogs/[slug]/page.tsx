import type { Metadata } from "next";

import { notFound, redirect } from "next/navigation";

import { buildBlogPostingJsonLd } from "@/components/seo/ArticleJsonLd";
import { BlogPage } from "@/components/templates/BlogPage";
import { DEFAULT_BLOG_POST_HREF, DEFAULT_BLOG_POST_ID, SHARED_BLOG_POSTS } from "@/content/blogs";
import { buildBreadcrumbJsonLd, buildPageGraph, buildWebPageJsonLd, JsonLd, siteUrl } from "@/lib";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const findPostBySlug = (slug: string) => SHARED_BLOG_POSTS.find((post) => String(post.id) === slug);

const getDefaultPost = () => findPostBySlug(DEFAULT_BLOG_POST_ID);

export const generateStaticParams = () => {
  return SHARED_BLOG_POSTS.filter((post) => post.body).map((post) => ({
    slug: String(post.id),
  }));
};

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  const metadataPost = post?.body ? post : getDefaultPost();

  if (!metadataPost) {
    return {
      title: "Blog Not Found",
    };
  }

  const ogImages = [
    {
      alt: metadataPost.title,
      height: 630,
      url: metadataPost.image,
      width: 1200,
    },
  ];

  return {
    alternates: {
      canonical: `/blogs/${metadataPost.id}`,
    },
    description: metadataPost.excerpt,
    openGraph: {
      authors: ["B2B Sales Arrow"],
      description: metadataPost.excerpt,
      images: ogImages,
      locale: "en_US",
      modifiedTime: metadataPost.date,
      publishedTime: metadataPost.date,
      ...(metadataPost.category && { section: metadataPost.category }),
      ...(metadataPost.tags?.length && { tags: metadataPost.tags }),
      title: metadataPost.title,
      type: "article",
    },
    title: metadataPost.title,
    twitter: {
      card: "summary_large_image",
      description: metadataPost.excerpt,
      images: [
        {
          alt: metadataPost.title,
          height: 630,
          url: metadataPost.image,
          width: 1200,
        },
      ],
      title: metadataPost.title,
    },
  };
};

const Page = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post || !post.body) {
    if (slug !== DEFAULT_BLOG_POST_ID) {
      redirect(DEFAULT_BLOG_POST_HREF);
    }

    notFound();
  }

  const postUrl = `${siteUrl}/blogs/${post.id}`;
  type BodyBlock = { text?: string; type: string };
  const bodyBlocks = post.body as BodyBlock[];
  const wordCount = bodyBlocks.reduce(
    (n, b) => n + (b.text ? b.text.trim().split(/\s+/).filter(Boolean).length : 0),
    0
  );
  const tableOfContents = bodyBlocks
    .filter((b) => b.type === "heading" && b.text)
    .map((b) => b.text!)
    .join("\n");

  return (
    <>
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            breadcrumbId: `${postUrl}/#breadcrumb`,
            dateModified: post.date || undefined,
            datePublished: post.date || undefined,
            description: post.excerpt || post.title,
            image: post.image,
            name: post.title,
            url: postUrl,
          }),
          buildBlogPostingJsonLd({
            ...(post.category && { articleSection: post.category }),
            datePublished: post.date || new Date().toISOString(),
            description: post.excerpt || post.title,
            headline: post.title,
            image: post.image,
            ...(post.tags?.length && { keywords: post.tags }),
            ...(tableOfContents && { tableOfContents }),
            url: postUrl,
            ...(wordCount > 0 && { wordCount }),
          }),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              { name: "Blogs", url: `${siteUrl}/blogs` },
              { name: post.title, url: postUrl },
            ],
            postUrl
          ),
        ])}
      />
      <BlogPage post={post} />
    </>
  );
};

export default Page;
