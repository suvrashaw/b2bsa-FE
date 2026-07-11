import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COOKIE_BODY, COOKIE_PAGE } from "@/content/cookie-policy/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(COOKIE_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <section className="pt-40 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          <SectionHeader as="h1" className="mb-6">
            {COOKIE_BODY.heading}
          </SectionHeader>
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-600">
            {COOKIE_BODY.intro}
          </p>

          <div className="space-y-10">
            {COOKIE_BODY.sections.map((section) => (
              <section
                className="rounded-2xl border border-gray-100 bg-brand-gray/40 p-8"
                key={section.title}
              >
                <SectionHeader as="h2" className="mb-4 text-xl lg:text-2xl">
                  {section.title}
                </SectionHeader>
                <p className="leading-relaxed text-gray-600">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl bg-brand-blue p-8 text-white">
            <SectionHeader
              as="h2"
              className="mb-4 font-heading text-xl leading-tight font-bold text-white lg:text-2xl"
              preserveClassName
            >
              {COOKIE_BODY.preferences.heading}
            </SectionHeader>
            <p className="leading-relaxed text-white/80">
              {COOKIE_BODY.preferences.body}
              <a
                className="underline hover:no-underline"
                href={`mailto:${COOKIE_BODY.contactEmail}`}
              >
                {COOKIE_BODY.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
