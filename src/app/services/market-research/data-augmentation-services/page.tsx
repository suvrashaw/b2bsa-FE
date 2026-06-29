import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_CLIENT_LOGOS,
  DATA_AUGMENTATION_CONTACT_CTA,
  DATA_AUGMENTATION_DEFINITION,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROCESS,
} from "@/content/services/market-research/data-augmentation-services/content";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      clientLogos={DATA_AUGMENTATION_CLIENT_LOGOS}
      contactUs={DATA_AUGMENTATION_CONTACT_CTA}
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      preProcessSections={
        <section className="bg-brand-gray py-16 lg:py-24">
          <div className="container mx-auto px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="prose prose-lg mx-auto text-brand-charcoal/80">
                {DATA_AUGMENTATION_DEFINITION.body}
              </p>
            </div>
          </div>
        </section>
      }
      process={DATA_AUGMENTATION_PROCESS}
      services={DATA_AUGMENTATION_DELIVERABLES}
      servicesSectionType="carousel"
    />
  );
};

export default Page;
