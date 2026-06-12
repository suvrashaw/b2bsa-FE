import type { Metadata } from "next";

import { BlogsCarousel } from "@/components/sections/BlogsCarousel";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { CardsSection } from "@/components/sections/CardsSection";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_BUILDER_BLOG_POSTS,
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_RELATED_SERVICES,
} from "@/content/services/detail/trade-show-booth-builder";
import {
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

const pageMetadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

export const metadata: Metadata = {
  ...pageMetadata,
  title: {
    absolute: BOOTH_BUILDER_PAGE.seo.title,
  },
};

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      closingSections={
        <>
          <BoothWhyChooseUs {...BOOTH_DESIGN_WHY_CHOOSE_US} />
          <BlogsCarousel
            heading={BOOTH_BUILDER_BLOGS_SECTION.heading}
            posts={BOOTH_BUILDER_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_BUILDER_FAQ} />
          <RelatedServices className="py-12" services={BOOTH_BUILDER_RELATED_SERVICES} />
          <ContactCinematicCTA {...BOOTH_BUILDER_CONTACT_CTA} />
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      hero={BOOTH_BUILDER_HERO}
      middleSections={<CardsSection {...BOOTH_BUILDER_FUTURE_READY} />}
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <StickyScroll
          heading="What We Do in Exhibition Stand Builder"
          reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
            description: item.descriptions.join(" "),
            id: item.id,
            image: item.image,
            title: item.heading,
          }))}
          showImagePanel
        />
      }
      process={BOOTH_BUILDER_PROCESS}
      proofBar={BOOTH_BUILDER_PROOF_BAR}
      proofBarClassName="[&_p]:max-w-5xl"
      proofBarDescription={
        <>
          India is one of the fastest-growing exhibition markets, hosting major trade shows across
          industries such as pharma, manufacturing, construction, and consumer goods. Exhibiting in
          India offers access to a large and diverse business audience, making it a key destination
          for global brands.
          <br />
          <br />
          B2B Sales Arrow is an experienced trade show booth builder in India, helping international
          exhibitors design and build impactful exhibition stands across major Indian exhibition
          cities. We specialize in delivering high-quality booth design and fabrication services
          while ensuring smooth coordination for clients managing projects remotely.
        </>
      }
      proofBarHeading="Exhibition stand builder and Turnkey Solutions"
    />
  );
};

export default Page;
