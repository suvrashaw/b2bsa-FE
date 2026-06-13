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
  BOOTH_HOSTESS_BLOGS_SECTION,
  BOOTH_HOSTESS_CAPABILITIES,
  BOOTH_HOSTESS_CASE_STUDIES,
  BOOTH_HOSTESS_CONTACT_CTA,
  BOOTH_HOSTESS_DELIVERABLES,
  BOOTH_HOSTESS_FAQ,
  BOOTH_HOSTESS_IMAGE_HERO,
  BOOTH_HOSTESS_INDUSTRIES_SECTION,
  BOOTH_HOSTESS_INTRO,
  BOOTH_HOSTESS_PAGE,
  BOOTH_HOSTESS_PROOF_BAR,
  BOOTH_HOSTESS_RELATED_SERVICES,
  BOOTH_HOSTESS_WHY_CHOOSE_US,
} from "@/content/services/detail/booth-hostess";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_HOSTESS_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_HOSTESS_CASE_STUDIES}
      closingSections={
        <>
          <CardSection
            cols={4}
            heading={BOOTH_HOSTESS_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="grid"
          >
            {BOOTH_HOSTESS_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={BOOTH_HOSTESS_BLOGS_SECTION.heading}
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
          <FAQAccordion {...BOOTH_HOSTESS_FAQ} />
          <RelatedServices services={BOOTH_HOSTESS_RELATED_SERVICES} />
          <ContactUs {...BOOTH_HOSTESS_CONTACT_CTA} />
        </>
      }
      deliverables={BOOTH_HOSTESS_DELIVERABLES}
      faq={BOOTH_HOSTESS_FAQ}
      imageHero={BOOTH_HOSTESS_IMAGE_HERO}
      page={BOOTH_HOSTESS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Request A Quote" />
          <Timeline
            phases={BOOTH_HOSTESS_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={BOOTH_HOSTESS_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Book Booth Staff" />
        </>
      }
      proofBar={BOOTH_HOSTESS_PROOF_BAR}
      secondaryServices={BOOTH_HOSTESS_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={BOOTH_HOSTESS_INTRO}
    />
  );
};

export default Page;
