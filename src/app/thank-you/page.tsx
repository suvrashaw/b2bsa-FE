import type { Metadata } from "next";

import { CheckCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  description: "Thank you for reaching out to B2B Sales Arrow. We will be in touch shortly.",
  robots: { follow: false, index: false },
  title: "Thank You for Contacting Us",
};

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
              Thank You for Contacting Us!
            </SectionHeader>
            <p className="mb-12 text-lg leading-relaxed text-brand-charcoal/70">
              Your inquiry has been received. A member of our team will review your message and get
              back to you within one business day.
            </p>

            <div className="mb-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
              <div className="flex gap-4 rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-blue" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 font-semibold text-brand-charcoal">Email Us</p>
                  <a
                    className="text-sm text-brand-blue hover:underline"
                    href="mailto:info@b2bsalesarrow.com"
                  >
                    info@b2bsalesarrow.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-brand-charcoal/10 bg-white p-6">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-blue" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 font-semibold text-brand-charcoal">Call Us</p>
                  <a
                    className="text-sm text-brand-blue hover:underline"
                    href="tel:+1-800-000-0000"
                  >
                    +1 (800) 000-0000
                  </a>
                </div>
              </div>
            </div>

            <Button asChild variant="primary">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
