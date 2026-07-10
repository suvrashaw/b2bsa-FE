import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PRIVACY_BODY, PRIVACY_PAGE } from "@/content/privacy-policy/content";

export const metadata: Metadata = getMarketingPageMetadata(PRIVACY_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <div className="pt-40 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          <SectionHeader
            as="h1"
            className="mb-12 font-heading text-2xl font-bold md:text-2xl"
            preserveClassName
          >
            {PRIVACY_BODY.heading}
          </SectionHeader>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="mb-12 text-xl text-gray-500">{PRIVACY_BODY.lastUpdated}</p>
            {PRIVACY_BODY.sections.map((section) => (
              <section className="mb-12" key={section.id}>
                <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                  {section.title}
                </SectionHeader>
                <p className="mb-4 leading-relaxed text-gray-600 last:mb-0">
                  {section.body}
                  {section.id === "contact-us" ? (
                    <a
                      className="text-brand-blue hover:underline"
                      href={`mailto:${PRIVACY_BODY.contactEmail}`}
                    >
                      {PRIVACY_BODY.contactEmail}
                    </a>
                  ) : null}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
