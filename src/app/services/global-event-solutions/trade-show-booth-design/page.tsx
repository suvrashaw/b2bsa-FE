import type { Metadata } from "next";

import { BoothScrollShowcase } from "@/components/sections/BoothScrollShowcase";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_RELATED_SERVICES,
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_SPOTLIGHT,
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
          <BoothWhyChooseUs {...BOOTH_DESIGN_WHY_CHOOSE_US} />
          <UpcomingEvents />
          <RentalBlogsSection
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_DESIGN_FAQ} />
          <RelatedServices services={BOOTH_DESIGN_RELATED_SERVICES} />
          <ContactCinematicCTA {...BOOTH_DESIGN_CONTACT_CTA} />
        </>
      }
      deliverables={BOOTH_DESIGN_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={BOOTH_DESIGN_FAQ}
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={<BoothScrollShowcase heading="Booth Sizes and Formats We Design" items={BOOTH_DESIGN_SHOWCASE_ITEMS} />}
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      proofBarDescription={<>At B2B Sales Arrow, we specialize in designing exceptional booths that attract, engage, and drive meaningful conversations. With our expertise in AI-VR integration, we bring your brand to life in ways that leave a lasting impression. We&apos;ve delivered exceptional experiences across industries, from tech giants to global brands, creating <strong>tradeshow booth design</strong> that aren&apos;t just seen—they&apos;re remembered.</>}
      proofBarHeading="Introduction to Our Services"
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_SPOTLIGHT}
    />
  );
};

export default Page;
