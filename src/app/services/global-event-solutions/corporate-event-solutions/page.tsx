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
  CORP_EVENT_BLOGS_SECTION,
  CORP_EVENT_CAPABILITIES,
  CORP_EVENT_CASE_STUDIES,
  CORP_EVENT_CONTACT_CTA,
  CORP_EVENT_DELIVERABLES,
  CORP_EVENT_FAQ,
  CORP_EVENT_IMAGE_HERO,
  CORP_EVENT_INDUSTRIES_SECTION,
  CORP_EVENT_INTRO,
  CORP_EVENT_PAGE,
  CORP_EVENT_PROOF_BAR,
  CORP_EVENT_RELATED_SERVICES,
  CORP_EVENT_WHY_CHOOSE_US,
} from "@/content/services/detail/corporate-event-solutions";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(CORP_EVENT_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CORP_EVENT_CASE_STUDIES}
      closingSections={
        <>
          <CardSection cols={4} heading={CORP_EVENT_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {CORP_EVENT_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={CORP_EVENT_BLOGS_SECTION.heading}
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
          <FAQAccordion {...CORP_EVENT_FAQ} />
          <RelatedServices services={CORP_EVENT_RELATED_SERVICES} />
          <ContactUs {...CORP_EVENT_CONTACT_CTA} />
        </>
      }
      deliverables={CORP_EVENT_DELIVERABLES}
      faq={CORP_EVENT_FAQ}
      imageHero={CORP_EVENT_IMAGE_HERO}
      page={CORP_EVENT_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your Corporate Event" />
          <Timeline
            phases={CORP_EVENT_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={CORP_EVENT_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Our Event Team" />
        </>
      }
      proofBar={CORP_EVENT_PROOF_BAR}
      secondaryServices={CORP_EVENT_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={CORP_EVENT_INTRO}
    />
  );
};

export default Page;
