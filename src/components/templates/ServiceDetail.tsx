import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { FeatureCarouselItem } from "@/components/ui/FeatureCarousel";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { DataTable } from "@/components/sections/DataTable";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureCarouselSection } from "@/components/sections/FeatureCarouselSection";
import { OurServices } from "@/components/sections/OurServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceDetailProps {
  caseStudies?: CaseStudiesProps;
  ctaBanner?: {
    ctaHref?: string;
    ctaLabel: string;
    description: string;
    title: string;
  };
  deliverables?: OurServicesProps;
  deliverablesSectionType?: "carousel" | "grid";
  faq: FAQProps;
  hero: {
    description: string;
    primaryCta?: {
      href: string;
      label: string;
    };
    secondaryCta?: {
      href: string;
      label: string;
    };
    title: string;
  };
  page: MarketingPageIdentity;
  parentPage?: MarketingPageIdentity;
  pricing?: {
    headers: string[];
    rows: { [key: string]: string }[];
    title: string;
  };
  pricingGuidance?: {
    description: string;
    footer?: string;
    headers: string[];
    rows: { [key: string]: string }[];
    title: string;
  };
  process?: {
    phases: { description: string; title: string }[];
    title: string;
  };
  proofBar?: string[];
  relatedServices?: { href: string; title: string }[];
  stats?: {
    items: { label: string; value: string }[];
    title: string;
  };
  why?: WhyChooseUsProps;
}

const createJsonLdMarkup = (data: object) => ({
  __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
});

// SEO Utility Component
export const JsonLd = ({ data }: { data: object }) => {
  return <script dangerouslySetInnerHTML={createJsonLdMarkup(data)} type="application/ld+json" />;
};

const siteUrl = "https://b2bsalesarrow.com";
const primaryServiceHeroCta = { href: "/contact", label: "Book a Strategy Session" };
const secondaryServiceHeroCta = { href: "/case-studies", label: "View Event Portfolio" };
const serviceHeroCtasByPath: Record<
  string,
  {
    primaryCta: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  }
> = {
  "/services/data-augmentation": {
    primaryCta: { href: "/contact", label: "Request a Data Augmentation Demo" },
    secondaryCta: { href: "/contact", label: "Upload a Sample List" },
  },
  "/services/data-validation": {
    primaryCta: { href: "/contact", label: "Start a Data Validation Project" },
    secondaryCta: { href: "/contact", label: "Get a Free Data Quality Audit" },
  },
  "/services/global-event-solutions/custom-events": {
    primaryCta: { href: "/contact", label: "Design Your Custom Event" },
  },
  "/services/global-event-solutions/event-booth-rental": {
    primaryCta: { href: "/contact", label: "Check Rental Availability" },
  },
  "/services/global-event-solutions/event-lead-generation": {
    primaryCta: { href: "/contact", label: "Build Your Lead Generation System" },
  },
  "/services/global-event-solutions/industry-events": {
    primaryCta: { href: "/contact", label: "Build Your Industry Event Strategy" },
  },
  "/services/global-event-solutions/modular-portable-booths": {
    primaryCta: { href: "/contact", label: "Get a Modular Booth Quote" },
  },
  "/services/global-event-solutions/trade-show-booth-builder": {
    primaryCta: { href: "/contact", label: "Get a Build Quote" },
  },
  "/services/global-event-solutions/trade-show-booth-design": {
    primaryCta: { href: "/contact", label: "Request a Design Quote" },
    secondaryCta: { href: "/case-studies", label: "View Booth Portfolio" },
  },
  "/services/linkedin-ads": {
    primaryCta: { href: "/contact", label: "Request a LinkedIn Ads Audit" },
    secondaryCta: { href: "/contact", label: "Request a Campaign Strategy" },
  },
  "/services/market-intelligence": {
    primaryCta: { href: "/contact", label: "Commission a Research Report" },
    secondaryCta: { href: "/contact", label: "Schedule an Intelligence Briefing" },
  },
  "/services/media-production/corporate-video-production": {
    primaryCta: { href: "/contact", label: "Request a Corporate Video Quote" },
  },
  "/services/media-production/event-video-production": {
    primaryCta: { href: "/contact", label: "Get a Production Quote" },
  },
  "/services/media-production/live-streaming-services": {
    primaryCta: { href: "/contact", label: "Get a Live Stream Quote" },
  },
  "/services/media-production/video-editing-services": {
    primaryCta: { href: "/contact", label: "Send Us Your Footage" },
  },
  "/services/paid-advertising": {
    primaryCta: { href: "/contact", label: "Request a Paid Media Audit" },
    secondaryCta: { href: "/contact", label: "Request a Campaign Proposal" },
  },
  "/services/seo-services": {
    primaryCta: { href: "/contact", label: "Request a Free SEO Audit" },
    secondaryCta: { href: "/contact", label: "Download Our B2B SEO Playbook" },
  },
};

