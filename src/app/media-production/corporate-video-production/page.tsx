import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { Carousel } from "@/components/sections/Carousel";
import { SectionContactCta } from "@/components/sections/SectionContactCta";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  CORPORATE_VIDEO_BLOGS_SECTION,
  CORPORATE_VIDEO_CASE_STUDIES,
  CORPORATE_VIDEO_CLIENT_LOGOS,
  CORPORATE_VIDEO_CONTACT_CTA,
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_FAQ,
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_INTRO,
  CORPORATE_VIDEO_PAGE,
  CORPORATE_VIDEO_WHY,
  CORPORATE_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/corporate-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(CORPORATE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={CORPORATE_VIDEO_CASE_STUDIES}
      clientLogos={CORPORATE_VIDEO_CLIENT_LOGOS}
      contactUs={CORPORATE_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={3} heading={CORPORATE_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us">
            {CORPORATE_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={CORPORATE_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(CORPORATE_VIDEO_BLOGS_SECTION.tags).map((post) => (
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
          <CapabilitiesGrid
            heading={CORPORATE_VIDEO_DELIVERABLES.heading}
            services={CORPORATE_VIDEO_DELIVERABLES.services}
          />
          <SectionContactCta />
        </>
      }
      spotlight={CORPORATE_VIDEO_INTRO}
      why={CORPORATE_VIDEO_WHY}
    />
  );
};

export default Page;
