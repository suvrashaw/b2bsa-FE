import type { Metadata } from "next";

import { BoothSizesFeature } from "@/components/sections/BoothSizesFeature";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhyChooseUsHighlights } from "@/components/sections/WhyChooseUsHighlights";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_CREATIVE_PRICING,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_FORMATS_SECTION,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_RELATED_SERVICES,
  BOOTH_DESIGN_SPOTLIGHT,
  BOOTH_DESIGN_WHY,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      closingSections={
        <>
          <RelatedServices services={BOOTH_DESIGN_RELATED_SERVICES} />
          <WhyChooseUsHighlights {...BOOTH_DESIGN_WHY_CHOOSE_US} />
          <UpcomingEvents />
          <RentalBlogsSection
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_DESIGN_FAQ} />
          <ContactCinematicCTA {...BOOTH_DESIGN_CONTACT_CTA} />
        </>
      }
      creativePricing={BOOTH_DESIGN_CREATIVE_PRICING}
      deliverables={BOOTH_DESIGN_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={BOOTH_DESIGN_FAQ}
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <BoothSizesFeature
          eyebrow={BOOTH_DESIGN_FORMATS_SECTION.eyebrow}
          heading={BOOTH_DESIGN_FORMATS_SECTION.heading}
          items={BOOTH_DESIGN_FORMATS_SECTION.services}
        />
      }
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_SPOTLIGHT}
      why={BOOTH_DESIGN_WHY}
    />
  );
};

export default Page;
