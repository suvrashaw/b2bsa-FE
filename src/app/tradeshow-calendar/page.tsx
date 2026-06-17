import type { Metadata } from "next";

import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  TRADE_SHOW_CALENDAR_HERO,
  TRADE_SHOW_CALENDAR_PAGE,
} from "@/content/tradeshow-calendar/content";

import { TradeShowCalendarSection } from "./TradeShowCalendarSection";

const TRADE_SHOW_CALENDAR_HERO_IMAGES = [
  "/images/events/adobe_summit_2026.avif",
  "/images/events/event_other_1.avif",
  "/images/events/event_other_2.avif",
  "/images/events/event_other_3.avif",
  "/images/events/event_other_4.avif",
  "/images/events/inma_2026.avif",
  "/images/events/servicenow_2026.avif",
];

export const metadata: Metadata = getMarketingPageMetadata(TRADE_SHOW_CALENDAR_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header darkBackground />
      <Hero
        description={TRADE_SHOW_CALENDAR_HERO.description}
        images={TRADE_SHOW_CALENDAR_HERO_IMAGES}
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
