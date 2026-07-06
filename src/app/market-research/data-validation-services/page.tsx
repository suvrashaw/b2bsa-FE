import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_VALIDATION_BLOGS_SECTION,
  DATA_VALIDATION_CASE_STUDIES,
  DATA_VALIDATION_CLIENT_LOGOS,
  DATA_VALIDATION_CONTACT_CTA,
  DATA_VALIDATION_DELIVERABLES,
  DATA_VALIDATION_FAQ,
  DATA_VALIDATION_HERO,
  DATA_VALIDATION_INTRO,
  DATA_VALIDATION_PAGE,
  DATA_VALIDATION_PROCESS,
} from "@/content/services/market-research/data-validation-services/content";

export const metadata: Metadata = getMarketingPageMetadata(DATA_VALIDATION_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={DATA_VALIDATION_CASE_STUDIES}
      clientLogos={DATA_VALIDATION_CLIENT_LOGOS}
      contactUs={DATA_VALIDATION_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={DATA_VALIDATION_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(DATA_VALIDATION_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }

      faq={DATA_VALIDATION_FAQ}
      hero={DATA_VALIDATION_HERO}
      page={DATA_VALIDATION_PAGE}
      process={DATA_VALIDATION_PROCESS}
      services={DATA_VALIDATION_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={DATA_VALIDATION_INTRO}
    />
  );
};

export default Page;
