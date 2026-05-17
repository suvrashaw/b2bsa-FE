import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { BLOG_CONTACT, BLOG_HERO, BLOG_LOGOS, BLOG_PAGE, BLOG_POSTS } from "@/content/blog";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(BLOG_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...BLOG_HERO} />
      <ClientLogos heading="Content Categories" logos={BLOG_LOGOS} overlap={false} />
      <Blogs {...BLOG_POSTS} layout="grid" />
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
