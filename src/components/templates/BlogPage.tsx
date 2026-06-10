"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { BlogCardGrid } from "@/components/items/BlogCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { type ContentBlock, SHARED_BLOG_POSTS, type SharedBlogPost } from "@/content/blogs";
import { GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

// ─── BlogSidebarTrending ─────────────────────────────────────────────────────

interface BlogSidebarTrendingProps {
  currentId: string;
}

const BlogSidebarTrending = ({ currentId }: BlogSidebarTrendingProps) => {
  const trendingPosts = SHARED_BLOG_POSTS.filter((post) => String(post.id) !== currentId).slice(
    0,
    4
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-brand-blue px-4 py-3">
        <h2 className="text-sm font-bold tracking-widest text-white uppercase">Trending Posts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {trendingPosts.map((post) => (
          <Link
            className="group flex gap-3 p-4 transition-colors hover:bg-brand-gray"
            href={post.href}
            key={post.id}
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image alt={post.title} className="object-cover" fill sizes="64px" src={post.image} />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-sm leading-snug font-bold text-brand-charcoal transition-colors group-hover:text-brand-blue">
                {post.title}
              </h3>
              {post.date && <p className="mt-2 text-xs font-medium text-gray-500">{post.date}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ─── BlogSidebarSubscribe ────────────────────────────────────────────────────

const BlogSidebarSubscribe = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
      router.push("/thank-you");
    },
    [router]
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-4">
        <p className="text-sm font-bold tracking-widest text-white uppercase">
          Stay Ahead of the Market
        </p>
      </div>
      <form className="space-y-4 rounded-b-2xl bg-white p-6" onSubmit={handleSubmit}>
        <div>
          <h2 className="font-heading text-2xl leading-tight font-bold text-brand-charcoal">
            Don&apos;t Just Scroll!
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-brand-blue">Subscribe Now</span> to Stay in the Loop!
          </p>
        </div>

        <div className="space-y-3">
          <label className="sr-only" htmlFor="blog-subscribe-email">
            Work Email
          </label>
          <input
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none"
            id="blog-subscribe-email"
            placeholder="Work email"
            required
            type="email"
          />

          <label className="sr-only" htmlFor="blog-subscribe-industry">
            Industry
          </label>
          <select
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition-colors focus:border-brand-blue focus:outline-none"
            id="blog-subscribe-industry"
            required
          >
            <option value="">Select industry</option>
            {GLOBAL_INDUSTRY_SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <button
          className="w-full rounded-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan py-3 font-bold text-white shadow-sm transition-opacity hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
          disabled={loading}
          type="submit"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

// ─── Blog helpers ────────────────────────────────────────────────────────────

export interface BlogPageProps {
  post: SharedBlogPost;
}

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const getBlockWordCount = (block: ContentBlock) => {
  if (block.type === "divider") {
    return 0;
  }

  if (["heading", "paragraph", "quote"].includes(block.type)) {
    return countWords(block.text);
  }

  if (block.type === "image") {
    return countWords(block.caption ?? block.alt);
  }

  return block.items.reduce((total, item) => total + countWords(item), 0);
};

const getReadTime = (blocks: ContentBlock[]) => {
  const totalWords = blocks.reduce((total, block) => total + getBlockWordCount(block), 0);
  return `${Math.max(4, Math.ceil(totalWords / 225))} min read`;
};

const renderContentBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "divider": {
      return <hr className="my-8 border-gray-200" key={index} />;
    }
    case "heading": {
      if (block.level === 2) {
        return (
          <h2
            className="mt-10 mb-4 font-heading text-2xl font-bold text-[var(--heading-h2)]"
            key={index}
          >
            {block.text}
          </h2>
        );
      }

      return (
        <h3
          className="mt-8 mb-3 font-heading text-xl font-semibold text-[var(--heading-h3)]"
          key={index}
        >
          {block.text}
        </h3>
      );
    }
    case "image": {
      return (
        <figure className="my-8" key={index}>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
            <Image
              alt={block.alt}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              src={block.src}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";

      return (
        <ListTag
          className={`my-6 space-y-3 pl-6 text-gray-700 ${block.ordered ? "list-decimal" : "list-disc"}`}
          key={index}
        >
          {block.items.map((item) => (
            <li className="leading-relaxed marker:font-bold marker:text-brand-blue" key={item}>
              {item}
            </li>
          ))}
        </ListTag>
      );
    }
    case "paragraph": {
      return (
        <p className="text-base leading-relaxed text-gray-700" key={index}>
          {block.text}
        </p>
      );
    }
    case "quote": {
      return (
        <blockquote
          className="my-8 border-l-4 border-brand-blue bg-brand-blue/5 px-6 py-5 font-heading text-xl leading-relaxed font-semibold text-brand-charcoal"
          key={index}
        >
          {block.text}
        </blockquote>
      );
    }
  }
};

// ─── BlogPage ────────────────────────────────────────────────────────────────

export const BlogPage = ({ post }: BlogPageProps) => {
  const blocks = post.body ?? [];
  const relatedPosts = SHARED_BLOG_POSTS.filter((blog) => blog.id !== post.id).slice(0, 3);
  const readTime = getReadTime(blocks);

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header lightHeaderText />

      <section className="relative isolate flex min-h-[50vh] items-center overflow-hidden bg-brand-charcoal pt-24 text-white">
        <Image
          alt={post.title}
          className="object-cover opacity-35"
          fill
          priority
          sizes="100vw"
          src={post.image}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-brand-cyan/20" />
        <div className="absolute inset-0 bg-brand-charcoal/45" />

        <div className="relative z-10 container mx-auto px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold tracking-widest uppercase">
              {post.category && (
                <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  {post.category}
                </span>
              )}
              {post.date && <span>{post.date}</span>}
              <span>{readTime}</span>
            </div>
            <h1 className="mx-auto max-w-4xl font-heading text-4xl leading-tight font-bold text-white md:text-5xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-16">
        <aside className="mb-10 lg:col-span-1 lg:mb-0">
          <div className="space-y-6 lg:sticky lg:top-24">
            <BlogSidebarTrending currentId={String(post.id)} />
            <BlogSidebarSubscribe />
          </div>
        </aside>

        <article className="min-w-0 lg:col-span-2">
          {post.excerpt && (
            <p className="mb-8 text-xl leading-relaxed font-medium text-brand-charcoal">
              {post.excerpt}
            </p>
          )}

          <div className="space-y-5">
            {blocks.map((block, index) => renderContentBlock(block, index))}
          </div>

          <section className="mt-14 border-t border-gray-200 pt-10">
            <div className="mb-6">
              <p className="text-sm font-bold tracking-widest text-brand-blue uppercase">
                Related Posts
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--heading-h2)]">
                More event growth thinking
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link href={relatedPost.href} key={relatedPost.id}>
                  <BlogCardGrid blog={relatedPost} />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
};
