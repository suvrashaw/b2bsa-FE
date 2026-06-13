import type { ReactNode } from "react";

import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQAccordion";
import type { FeatureCarouselItem } from "@/components/sections/FeatureCarouselSection";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import type { HeroProps } from "@/components/sections/Hero";
import type { MarketingPageIdentity } from "@/content/page-definitions";
import type { PricingProps } from "@/components/items/PricingCard";

import { FAQCard } from "@/components/items/FAQCard";
import { PricingCard } from "@/components/items/PricingCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CardSection } from "@/components/sections/CardSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FeatureCarouselSection } from "@/components/sections/FeatureCarouselSection";
import { Hero } from "@/components/sections/Hero";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { Stats } from "@/components/sections/Stats";
import { Timeline } from "@/components/sections/Timeline";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
  JsonLd,
  normalizePath,
  siteUrl,
} from "@/lib";

export interface ServicePageProps {
  // ─── Always required ────────────────────────────
  contactUs: ContactUsProps;
  faq: FAQProps;
  page: MarketingPageIdentity;

  // ─── Hero ───────────────────────────────────────
  hero?: HeroProps;

  // ─── SEO ────────────────────────────────────────
  parentPage?: MarketingPageIdentity;

  // ─── Trust band ─────────────────────────────────
  clientLogosHeading?: string;
  proofBar?: {
    className?: string;
    description?: ReactNode;
    heading?: string;
    imageUrl: string;
    stats: string[];
  };

  // ─── Spotlight slots ────────────────────────────
  spotlight?: SpotlightProps;
  why?: SpotlightProps;

  // ─── Services ───────────────────────────────────
  services?: ServicesStackProps;
  servicesSectionType?: "carousel" | "grid";
  secondaryServices?: ServicesStackProps;
  secondaryServicesSectionType?: "carousel" | "grid";

  // ─── Escape hatch before Timeline ───────────────
  preProcessSections?: ReactNode;

  // ─── Process ────────────────────────────────────
  process?: {
    heading?: string;
    phases?: { description: string; title: string }[];
    steps?: { description: string; title: string }[];
    title?: string;
  };
  showPhaseNumbers?: boolean;

  // ─── Lower funnel ───────────────────────────────
  caseStudies?: CaseStudiesProps;
  creativePricing?: PricingProps;

  // ─── Custom content before FAQ ──────────────────
  customSections?: ReactNode;

  // ─── Closing ────────────────────────────────────
  faqVariant?: "accordion" | "cards";
  relatedServices?: { href: string; title: string }[];
}

const getBreadcrumbs = (page: MarketingPageIdentity, parentPage?: MarketingPageIdentity) => {
  const crumbs = [{ name: "Home", url: siteUrl }];
  if (parentPage) {
    crumbs.push({
      name: parentPage.pageName,
      url: `${siteUrl}${normalizePath(parentPage.seo.canonicalPath)}`,
    });
  }
  crumbs.push({
    name: page.pageName,
    url: `${siteUrl}${normalizePath(page.seo.canonicalPath)}`,
  });
  return crumbs;
};

const renderServicesSection = (
  section: ServicesStackProps,
  sectionType: "carousel" | "grid" = "grid"
) => {
  const items = section.services ?? section.content?.services ?? [];
  if (sectionType === "carousel" && items.length > 0) {
    const features: FeatureCarouselItem[] = items.map((s) => ({
      description: s.description,
      icon: s.icon,
      id: s.id,
      image: s.image,
      label: s.title,
    }));
    return (
      <FeatureCarouselSection
        eyebrow={section.eyebrow ?? section.content?.eyebrow}
        features={features}
        heading={section.heading ?? section.content?.heading ?? "Our Services"}
      />
    );
  }
  return <ServicesStack {...section} />;
};

export const ServicePage = ({
  caseStudies,
  clientLogosHeading,
  contactUs,
  creativePricing,
  customSections,
  faq,
  faqVariant = "cards",
  hero,
  page,
  parentPage,
  preProcessSections,
  process,
  proofBar,
  relatedServices,
  secondaryServices,
  secondaryServicesSectionType = "grid",
  services,
  servicesSectionType = "grid",
  showPhaseNumbers = true,
  spotlight,
  why,
}: ServicePageProps) => {
  const steps = process?.phases ?? process?.steps ?? [];
  const processTitle = process?.title ?? process?.heading ?? "";

  const schemas = [
    buildServiceJsonLd({
      description: page.seo.description,
      name: page.pageName,
      url: page.seo.canonicalPath,
    }),
    buildBreadcrumbJsonLd(getBreadcrumbs(page, parentPage)),
    buildOrganizationJsonLd(),
    ...(faq.faqs?.length ? [buildFaqJsonLd(faq.faqs)] : []),
    ...(steps.length ? [buildHowToJsonLd(processTitle, steps)] : []),
    ...(services
      ? [buildItemListJsonLd(services.services ?? services.content?.services ?? [])]
      : []),
  ];

  return (
    <main className="min-h-screen bg-brand-gray">
      {schemas.map((schema, i) => (
        <JsonLd data={schema} key={i} />
      ))}
      <Header darkBackground />

      {hero && <Hero {...hero} />}

      <ClientLogos heading={clientLogosHeading} overlap={false} />

      {proofBar && <Stats {...proofBar} />}

      {spotlight && <Spotlight {...spotlight} />}

      {services && renderServicesSection(services, servicesSectionType)}

      {why && <Spotlight {...why} />}

      {preProcessSections}

      {process && (
        <Timeline
          phases={process.phases}
          showPhaseNumbers={showPhaseNumbers}
          steps={process.steps}
          title={process.title ?? process.heading}
        />
      )}

      {secondaryServices && renderServicesSection(secondaryServices, secondaryServicesSectionType)}

      {creativePricing && (
        <CardSection
          cols={3}
          description={creativePricing.description}
          heading={creativePricing.title}
          layout="carousel"
        >
          {(creativePricing.tiers ?? []).map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </CardSection>
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {customSections}

      {faqVariant === "accordion" ? (
        <FAQAccordion {...faq} />
      ) : (
        <CardSection
          description={faq.description ?? faq.content?.description}
          heading={faq.heading ?? faq.content?.heading}
          id="faq"
          layout="carousel"
        >
          {(faq.faqs ?? faq.content?.faqs ?? []).map((f) => (
            <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
          ))}
        </CardSection>
      )}

      {relatedServices && <RelatedServices services={relatedServices} />}

      <ContactUs {...contactUs} />

      <Footer />
    </main>
  );
};
