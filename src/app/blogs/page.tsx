import type { Metadata } from "next";

import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogsDirectory } from "@/components/sections/BlogsDirectory";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactUs } from "@/components/sections/ContactUs";
import { ImageHero } from "@/components/sections/ImageHero";
import {
  BLOG_CONTACT,
  BLOG_HERO,
  BLOG_PAGE,
  BLOG_POSTS,
  BLOG_SERVICE_CAROUSEL,
} from "@/content/blog";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const BLOG_HERO_IMAGES = ["/images/blog/hero.avif"];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header lightHeaderText />
      <ImageHero
        description={BLOG_HERO.description}
        images={BLOG_HERO_IMAGES}
        title="Blogs and Articles"
        variant="compact"
      />
      <BoothWhyChooseUs
        heading={BLOG_SERVICE_CAROUSEL.heading}
        items={BLOG_SERVICE_CAROUSEL.items}
        layout="carousel"
      />
      <Suspense>
        <BlogsDirectory blogs={BLOG_POSTS.blogs} />
      </Suspense>
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
