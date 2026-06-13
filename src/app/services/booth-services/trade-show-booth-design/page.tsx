import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { EventsCard } from "@/components/items/EventsCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getDefaultEvents } from "@/content/events-utils";
import { HOME_EVENTS_CONTENT } from "@/content/home";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_RELATED_SERVICES,
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_SPOTLIGHT,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      closingSections={
        <>
          <CardSection
            cols={4}
            heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="grid"
          >
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={3}
            description={HOME_EVENTS_CONTENT.description}
            heading={HOME_EVENTS_CONTENT.heading}
            id="events"
          >
            {getDefaultEvents().map((event, i) => (
              <EventsCard
                ctaLabel={HOME_EVENTS_CONTENT.ctaLabel ?? "View Event"}
                event={event}
                flipStyle="diagonalWipe"
                index={i}
                key={event.id}
              />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
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
          <FAQAccordion {...BOOTH_DESIGN_FAQ} />
          <RelatedServices services={BOOTH_DESIGN_RELATED_SERVICES} />
          <ContactUs {...BOOTH_DESIGN_CONTACT_CTA} />
        </>
      }
      deliverables={BOOTH_DESIGN_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={BOOTH_DESIGN_FAQ}
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <StickyScroll
          heading="Booth Sizes and Formats We Design"
          reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
            description: item.descriptions.join(" "),
            id: item.id,
            image: item.image,
            title: item.heading,
          }))}
          showImagePanel
        />
      }
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      proofBarDescription={
        <>
          At B2B Sales Arrow, we specialize in designing exceptional booths that attract, engage,
          and drive meaningful conversations. With our expertise in AI-VR integration, we bring your
          brand to life in ways that leave a lasting impression. We&apos;ve delivered exceptional
          experiences across industries, from tech giants to global brands, creating{" "}
          <strong>tradeshow booth design</strong> that aren&apos;t just seen, they&apos;re
          remembered.
          <br />
          <br />
          India is one of the fastest-growing exhibition markets, hosting major trade shows across
          industries such as pharma, manufacturing, construction, and consumer goods. Exhibiting in
          India offers access to a large and diverse business audience, making it a key destination
          for global brands. B2B Sales Arrow is an experienced trade show booth builder in India,
          helping international exhibitors design and build impactful{" "}
          <strong>exhibition stands</strong> across major Indian exhibition cities. We specialize in
          delivering high-quality booth design and fabrication services while ensuring smooth
          coordination for clients managing projects remotely.
        </>
      }
      proofBarHeading="Introduction to Our Services"
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_SPOTLIGHT}
    />
  );
};

export default Page;
