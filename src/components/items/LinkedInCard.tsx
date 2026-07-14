"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { LinkedInPost } from "@/content/blogs";

// ── constants ────────────────────────────────────────────────────────────────

const COMPANY_NAME = "B2B Sales Arrow";
const COMPANY_TAGLINE =
  "Trade Show Booth Builder | Exhibition Stand Design | Experiential Marketing | 800+ Events | 15+ Markets";
const COMPANY_LOGO = "/media/logo/b2bsa-linkedin-avatar.avif";
const LINKEDIN_URL = "https://www.linkedin.com/company/b2b-sales-arrow-llc/";

// ── icons ────────────────────────────────────────────────────────────────────

const ThumbUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path
      d="M7 10v12M7 10l4-7a3 3 0 0 1 3 3v2h4.5a2 2 0 0 1 1.95 2.45l-1.57 6A2 2 0 0 1 17 18H7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommentIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RepostIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── animation ─────────────────────────────────────────────────────────────────

const cardViewport = { once: true } as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
    y: 0,
  }),
};

// ── component ─────────────────────────────────────────────────────────────────

export interface LinkedInCardProps {
  index: number;
  post: LinkedInPost;
}

export const LinkedInCard = ({ index, post }: LinkedInCardProps) => (
  <motion.article
    className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#e0dfdc] bg-white shadow-sm md:rounded-lg"
    custom={index}
    initial="hidden"
    variants={cardVariants}
    viewport={cardViewport}
    whileInView="visible"
  >
    {/* ── Header ── */}
    <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
      {/* Avatar + info */}
      <a
        className="flex min-w-0 items-center gap-2.5"
        href={LINKEDIN_URL}
        rel="noreferrer"
        target="_blank"
      >
        {/* Avatar container */}
        <div className="relative shrink-0">
          <div className="flex size-12 items-center justify-center overflow-hidden rounded border border-[#e0dfdc] bg-white">
            <Image
              alt={COMPANY_NAME}
              className="object-cover"
              height={48}
              src={COMPANY_LOGO}
              width={48}
            />
          </div>
        </div>

        {/* Name + tagline + timestamp */}
        <div className="min-w-0">
          <p className="truncate text-sm leading-tight font-semibold text-[#000000E6] hover:text-[#0A66C2] hover:underline">
            {COMPANY_NAME}
          </p>
          <p className="truncate text-xs leading-snug text-[#00000099]">{COMPANY_TAGLINE}</p>
          <p className="flex items-center gap-1 text-xs text-[#00000099]">
            <span>1h</span>
            <span className="mb-[2px] leading-none">·</span>
            {/* Globe icon */}
            <svg className="size-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a2 2 0 0 1-2-2v-1l-1.07-.36A8.01 8.01 0 0 1 4 12c0-.34.02-.68.07-1H6a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h2v1.93zM18.93 15H18a1 1 0 0 0-1 1v1.93A8.03 8.03 0 0 1 13 19.93V18h-1v-2h3a1 1 0 0 0 1-1v-1a2 2 0 0 1 2-2h.93c.05.32.07.66.07 1 0 .7-.08 1.37-.07 2z" />
            </svg>
          </p>
        </div>
      </a>

      {/* Follow button */}
      <a
        className="flex shrink-0 items-center rounded px-2 py-1 text-sm font-semibold text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10"
        href={LINKEDIN_URL}
        rel="noreferrer"
        target="_blank"
      >
        <span className="mr-1 text-lg leading-none">+</span>
        Follow
      </a>
    </div>

    {/* ── Caption / Post text ── */}
    <div className="px-4 pb-2">
      <p className="line-clamp-3 text-xs leading-relaxed text-[#000000E6]">{post.caption}</p>
      <div className="mt-1 flex items-center gap-2">
        {post.hashtag && (
          <span className="text-sm font-semibold text-[#0A66C2] hover:underline">
            {post.hashtag}
          </span>
        )}
        <a
          className="text-sm text-[#00000099] hover:text-[#0A66C2] hover:underline"
          href={post.url}
          rel="noreferrer"
          target="_blank"
        >
          ...more
        </a>
      </div>
    </div>

    {/* ── Post image ── */}
    <a
      className="group relative block aspect-video w-full overflow-hidden bg-[#f3f2ef]"
      href={post.url}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt={post.hashtag}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        fill
        sizes="(max-width: 1024px) 80vw, 33vw"
        src={post.image}
      />
    </a>

    {/* ── Engagement row ── */}
    <div className="flex items-center justify-between border-t border-[#e0dfdc] px-2 py-1.5 sm:px-4">
      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-2.5 text-sm font-semibold text-[#00000099] transition-colors"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <ThumbUpIcon className="size-[18px]" />
        <span className="hidden sm:inline">Like</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-2.5 text-sm font-semibold text-[#00000099] transition-colors"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <CommentIcon className="size-[18px]" />
        <span className="hidden sm:inline">Comment</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-2.5 text-sm font-semibold text-[#00000099] transition-colors"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <RepostIcon className="size-[18px]" />
        <span className="hidden sm:inline">Repost</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-2.5 text-sm font-semibold text-[#00000099] transition-colors"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <SendIcon className="size-[18px]" />
        <span className="hidden sm:inline">Send</span>
      </a>
    </div>
  </motion.article>
);
