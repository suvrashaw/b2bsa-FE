import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import {
  CONTACT_FAQ,
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_PAGE,
  CONTACT_WHO_WE_ARE,
} from "@/content/contact";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...CONTACT_HERO} />
      <WhoWeAre {...CONTACT_WHO_WE_ARE} />
      <ClientLogos />
      <FAQ {...CONTACT_FAQ} />
      <ContactUs {...CONTACT_FORM} />
      <Footer />
    </main>
  );
};

export default Page;
