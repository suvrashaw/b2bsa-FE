import type { Metadata } from "next";

import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ImageHero } from "@/components/sections/ImageHero";
import { TradeShowCalendarDirectory } from "@/components/sections/TradeShowCalendarDirectory";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  TRADE_SHOW_CALENDAR_EVENTS,
  TRADE_SHOW_CALENDAR_HERO,
  TRADE_SHOW_CALENDAR_PAGE,
} from "@/content/trade-show-calendar";

const TRADE_SHOW_CALENDAR_HERO_IMAGES = ["/images/blog/thumbnails/trade-show-booth-trends-2026.avif"];

export const metadata: Metadata = getMarketingPageMetadata(TRADE_SHOW_CALENDAR_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header darkBackground />
      <ImageHero
        description={TRADE_SHOW_CALENDAR_HERO.description}
        images={TRADE_SHOW_CALENDAR_HERO_IMAGES}
        title={TRADE_SHOW_CALENDAR_HERO.title}
      />
      <Suspense>
        <TradeShowCalendarDirectory
          description={TRADE_SHOW_CALENDAR_HERO.description}
          events={TRADE_SHOW_CALENDAR_EVENTS}
          eyebrow={TRADE_SHOW_CALENDAR_HERO.eyebrow}
          searchPlaceholder={TRADE_SHOW_CALENDAR_HERO.searchPlaceholder}
          title={TRADE_SHOW_CALENDAR_HERO.title}
        />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Page;
