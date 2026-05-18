import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TradeShowsDirectory } from "@/components/sections/TradeShowsDirectory";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  EVENTS_CASE_STUDIES,
  EVENTS_CONTACT,
  EVENTS_FAQ,
  EVENTS_HERO,
  EVENTS_PAGE,
  EVENTS_POSITIONING,
  EVENTS_PROCESS,
  TRADE_SHOWS_DIRECTORY,
} from "@/content/events";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(EVENTS_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      <Hero {...EVENTS_HERO} />

      <ProcessTimeline {...EVENTS_PROCESS} />

      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-8">
          <div className="mb-16 text-center">
            <Eyebrow className="justify-center" variant="cyan">
              {EVENTS_POSITIONING.eyebrow}
            </Eyebrow>
            <Heading as="h2">{EVENTS_POSITIONING.heading}</Heading>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {EVENTS_POSITIONING.items.map((item) => (
              <div
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-brand-gray/50 p-8 md:p-12"
                key={item.id}
              >
                <div className="relative z-10">
                  <h3 className="mb-4 font-heading text-2xl font-bold text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-brand-charcoal/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TradeShowsDirectory {...TRADE_SHOWS_DIRECTORY} />

      <CaseStudies {...EVENTS_CASE_STUDIES} />

      <FAQ {...EVENTS_FAQ} />

      <ContactUs {...EVENTS_CONTACT} />

      <Footer />
    </main>
  );
};

export default Page;
