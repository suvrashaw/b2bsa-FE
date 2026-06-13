import type { Metadata } from "next";

import { FAQCard } from "@/components/items/FAQCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import { TERMS_CONTACT, TERMS_FAQ, TERMS_HERO } from "@/content/terms-and-conditions/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  canonicalPath: "/terms-and-conditions",
  description:
    "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
  title: "Terms & Conditions | B2B Sales Arrow",
});

const TERMS_IMAGES = [TERMS_HERO.image.src];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero
        description={TERMS_HERO.description}
        images={TERMS_IMAGES}
        title={"Terms &\nConditions"}
      />
      <CardSection heading={TERMS_FAQ.heading} id="faq" layout="carousel">
        {TERMS_FAQ.faqs.map((f) => (
          <FAQCard answer={f.answer} key={f.id} question={f.question} />
        ))}
      </CardSection>
      <ContactUsForm {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
