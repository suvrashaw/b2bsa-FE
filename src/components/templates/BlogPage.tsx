"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { LinkedInCard } from "@/components/items/LinkedInCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Carousel } from "@/components/sections/Carousel";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { type ContentBlock, SHARED_BLOG_POSTS, type SharedBlogPost } from "@/content/blogs";
import { LINKEDIN_POSTS } from "@/content/blogs";
import { HOME_SERVICES_CONTENT } from "@/content/home/content";
import { GLOBAL_INDUSTRY_SERVICES } from "@/content/services";

// ─── BlogSidebarTrending ─────────────────────────────────────────────────────

interface BlogSidebarTrendingProps {
  currentId: string;
}

const BlogSidebarTrending = ({ currentId }: BlogSidebarTrendingProps) => {
  const trendingPosts = SHARED_BLOG_POSTS.filter((post) => String(post.id) !== currentId).slice(
    0,
    3
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-brand-blue px-4 py-3">
        <h2 className="text-sm font-bold tracking-widest text-white uppercase">Trending Posts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {trendingPosts.map((post) => (
          <Link
            className="group flex gap-3 p-3 transition-colors hover:bg-brand-gray"
            href={post.href}
            key={post.id}
          >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                alt={post.title}
                className="object-cover"
                fill
                sizes="48px"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-[13px] leading-snug font-bold text-brand-charcoal transition-colors group-hover:text-brand-blue">
                {post.title}
              </h3>
              {post.date && (
                <p className="mt-1 text-[11px] font-medium text-gray-500">{post.date}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ─── BlogSidebarSubscribe ────────────────────────────────────────────────────

const BlogSidebarSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  }, []);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-3">
        <p className="text-sm font-bold tracking-widest text-white uppercase">
          Let&apos;s Connect for Event Strategy
        </p>
      </div>
      {submitted ? (
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <p className="font-heading text-lg font-bold text-brand-charcoal">You&apos;re all set!</p>
          <p className="text-sm text-gray-500">We&apos;ll be in touch with your event strategy.</p>
        </div>
      ) : (
        <form className="space-y-4 rounded-b-2xl bg-white p-5" onSubmit={handleSubmit}>
          <div>
            <h2 className="font-heading text-xl leading-tight font-bold text-brand-charcoal">
              Don&apos;t Just Scroll!
            </h2>
            <p className="mt-2 text-sm leading-relaxed font-bold text-brand-blue">
              Let&apos;s Connect for Event Strategy!
            </p>
          </div>

          <div className="space-y-3">
            <label className="sr-only" htmlFor="blog-subscribe-email">
              Work Email
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none"
              id="blog-subscribe-email"
              placeholder="Work email"
              required
              type="email"
            />

            <label className="sr-only" htmlFor="blog-subscribe-industry">
              Industry
            </label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 transition-colors focus:border-brand-blue focus:outline-none"
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

            <label className="sr-only" htmlFor="blog-subscribe-event">
              Event Name
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none"
              id="blog-subscribe-event"
              placeholder="Event name"
              required
              type="text"
            />
          </div>

          <button
            className="w-full rounded-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan py-3 font-bold text-white shadow-sm transition-opacity hover:opacity-95 disabled:pointer-events-none disabled:opacity-60"
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending..." : "Get Your Upcoming Event Strategy"}
          </button>
        </form>
      )}
    </section>
  );
};

// ─── BlogSidebarLinkedIn ─────────────────────────────────────────────────────

const BlogSidebarLinkedIn = ({ post }: { post: SharedBlogPost }) => {
  if (!post.linkedinEmbedUrl && !post.linkedinUrl) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-brand-blue px-4 py-3">
        <h2 className="text-sm font-bold tracking-widest text-white uppercase">LinkedIn</h2>
      </div>
      <div className="space-y-4 p-4">
        {post.linkedinEmbedUrl && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-brand-gray">
            <iframe
              allowFullScreen
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              src={post.linkedinEmbedUrl}
              title={`LinkedIn post for ${post.title}`}
            />
          </div>
        )}
        {post.linkedinUrl && (
          <a
            className="inline-flex text-sm font-bold text-brand-blue transition hover:text-brand-cyan"
            href={post.linkedinUrl}
            rel="noreferrer"
            target="_blank"
          >
            View on LinkedIn
          </a>
        )}
      </div>
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

  // eslint-disable-next-line unicorn/prefer-includes-over-repeated-comparisons -- Array.includes() loses TypeScript discriminant narrowing; block.text is inaccessible without the union check
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
            className="mt-10 mb-4 font-heading text-xl font-bold text-[var(--heading-h2)]"
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

const CTA_HEADING_LINES: [string, string] = ["Ready to Make Your", "Next Event Unforgettable?"];
const CTA_PRIMARY = { href: "/contact-us", label: "Book a Consultation", opensModal: true };
const CTA_SECONDARY = { href: "/case-studies", label: "See Our Work" };
const PLACEHOLDER_IMAGE = "/media/home/hero/home_hero_bg.avif";

export const BlogPage = ({ post }: BlogPageProps) => {
  const blocks = post.body ?? [];
  const readTime = getReadTime(blocks);
  const placeholderServiceItems = useMemo(
    () =>
      HOME_SERVICES_CONTENT.services
        .slice(0, 5)
        .map((item) => ({ ...item, image: PLACEHOLDER_IMAGE })),
    []
  );
  const relatedPosts = useMemo(
    () =>
      SHARED_BLOG_POSTS.filter((p) => String(p.id) !== String(post.id)).map((relatedPost) => ({
        ...relatedPost,
        image: PLACEHOLDER_IMAGE,
      })),
    [post.id]
  );
  const faqItems = post.faqs?.map((faq, index) => ({
    answer: faq.answer,
    id: `${post.id}-faq-${index + 1}`,
    question: faq.question,
  }));

  const contactUsBg = useMemo(
    () => ({ alt: post.title, src: post.image }),
    [post.title, post.image]
  );

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
              {post.date && <span>{post.date}</span>}
              <span>{readTime}</span>
            </div>
            <h1 className="mx-auto max-w-4xl font-heading text-3xl leading-tight font-bold text-white md:text-4xl lg:text-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-16">
        <article className="min-w-0 lg:col-span-2">
          {post.excerpt && (
            <p className="mb-8 text-xl leading-relaxed font-medium text-brand-charcoal">
              {post.excerpt}
            </p>
          )}

          <div className="space-y-5">
            {blocks.map((block, index) => renderContentBlock(block, index))}
          </div>

          {faqItems && faqItems.length > 0 && (
            <div className="mt-14 border-t border-gray-200 pt-10">
              <FAQAccordion
                description=""
                eyebrow=""
                faqs={faqItems}
                heading="Frequently Asked Questions"
                variant="article"
              />
            </div>
          )}
        </article>

        <aside className="mt-10 lg:col-span-1 lg:mt-0">
          <div className="space-y-6 lg:sticky lg:top-24">
            <BlogSidebarTrending currentId={String(post.id)} />
            <BlogSidebarSubscribe />
            <BlogSidebarLinkedIn post={post} />
          </div>
        </aside>
      </div>

      <Carousel
        autoplayInterval={4000}
        heading="Our B2B Event Services & Trade Show Solutions"
        id="services"
        layout="carousel"
      >
        {placeholderServiceItems.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.id} />
        ))}
      </Carousel>

      <ContactUs
        backgroundImage={contactUsBg}
        badge="Talk to an Expert"
        description="Whether you're planning your next trade show appearance or need event staffing worldwide, our team is ready to help you execute flawlessly."
        headingLines={CTA_HEADING_LINES}
        primaryCta={CTA_PRIMARY}
        secondaryCta={CTA_SECONDARY}
      />

      <Carousel
        cols={4}
        heading="Related Articles"
        headingAction={
          <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        }
        headingAlign="left"
        id="blogs"
        layout="carousel"
      >
        {relatedPosts.map((post) => (
          <BlogsCarouselCard key={post.id} post={post} />
        ))}
      </Carousel>

      <Carousel
        description="Get real-time updates on booth builds, exhibition projects, event staffing, Event lead generation campaigns, and global trade show experiences from our team worldwide."
        heading="Follow Our Latest Event Executions on LinkedIn"
        layout="carousel"
      >
        {LINKEDIN_POSTS.map((post, i) => (
          <LinkedInCard index={i} key={post.id} post={post} />
        ))}
      </Carousel>

      <Footer />
    </main>
  );
};
