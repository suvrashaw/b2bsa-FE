"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";
import {
  HOME_SERVICES_CONTENT,
  type HomeServiceItem,
  type HomeServicesContent,
} from "@/content/home";

export interface OurServicesProps {
  content?: HomeServicesContent;
  ctaLabel?: HomeServicesContent["ctaLabel"];
  eyebrow?: HomeServicesContent["eyebrow"];
  heading?: HomeServicesContent["heading"];
  serviceLabel?: HomeServicesContent["serviceLabel"];
  services?: HomeServiceItem[];
}

export const OurServices = ({
  content = HOME_SERVICES_CONTENT,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  heading = content.heading,
  serviceLabel = content.serviceLabel,
  services = content.services,
}: OurServicesProps = {}) => {
  const stickyStyles = useMemo(
    () => services.map((_, index) => ({ top: `calc(100px + ${index * 20}px)`, zIndex: index })),
    [services]
  );

  return (
    <section className="bg-white pt-20 pb-40" id="services">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2">{heading}</Heading>
        </div>

        <div className="relative flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              className="sticky"
              key={service.id}
              style={stickyStyles[index]}
            >
              <div className="group/card relative flex h-auto flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:h-[400px] md:flex-row">
                {/* Content Area */}
                <div className="pointer-events-none relative z-10 flex w-full flex-col justify-between p-8 transition-all duration-700 md:w-2/5 lg:p-12">
                  <div className="pointer-events-auto">
                    {serviceLabel && (
                      <div className="mb-6 flex items-center gap-2">
                        <span className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm transition-colors duration-700 md:group-has-[.image-pane:hover]/card:border-transparent md:group-has-[.image-pane:hover]/card:bg-white/20 md:group-has-[.image-pane:hover]/card:text-white md:group-has-[.image-pane:hover]/card:backdrop-blur-md">
                          <Icon
                            className="h-3 w-3 text-brand-blue transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white"
                            name={service.icon}
                          />
                          {serviceLabel}
                        </span>
                      </div>
                    )}
                    <h3 className="mb-6 font-heading text-3xl  leading-tight font-bold transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed font-medium text-gray-600 transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-gray-200">
                      {service.description}
                    </p>
                  </div>

                  <Button
                    className="pointer-events-auto mt-10 w-max transition-all duration-700 md:mt-0 md:group-has-[.image-pane:hover]/card:border-brand-blue md:group-has-[.image-pane:hover]/card:bg-brand-blue md:group-has-[.image-pane:hover]/card:text-white"
                    variant="secondary"
                  >
                    <span className="mr-4">{ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Image Area */}
                <div className="group/image image-pane z-0 h-64 w-full cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:absolute md:top-0 md:right-0 md:bottom-0 md:h-full md:w-3/5 md:hover:w-full">
                  <Image
                    alt={service.title}
                    className="object-cover transition-transform duration-700 md:group-hover/image:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 md:group-hover/image:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
