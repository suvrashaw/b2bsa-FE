import type { Metadata } from "next";

import { notFound, redirect } from "next/navigation";

import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { BlogPage } from "@/components/templates/BlogPage";
import {
  DEFAULT_BLOG_POST_HREF,
  DEFAULT_BLOG_POST_ID,
  SHARED_BLOG_POSTS,
} from "@/content/blogs/data";

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

  return {
    alternates: {
      canonical: `/blogs/${metadataPost.id}`,
    },
    description: metadataPost.excerpt,
    openGraph: {
      description: metadataPost.excerpt,
      images: [
        {
          alt: metadataPost.title,
          url: metadataPost.image,
        },
      ],
      title: metadataPost.title,
      type: "article",
    },
    title: metadataPost.title,
    twitter: {
      card: "summary_large_image",
      description: metadataPost.excerpt,
      images: [metadataPost.image],
      title: metadataPost.title,
    },
  };
};

import { useMemo } from "react";

const Page = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post || !post.body) {
    if (slug !== DEFAULT_BLOG_POST_ID) {
      redirect(DEFAULT_BLOG_POST_HREF);
    }

    notFound();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const images = useMemo(() => [post.image], [post.image]);

  return (
    <>
      <ArticleJsonLd
        datePublished={post.date || new Date().toISOString()}
        description={post.excerpt || post.title}
        headline={post.title}
        images={images}
        url={`https://b2bsalesarrow.com/blogs/${post.id}`}
      />
      <BlogPage post={post} />
    </>
  );
};

export default Page;
