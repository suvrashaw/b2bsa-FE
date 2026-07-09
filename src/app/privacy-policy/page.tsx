import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PRIVACY_PAGE } from "@/content/privacy-policy/content";

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
            Privacy Policy
          </SectionHeader>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="mb-12 text-xl text-gray-500">Last Updated: May 2024</p>
            <section className="mb-12">
              <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                1. Information We Collect
              </SectionHeader>
              <p className="mb-4 leading-relaxed text-gray-600">
                We collect information that you provide directly to us when you fill out a form,
                request a consultation, or contact us via email. This may include your name, email
                address, company name, and phone number.
              </p>
            </section>
            <section className="mb-12">
              <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                2. How We Use Your Information
              </SectionHeader>
              <p className="mb-4 leading-relaxed text-gray-600">
                We use the information we collect to provide, maintain, and improve our services, to
                communicate with you about your projects, and to send you insights and updates that
                may be relevant to your business.
              </p>
            </section>
            <section className="mb-12">
              <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                3. Data Security
              </SectionHeader>
              <p className="mb-4 leading-relaxed text-gray-600">
                We take reasonable measures to protect your personal information from loss, theft,
                misuse, and unauthorized access. However, no internet transmission is ever
                completely secure or error-free.
              </p>
            </section>
            <section className="mb-12">
              <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                4. Cookies
              </SectionHeader>
              <p className="mb-4 leading-relaxed text-gray-600">
                Our website uses cookies to enhance your experience. You can choose to disable
                cookies in your browser settings, although this may affect the functionality of some
                parts of the site.
              </p>
            </section>
            <section className="mb-12">
              <SectionHeader as="h2" className="mb-6 text-xl font-bold" preserveClassName>
                5. Contact Us
              </SectionHeader>
              <p className="leading-relaxed text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at
                info@b2bsalesarrow.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
