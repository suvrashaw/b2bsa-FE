import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { THANK_YOU_BLOGS, THANK_YOU_HERO, THANK_YOU_SERVICES } from "@/content/thank-you";

export const metadata: Metadata = buildPageMetadata({
  canonicalPath: "/thank-you",
  description:
    "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
  noIndex: true,
  title: "Thank You | B2B Sales Arrow",
});

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
