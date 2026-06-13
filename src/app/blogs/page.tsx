import type { Metadata } from "next";

import { Suspense } from "react";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlogsDirectory } from "@/components/sections/BlogsDirectory";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import {
  BLOG_CONTACT,
  BLOG_HERO,
  BLOG_PAGE,
  BLOG_POSTS,
  BLOG_SERVICE_CAROUSEL,
} from "@/content/blogs/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const BLOG_HERO_IMAGES = ["/images/blog/hero.avif"];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header lightHeaderText />
      <Hero
        description={BLOG_HERO.description}
        images={BLOG_HERO_IMAGES}
        title="Blogs and Articles"
        variant="compact"
      />
      <CardSection
        autoplayInterval={4000}
        heading={BLOG_SERVICE_CAROUSEL.heading}
        id="why-choose-us"
        layout="carousel"
      >
        {BLOG_SERVICE_CAROUSEL.items.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.title} />
        ))}
      </CardSection>
      <Suspense>
        <BlogsDirectory blogs={BLOG_POSTS.blogs} />
      </Suspense>
      <ContactUsForm {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
