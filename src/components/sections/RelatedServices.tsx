"use client";

import { type RelatedService, ServicesLinkCard } from "@/components/items/ServicesLinkCard";
import { CardSection } from "@/components/sections/CardSection";

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
    <CardSection className={className} cols={3} heading={title} layout="grid">
      {services.map((service, index) => (
        <ServicesLinkCard index={index} key={service.href} service={service} />
      ))}
    </CardSection>
  );
};
