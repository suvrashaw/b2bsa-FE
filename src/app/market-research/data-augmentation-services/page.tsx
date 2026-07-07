import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_BLOGS_SECTION,
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_CLIENT_LOGOS,
  DATA_AUGMENTATION_CONTACT_CTA,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_INTRO,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROCESS,
} from "@/content/services/market-research/data-augmentation-services/content";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      clientLogos={DATA_AUGMENTATION_CLIENT_LOGOS}
      contactUs={DATA_AUGMENTATION_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={DATA_AUGMENTATION_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(DATA_AUGMENTATION_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }

      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      process={DATA_AUGMENTATION_PROCESS}
      services={DATA_AUGMENTATION_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={DATA_AUGMENTATION_INTRO}
    />
  );
};

export default Page;
