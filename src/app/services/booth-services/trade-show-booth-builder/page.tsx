import type { Metadata } from "next";

import Link from "next/link";

import { BasicCards } from "@/components/items/BasicCards";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_BUILDER_BLOG_POSTS,
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_RELATED_SERVICES,
} from "@/content/services/detail/trade-show-booth-builder";
import {
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

const pageMetadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

export const metadata: Metadata = {
  ...pageMetadata,
  title: {
    absolute: BOOTH_BUILDER_PAGE.seo.title,
  },
};

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      closingSections={
        <>
          <CardSection cols={4} heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={BOOTH_BUILDER_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {BOOTH_BUILDER_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </CardSection>
          <FAQAccordion {...BOOTH_BUILDER_FAQ} />
          <RelatedServices className="py-12" services={BOOTH_BUILDER_RELATED_SERVICES} />
          <ContactUs {...BOOTH_BUILDER_CONTACT_CTA} />
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      hero={BOOTH_BUILDER_HERO}
      middleSections={
        <CardSection heading={BOOTH_BUILDER_FUTURE_READY.heading} layout="grid">
          {BOOTH_BUILDER_FUTURE_READY.items.map((item) => (
            <BasicCards item={item} key={item.title} />
          ))}
        </CardSection>
      }
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <StickyScroll
          heading="What We Do in Exhibition Stand Builder"
          reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
            description: item.descriptions.join(" "),
            id: item.id,
            image: item.image,
            title: item.heading,
          }))}
          showImagePanel
        />
      }
      process={BOOTH_BUILDER_PROCESS}
      proofBar={BOOTH_BUILDER_PROOF_BAR}
      proofBarClassName="[&_p]:max-w-5xl"
      proofBarDescription={
        <>
          India is one of the fastest-growing exhibition markets, hosting major trade shows across
          industries such as pharma, manufacturing, construction, and consumer goods. Exhibiting in
          India offers access to a large and diverse business audience, making it a key destination
          for global brands.
          <br />
          <br />
          B2B Sales Arrow is an experienced trade show booth builder in India, helping international
          exhibitors design and build impactful exhibition stands across major Indian exhibition
          cities. We specialize in delivering high-quality booth design and fabrication services
          while ensuring smooth coordination for clients managing projects remotely.
        </>
      }
      proofBarHeading="Exhibition stand builder and Turnkey Solutions"
    />
  );
};

export default Page;
