import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_FAQ,
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_INTRODUCTION,
  LIVE_STREAMING_PAGE,
  LIVE_STREAMING_PROOF_BAR,
  LIVE_STREAMING_SPOTLIGHT,
  LIVE_STREAMING_WHY,
} from "@/content/services/detail/live-streaming-services";
import { MEDIA_PAGE } from "@/content/services/media-production";

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
  {
    href: "/services/media-production/video-editing-services",
    title: "Video Editing Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      afterSpotlightSections={<WhoWeAre {...LIVE_STREAMING_INTRODUCTION} />}
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      clientLogosHeading="Trusted by Global Brands for Event Live Streaming Services"
      closingSections={
        <>
          <FAQ {...LIVE_STREAMING_FAQ} />
          <RelatedServices services={liveStreamingServicesRelatedServices} />
          <ContactCinematicCTA {...liveStreamingContactCta} />
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
