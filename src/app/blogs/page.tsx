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
  BLOG_HERO,
  BLOG_PAGE,
  BLOG_SERVICE_CAROUSEL,
  SHARED_BLOG_POSTS,
} from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  buildCollectionPageJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  JsonLd,
  siteUrl,
} from "@/lib";

import { BlogsSection } from "./BlogsSection";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildCollectionPageJsonLd({
            description: BLOG_PAGE.seo.description,
            name: BLOG_PAGE.seo.title.split(" | ", 1)[0],
            url: "/blogs",
          }),
          buildLinkedItemListJsonLd(
            SHARED_BLOG_POSTS.filter((p) => p.body)
              .slice(0, 10)
              .map((p) => ({ name: p.title, url: `${siteUrl}/blogs/${p.id}` }))
          ),
        ])}
      />
      <Header lightHeaderText />
      <Hero {...BLOG_HERO} variant={BLOG_HERO.variant as "compact" | "default"} />
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
