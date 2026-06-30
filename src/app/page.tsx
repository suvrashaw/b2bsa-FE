import type { Metadata } from "next";

import dynamic from "next/dynamic";
import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { FAQCard } from "@/components/items/FAQCard";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

/* eslint-disable unicorn/prefer-await -- next/dynamic with named exports requires .then() */
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));
const Blogs = dynamic(() => import("@/components/sections/Blogs").then((mod) => mod.Blogs));
const CardsGrid = dynamic(() =>
  import("@/components/sections/CardsGrid").then((mod) => mod.CardsGrid)
);
const Carousel = dynamic(() =>
  import("@/components/sections/Carousel").then((mod) => mod.Carousel)
);
const CaseStudies = dynamic(() =>
  import("@/components/sections/CaseStudies").then((mod) => mod.CaseStudies)
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
import { RAW_BLOG_POSTS, normalizeBlogPosts } from "@/content/blogs";
import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import {
  HOME_EVENTS_CONTENT,
  HOME_FAQ_CONTENT,
  HOME_HERO_CONTENT,
  HOME_BLOGS_CONTENT,
  HOME_CONTACT_CONTENT,
  HOME_PAGE,
  HOME_SERVICES_CONTENT,
  HOME_STATS_CONTENT,
  HOME_TESTIMONIALS_CONTENT,
  HOME_WHY_CHOOSE_US_CONTENT,
} from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { TRADE_SHOW_CALENDAR_EVENTS, getDefaultEvents } from "@/content/tradeshow-calendar";
import { buildFaqJsonLd, buildPageGraph, buildWebPageJsonLd, siteUrl } from "@/lib";
import { getStructuredPageContent } from "@/lib/cms-api";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const HOME_FALLBACK_CONTENT = {
  blogs: HOME_BLOGS_CONTENT,
  contactus: HOME_CONTACT_CONTENT,
  events: HOME_EVENTS_CONTENT,
  faq: HOME_FAQ_CONTENT,
  hero: HOME_HERO_CONTENT,
  page: HOME_PAGE,
  services: HOME_SERVICES_CONTENT,
  stats: HOME_STATS_CONTENT,
  testimonials: HOME_TESTIMONIALS_CONTENT,
  whyChooseUs: HOME_WHY_CHOOSE_US_CONTENT,
};

const BLOG_POSTS_FALLBACK_CONTENT = {
  blogs: RAW_BLOG_POSTS,
};

const TRADE_SHOW_CALENDAR_FALLBACK_CONTENT = {
  events: { events: TRADE_SHOW_CALENDAR_EVENTS },
};

const Home = async () => {
  const [content, blogContent, calendarContent] = await Promise.all([
    getStructuredPageContent("/", HOME_FALLBACK_CONTENT),
    getStructuredPageContent("/blogs", BLOG_POSTS_FALLBACK_CONTENT),
    getStructuredPageContent("/tradeshow-calendar", TRADE_SHOW_CALENDAR_FALLBACK_CONTENT),
  ]);
  const blogPosts = normalizeBlogPosts(blogContent.blogs);
  const eventCards = getDefaultEvents(calendarContent.events.events);
  const blogsContent = {
    ...content.blogs,
    blogs: blogPosts,
  };

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            description: content.page.seo.description,
            name: content.page.seo.title,
            url: siteUrl,
          }),
          buildFaqJsonLd(content.faq.faqs),
        ])}
      />
      <Header forceLightMode />
      <div id="home">
        <Hero
          description={content.hero.description}
          mobileVideoUrl={content.hero.mobileVideoUrl}
          mobileVideoWebm={content.hero.mobileVideoWebm}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
          title={content.hero.title}
          videoUrl={content.hero.videoUrl}
          videoWebm={content.hero.videoWebm}
        />
      </div>

      <ClientLogos />

      <div id="about">
        <HomeStats content={content.stats} />
      </div>

      <div id="services">
        <ServicesStack content={content.services} />
      </div>

      <div id="work">
        <CaseStudies items={GLOBAL_CASE_STUDIES} viewAllLabel="View All Case Studies" />
      </div>

      <CardsGrid
        className="pb-8 md:pb-12 lg:pb-16"
        cols={3}
        cta={
          content.events.viewAllLabel ? (
            <Button asChild variant="primary">
              <Link href="/tradeshow-calendar">{content.events.viewAllLabel}</Link>
            </Button>
          ) : undefined
        }
        description={content.events.description}
        heading={content.events.heading}
        id="events"
      >
        {eventCards.map((event, i) => (
          <EventsCard
            ctaLabel={content.events.ctaLabel ?? "View Event"}
            event={event}
            flipStyle="diagonalWipe"
            index={i}
            key={event.id}
          />
        ))}
      </CardsGrid>

      <StickyScroll content={content.whyChooseUs} />

      <Testimonials content={content.testimonials} />

      <div id="blogs">
        <Blogs content={blogsContent} />
      </div>

      <Carousel
        description={content.faq.description}
        heading={content.faq.heading}
        id="faq"
        layout="carousel"
      >
        {content.faq.faqs.map((f) => (
          <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
        ))}
      </Carousel>

      <div id="contact">
        <ContactUsForm content={content.contactus} />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
