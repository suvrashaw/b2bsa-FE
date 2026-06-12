"use client";

import { useMemo } from "react";

import { ServicesCard } from "@/components/items/ServicesCard";
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
  serviceLabel?: HomeServicesContent["serviceLabel"];
  services?: HomeServiceItem[];
}

export const ServicesStack = ({
  content = HOME_SERVICES_CONTENT,
  ctaLabel = content.ctaLabel,
  heading = content.heading,
  serviceLabel = content.serviceLabel,
  services = content.services,
}: ServicesStackProps = {}) => {
  const stickyStyles = useMemo(
    () => services.map((_, index) => ({ top: `calc(100px + ${index * 20}px)`, zIndex: index })),
    [services]
  );

  return (
    <section className="bg-brand-gray pt-20 pb-40" id="services">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <Heading as="h2" className="text-center">
            {heading}
          </Heading>
        </div>

        <div className="relative flex flex-col gap-12">
          {services.map((service, index) => (
            <div className="sticky" key={service.id} style={stickyStyles[index]}>
              <ServicesCard ctaLabel={ctaLabel} service={service} serviceLabel={serviceLabel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
