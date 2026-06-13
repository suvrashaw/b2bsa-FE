import type { Metadata } from "next";

import { FAQCard } from "@/components/items/FAQCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  EVENT_VIDEO_CASE_STUDIES,
  EVENT_VIDEO_CREATIVE_PRICING,
  EVENT_VIDEO_DELIVERABLES,
  EVENT_VIDEO_FAQ,
  EVENT_VIDEO_HERO,
  EVENT_VIDEO_PAGE,
  EVENT_VIDEO_PROOF_BAR,
  EVENT_VIDEO_WHY,
} from "@/content/services/detail/event-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_VIDEO_PAGE);

const eventVideoContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Extend Your ROI",
  description: "Capture it properly. Make your event work for months after the show closes.",
  headingLines: ["Capture It Properly.", "Make It Last."] as [string, string],
  primaryCta: { href: "/contact", label: "Book Event Video Production" },
};

const eventVideoProductionRelatedServices = [
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
  {
    href: "/services/media-production/event-live-streaming-services",
    title: "Event Live Streaming Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_VIDEO_CASE_STUDIES}
      closingSections={
        <>
          <CardSection description={EVENT_VIDEO_FAQ.description} heading={EVENT_VIDEO_FAQ.heading} id="faq" layout="carousel">
            {EVENT_VIDEO_FAQ.faqs.map((f) => (
              <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
            ))}
          </CardSection>
          <RelatedServices services={eventVideoProductionRelatedServices} />
          <ContactUs {...eventVideoContactCta} />
        </>
      }
      creativePricing={EVENT_VIDEO_CREATIVE_PRICING}
      deliverables={EVENT_VIDEO_DELIVERABLES}
      faq={EVENT_VIDEO_FAQ}
      hero={EVENT_VIDEO_HERO}
      page={EVENT_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={EVENT_VIDEO_PROOF_BAR}
      why={EVENT_VIDEO_WHY}
    />
  );
};

export default Page;
