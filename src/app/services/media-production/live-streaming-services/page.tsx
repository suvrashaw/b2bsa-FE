import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_FAQ,
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_PAGE,
  LIVE_STREAMING_PROOF_BAR,
  LIVE_STREAMING_WHY,
} from "@/content/services/detail/live-streaming-services";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(LIVE_STREAMING_PAGE);

const liveStreamingServicesCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Plan Your Live Stream",
  description: "",
  title: "Your event. Every screen. Everywhere.",
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
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      ctaBanner={liveStreamingServicesCtaBanner}
      deliverables={LIVE_STREAMING_DELIVERABLES}
      faq={LIVE_STREAMING_FAQ}
      hero={LIVE_STREAMING_HERO}
      page={LIVE_STREAMING_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={LIVE_STREAMING_PROOF_BAR}
      relatedServices={liveStreamingServicesRelatedServices}
      why={LIVE_STREAMING_WHY}
    />
  );
};

export default Page;
