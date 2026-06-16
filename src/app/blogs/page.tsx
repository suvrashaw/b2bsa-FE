import type { Metadata } from "next";

import { Suspense } from "react";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Carousel } from "@/components/sections/Carousel";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import {
  BLOG_CONTACT,
  BLOG_PAGE,
  BLOG_SERVICE_CAROUSEL,
} from "@/content/blogs/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

import { BlogsSection } from "./BlogsSection";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const BLOG_HERO_IMAGES = ["/images/blog/hero.avif"];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header lightHeaderText />
      <Hero
        centered
        images={BLOG_HERO_IMAGES}
        title="Blogs and Articles"
        variant="compact"
      />
      <Suspense>
        <BlogsSection />
      </Suspense>
      <Carousel
        autoplayInterval={4000}
        heading={BLOG_SERVICE_CAROUSEL.heading}
        id="why-choose-us"
        layout="carousel"
      >
        {BLOG_SERVICE_CAROUSEL.items.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.title} />
        ))}
      </Carousel>
      <ContactUsForm {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
