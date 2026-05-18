import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { OurServices } from "@/components/sections/OurServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { HOME_FAQ_CONTENT, HOME_PAGE } from "@/content/home";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { buildFaqJsonLd } from "@/lib";

export const metadata: Metadata = getMarketingPageMetadata(HOME_PAGE);

const Home = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildFaqJsonLd(HOME_FAQ_CONTENT.faqs)} />
      <Header darkBackground />
      <div id="home">
        <CinematicSequence />
      </div>

      <ClientLogos />

      <div id="about">
        <WhoWeAre />
      </div>

      <div id="services">
        <OurServices />
      </div>

      <div id="work">
        <CaseStudies />
      </div>

      <div id="events">
        <UpcomingEvents />
      </div>

      <WhyChooseUs />

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
