import type { Metadata } from "next";

import { BoothScrollShowcase } from "@/components/sections/BoothScrollShowcase";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { RentVsBuySection } from "@/components/sections/RentVsBuySection";
import { WhyChooseUsHighlights } from "@/components/sections/WhyChooseUsHighlights";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_RENTAL_BLOGS_SECTION,
  BOOTH_RENTAL_CASE_STUDIES,
  BOOTH_RENTAL_CONTACT_CTA,
  BOOTH_RENTAL_FAQ,
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_PAGE,
  BOOTH_RENTAL_PROCESS,
  BOOTH_RENTAL_PROOF_BAR,
  BOOTH_RENTAL_RELATED_SERVICES,
  BOOTH_RENTAL_RENT_VS_BUY,
  BOOTH_RENTAL_WHY,
  BOOTH_RENTAL_WHY_CHOOSE_US,
} from "@/content/services/detail/event-booth-rental";
import { BOOTH_DESIGN_SHOWCASE_ITEMS } from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_RENTAL_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      closingSections={
        <>
          {/* Normalized spacing */}
          <RelatedServices services={BOOTH_RENTAL_RELATED_SERVICES} />
          <WhyChooseUsHighlights {...BOOTH_RENTAL_WHY_CHOOSE_US} />
          <RentalBlogsSection
            heading={BOOTH_RENTAL_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_RENTAL_FAQ} />
          <ContactCinematicCTA {...BOOTH_RENTAL_CONTACT_CTA} />
        </>
      }
      faq={BOOTH_RENTAL_FAQ}
      hero={BOOTH_RENTAL_HERO}
      middleSections={
        <RentVsBuySection
          description={BOOTH_RENTAL_RENT_VS_BUY.description}
          heading={BOOTH_RENTAL_RENT_VS_BUY.heading}
          reasons={BOOTH_RENTAL_RENT_VS_BUY.reasons}
        />
      }
      page={BOOTH_RENTAL_PAGE}
      parentPage={GES_PAGE}
      process={BOOTH_RENTAL_PROCESS}
      preProcessSections={<BoothScrollShowcase heading="Our Rental Booth Range" items={BOOTH_DESIGN_SHOWCASE_ITEMS} />}
      proofBar={BOOTH_RENTAL_PROOF_BAR}
      why={BOOTH_RENTAL_WHY}
    />
  );
};

export default Page;
