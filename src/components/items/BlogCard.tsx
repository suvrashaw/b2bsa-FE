"use client";

import type { MotionValue } from "framer-motion";

import { motion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useSyncExternalStore } from "react";

import type { BlogItem } from "@/content/home/content";

import { cn } from "@/lib";

export interface BlogCardProps {
  blog: BlogItem;
  className?: string;
  ctaLabel?: string;
  index: number;
  isHovered: boolean;
  spread: MotionValue<number>;
  total: number;
}

const BLOG_CARD_TRANSITION = {
  damping: 30,
  stiffness: 300,
  type: "spring",
} as const;
const BLOG_CARD_MOBILE_QUERY = "(max-width: 1023px)";

const getMobileSnapshot = () =>
  typeof globalThis.matchMedia === "function"
    ? globalThis.matchMedia(BLOG_CARD_MOBILE_QUERY).matches
    : false;

const subscribeToMobileQuery = (onStoreChange: () => void) => {
  if (typeof globalThis.matchMedia !== "function") return () => {};

  const query = globalThis.matchMedia(BLOG_CARD_MOBILE_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
};

export const BlogCard = ({
  blog,
  className,
  ctaLabel = "Learn more",
  index,
  isHovered,
  spread,
  total,
}: BlogCardProps) => {
  const isMobile = useSyncExternalStore(subscribeToMobileQuery, getMobileSnapshot, () => false);

  const relativeIndex = index - (total - 1) / 2;
  const rotationOffset = relativeIndex * 8;
  const xOffset = relativeIndex * 40;
  const yOffset = relativeIndex * -20;

  const rotate = useTransform(spread, (s) => s * rotationOffset);
  const x = useTransform(spread, (s) => s * xOffset);
  const y = useTransform(spread, (s) => s * yOffset);

  const hoverX = relativeIndex * 460;
  const hoverY = relativeIndex * 340;

  const activeX = isMobile ? 0 : hoverX;
  const activeY = isMobile ? hoverY : 0;

  const cardAnimate = useMemo(() => ({ scale: isHovered ? 0.9 : 1 }), [isHovered]);
  const cardStyle = useMemo(
    () => ({
      rotate: isHovered ? 0 : rotate,
      x: isHovered ? activeX : x,
      y: isHovered ? activeY : y,
      zIndex: index,
    }),
    [isHovered, rotate, activeX, x, activeY, y, index]
  );

  return (
    <motion.div
      animate={cardAnimate}
      className={cn(
        "absolute w-full max-w-md transform-gpu overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl md:rounded-3xl",
        className
      )}
      style={cardStyle}
      transition={BLOG_CARD_TRANSITION}
    >
      <div className="relative h-56 w-full">
        <Image
          alt={blog.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          src={blog.image}
        />
      </div>
      <div className="p-5 md:p-8">
        {blog.date && (
          <span className="mb-3 block text-sm font-medium text-gray-500">{blog.date}</span>
        )}
        <h3 className="mb-4 line-clamp-2 min-h-[3.5rem] font-heading text-base leading-tight font-bold md:text-xl">
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p className="mb-6 line-clamp-3 min-h-[3.75rem] text-xs leading-relaxed text-gray-600 md:text-base">
            {blog.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-blue uppercase">
          {ctaLabel} <ArrowUpRight className="size-4" />
        </div>
      </div>
    </motion.div>
  );
};

export const BlogCardGrid = ({ blog }: { blog: BlogItem }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl md:rounded-3xl">
      <div className="relative h-52 w-full shrink-0 overflow-hidden">
        <Image
          alt={blog.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          src={blog.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {blog.date && (
          <span className="mb-2 block text-sm font-medium text-gray-500">{blog.date}</span>
        )}
        <h3 className="mb-3 font-heading text-base leading-snug font-bold md:text-xl">
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p className="mb-4 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600 md:text-base">
            {blog.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-blue uppercase">
          Read Article{" "}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};
