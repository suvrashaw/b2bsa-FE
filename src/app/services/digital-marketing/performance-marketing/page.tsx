import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PERF_PAGE } from "@/content/services/digital-marketing/content";
import {
  PPC_BLOGS_SECTION,
  PPC_CASE_STUDIES,
  PPC_CLIENT_LOGOS,
  PPC_CONTACT_CTA,
  PPC_FAQ,
  PPC_HERO,
  PPC_INTRO,
  PPC_MODAL_SERVICE_FIELD,
  PPC_PAGE,
  PPC_SERVICES,
  PPC_WHY_CHOOSE_US,
} from "@/content/services/digital-marketing/performance-marketing/content";

export const metadata: Metadata = getMarketingPageMetadata(PPC_PAGE);

const servicesContactModal = {
  serviceField: PPC_MODAL_SERVICE_FIELD,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={PPC_CASE_STUDIES}
      clientLogos={PPC_CLIENT_LOGOS}
      contactUs={PPC_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={3} heading={PPC_WHY_CHOOSE_US.heading}>
            {PPC_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>

          <Carousel
            cols={4}
            heading={PPC_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(["Performance Marketing"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={PPC_FAQ}
      faqVariant="accordion"
      hero={PPC_HERO}
      page={PPC_PAGE}
      parentPage={PERF_PAGE}
      preProcessSections={
        <ServicesStack
          {...PPC_SERVICES}
          cardCtaMode="none"
          commonCtaLabel="Contact Our Team"
          contactModal={servicesContactModal}
          showCommonCta
        />
      }
      spotlight={PPC_INTRO}
    />
  );
};

export default Page;
