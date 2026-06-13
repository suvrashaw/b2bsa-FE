"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import type { HomeServiceItem } from "@/content/home/content";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface ServicesCardProps {
  ctaLabel: string;
  service: HomeServiceItem;
  serviceLabel?: string;
}

export const ServicesCard = ({ ctaLabel, service, serviceLabel }: ServicesCardProps) => {
  return (
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
          <h3 className="mb-6 font-heading text-3xl leading-tight font-bold transition-colors duration-700 md:group-has-[.image-pane:hover]/card:!text-white">
            {service.title}
          </h3>

          <p className="text-base leading-relaxed font-medium text-gray-600 transition-colors duration-700 md:text-lg md:group-has-[.image-pane:hover]/card:text-gray-200">
            {service.description}
          </p>
        </div>

        <Button
          className="pointer-events-auto mt-10 w-max transition-all duration-700 md:mt-0 md:group-has-[.image-pane:hover]/card:border-white md:group-has-[.image-pane:hover]/card:bg-white md:group-has-[.image-pane:hover]/card:text-brand-blue"
          variant="primary"
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
        {/* Mobile: always-on gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
        {/* Desktop: hover gradient */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 max-md:hidden md:group-hover/image:opacity-100" />
      </div>
    </div>
  );
};
