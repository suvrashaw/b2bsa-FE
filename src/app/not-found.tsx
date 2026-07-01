import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col bg-brand-gray">
      <Header />
      <section className="flex flex-1 items-center justify-center py-24">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 font-heading text-8xl font-bold text-brand-blue md:text-9xl">404</p>
            <SectionHeader as="h1" className="mb-6">
              Page Not Found
            </SectionHeader>
            <p className="mb-12 text-lg leading-relaxed text-brand-charcoal/70">
              The page you are looking for does not exist or has been moved. Let us help you find
              what you need.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="primary">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
