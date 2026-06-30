import type { Metadata } from "next";

import { Suspense } from "react";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Carousel } from "@/components/sections/Carousel";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import {
  BLOG_CATEGORIES,
  BLOG_CONTACT,
  BLOG_HERO,
  BLOG_PAGE,
  BLOG_SERVICE_CAROUSEL,
  RAW_BLOG_POSTS,
  normalizeBlogPosts,
} from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { getStructuredPageContent } from "@/lib/cms-api";
import {
  buildCollectionPageJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  JsonLd,
  siteUrl,
} from "@/lib";

import { BlogsSection } from "./BlogsSection";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const BLOG_FALLBACK_CONTENT = {
  blogs: RAW_BLOG_POSTS,
  categories: BLOG_CATEGORIES,
  contactus: BLOG_CONTACT,
  hero: BLOG_HERO,
  page: BLOG_PAGE,
  serviceCarousel: BLOG_SERVICE_CAROUSEL,
};

const Page = async () => {
  const content = await getStructuredPageContent("/blogs", BLOG_FALLBACK_CONTENT);
  const blogs = normalizeBlogPosts(content.blogs);

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildCollectionPageJsonLd({
            description: content.page.seo.description,
            name: content.page.seo.title.split(" | ", 1)[0],
            url: "/blogs",
          }),
          buildLinkedItemListJsonLd(
            blogs
              .filter((p) => p.body)
              .slice(0, 10)
              .map((p) => ({ name: p.title, url: `${siteUrl}/blogs/${p.id}` }))
          ),
        ])}
      />
      <Header lightHeaderText />
      <Hero {...content.hero} variant={content.hero.variant as "compact" | "default"} />
      <Suspense>
        <BlogsSection blogs={blogs} categories={content.categories} />
      </Suspense>
      <Carousel
        autoplayInterval={4000}
        heading={content.serviceCarousel.heading}
        id="why-choose-us"
        layout="carousel"
      >
        {content.serviceCarousel.items.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.title} />
        ))}
      </Carousel>
      <ContactUsForm {...content.contactus} />
      <Footer />
    </main>
  );
};

export default Page;
