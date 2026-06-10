import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { ImageHero } from "@/components/sections/ImageHero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { THANK_YOU_BLOGS, THANK_YOU_HERO, THANK_YOU_SERVICES } from "@/content/thank-you";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  canonicalPath: "/thank-you",
  description:
    "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
  noIndex: true,
  title: "Thank You | B2B Sales Arrow",
});

const THANK_YOU_IMAGES = [THANK_YOU_HERO.image.src];
const THANK_YOU_PRIMARY_CTA = { href: "/services", label: THANK_YOU_HERO.primaryCtaLabel };
const THANK_YOU_SECONDARY_CTA = { href: "/blogs", label: THANK_YOU_HERO.secondaryCtaLabel };

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <ImageHero
        description={THANK_YOU_HERO.description}
        eyebrow={THANK_YOU_HERO.eyebrow}
        images={THANK_YOU_IMAGES}
        primaryCta={THANK_YOU_PRIMARY_CTA}
        secondaryCta={THANK_YOU_SECONDARY_CTA}
        title={"Thank You for\nReaching Out"}
      />
      <ServicesStack {...THANK_YOU_SERVICES} />
      <Blogs {...THANK_YOU_BLOGS} />
      <Footer />
    </main>
  );
};

export default Page;
