import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Timeline } from "@/components/ui/Timeline";
import {
  ABOUT_CONTACT,
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_PRESENCE,
  ABOUT_STATS,
  ABOUT_TEAM,
  ABOUT_TESTIMONIALS,
  ABOUT_VALUES,
} from "@/content/about";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...ABOUT_HERO} />
      <Timeline
        data={ABOUT_ORIGIN_TIMELINE.items}
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
      />
      <WhoWeAre {...ABOUT_STATS} />
      <TeamGrid data={ABOUT_TEAM} />
      <Culture data={ABOUT_VALUES} />
      <GlobalPresence data={ABOUT_PRESENCE} />
      <ClientLogos />
      <Testimonials {...ABOUT_TESTIMONIALS} />
      <ContactUs {...ABOUT_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
