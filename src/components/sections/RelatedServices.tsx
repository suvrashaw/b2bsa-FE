"use client";

import { type RelatedService, RelatedServiceLink } from "@/components/items/RelatedServiceLink";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface RelatedServicesProps {
  className?: string;
  headingHighlight?: string;
  services: RelatedService[];
  title?: string;
}

export const RelatedServices = ({
  className,
  headingHighlight,
  services,
  title = "Explore Related Solutions",
}: RelatedServicesProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className={cn("bg-brand-gray py-20", className)}>
      <div className="container mx-auto px-8">
        <Heading as="h2" className="mb-12 text-center" highlight={headingHighlight}>
          {title}
        </Heading>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <RelatedServiceLink index={index} key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
