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
  HPMI_CAPABILITIES,
  HPMI_CASE_STUDIES,
  HPMI_CLIENT_LOGOS,
  HPMI_CONTACT_CTA,
  HPMI_FAQ,
  HPMI_HERO,
  HPMI_INTRO,
  HPMI_PAGE,
  HPMI_SERVICES,
} from "@/content/services/human-powered-market-intelligence/content";

export const metadata: Metadata = getMarketingPageMetadata(HPMI_PAGE);

const SECONDARY_SERVICES = { ...HPMI_CAPABILITIES, showCommonCta: true };

const Page = () => {
  return (
    <ServicePage
      caseStudies={HPMI_CASE_STUDIES}
      clientLogos={HPMI_CLIENT_LOGOS}
      contactUs={HPMI_CONTACT_CTA}
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
          >
            {getBlogsByTags(HPMI_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={HPMI_FAQ}
      hero={HPMI_HERO}
      page={HPMI_PAGE}
      secondaryServices={SECONDARY_SERVICES}
      secondaryServicesSectionType="carousel"
      services={HPMI_SERVICES}
      showServicesCommonCta
      spotlight={HPMI_INTRO}
    />
  );
};

export default Page;
