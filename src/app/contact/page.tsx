import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/ui/Timeline";
import {
  CONTACT_CTA,
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_NEXT_STEPS,
  CONTACT_PAGE,
} from "@/content/contact";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...CONTACT_HERO} />
      <ClientLogos />
      <ContactUs {...CONTACT_FORM} />
      <Timeline
        data={CONTACT_NEXT_STEPS.items}
        description={CONTACT_NEXT_STEPS.description}
        heading={CONTACT_NEXT_STEPS.heading}
      />
      <CTABanner {...CONTACT_CTA} />
      <Footer />
    </main>
  );
};

export default Page;
