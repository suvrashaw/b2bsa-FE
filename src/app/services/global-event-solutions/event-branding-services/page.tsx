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
  EVENT_BRANDING_BLOGS_SECTION,
  EVENT_BRANDING_CAPABILITIES,
  EVENT_BRANDING_CASE_STUDIES,
  EVENT_BRANDING_CONTACT_CTA,
  EVENT_BRANDING_DELIVERABLES,
  EVENT_BRANDING_FAQ,
  EVENT_BRANDING_IMAGE_HERO,
  EVENT_BRANDING_INDUSTRIES_SECTION,
  EVENT_BRANDING_INTRO,
  EVENT_BRANDING_PAGE,
  EVENT_BRANDING_PROOF_BAR,
  EVENT_BRANDING_RELATED_SERVICES,
  EVENT_BRANDING_WHY_CHOOSE_US,
} from "@/content/services/detail/event-branding-solutions";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_BRANDING_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_BRANDING_CASE_STUDIES}
      closingSections={
        <>
          <CardSection cols={4} heading={EVENT_BRANDING_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {EVENT_BRANDING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={EVENT_BRANDING_BLOGS_SECTION.heading}
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
          <FAQAccordion {...EVENT_BRANDING_FAQ} />
          <RelatedServices services={EVENT_BRANDING_RELATED_SERVICES} />
          <ContactCinematicCTA {...EVENT_BRANDING_CONTACT_CTA} />
        </>
      }
      deliverables={EVENT_BRANDING_DELIVERABLES}
      faq={EVENT_BRANDING_FAQ}
      imageHero={EVENT_BRANDING_IMAGE_HERO}
      page={EVENT_BRANDING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your Event Branding" />
          <ProcessTimeline
            phases={EVENT_BRANDING_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={EVENT_BRANDING_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Branding Experts" />
        </>
      }
      proofBar={EVENT_BRANDING_PROOF_BAR}
      secondaryServices={EVENT_BRANDING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={EVENT_BRANDING_INTRO}
    />
  );
};

export default Page;
