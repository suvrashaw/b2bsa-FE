"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { LinkedInPost } from "@/content/blogs";

// ── constants ────────────────────────────────────────────────────────────────

const COMPANY_NAME = "B2B Sales Arrow";
const COMPANY_TAGLINE = "B2B Lead Generation & Marketing";
const COMPANY_LOGO = "/media/logo/logo-primary.svg";
const LINKEDIN_URL = "https://www.linkedin.com/company/b2b-sales-arrow/";

// ── icons ────────────────────────────────────────────────────────────────────

const LinkedInSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ThumbUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path d="M7 10v12M7 10l4-7a3 3 0 0 1 3 3v2h4.5a2 2 0 0 1 1.95 2.45l-1.57 6A2 2 0 0 1 17 18H7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CommentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RepostIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
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
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
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
    className="flex w-full flex-col overflow-hidden rounded-lg border border-[#e0dfdc] bg-white shadow-sm"
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
        {/* Avatar container with LinkedIn badge */}
        <div className="relative shrink-0">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[4px] border border-[#e0dfdc] bg-white p-1">
            <Image
              alt={COMPANY_NAME}
              className="object-contain"
              height={40}
              src={COMPANY_LOGO}
              width={40}
            />
          </div>
          {/* LinkedIn [in] badge */}
          <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A66C2] ring-1 ring-white">
            <LinkedInSquareIcon className="h-2.5 w-2.5 text-white" />
          </span>
        </div>

        {/* Name + tagline + timestamp */}
        <div className="min-w-0">
          <p className="truncate text-sm leading-tight font-semibold text-[#000000E6]">
            {COMPANY_NAME}
          </p>
          <p className="truncate text-xs leading-snug text-[#00000099]">
            {COMPANY_TAGLINE}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-[#00000099]">
            <span>1h</span>
            <span>·</span>
            {/* Globe icon */}
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 17.93V18a1 1 0 0 0-1-1H8a2 2 0 0 1-2-2v-1l-1.07-.36A8.01 8.01 0 0 1 4 12c0-.34.02-.68.07-1H6a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h2v1.93zM18.93 15H18a1 1 0 0 0-1 1v1.93A8.03 8.03 0 0 1 13 19.93V18h-1v-2h3a1 1 0 0 0 1-1v-1a2 2 0 0 1 2-2h.93c.05.32.07.66.07 1 0 .7-.08 1.37-.07 2z" />
            </svg>
          </p>
        </div>
      </a>

      {/* Follow button */}
      <a
        className="flex shrink-0 items-center gap-1 rounded-full border border-[#0A66C2] px-3 py-1 text-xs font-semibold text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/5"
        href={LINKEDIN_URL}
        rel="noreferrer"
        target="_blank"
      >
        <span className="text-base leading-none">+</span>
        Follow
      </a>
    </div>

    {/* ── Caption / Post text ── */}
    <div className="px-4 pb-3">
      <p className="line-clamp-3 text-sm leading-relaxed text-[#000000E6]">
        {post.caption}
      </p>
      <a
        className="text-sm font-medium text-[#00000099] hover:text-[#000000E6]"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        …more
      </a>

      {/* Hashtag */}
      {post.hashtag && (
        <p className="mt-1.5 text-xs font-medium text-[#0A66C2]">{post.hashtag}</p>
      )}
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
    <div className="flex items-center justify-around border-t border-[#e0dfdc] px-2 py-1">
      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded py-1.5 text-xs font-medium text-[#00000099] transition-colors hover:bg-[#f3f2ef] hover:text-[#000000E6]"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <ThumbUpIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Like</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded py-1.5 text-xs font-medium text-[#00000099] transition-colors hover:bg-[#f3f2ef] hover:text-[#000000E6]"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <CommentIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Comment</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded py-1.5 text-xs font-medium text-[#00000099] transition-colors hover:bg-[#f3f2ef] hover:text-[#000000E6]"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <RepostIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Repost</span>
      </a>

      <a
        className="flex flex-1 items-center justify-center gap-1.5 rounded py-1.5 text-xs font-medium text-[#00000099] transition-colors hover:bg-[#f3f2ef] hover:text-[#000000E6]"
        href={post.url}
        rel="noreferrer"
        target="_blank"
      >
        <SendIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Send</span>
      </a>
    </div>
  </motion.article>
);