export const ServiceDetail = ({
  caseStudies,
  ctaBanner,
  deliverables,
  deliverablesSectionType = "grid",
  faq,
  hero,
  page,
  parentPage,
  pricing,
  pricingGuidance,
  process,
  proofBar,
  relatedServices,
  stats,
  why,
}: ServiceDetailProps) => {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(getBreadcrumbs(page, parentPage));
  const serviceJsonLd = buildServiceJsonLd({
    description: page.seo.description,
    name: page.pageName,
    url: page.seo.canonicalPath,
  });
  const heroCtas = serviceHeroCtasByPath[normalizePath(page.seo.canonicalPath)];
  const deliverableServices = deliverables?.services ?? deliverables?.content?.services ?? [];
  const carouselFeatures: FeatureCarouselItem[] = deliverableServices.map((service) => ({
    description: service.description,
    icon: service.icon,
    id: service.id,
    image: service.image,
    label: service.title,
  }));
  const shouldUseDeliverablesCarousel =
    deliverablesSectionType === "carousel" && carouselFeatures.length > 0;
  let deliverablesSection = null;

  if (deliverables) {
    deliverablesSection = shouldUseDeliverablesCarousel ? (
      <FeatureCarouselSection
        eyebrow={deliverables.eyebrow ?? deliverables.content?.eyebrow}
        features={carouselFeatures}
        heading={deliverables.heading ?? deliverables.content?.heading ?? "Our Services"}
      />
    ) : (
      <OurServices {...deliverables} />
    );
  }

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <JsonLd data={breadcrumbJsonLd} />
      <Header darkBackground />

      <ServiceHero
        description={hero.description}
        primaryCta={hero.primaryCta ?? heroCtas?.primaryCta ?? primaryServiceHeroCta}
        secondaryCta={
          hero.secondaryCta ?? (heroCtas ? heroCtas.secondaryCta : secondaryServiceHeroCta)
        }
        title={hero.title}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      {deliverablesSection}

      {why && <WhyChooseUs {...why} />}

      {process && <ProcessTimeline phases={process.phases} title={process.title} />}

      {pricing && <DataTable headers={pricing.headers} rows={pricing.rows} title={pricing.title} />}

      {pricingGuidance && (
        <>
          <DataTable
            className="bg-brand-gray/50"
            description={pricingGuidance.description}
            headers={pricingGuidance.headers}
            rows={pricingGuidance.rows}
            title={pricingGuidance.title}
          />
          {pricingGuidance.footer && (
            <div className="container mx-auto -mt-12 px-8 pb-8">
              <p className="text-sm text-brand-gray/60">{pricingGuidance.footer}</p>
            </div>
          )}
        </>
      )}

      {caseStudies && <CaseStudies heading="Real Events. Real Results." {...caseStudies} />}

      {stats && <WhoWeAre items={stats.items} title={stats.title} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      <CTABanner
        ctaHref={ctaBanner?.ctaHref ?? "/contact"}
        ctaLabel={ctaBanner?.ctaLabel ?? "Book a Strategy Session"}
        description={
          ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
        }
        title={ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"}
      />

      <Footer />
    </main>
  );
};

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

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};
