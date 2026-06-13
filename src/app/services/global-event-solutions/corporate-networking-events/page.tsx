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
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  CORP_NETWORKING_BLOGS_SECTION,
  CORP_NETWORKING_CAPABILITIES,
  CORP_NETWORKING_CASE_STUDIES,
  CORP_NETWORKING_CONTACT_CTA,
  CORP_NETWORKING_DELIVERABLES,
  CORP_NETWORKING_FAQ,
  CORP_NETWORKING_IMAGE_HERO,
  CORP_NETWORKING_INDUSTRIES_SECTION,
  CORP_NETWORKING_INTRO,
  CORP_NETWORKING_PAGE,
  CORP_NETWORKING_PROOF_BAR,
  CORP_NETWORKING_RELATED_SERVICES,
  CORP_NETWORKING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-networking-events/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_NETWORKING_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CORP_NETWORKING_CASE_STUDIES}
      closingSections={
        <>
          <CardSection
            cols={4}
            heading={CORP_NETWORKING_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="grid"
          >
            {CORP_NETWORKING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={CORP_NETWORKING_BLOGS_SECTION.heading}
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
          <FAQAccordion {...CORP_NETWORKING_FAQ} />
          <RelatedServices services={CORP_NETWORKING_RELATED_SERVICES} />
          <ContactUs {...CORP_NETWORKING_CONTACT_CTA} />
        </>
      }
      deliverables={CORP_NETWORKING_DELIVERABLES}
      faq={CORP_NETWORKING_FAQ}
      imageHero={CORP_NETWORKING_IMAGE_HERO}
      page={CORP_NETWORKING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Get in Touch" />
          <Timeline
            phases={CORP_NETWORKING_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={CORP_NETWORKING_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Our Event Team" />
        </>
      }
      proofBar={CORP_NETWORKING_PROOF_BAR}
      secondaryServices={CORP_NETWORKING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={CORP_NETWORKING_INTRO}
    />
  );
};

export default Page;
