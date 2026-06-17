import type { Metadata } from "next";

import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  TRADE_SHOW_CALENDAR_HERO,
  TRADE_SHOW_CALENDAR_PAGE,
} from "@/content/tradeshow-calendar";

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
