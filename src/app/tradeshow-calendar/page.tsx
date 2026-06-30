import type { Metadata } from "next";

import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  TRADE_SHOW_CALENDAR_EVENTS,
  TRADE_SHOW_CALENDAR_HERO,
  TRADE_SHOW_CALENDAR_PAGE,
} from "@/content/tradeshow-calendar";
import { getStructuredPageContent } from "@/lib/cms-api";
import {
  buildCollectionPageJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  JsonLd,
  siteUrl,
} from "@/lib";

import { TradeShowCalendarSection } from "./TradeShowCalendarSection";

const TRADE_SHOW_CALENDAR_HERO_IMAGES = [
  "/media/events/adobe_summit_2026.avif",
  "/media/events/event_other_1.avif",
  "/media/events/event_other_2.avif",
  "/media/events/event_other_3.avif",
  "/media/events/event_other_4.avif",
  "/media/events/inma_2026.avif",
  "/media/events/servicenow_2026.avif",
];

export const metadata: Metadata = getMarketingPageMetadata(TRADE_SHOW_CALENDAR_PAGE);

const TRADE_SHOW_CALENDAR_FALLBACK_CONTENT = {
  events: { events: TRADE_SHOW_CALENDAR_EVENTS },
  hero: TRADE_SHOW_CALENDAR_HERO,
  page: TRADE_SHOW_CALENDAR_PAGE,
};

const Page = async () => {
  const content = await getStructuredPageContent(
    "/tradeshow-calendar",
    TRADE_SHOW_CALENDAR_FALLBACK_CONTENT
  );
  const events = content.events.events;

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildCollectionPageJsonLd({
            description: content.page.seo.description,
            name: content.page.seo.title.split(" | ", 1)[0],
            url: "/tradeshow-calendar",
          }),
          buildLinkedItemListJsonLd(
            events.slice(0, 10).map((e) => ({
              name: e.name,
              url: `${siteUrl}/tradeshow-calendar/${e.id}`,
            }))
          ),
        ])}
      />
      <Header darkBackground />
      <Hero
        description={content.hero.description}
        images={TRADE_SHOW_CALENDAR_HERO_IMAGES}
        title={content.hero.title}
      />
      <Suspense>
        <TradeShowCalendarSection
          events={events}
          searchPlaceholder={content.hero.searchPlaceholder}
        />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Page;
