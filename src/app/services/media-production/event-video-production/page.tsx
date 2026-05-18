import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
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

const eventVideoProductionCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Book Event Video Production",
  description: "",
  title: "Capture it properly. Make your event work for months after the show closes.",
};

const eventVideoProductionRelatedServices = [
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
  {
    href: "/services/media-production/video-editing-services",
    title: "Video Editing Services",
  },
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_VIDEO_CASE_STUDIES}
      creativePricing={EVENT_VIDEO_CREATIVE_PRICING}
      ctaBanner={eventVideoProductionCtaBanner}
      deliverables={EVENT_VIDEO_DELIVERABLES}
      faq={EVENT_VIDEO_FAQ}
      hero={EVENT_VIDEO_HERO}
      page={EVENT_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={EVENT_VIDEO_PROOF_BAR}
      relatedServices={eventVideoProductionRelatedServices}
      why={EVENT_VIDEO_WHY}
    />
  );
};

export default Page;
