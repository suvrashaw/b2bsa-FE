import type { Metadata } from "next";

import { FAQCard } from "@/components/items/FAQCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_FAQ,
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_PAGE,
  LIVE_STREAMING_PROOF_BAR,
  LIVE_STREAMING_SPOTLIGHT,
  LIVE_STREAMING_WHY,
  LIVE_STREAMING_WHY_CHOOSE_US,
} from "@/content/services/media-production/live-streaming-services/content";

export const metadata: Metadata = getMarketingPageMetadata(LIVE_STREAMING_PAGE);

const liveStreamingContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Go Global",
  description: "Your event. Every screen. Everywhere.",
  headingLines: ["Your Event.", "Every Screen. Everywhere."] as [string, string],
  primaryCta: { href: "/contact", label: "Plan Your Live Stream" },
};

const liveStreamingServicesRelatedServices = [
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      afterSpotlightSections={<StickyScroll {...LIVE_STREAMING_WHY_CHOOSE_US} />}
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      clientLogosHeading="Trusted by Global Brands for Event Live Streaming Services"
      closingSections={
        <>
          <CardSection heading={LIVE_STREAMING_FAQ.heading} id="faq" layout="carousel">
            {LIVE_STREAMING_FAQ.faqs.map((f) => (
              <FAQCard answer={f.answer} key={f.id} question={f.question} />
            ))}
          </CardSection>
          <RelatedServices services={liveStreamingServicesRelatedServices} />
          <ContactUs {...liveStreamingContactCta} />
        </>
      }
      deliverables={LIVE_STREAMING_DELIVERABLES}
      faq={LIVE_STREAMING_FAQ}
      hero={LIVE_STREAMING_HERO}
      page={LIVE_STREAMING_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={LIVE_STREAMING_PROOF_BAR}
      spotlight={LIVE_STREAMING_SPOTLIGHT}
      why={LIVE_STREAMING_WHY}
    />
  );
};

export default Page;
