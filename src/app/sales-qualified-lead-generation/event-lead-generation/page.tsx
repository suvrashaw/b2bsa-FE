import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
import { LeadPipelineSection } from "@/components/sections/LeadPipelineSection";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { SQL_PAGE } from "@/content/services/sales-qualified-lead-generation/content";
import {
  EVENT_LEAD_CASE_STUDIES,
  EVENT_LEAD_CLIENT_LOGOS,
  EVENT_LEAD_CONTACT_CTA,
  EVENT_LEAD_FAQ,
  EVENT_LEAD_GEN_BLOGS_SECTION,
  EVENT_LEAD_HERO,
  EVENT_LEAD_INTRO,
  EVENT_LEAD_PAGE,
  EVENT_LEAD_PIPELINE,
  EVENT_LEAD_PROCESS,
  EVENT_LEAD_SERVICES,
  EVENT_LEAD_WHY,
} from "@/content/services/sales-qualified-lead-generation/event-lead-generation/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LEAD_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_LEAD_CASE_STUDIES}
      clientLogos={EVENT_LEAD_CLIENT_LOGOS}
      contactUs={EVENT_LEAD_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={EVENT_LEAD_GEN_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(EVENT_LEAD_GEN_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }

      faq={EVENT_LEAD_FAQ}
      hero={EVENT_LEAD_HERO}
      page={EVENT_LEAD_PAGE}
      parentPage={SQL_PAGE}
      preStudiesSections={
        <LeadPipelineSection
          heading={EVENT_LEAD_PROCESS.title}
          stages={EVENT_LEAD_PIPELINE.stages}
          steps={EVENT_LEAD_PROCESS.phases}
        />
      }
      services={EVENT_LEAD_SERVICES}
      showServicesCommonCta
      spotlight={EVENT_LEAD_INTRO}
      why={EVENT_LEAD_WHY}
    />
  );
};

export default Page;
