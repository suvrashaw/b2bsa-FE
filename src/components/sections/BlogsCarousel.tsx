"use client";

import Link from "next/link";

import type { SharedBlogPost } from "@/content/blogs";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { CardSection } from "@/components/sections/CardSection";
import { Button } from "@/components/ui/Button";

export interface BlogsCarouselProps {
  heading: string;
  posts: SharedBlogPost[];
}

export const BlogsCarousel = ({ heading, posts }: BlogsCarouselProps) => {
  if (posts.length === 0) return null;

  return (
    <CardSection
      cols={4}
      heading={heading}
      headingAction={
        <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
          <Link href="/blogs">View All Blogs</Link>
        </Button>
      }
      headingAlign="left"
      id="blogs"
      layout="carousel"
    >
      {posts.map((post) => (
        <BlogsCarouselCard key={post.id} post={post} />
      ))}
    </CardSection>
  );
};
