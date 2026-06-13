import type { Metadata } from "next";

import { CorporateVideoCard } from "@/components/items/CorporateVideoCard";
import { CorporateVideoIndustriesSection } from "@/components/sections/CorporateVideoIndustriesSection";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ServicePage } from "@/components/templates/ServicePage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  CORPORATE_VIDEO_CASE_STUDIES,
  CORPORATE_VIDEO_CONTACT_CTA,
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_FAQ,
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_INDUSTRIES,
  CORPORATE_VIDEO_PAGE,
  CORPORATE_VIDEO_PORTFOLIO,
  CORPORATE_VIDEO_PROOF_BAR,
  CORPORATE_VIDEO_RELATED_SERVICES,
  CORPORATE_VIDEO_WHY,
} from "@/content/services/media-production/corporate-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(CORPORATE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={CORPORATE_VIDEO_CASE_STUDIES}
      contactUs={CORPORATE_VIDEO_CONTACT_CTA}
      faq={CORPORATE_VIDEO_FAQ}
      hero={CORPORATE_VIDEO_HERO}
      page={CORPORATE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <CorporateVideoIndustriesSection {...CORPORATE_VIDEO_INDUSTRIES} />
          <CardsGrid
            className="bg-[#111111] text-white"
            heading={
              <SectionHeader as="h2" className="max-w-4xl text-white lg:text-5xl">
                {CORPORATE_VIDEO_PORTFOLIO.heading}
              </SectionHeader>
            }
            headingAlign="left"
          >
            {CORPORATE_VIDEO_PORTFOLIO.items.map((item) => (
              <CorporateVideoCard item={item} key={item.title} />
            ))}
          </CardsGrid>
        </>
      }
      proofBar={CORPORATE_VIDEO_PROOF_BAR}
      relatedServices={CORPORATE_VIDEO_RELATED_SERVICES}
      services={CORPORATE_VIDEO_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={CORPORATE_VIDEO_WHY}
    />
  );
};

export default Page;
