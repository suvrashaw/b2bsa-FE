"use client";

import { useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { BlogCard, BlogCardGrid } from "@/components/items/BlogCard";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type BlogsContent, HOME_BLOGS_CONTENT } from "@/content/home";

export interface BlogsProps {
  blogs?: BlogsContent["blogs"];
  content?: BlogsContent;
  ctaLabel?: BlogsContent["ctaLabel"];
  eyebrow?: BlogsContent["eyebrow"];
  heading?: BlogsContent["heading"];
  headingHighlight?: string;
  layout?: "deck" | "grid";
  viewAllHref?: string;
  viewAllLabel?: string;
}

const getBlogHref = (id: number | string, href?: string) => href ?? `/blogs/${id}`;

export const Blogs = ({
  content = HOME_BLOGS_CONTENT,
  blogs = content.blogs,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  heading = content.heading,
  headingHighlight = content.headingHighlight,
  layout = "deck",
  viewAllHref = "/blogs",
  viewAllLabel = "View All Blogs",
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
        <div className="mb-4 flex flex-col items-center text-center lg:mb-8">
          {eyebrow ? <Eyebrow variant="primary">{eyebrow}</Eyebrow> : null}
          <Heading as="h2" highlight={headingHighlight}>{heading}</Heading>
        </div>

        {layout === "grid" ? (
          <div className="mt-8 mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link className="block h-full" href={getBlogHref(blog.id, blog.href)} key={blog.id}>
                <BlogCardGrid blog={blog} />
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="perspective-1000 relative mx-auto mt-8 mb-6 flex h-[800px] w-full max-w-3xl cursor-pointer items-center justify-center lg:mt-10 lg:mb-10 lg:h-[580px]"
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

        {viewAllHref && (
          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
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
