import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Events } from "@/components/sections/Events";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { HOME_CINEMATIC_SEQUENCE_CONTENT, HOME_FAQ_CONTENT, HOME_PAGE } from "@/content/home";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import { buildFaqJsonLd } from "@/lib";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const Home = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildFaqJsonLd(HOME_FAQ_CONTENT.faqs)} />
      <Header forceLightMode />
      <div id="home">
        <Hero
          description={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.description}
          primaryCta={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.primaryCta}
          secondaryCta={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.secondaryCta}
          title={HOME_CINEMATIC_SEQUENCE_CONTENT.heroOverlay!.title}
        />
      </div>

      <ClientLogos />

      <div id="about">
        <WhoWeAre />
      </div>

      <div id="services">
        <ServicesStack />
      </div>

      <div id="work">
        <CaseStudies items={GLOBAL_CASE_STUDIES} viewAllLabel="View All Case Studies" />
      </div>

      <div id="events">
        <Events />
      </div>

      <StickyScroll />

      <Testimonials />

      <div id="blogs">
        <Blogs />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
