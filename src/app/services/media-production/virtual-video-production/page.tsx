import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Timeline } from "@/components/sections/Timeline";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
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
} from "@/content/services/detail/virtual-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(VIRTUAL_VIDEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={VIRTUAL_VIDEO_CASE_STUDIES}
      caseStudiesDescription="Explore how B2B Sales Arrow has helped brands deliver successful virtual events, webinars, fireside chats, and executive discussions through professional production and audience engagement."
      closingSections={
        <>
          <CardSection cols={4} heading={VIRTUAL_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {VIRTUAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
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
          </CardSection>
          <FAQAccordion {...VIRTUAL_VIDEO_FAQ} />
          <RelatedServices services={VIRTUAL_VIDEO_RELATED_SERVICES} />
          <ContactUs {...VIRTUAL_VIDEO_CONTACT_CTA} />
        </>
      }
      deliverables={VIRTUAL_VIDEO_DELIVERABLES}
      faq={VIRTUAL_VIDEO_FAQ}
      imageHero={VIRTUAL_VIDEO_IMAGE_HERO}
      page={VIRTUAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Virtual Event" />
          <Timeline
            phases={VIRTUAL_VIDEO_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={VIRTUAL_VIDEO_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Virtual Production Experts" />
        </>
      }
      proofBar={VIRTUAL_VIDEO_PROOF_BAR}
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
