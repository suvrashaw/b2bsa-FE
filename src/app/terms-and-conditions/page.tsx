import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { TERMS_CONTACT, TERMS_FAQ, TERMS_HERO } from "@/content/terms";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  canonicalPath: "/terms-and-conditions",
  description:
    "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
  title: "Terms & Conditions | B2B Sales Arrow",
});

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
