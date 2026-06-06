import type { Metadata } from "next";

import { notFound, redirect } from "next/navigation";

import { BlogPost } from "@/components/templates/BlogPost";
import { SHARED_BLOG_POSTS } from "@/content/blogs";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const findPostBySlug = (slug: string) =>
  SHARED_BLOG_POSTS.find((post) => String(post.id) === slug);

export const generateStaticParams = () => {
  return SHARED_BLOG_POSTS.filter((post) => post.body).map((post) => ({
    slug: String(post.id),
  }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    alternates: {
      canonical: `/blogs/${post.id}`,
    },
    description: post.excerpt,
    openGraph: {
      description: post.excerpt,
      images: [
        {
          alt: post.title,
          url: post.image,
        },
      ],
      title: post.title,
      type: "article",
    },
    title: post.title,
    twitter: {
      card: "summary_large_image",
      description: post.excerpt,
      images: [post.image],
      title: post.title,
    },
  };
};

const Page = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  if (!post.body) {
    redirect(post.externalUrl);
  }

  return <BlogPost post={post} />;
};

export default Page;
