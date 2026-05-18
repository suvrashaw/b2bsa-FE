import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  VIDEO_EDITING_CASE_STUDIES,
  VIDEO_EDITING_DELIVERABLES,
  VIDEO_EDITING_FAQ,
  VIDEO_EDITING_HERO,
  VIDEO_EDITING_PAGE,
  VIDEO_EDITING_PRICING,
  VIDEO_EDITING_PROOF_BAR,
  VIDEO_EDITING_TIMELINE,
} from "@/content/services/detail/video-editing-services";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(VIDEO_EDITING_PAGE);

const videoEditingServicesCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Upload Your Project Brief",
  description: "",
  title: "You already have the raw material. We shape it into content people watch, understand, and act on.",
};

const videoEditingServicesRelatedServices = [
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={VIDEO_EDITING_CASE_STUDIES}
      creativePricing={VIDEO_EDITING_PRICING}
      ctaBanner={videoEditingServicesCtaBanner}
      deliverables={VIDEO_EDITING_DELIVERABLES}
      faq={VIDEO_EDITING_FAQ}
      hero={VIDEO_EDITING_HERO}
      page={VIDEO_EDITING_PAGE}
      parentPage={MEDIA_PAGE}
      pricing={VIDEO_EDITING_TIMELINE}
      proofBar={VIDEO_EDITING_PROOF_BAR}
      relatedServices={videoEditingServicesRelatedServices}
    />
  );
};

export default Page;
