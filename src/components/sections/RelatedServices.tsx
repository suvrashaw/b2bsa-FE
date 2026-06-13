"use client";

import { type RelatedService, ServicesLinkCard } from "@/components/items/ServicesLinkCard";
import { GridSection } from "@/components/sections/GridSection";

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
    <GridSection className={className} cols={3} heading={title}>
      {services.map((service, index) => (
        <ServicesLinkCard index={index} key={service.href} service={service} />
      ))}
    </GridSection>
  );
};
