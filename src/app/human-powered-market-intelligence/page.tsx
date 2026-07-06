import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  HPMI_BLOGS_SECTION,
  MARKET_INTELLIGENCE_CARDS,
  MARKET_INTELLIGENCE_CASE_STUDIES,
  MARKET_INTELLIGENCE_CLIENT_LOGOS,
  MARKET_INTELLIGENCE_CONTACT_CTA,
  MARKET_INTELLIGENCE_DELIVERABLES,
  MARKET_INTELLIGENCE_FAQ,
  MARKET_INTELLIGENCE_HERO,
  MARKET_INTELLIGENCE_INTRO,
  MARKET_INTELLIGENCE_PAGE,
} from "@/content/services/human-powered-market-intelligence/content";

export const metadata: Metadata = getMarketingPageMetadata(MARKET_INTELLIGENCE_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={MARKET_INTELLIGENCE_CASE_STUDIES}
      clientLogos={MARKET_INTELLIGENCE_CLIENT_LOGOS}
      contactUs={MARKET_INTELLIGENCE_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={HPMI_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(HPMI_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }

      faq={MARKET_INTELLIGENCE_FAQ}
      hero={MARKET_INTELLIGENCE_HERO}
      page={MARKET_INTELLIGENCE_PAGE}
      secondaryServices={MARKET_INTELLIGENCE_CARDS}
      secondaryServicesSectionType="grid"
      services={MARKET_INTELLIGENCE_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={MARKET_INTELLIGENCE_INTRO}
    />
  );
};

export default Page;
