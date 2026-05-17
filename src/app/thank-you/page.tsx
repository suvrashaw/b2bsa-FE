import type { Metadata } from "next";

import { getCmsPageMetadata } from "@/cms/mock/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { THANK_YOU_BLOGS, THANK_YOU_HERO, THANK_YOU_SERVICES } from "@/content/thank-you";

export const metadata: Metadata = getCmsPageMetadata("thank-you");

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...THANK_YOU_HERO} />
      <OurServices {...THANK_YOU_SERVICES} />
      <Blogs {...THANK_YOU_BLOGS} />
      <Footer />
    </main>
  );
};

export default Page;
