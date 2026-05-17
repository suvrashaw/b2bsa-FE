import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTABanner } from "@/components/sections/CTABanner";
import { Culture } from "@/components/sections/Culture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Timeline } from "@/components/ui/Timeline";
import {
  ABOUT_CTA,
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_PRESENCE,
  ABOUT_RECENT_EVENTS,
  ABOUT_STATS,
  ABOUT_TEAM,
  ABOUT_VALUES,
} from "@/content/about";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...ABOUT_HERO} />
      <WhoWeAre {...ABOUT_STATS} />
      <Timeline
        data={ABOUT_ORIGIN_TIMELINE.items}
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
      />
      <UpcomingEvents {...ABOUT_RECENT_EVENTS} />
      <TeamGrid data={ABOUT_TEAM} />
      <Culture data={ABOUT_VALUES} />
      <GlobalPresence data={ABOUT_PRESENCE} />
      <CTABanner {...ABOUT_CTA} />
      <Footer />
    </main>
  );
};

export default Page;
