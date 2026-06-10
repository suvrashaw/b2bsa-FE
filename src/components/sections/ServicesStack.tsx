"use client";

import { useMemo } from "react";

import { ServicesCard } from "@/components/items/ServicesCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  HOME_SERVICES_CONTENT,
  type HomeServiceItem,
  type HomeServicesContent,
} from "@/content/home";

export interface ServicesStackProps {
  content?: HomeServicesContent;
  ctaLabel?: HomeServicesContent["ctaLabel"];
  eyebrow?: HomeServicesContent["eyebrow"];
  heading?: HomeServicesContent["heading"];
  headingHighlight?: string;
  serviceLabel?: HomeServicesContent["serviceLabel"];
  services?: HomeServiceItem[];
}

export const ServicesStack = ({
  content = HOME_SERVICES_CONTENT,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  heading = content.heading,
  headingHighlight = content.headingHighlight,
  serviceLabel = content.serviceLabel,
  services = content.services,
}: ServicesStackProps = {}) => {
  const stickyStyles = useMemo(
    () => services.map((_, index) => ({ top: `calc(100px + ${index * 20}px)`, zIndex: index })),
    [services]
  );

  return (
    <section className="bg-brand-gray pt-20 pb-40" id="services">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="text-center" highlight={headingHighlight}>{heading}</Heading>
        </div>

        <div className="relative flex flex-col gap-12">
          {services.map((service, index) => (
            <div className="sticky" key={service.id} style={stickyStyles[index]}>
              <ServicesCard
                ctaLabel={ctaLabel}
                service={service}
                serviceLabel={serviceLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
