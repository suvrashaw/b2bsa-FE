import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Timeline } from "@/components/sections/Timeline";
import {
  CONTACT_FORM,
  CONTACT_NEXT_STEPS,
  CONTACT_PAGE,
  CONTACT_US,
} from "@/content/contact-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { buildLocalBusinessJsonLd } from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <Header darkBackground />
      <CinematicSequence
        frameCount={60}
        frameUrlTemplate="/media/contact/hero/ezgif-frame-%d.jpg"
      />
      <ClientLogos />
      <ContactUsForm {...CONTACT_FORM} />
      <Timeline heading={CONTACT_NEXT_STEPS.heading} phases={CONTACT_NEXT_STEPS.phases} />
      <ContactUs {...CONTACT_US} />
      <Footer />
    </main>
  );
};

export default Page;
