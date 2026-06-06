import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogCardGrid } from "@/components/ui/BlogCard";
import { BlogSidebarSubscribe } from "@/components/ui/BlogSidebarSubscribe";
import { BlogSidebarTrending } from "@/components/ui/BlogSidebarTrending";
import { type ContentBlock, SHARED_BLOG_POSTS, type SharedBlogPost } from "@/content/blogs";

export interface BlogPostProps {
  post: SharedBlogPost;
}

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const getBlockWordCount = (block: ContentBlock) => {
  if (block.type === "divider") {
    return 0;
  }

  if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
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

export const BlogPost = ({ post }: BlogPostProps) => {
  const blocks = post.body ?? [];
  const relatedPosts = SHARED_BLOG_POSTS.filter((blog) => blog.id !== post.id).slice(0, 3);
  const readTime = getReadTime(blocks);

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      <section className="relative isolate overflow-hidden bg-brand-charcoal py-28 text-white lg:py-36">
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

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold tracking-widest uppercase">
              {post.category && (
                <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  {post.category}
                </span>
              )}
              {post.date && <span>{post.date}</span>}
              <span>{readTime}</span>
            </div>
            <h1 className="max-w-4xl font-heading text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
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
