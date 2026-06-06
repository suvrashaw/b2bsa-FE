import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutCoreValues } from "@/components/sections/AboutCoreValues";
import { AboutFounderStory } from "@/components/sections/AboutFounderStory";
import { AboutSignatureServices } from "@/components/sections/AboutSignatureServices";
import { AboutVisionMission } from "@/components/sections/AboutVisionMission";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { Timeline } from "@/components/ui/Timeline";
import {
  ABOUT_CORE_VALUES,
  ABOUT_FOUNDER_STORY,
  ABOUT_HERO,
  ABOUT_INQUIRY,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_PRESENCE,
  ABOUT_RECENT_EVENTS,
  ABOUT_SIGNATURE_SERVICES,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
} from "@/content/about";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...ABOUT_HERO} />
      <AboutVisionMission data={ABOUT_VISION_MISSION} />
      <Timeline
        data={ABOUT_ORIGIN_TIMELINE.items}
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
      />
      <AboutCoreValues data={ABOUT_CORE_VALUES} />
      <AboutSignatureServices data={ABOUT_SIGNATURE_SERVICES} />
      <UpcomingEvents {...ABOUT_RECENT_EVENTS} />
      <AboutFounderStory data={ABOUT_FOUNDER_STORY} />
      <Culture data={ABOUT_VALUES} />
      <GlobalPresence data={ABOUT_PRESENCE} />
      <ContactUs {...ABOUT_INQUIRY} />
      <Footer />
    </main>
  );
};

export default Page;
