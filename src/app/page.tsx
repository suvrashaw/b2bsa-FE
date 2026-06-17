import type { Metadata } from "next";

import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { FAQCard } from "@/components/items/FAQCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import { HomeStats } from "@/components/sections/HomeStats";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/Button";
import { getDefaultEvents } from "@/content/events-utils";
import {
  HOME_EVENTS_CONTENT,
  HOME_FAQ_CONTENT,
  HOME_HERO_CONTENT,
  HOME_PAGE,
} from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import { buildFaqJsonLd } from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const Home = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildFaqJsonLd(HOME_FAQ_CONTENT.faqs)} />
      <Header forceLightMode />
      <div id="home">
        <Hero
          description={HOME_HERO_CONTENT.description}
          mobileVideoUrl={HOME_HERO_CONTENT.mobileVideoUrl}
          mobileVideoWebm={HOME_HERO_CONTENT.mobileVideoWebm}
          primaryCta={HOME_HERO_CONTENT.primaryCta}
          secondaryCta={HOME_HERO_CONTENT.secondaryCta}
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
        <ServicesStack />
      </div>

      <div id="work">
        <CaseStudies items={GLOBAL_CASE_STUDIES} viewAllLabel="View All Case Studies" />
      </div>

      <CardsGrid
        cols={3}
        cta={
          HOME_EVENTS_CONTENT.viewAllLabel ? (
            <Button asChild variant="secondary">
              <Link href="/tradeshow-calendar">{HOME_EVENTS_CONTENT.viewAllLabel}</Link>
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
      </CardsGrid>

      <StickyScroll />

      <Testimonials />

      <div id="blogs">
        <Blogs />
      </div>

      <Carousel
        description={HOME_FAQ_CONTENT.description}
        heading={HOME_FAQ_CONTENT.heading}
        id="faq"
        layout="carousel"
      >
        {HOME_FAQ_CONTENT.faqs.map((f) => (
          <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
        ))}
      </Carousel>

      <div id="contact">
        <ContactUsForm />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
