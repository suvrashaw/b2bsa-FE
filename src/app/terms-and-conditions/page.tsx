import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  TERMS_CONTACT,
  TERMS_FAQ,
  TERMS_HERO,
  TERMS_PAGE,
} from "@/content/terms-and-conditions/content";

export const metadata: Metadata = getMarketingPageMetadata(TERMS_PAGE);

const TERMS_IMAGES = [TERMS_HERO.image.src];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero description={TERMS_HERO.description} images={TERMS_IMAGES} title={TERMS_HERO.title} />
      <FAQ faqs={TERMS_FAQ.faqs} heading={TERMS_FAQ.heading} />
      <ContactUsForm {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
