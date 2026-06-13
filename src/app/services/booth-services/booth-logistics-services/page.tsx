import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  EVENT_LOGISTICS_BLOGS_SECTION,
  EVENT_LOGISTICS_CAPABILITIES,
  EVENT_LOGISTICS_CASE_STUDIES,
  EVENT_LOGISTICS_CONTACT_CTA,
  EVENT_LOGISTICS_DELIVERABLES,
  EVENT_LOGISTICS_FAQ,
  EVENT_LOGISTICS_IMAGE_HERO,
  EVENT_LOGISTICS_INDUSTRIES_SECTION,
  EVENT_LOGISTICS_INTRO,
  EVENT_LOGISTICS_PAGE,
  EVENT_LOGISTICS_PROOF_BAR,
  EVENT_LOGISTICS_RELATED_SERVICES,
  EVENT_LOGISTICS_WHY_CHOOSE_US,
} from "@/content/services/detail/event-logistics";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LOGISTICS_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_LOGISTICS_CASE_STUDIES}
      closingSections={
        <>
          <CardSection cols={4} heading={EVENT_LOGISTICS_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {EVENT_LOGISTICS_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={EVENT_LOGISTICS_BLOGS_SECTION.heading}
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
          <FAQAccordion {...EVENT_LOGISTICS_FAQ} />
          <RelatedServices services={EVENT_LOGISTICS_RELATED_SERVICES} />
          <ContactCinematicCTA {...EVENT_LOGISTICS_CONTACT_CTA} />
        </>
      }
      deliverables={EVENT_LOGISTICS_DELIVERABLES}
      faq={EVENT_LOGISTICS_FAQ}
      imageHero={EVENT_LOGISTICS_IMAGE_HERO}
      page={EVENT_LOGISTICS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Talk to Our Event Team" />
          <ProcessTimeline
            phases={EVENT_LOGISTICS_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={EVENT_LOGISTICS_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Plan Your Event Logistics" />
        </>
      }
      proofBar={EVENT_LOGISTICS_PROOF_BAR}
      secondaryServices={EVENT_LOGISTICS_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={EVENT_LOGISTICS_INTRO}
    />
  );
};

export default Page;
