import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { type BlogsContent, HOME_BLOGS_CONTENT } from "@/content/home/content";

import { BlogDeckLayout } from "./BlogDeckLayout";

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
  return (
    <section className="relative overflow-hidden bg-brand-gray py-12 md:py-16 lg:py-20" id="blogs">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="mb-4 flex flex-col items-center text-center lg:mb-8">
          <Heading as="h2">{heading}</Heading>
        </div>

        <BlogDeckLayout blogs={blogs} ctaLabel={ctaLabel} layout={layout} />

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
