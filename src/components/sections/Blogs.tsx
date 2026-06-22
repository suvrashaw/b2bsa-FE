"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { BlogCard, BlogCardGrid } from "@/components/items/BlogCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { type BlogsContent, HOME_BLOGS_CONTENT } from "@/content/home/content";

type Blog = BlogsContent["blogs"][number];

const getBlogHref = (id: number | string, href?: string) => href ?? `/blogs/${id}`;

interface BlogDeckLayoutProps {
  blogs: Blog[];
  ctaLabel?: string;
  layout?: "deck" | "grid";
}

const BlogDeckLayout = ({ blogs, ctaLabel, layout = "deck" }: BlogDeckLayoutProps) => {
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

export interface BlogsProps {
  blogs?: BlogsContent["blogs"];
  content?: BlogsContent;
  ctaLabel?: BlogsContent["ctaLabel"];
  heading?: BlogsContent["heading"];
  layout?: "deck" | "grid";
  viewAllHref?: string;
  viewAllLabel?: string;
}

export const Blogs = ({
  content = HOME_BLOGS_CONTENT,
  blogs = content.blogs,
  ctaLabel = content.ctaLabel,
  heading = content.heading,
  layout = "deck",
  viewAllHref = "/blogs",
  viewAllLabel = "View All Blogs",
}: BlogsProps = {}) => {
  const displayBlogs = blogs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-brand-gray py-12 md:py-16 lg:py-20" id="blogs">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="mb-4 flex flex-col items-center text-center lg:mb-8">
          <SectionHeader as="h2">{heading}</SectionHeader>
        </div>

        <BlogDeckLayout blogs={displayBlogs} ctaLabel={ctaLabel} layout={layout} />

        {viewAllHref && (
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href={viewAllHref}>
                {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
