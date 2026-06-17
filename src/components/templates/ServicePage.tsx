import type { ReactNode } from "react";

import type { PricingProps } from "@/components/items/PricingCard";
import type { CapabilitiesItem } from "@/components/sections/Capabilities";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import type { FAQProps } from "@/components/sections/FAQAccordion";
import type { HeroProps } from "@/components/sections/Hero";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { FAQCard } from "@/components/items/FAQCard";
import { PricingCard } from "@/components/items/PricingCard";
import { ServicesLinkCard } from "@/components/items/ServicesLinkCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Hero } from "@/components/sections/Hero";
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
  // ─── Lower funnel ───────────────────────────────
  caseStudies?: CaseStudiesProps;
  // ─── Trust band ─────────────────────────────────
  clientLogosDescription?: string;
  clientLogosHeading?: string;
  // ─── Always required ────────────────────────────
  contactUs: ContactUsProps;

  creativePricing?: PricingProps;

  // ─── Custom content before FAQ ──────────────────
  customSections?: ReactNode;

  faq: FAQProps;
  // ─── Closing ────────────────────────────────────
  faqVariant?: "accordion" | "cards";

  // ─── Hero ───────────────────────────────────────
  hero?: HeroProps;
  page: MarketingPageIdentity;

  // ─── SEO ────────────────────────────────────────
  parentPage?: MarketingPageIdentity;
  // ─── Slot between related services and contact ───────
  preContactSections?: ReactNode;
  // ─── Escape hatch before Timeline ───────────────
  preProcessSections?: ReactNode;
  // ─── Extra sections between industries and case studies ─
  preStudiesSections?: ReactNode;
  // ─── Process ────────────────────────────────────
  process?: {
    cta?: { href?: string; label: string; opensModal?: boolean };
    description?: string;
    heading?: string;
    phases?: { description: string; title: string }[];
    steps?: { description: string; title: string }[];
    title?: string;
  };
  proofBar?: {
    className?: string;
    description?: ReactNode;
    heading?: string;
    imageUrl: string;
    stats: string[];
  };

  relatedServices?: { href: string; title: string }[];
  relatedServicesHeading?: ReactNode;

  secondaryServices?: ServicesStackProps;
  secondaryServicesSectionType?: "carousel" | "grid";

  // ─── Services ───────────────────────────────────
  services?: ServicesStackProps;
  servicesSectionType?: "carousel" | "grid";

  showPhaseNumbers?: boolean;

  // ─── Spotlight slots ────────────────────────────
  spotlight?: SpotlightProps;
  why?: SpotlightProps;
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
    const features: CapabilitiesItem[] = items.map((s) => ({
      description: s.description,
      icon: s.icon,
      id: s.id,
      image: s.image,
      label: s.title,
    }));
    return (
      <Capabilities
        capabilities={features}
        heading={section.heading ?? section.content?.heading ?? "Our Services"}
      />
    );
  }
  return (
    <ServicesStack
      {...section}
      cardCtaMode={section.cardCtaMode ?? "linked"}
      commonCtaLabel="Contact Our Team"
      contactModal={section.contactModal ?? SERVICE_PAGE_CONTACT_MODAL}
      showCommonCta
    />
  );
};

const SERVICE_PAGE_CONTACT_MODAL = {};

export const ServicePage = ({
  caseStudies,
  clientLogosDescription,
  clientLogosHeading,
  contactUs,
  creativePricing,
  customSections,
  faq,
  faqVariant = "cards",
  hero,
  page,
  parentPage,
  preContactSections,
  preProcessSections,
  preStudiesSections,
  process,
  proofBar,
  relatedServices,
  relatedServicesHeading,
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
    ...(steps.length > 0 ? [buildHowToJsonLd(processTitle, steps)] : []),
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

      <ClientLogos
        description={clientLogosDescription}
        heading={clientLogosHeading}
        overlap={false}
      />

      {proofBar && <Stats {...proofBar} />}

      {spotlight && <Spotlight {...spotlight} />}

      {services && renderServicesSection(services, servicesSectionType)}

      {why && <Spotlight {...why} />}

      {preProcessSections}

      {process && (
        <Timeline
          cta={process.cta}
          description={process.description}
          phases={process.phases}
          showPhaseNumbers={showPhaseNumbers}
          steps={process.steps}
          title={process.title ?? process.heading}
        />
      )}

      {secondaryServices && renderServicesSection(secondaryServices, secondaryServicesSectionType)}

      {preStudiesSections}

      {creativePricing && (
        <Carousel
          cols={3}
          description={creativePricing.description}
          heading={creativePricing.title}
          layout="carousel"
        >
          {(creativePricing.tiers ?? []).map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </Carousel>
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {customSections}

      {faqVariant === "accordion" ? (
        <FAQAccordion {...faq} />
      ) : (
        <Carousel
          description={faq.description ?? faq.content?.description}
          heading={faq.heading ?? faq.content?.heading}
          id="faq"
          layout="carousel"
        >
          {(faq.faqs ?? faq.content?.faqs ?? []).map((f) => (
            <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
          ))}
        </Carousel>
      )}

      {relatedServices && relatedServices.length > 0 && (
        <CardsGrid
          className="py-10 md:py-12 lg:py-14"
          cols={3}
          heading={relatedServicesHeading ?? "Explore Related Solutions"}
        >
          {relatedServices.map((service, index) => (
            <ServicesLinkCard index={index} key={service.href} service={service} />
          ))}
        </CardsGrid>
      )}

      {preContactSections}

      <ContactUs {...contactUs} />

      <Footer />
    </main>
  );
};
