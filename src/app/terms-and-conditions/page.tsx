import type { Metadata } from "next";

import { getCmsPageMetadata } from "@/cms/mock/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { TERMS_CONTACT, TERMS_FAQ, TERMS_HERO } from "@/content/terms";

export const metadata: Metadata = getCmsPageMetadata("terms-and-conditions");

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...TERMS_HERO} />
      <FAQ {...TERMS_FAQ} />
      <ContactUs {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
