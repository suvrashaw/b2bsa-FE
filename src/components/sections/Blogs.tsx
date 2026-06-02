"use client";

import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { BlogCard, BlogCardGrid } from "@/components/ui/BlogCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type BlogsContent, HOME_BLOGS_CONTENT } from "@/content/home";

export interface BlogsProps {
  blogs?: BlogsContent["blogs"];
  content?: BlogsContent;
  ctaLabel?: BlogsContent["ctaLabel"];
  eyebrow?: BlogsContent["eyebrow"];
  heading?: BlogsContent["heading"];
  layout?: "deck" | "grid";
}

const getBlogHref = (id: number | string, href?: string) => href ?? `/blogs/${id}`;

export const Blogs = ({
  content = HOME_BLOGS_CONTENT,
  blogs = content.blogs,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  heading = content.heading,
  layout = "deck",
}: BlogsProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "center center"],
    target: containerRef,
  });

  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-brand-gray py-20" id="blogs" ref={containerRef}>
      <div className="container mx-auto px-8">
        <div className="mb-4 flex flex-col items-start text-left lg:mb-8">
          <Eyebrow variant="primary">{eyebrow}</Eyebrow>
          <Heading as="h2" className="text-center">{heading}</Heading>
        </div>

        {layout === "grid" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link href={getBlogHref(blog.id, blog.href)} key={blog.id}>
                <BlogCardGrid blog={blog} />
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="perspective-1000 relative mx-auto flex h-[800px] w-full max-w-3xl cursor-pointer items-center justify-center lg:h-[450px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
        )}
      </div>
    </section>
  );
};
