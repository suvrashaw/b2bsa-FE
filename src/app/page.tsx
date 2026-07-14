import type { Metadata } from "next";

import dynamic from "next/dynamic";
import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { Header } from "@/components/layout/Header";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";

/* eslint-disable unicorn/prefer-await -- next/dynamic with named exports requires .then() */
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));
const Blogs = dynamic(() => import("@/components/sections/Blogs").then((mod) => mod.Blogs));
const CardsGrid = dynamic(() =>
  import("@/components/sections/CardsGrid").then((mod) => mod.CardsGrid)
);

const CaseStudies = dynamic(() =>
  import("@/components/sections/CardsGrid").then((mod) => mod.CaseStudies)
);
const ClientLogos = dynamic(() =>
  import("@/components/sections/ClientLogos").then((mod) => mod.ClientLogos)
);
const ContactUsForm = dynamic(() =>
  import("@/components/sections/ContactUsForm").then((mod) => mod.ContactUsForm)
);
const HomeStats = dynamic(() =>
  import("@/components/sections/HomeStats").then((mod) => mod.HomeStats)
);
const ServicesStack = dynamic(() =>
  import("@/components/sections/ServicesStack").then((mod) => mod.ServicesStack)
);
const StickyScroll = dynamic(() =>
  import("@/components/sections/StickyScroll").then((mod) => mod.StickyScroll)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((mod) => mod.Testimonials)
);
/* eslint-enable unicorn/prefer-await */
import { Button } from "@/components/ui/Button";
import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import {
  HOME_EVENTS_CONTENT,
  HOME_FAQ_CONTENT,
  HOME_HERO_CONTENT,
  HOME_PAGE,
  HOME_SERVICES_CONTACT_MODAL,
  HOME_SERVICES_CONTENT,
} from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { getDefaultEvents } from "@/content/tradeshow-calendar";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildImageObjectJsonLd,
  buildLocalBusinessListJsonLd,
  buildPageGraph,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
  siteUrl,
} from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const Home = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            breadcrumbId: `${siteUrl}/#breadcrumb`,
            description: HOME_PAGE.seo.description,
            name: HOME_PAGE.seo.title,
            url: siteUrl,
          }),
          buildWebsiteJsonLd(),
          buildFaqJsonLd(HOME_FAQ_CONTENT.faqs),
          buildBreadcrumbJsonLd([{ name: "Home", url: siteUrl }], siteUrl),
          buildImageObjectJsonLd({
            caption: "B2B Sales Arrow",
            url: "/media/logo/logo.avif",
          }),
        ])}
      />
      {buildLocalBusinessListJsonLd().map((entry) => (
        <JsonLd data={entry} key={entry["@id"]} />
      ))}
      <Header />
      <div id="home">
        <Hero
          description={HOME_HERO_CONTENT.description}
          disableTypewriter
          mobileVideoUrl={HOME_HERO_CONTENT.mobileVideoUrl}
          mobileVideoWebm={HOME_HERO_CONTENT.mobileVideoWebm}
          primaryCta={HOME_HERO_CONTENT.primaryCta}
          rotatingWords={HOME_HERO_CONTENT.rotatingWords}
          title={HOME_HERO_CONTENT.title}
          videoUrl={HOME_HERO_CONTENT.videoUrl}
          videoWebm={HOME_HERO_CONTENT.videoWebm}
        />
      </div>

      <ClientLogos />

      <div id="about">
        <HomeStats />
      </div>

      <div id="services">
        <ServicesStack
          commonCtaLabel={HOME_SERVICES_CONTENT.commonCtaLabel}
          contactModal={HOME_SERVICES_CONTACT_MODAL}
          showCommonCta
        />
      </div>

      <div id="work">
        <CaseStudies items={GLOBAL_CASE_STUDIES} />
      </div>

      <CardsGrid
        className="pb-8 md:pb-12 lg:pb-16"
        cols={3}
        cta={
          HOME_EVENTS_CONTENT.viewAllLabel ? (
            <Button asChild variant="primary">
              <Link href="/tradeshow-calendar">{HOME_EVENTS_CONTENT.viewAllLabel}</Link>
            </Button>
          ) : undefined
        }
        description={HOME_EVENTS_CONTENT.description}
        heading={HOME_EVENTS_CONTENT.heading}
        id="events"
      >
        {getDefaultEvents()
          .slice(0, 6)
          .map((event, i) => (
            <EventsCard
              ctaLabel={HOME_EVENTS_CONTENT.ctaLabel}
              event={event}
              flipStyle="diagonalWipe"
              index={i}
              key={event.id}
            />
          ))}
      </CardsGrid>

      <StickyScroll />

      <Testimonials />

      <div id="blogs">
        <Blogs />
      </div>

      <FAQ content={HOME_FAQ_CONTENT} />

      <div id="contact">
        <ContactUsForm />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
