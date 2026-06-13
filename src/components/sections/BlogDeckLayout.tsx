"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import type { BlogsContent } from "@/content/home/content";

import { BlogCard, BlogCardGrid } from "@/components/items/BlogCard";

type Blog = BlogsContent["blogs"][number];

interface BlogDeckLayoutProps {
  blogs: Blog[];
  ctaLabel?: string;
  layout?: "deck" | "grid";
}

const getBlogHref = (id: number | string, href?: string) => href ?? `/blogs/${id}`;

export const BlogDeckLayout = ({ blogs, ctaLabel, layout = "deck" }: BlogDeckLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const resolvedLayout = prefersReducedMotion ? "grid" : layout;

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "center center"],
    target: containerRef,
  });

  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (resolvedLayout === "grid") {
    return (
      <div className="mt-8 mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link className="block h-full" href={getBlogHref(blog.id, blog.href)} key={blog.id}>
            <BlogCardGrid blog={blog} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      className="perspective-1000 relative mx-auto mt-8 mb-6 flex h-[580px] w-full max-w-3xl cursor-pointer items-center justify-center sm:h-[640px] lg:mt-10 lg:mb-10 lg:h-[580px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {blogs.map((blog, index) => (
        <Link className="contents" href={getBlogHref(blog.id, blog.href)} key={blog.id}>
          <BlogCard
            blog={blog}
            ctaLabel={ctaLabel}
            index={index}
            isHovered={isHovered}
            spread={spread}
            total={blogs.length}
          />
        </Link>
      ))}
    </div>
  );
};
