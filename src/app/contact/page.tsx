import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Timeline } from "@/components/sections/Timeline";
import { CONTACT_FORM, CONTACT_NEXT_STEPS, CONTACT_PAGE } from "@/content/contact/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const CINEMATIC_BG = { alt: "Contact", src: "/images/case-studies/waf.avif" } as const;
const CINEMATIC_HEADING: [string, string] = [
  "One conversation can clarify",
  "your entire growth strategy.",
];
const CINEMATIC_PRIMARY = { href: "/contact", label: "Book a Strategy Consultation" } as const;
const CINEMATIC_SECONDARY = { href: "/case-studies", label: "View Case Studies" } as const;

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header darkBackground />
      <CinematicSequence />
      <ClientLogos />
      <ContactUsForm {...CONTACT_FORM} />
      <Timeline heading={CONTACT_NEXT_STEPS.heading} phases={CONTACT_NEXT_STEPS.phases} />
      <ContactUs
        backgroundImage={CINEMATIC_BG}
        description="Tell us what you are trying to achieve. We will define the right path."
        headingLines={CINEMATIC_HEADING}
        primaryCta={CINEMATIC_PRIMARY}
        secondaryCta={CINEMATIC_SECONDARY}
      />
      <Footer />
    </main>
  );
};

export default Page;
