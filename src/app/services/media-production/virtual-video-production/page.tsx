import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  VIRTUAL_VIDEO_BLOGS_SECTION,
  VIRTUAL_VIDEO_CAPABILITIES,
  VIRTUAL_VIDEO_CASE_STUDIES,
  VIRTUAL_VIDEO_CONTACT_CTA,
  VIRTUAL_VIDEO_DELIVERABLES,
  VIRTUAL_VIDEO_FAQ,
  VIRTUAL_VIDEO_IMAGE_HERO,
  VIRTUAL_VIDEO_INTRO,
  VIRTUAL_VIDEO_PAGE,
  VIRTUAL_VIDEO_PROOF_BAR,
  VIRTUAL_VIDEO_RELATED_SERVICES,
  VIRTUAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/virtual-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(VIRTUAL_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={VIRTUAL_VIDEO_CASE_STUDIES}
      contactUs={VIRTUAL_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={VIRTUAL_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us">
            {VIRTUAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={VIRTUAL_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={VIRTUAL_VIDEO_FAQ}
      faqVariant="accordion"
      hero={VIRTUAL_VIDEO_IMAGE_HERO}
      page={VIRTUAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      process={VIRTUAL_VIDEO_CAPABILITIES}
      proofBar={VIRTUAL_VIDEO_PROOF_BAR}
      relatedServices={VIRTUAL_VIDEO_RELATED_SERVICES}
      services={VIRTUAL_VIDEO_DELIVERABLES}
      showPhaseNumbers={false}
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
