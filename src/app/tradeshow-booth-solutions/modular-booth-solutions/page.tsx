import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { BS_PAGE } from "@/content/services/tradeshow-booth-solutions/content";
import {
  MODULAR_BOOTH_BLOGS_SECTION,
  MODULAR_BOOTHS_CASE_STUDIES,
  MODULAR_BOOTHS_CLIENT_LOGOS,
  MODULAR_BOOTHS_CONTACT_CTA,
  MODULAR_BOOTHS_DELIVERABLES,
  MODULAR_BOOTHS_FAQ,
  MODULAR_BOOTHS_HERO,
  MODULAR_BOOTHS_INTRO,
  MODULAR_BOOTHS_PAGE,
  MODULAR_BOOTHS_RANGE_SECTION,
  MODULAR_BOOTHS_WHY,
} from "@/content/services/tradeshow-booth-solutions/modular-booth-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(MODULAR_BOOTHS_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={MODULAR_BOOTHS_CASE_STUDIES}
      clientLogos={MODULAR_BOOTHS_CLIENT_LOGOS}
      contactUs={MODULAR_BOOTHS_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={MODULAR_BOOTH_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(MODULAR_BOOTH_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }

      faq={MODULAR_BOOTHS_FAQ}
      hero={MODULAR_BOOTHS_HERO}
      page={MODULAR_BOOTHS_PAGE}
      parentPage={BS_PAGE}
      secondaryServices={MODULAR_BOOTHS_RANGE_SECTION}
      secondaryServicesSectionType="carousel"
      services={MODULAR_BOOTHS_DELIVERABLES}
      showServicesCommonCta
      spotlight={MODULAR_BOOTHS_INTRO}
      why={MODULAR_BOOTHS_WHY}
    />
  );
};

export default Page;
