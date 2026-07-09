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
import {
  buildBreadcrumbJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  buildWebPageJsonLd,
  JsonLd,
  siteUrl,
} from "@/lib";

import { TradeShowCalendarSection } from "./TradeShowCalendarSection";

const EXHIBIT_CTA = { href: "/contact-us", label: "Exhibit at a Trade Show" };

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

const CALENDAR_URL = `${siteUrl}/tradeshow-calendar`;

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            breadcrumbId: `${CALENDAR_URL}/#breadcrumb`,
            description: TRADE_SHOW_CALENDAR_PAGE.seo.description,
            name: TRADE_SHOW_CALENDAR_PAGE.seo.title.split(" | ", 1)[0],
            searchAction: { urlTemplate: CALENDAR_URL + "?q={search_term_string}" },
            url: CALENDAR_URL,
          }),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              { name: "Tradeshow Calendar", url: CALENDAR_URL },
            ],
            CALENDAR_URL
          ),
          buildLinkedItemListJsonLd(
            TRADE_SHOW_CALENDAR_EVENTS.slice(0, 10).map((e) => ({
              name: e.name,
              url: `${siteUrl}/tradeshow-calendar/${e.id}`,
            }))
          ),
        ])}
      />
      <Header />
      <Hero
        centered
        description={TRADE_SHOW_CALENDAR_HERO.description}
        images={TRADE_SHOW_CALENDAR_HERO_IMAGES}
        primaryCta={EXHIBIT_CTA}
        title={TRADE_SHOW_CALENDAR_HERO.title}
      />
      <Suspense>
        <TradeShowCalendarSection />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Page;
