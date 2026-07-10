import type { Metadata } from "next";

import { CheckCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { THANK_YOU_BODY, THANK_YOU_PAGE } from "@/content/thank-you/content";

export const metadata: Metadata = getMarketingPageMetadata(THANK_YOU_PAGE);

const telHref = `tel:${THANK_YOU_BODY.phone.replaceAll(/[^\d+]/g, "")}`;
const mailHref = `mailto:${THANK_YOU_BODY.email}`;

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-brand-gray">
      <Header />
      <section className="flex flex-1 items-center justify-center py-24">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-brand-blue/10">
              <CheckCircle className="size-10 text-brand-blue" strokeWidth={1.5} />
            </div>
            <SectionHeader as="h1" className="mb-6">
              {THANK_YOU_BODY.heading}
            </SectionHeader>
            <p className="mb-12 text-lg leading-relaxed text-brand-charcoal/70">
              {THANK_YOU_BODY.description}
            </p>

            <div className="mb-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-blue" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 font-semibold text-brand-charcoal">Email Us</p>
                  <a className="text-sm text-brand-blue hover:underline" href={mailHref}>
                    {THANK_YOU_BODY.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-blue" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 font-semibold text-brand-charcoal">Call Us</p>
                  <a className="text-sm text-brand-blue hover:underline" href={telHref}>
                    {THANK_YOU_BODY.phone}
                  </a>
                </div>
              </div>
            </div>

            <Button asChild variant="primary">
              <Link href="/">{THANK_YOU_BODY.backToHomeLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
