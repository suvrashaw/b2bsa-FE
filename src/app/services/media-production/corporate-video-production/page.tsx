import type { Metadata } from "next";
import Link from "next/link";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { CaseStudiesPortfolio } from "@/components/sections/CaseStudiesPortfolio";
import { IndustriesAlt } from "@/components/sections/IndustriesAlt";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  CORPORATE_VIDEO_CONTACT_CTA,
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_FAQ,
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_INDUSTRIES,
  CORPORATE_VIDEO_PAGE,
  CORPORATE_VIDEO_PORTFOLIO,
  CORPORATE_VIDEO_INTRO,
  CORPORATE_VIDEO_RELATED_SERVICES,
  CORPORATE_VIDEO_WHY,
  CORPORATE_VIDEO_CLIENT_LOGOS,
  CORPORATE_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/corporate-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(CORPORATE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      clientLogos={CORPORATE_VIDEO_CLIENT_LOGOS}
      contactUs={CORPORATE_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={CORPORATE_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us">
            {CORPORATE_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading="Latest Insights on Corporate Video Production & Brand Storytelling"
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Corporate Video Production"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORPORATE_VIDEO_FAQ}
      faqVariant="accordion"
      hero={CORPORATE_VIDEO_HERO}
      page={CORPORATE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <IndustriesAlt {...CORPORATE_VIDEO_INDUSTRIES} />
          <CaseStudiesPortfolio {...CORPORATE_VIDEO_PORTFOLIO} />
        </>
      }
      spotlight={CORPORATE_VIDEO_INTRO}
      relatedServices={CORPORATE_VIDEO_RELATED_SERVICES}
      services={CORPORATE_VIDEO_DELIVERABLES}
      servicesSectionType="carousel"
      why={CORPORATE_VIDEO_WHY}
    />
  );
};

export default Page;
