import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MODULAR_BOOTHS_CASE_STUDIES,
  MODULAR_BOOTHS_FAQ,
  MODULAR_BOOTHS_FORMATS,
  MODULAR_BOOTHS_HERO,
  MODULAR_BOOTHS_PAGE,
  MODULAR_BOOTHS_PROOF_BAR,
  MODULAR_BOOTHS_WHY,
} from "@/content/services/detail/modular-portable-booths";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(MODULAR_BOOTHS_PAGE);

const modularPortableBoothsCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Get a Modular Booth Quote",
  description: "",
  title: "One booth system. Every event. Any market.",
};

const modularPortableBoothsRelatedServices = [
  {
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/trade-show-booth-builder",
    title: "Trade Show Booth Builder",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={MODULAR_BOOTHS_CASE_STUDIES}
      ctaBanner={modularPortableBoothsCtaBanner}
      faq={MODULAR_BOOTHS_FAQ}
      hero={MODULAR_BOOTHS_HERO}
      page={MODULAR_BOOTHS_PAGE}
      parentPage={GES_PAGE}
      pricing={MODULAR_BOOTHS_FORMATS}
      proofBar={MODULAR_BOOTHS_PROOF_BAR}
      relatedServices={modularPortableBoothsRelatedServices}
      why={MODULAR_BOOTHS_WHY}
    />
  );
}

export default Page;
