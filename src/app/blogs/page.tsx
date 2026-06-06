import type { Metadata } from "next";

import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import {
  BLOG_CONTACT,
  BLOG_HERO,
  BLOG_LOGOS,
  BLOG_PAGE,
  BLOG_POSTS,
  BLOG_SERVICE_CAROUSEL,
} from "@/content/blog";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

const ServiceCarouselSection = dynamic(
  () =>
    import("@/components/sections/ServiceCarouselSection").then((m) => ({
      default: m.ServiceCarouselSection,
    })),
  { ssr: false },
);

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...BLOG_HERO} compact />
      <ServiceCarouselSection {...BLOG_SERVICE_CAROUSEL} />
      <ClientLogos heading="Content Categories" logos={BLOG_LOGOS} overlap={false} />
      <Blogs {...BLOG_POSTS} layout="grid" />
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
