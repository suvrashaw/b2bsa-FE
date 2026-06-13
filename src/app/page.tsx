import type { Metadata } from "next";

import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { FAQCard } from "@/components/items/FAQCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { CardSection } from "@/components/sections/CardSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { getDefaultEvents } from "@/content/events-utils";
import { HOME_CINEMATIC_SEQUENCE_CONTENT, HOME_EVENTS_CONTENT, HOME_FAQ_CONTENT, HOME_PAGE } from "@/content/home";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import { buildFaqJsonLd } from "@/lib";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const Home = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildFaqJsonLd(HOME_FAQ_CONTENT.faqs)} />
      <Header forceLightMode />
      <div id="home">
        <Hero
          description={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.description}
          primaryCta={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.primaryCta}
          secondaryCta={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.secondaryCta}
          title={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.title}
        />
      </div>

      <ClientLogos />

      <div id="about">
        <WhoWeAre />
      </div>

      <div id="services">
        <ServicesStack />
      </div>

      <div id="work">
        <CaseStudies items={GLOBAL_CASE_STUDIES} viewAllLabel="View All Case Studies" />
      </div>

      <CardSection
        cols={3}
        cta={
          HOME_EVENTS_CONTENT.viewAllLabel ? (
            <Button asChild variant="secondary">
              <Link href="/trade-show-calendar">{HOME_EVENTS_CONTENT.viewAllLabel}</Link>
            </Button>
          ) : undefined
        }
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

      <StickyScroll />

      <Testimonials />

      <div id="blogs">
        <Blogs />
      </div>

      <CardSection
        description={HOME_FAQ_CONTENT.description}
        heading={HOME_FAQ_CONTENT.heading}
        id="faq"
        layout="carousel"
      >
        {HOME_FAQ_CONTENT.faqs.map((f) => (
          <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
        ))}
      </CardSection>

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
