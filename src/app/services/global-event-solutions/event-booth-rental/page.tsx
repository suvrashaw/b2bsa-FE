import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_RENTAL_CASE_STUDIES,
  BOOTH_RENTAL_FAQ,
  BOOTH_RENTAL_FORMATS,
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_PAGE,
  BOOTH_RENTAL_PROCESS,
  BOOTH_RENTAL_PROOF_BAR,
  BOOTH_RENTAL_WHY,
} from "@/content/services/detail/event-booth-rental";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_RENTAL_PAGE);

const eventBoothRentalCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Check Rental Availability",
  description: "",
  title:
    "Fast does not have to feel temporary. A properly configured trade show rental booth represents your brand credibly — at a fraction of the custom build timeline.",
};

const eventBoothRentalRelatedServices = [
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/trade-show-booth-builder",
    title: "Trade Show Booth Builder",
  },
  {
    href: "/services/global-event-solutions/modular-portable-booths",
    title: "Modular and Portable Booths",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      ctaBanner={eventBoothRentalCtaBanner}
      faq={BOOTH_RENTAL_FAQ}
      hero={BOOTH_RENTAL_HERO}
      page={BOOTH_RENTAL_PAGE}
      parentPage={GES_PAGE}
      pricing={BOOTH_RENTAL_FORMATS}
      process={BOOTH_RENTAL_PROCESS}
      proofBar={BOOTH_RENTAL_PROOF_BAR}
      relatedServices={eventBoothRentalRelatedServices}
      why={BOOTH_RENTAL_WHY}
    />
  );
};

export default Page;
