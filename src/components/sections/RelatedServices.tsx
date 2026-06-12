"use client";

import { type RelatedService, RelatedServicesCard } from "@/components/items/RelatedServicesCard";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface RelatedServicesProps {
  className?: string;
  services: RelatedService[];
  title?: string;
}

export const RelatedServices = ({
  className,
  services,
  title = "Explore Related Solutions",
}: RelatedServicesProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <Heading as="h2" className="mb-12 text-center">
          {title}
        </Heading>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <RelatedServicesCard index={index} key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
