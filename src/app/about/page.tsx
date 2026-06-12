import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutCoreValues } from "@/components/sections/AboutCoreValues";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { Events } from "@/components/sections/Events";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
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
  ABOUT_SIGNATURE_SERVICES_STACK,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
} from "@/content/about";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const ABOUT_IMAGES = ["/images/about/culture/culture-5.avif"];
const ABOUT_PRIMARY_CTA = { href: ABOUT_HERO.primaryCtaHref, label: ABOUT_HERO.primaryCtaLabel };
const ABOUT_SECONDARY_CTA = {
  href: ABOUT_HERO.secondaryCtaHref,
  label: ABOUT_HERO.secondaryCtaLabel,
};
const ABOUT_VISION_SPOTLIGHT = {
  align: "right" as const,
  description: ABOUT_VISION_MISSION.vision,
  titleLine1: "Our",
  titleLine2: "Vision",
};

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header darkBackground />
      <Hero
        description={ABOUT_HERO.description}
        images={ABOUT_IMAGES}
        primaryCta={ABOUT_PRIMARY_CTA}
        secondaryCta={ABOUT_SECONDARY_CTA}
        title={"We Are the Growth Partner\nYour Enterprise Deserves"}
      />
      <section className="bg-brand-gray py-20">
        <div className="container mx-auto px-8">
          <Spotlight
            align="left"
            description=""
            descriptionItems={ABOUT_VISION_MISSION.missionItems}
            label="Vision & Mission"
            secondarySpotlight={ABOUT_VISION_SPOTLIGHT}
            showCta={false}
            titleLine1="Our"
            titleLine2="Mission"
          />
        </div>
      </section>
      <ProcessTimeline
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
        phases={ABOUT_ORIGIN_TIMELINE.phases}
      />
      <AboutCoreValues data={ABOUT_CORE_VALUES} />
      <ServicesStack
        heading={ABOUT_SIGNATURE_SERVICES.heading}
        services={ABOUT_SIGNATURE_SERVICES_STACK}
      />
      <Events {...ABOUT_RECENT_EVENTS} />
      <section className="scroll-mt-28 bg-brand-gray px-8 py-20" id="founder">
        <Spotlight
          align="left"
          className="[&>div:first-child]:md:order-last"
          description={ABOUT_FOUNDER_STORY.story}
          imageAlt={ABOUT_FOUNDER_STORY.image.alt}
          imageUrl="/images/about/leadership/paras-sir-02.avif"
          label="FOUNDER STORY"
          showCta={false}
          titleLine1="Paras"
          titleLine2="Lohani"
        />
      </section>
      <Culture data={ABOUT_VALUES} />
      <GlobalPresence data={ABOUT_PRESENCE} />
      <ContactUs {...ABOUT_INQUIRY} />
      <Footer />
    </main>
  );
};

export default Page;
