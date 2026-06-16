import type { Metadata } from "next";

import { ServicesLinkCard } from "@/components/items/ServicesLinkCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { serviceNavigationGroups } from "@/content/navigation";
import { HPMI_PAGE } from "@/content/services/hpmi/content";

export const metadata: Metadata = getMarketingPageMetadata(HPMI_PAGE);

const hpmiLinks = serviceNavigationGroups.find((group) => group.name === "HPMI")?.links ?? [];

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header forceLightMode />
      <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <SectionHeader
            as="h1"
            description="Human powered market intelligence from B2B Sales Arrow."
            heading="HPMI"
            headingAlign="left"
          />
        </div>
      </section>
      <CardsGrid cols={2} heading="HPMI" headingAlign="left">
        {hpmiLinks.map((service, index) => (
          <ServicesLinkCard index={index} key={service.href} service={{ href: service.href, title: service.name }} />
        ))}
      </CardsGrid>
      <Footer />
    </main>
  );
};

export default Page;
