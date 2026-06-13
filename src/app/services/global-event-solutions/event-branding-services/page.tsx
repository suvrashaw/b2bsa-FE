import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { GridSection } from "@/components/sections/GridSection";
import { Timeline } from "@/components/sections/Timeline";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
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
} from "@/content/services/global-event-solutions/event-branding-services/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_BRANDING_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_BRANDING_CASE_STUDIES}
      contactUs={EVENT_BRANDING_CONTACT_CTA}
      customSections={
        <>
          <GridSection
            cols={4}
            heading={EVENT_BRANDING_WHY_CHOOSE_US.heading}
            id="why-choose-us"
          >
            {EVENT_BRANDING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </GridSection>
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
        </>
      }
      faq={EVENT_BRANDING_FAQ}
      faqVariant="accordion"
      hero={EVENT_BRANDING_IMAGE_HERO}
      page={EVENT_BRANDING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your Event Branding" />
          <Timeline
            phases={EVENT_BRANDING_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={EVENT_BRANDING_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Branding Experts" />
        </>
      }
      proofBar={EVENT_BRANDING_PROOF_BAR}
      relatedServices={EVENT_BRANDING_RELATED_SERVICES}
      secondaryServices={EVENT_BRANDING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      services={EVENT_BRANDING_DELIVERABLES}
      spotlight={EVENT_BRANDING_INTRO}
    />
  );
};

export default Page;
