import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import {
  EVENTS_CASE_STUDIES,
  EVENTS_CONTACT,
  EVENTS_HERO,
  EVENTS_PAGE,
  EVENTS_STATS,
  EVENTS_TESTIMONIALS,
  EVENTS_UPCOMING,
  EVENTS_WHY,
} from "@/content/events";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(EVENTS_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...EVENTS_HERO} />
      <UpcomingEvents {...EVENTS_UPCOMING} />
      <WhoWeAre {...EVENTS_STATS} />
      <CaseStudies {...EVENTS_CASE_STUDIES} />
      <WhyChooseUs {...EVENTS_WHY} />
      <Testimonials {...EVENTS_TESTIMONIALS} />
      <ContactUs {...EVENTS_CONTACT} />
      <Footer />
    </main>
  );
};

export default Page;
