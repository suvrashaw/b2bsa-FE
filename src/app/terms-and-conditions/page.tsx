import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { ImageHero } from "@/components/sections/ImageHero";
import { TERMS_CONTACT, TERMS_FAQ, TERMS_HERO } from "@/content/terms";
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
      <ImageHero
        description={TERMS_HERO.description}
        eyebrow={TERMS_HERO.eyebrow}
        images={TERMS_IMAGES}
        title={"Terms &\nConditions"}
      />
      <FAQ {...TERMS_FAQ} />
      <ContactUs {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
