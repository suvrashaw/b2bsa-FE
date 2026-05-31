import type { Metadata } from "next";

import { BoothSizesFeature } from "@/components/sections/BoothSizesFeature";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FutureReadyStands } from "@/components/sections/FutureReadyStands";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { WhyChooseUsHighlights } from "@/components/sections/WhyChooseUsHighlights";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_BUILDER_BLOG_POSTS,
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_DELIVERABLES,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FORMATS_SECTION,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_INTRO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_RELATED_SERVICES,
  BOOTH_BUILDER_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-builder";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      closingSections={
        <>
          <WhyChooseUsHighlights {...BOOTH_BUILDER_WHY_CHOOSE_US} />
          <RentalBlogsSection
            heading={BOOTH_BUILDER_BLOGS_SECTION.heading}
            posts={BOOTH_BUILDER_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_BUILDER_FAQ} />
          <RelatedServices className="py-12" services={BOOTH_BUILDER_RELATED_SERVICES} />
          <ContactCinematicCTA {...BOOTH_BUILDER_CONTACT_CTA} />
        </>
      }
      deliverables={BOOTH_BUILDER_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={BOOTH_BUILDER_FAQ}
      hero={BOOTH_BUILDER_HERO}
      middleSections={<FutureReadyStands {...BOOTH_BUILDER_FUTURE_READY} />}
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <BoothSizesFeature
          eyebrow={BOOTH_BUILDER_FORMATS_SECTION.eyebrow}
          heading={BOOTH_BUILDER_FORMATS_SECTION.heading}
          items={BOOTH_BUILDER_FORMATS_SECTION.services}
        />
      }
      process={BOOTH_BUILDER_PROCESS}
      proofBar={BOOTH_BUILDER_PROOF_BAR}
      spotlight={BOOTH_BUILDER_INTRO}
    />
  );
};

export default Page;
