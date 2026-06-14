"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

import type { LinkedInPost } from "@/content/linkedinPosts";

const cardViewport = { once: true } as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45 },
    y: 0,
  }),
};

export interface LinkedInCardProps {
  index: number;
  post: LinkedInPost;
}

export const LinkedInCard = ({ index, post }: LinkedInCardProps) => (
  <motion.a
    className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    custom={index}
    href={post.url}
    initial="hidden"
    rel="noreferrer"
    target="_blank"
    variants={cardVariants}
    viewport={cardViewport}
    whileInView="visible"
  >
    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
      <Image
        alt={post.hashtag}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        fill
        sizes="(max-width: 1024px) 80vw, 33vw"
        src={post.image}
      />
    </div>

    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2]">
          <LinkedinIcon className="h-3 w-3 text-white" />
        </span>
        <span className="text-xs font-semibold text-[#0A66C2]">{post.hashtag}</span>
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">{post.caption}</p>

      <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-cyan">
        Open actual LinkedIn post in NEW TAB
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  </motion.a>
);
