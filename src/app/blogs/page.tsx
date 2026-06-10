import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogCategories } from "@/components/sections/BlogCategories";
import { Blogs } from "@/components/sections/Blogs";
import { ContactUs } from "@/components/sections/ContactUs";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { TextHero } from "@/components/sections/TextHero";
import {
  BLOG_CATEGORIES,
  BLOG_CONTACT,
  BLOG_HERO,
  BLOG_PAGE,
  BLOG_POSTS,
  BLOG_SERVICE_CAROUSEL,
} from "@/content/blog";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header lightHeaderText />
      <TextHero {...BLOG_HERO} />
      <BlogCategories />
      <BoothWhyChooseUs {...BLOG_SERVICE_CAROUSEL as any} layout="carousel" />
      <Blogs {...BLOG_POSTS} layout="grid" />
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
