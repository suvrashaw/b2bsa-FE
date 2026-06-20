"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { HomeServiceItem } from "@/content/home/content";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface ServicesCardProps {
  ctaLabel: string;
  onCtaClick?: () => void;
  service: HomeServiceItem;
  serviceLabel?: string;
  showCta?: boolean;
}

export const ServicesCard = ({
  ctaLabel,
  onCtaClick,
  service,
  serviceLabel,
  showCta = true,
}: ServicesCardProps) => {
  return (
    <div className="relative flex h-auto flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:min-h-[400px] md:flex-row">
      {/* Content Area */}
      <div className="pointer-events-none relative z-10 flex w-full flex-col justify-between p-8 md:w-1/2 md:p-6 lg:w-2/5 lg:p-12">
        <div className="pointer-events-auto">
          {serviceLabel && (
            <div className="mb-6 flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm">
                <Icon className="h-3 w-3 text-brand-blue" name={service.icon} />
                {serviceLabel}
              </span>
            </div>
          )}
          <h3 className="mb-6 font-heading text-2xl leading-tight font-bold">{service.title}</h3>

          <p className="text-base leading-relaxed font-medium text-gray-600 md:text-lg">
            {service.description}
          </p>
        </div>

        {showCta &&
          (service.href ? (
            <Button asChild className="pointer-events-auto mt-10 w-max md:mt-0" variant="primary">
              <Link aria-label={`${ctaLabel} about ${service.title}`} href={service.href}>
                <span className="mr-4">
                  {ctaLabel}
                  <span className="sr-only"> about {service.title}</span>
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button
              aria-label={`${ctaLabel} about ${service.title}`}
              className="pointer-events-auto mt-10 w-max md:mt-0"
              onClick={onCtaClick}
              type="button"
              variant="primary"
            >
              <span className="mr-4">
                {ctaLabel}
                <span className="sr-only"> about {service.title}</span>
              </span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ))}
      </div>

      {/* Image Area */}
      <div className="image-pane z-0 h-64 w-full overflow-hidden md:absolute md:top-0 md:right-0 md:bottom-0 md:h-full md:w-1/2 lg:w-3/5">
        <Image
          alt={service.title}
          className="object-cover max-md:scale-105 max-md:blur-[4px]"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          src={service.image}
        />
        {/* Mobile: always-on gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
      </div>
    </div>
  );
};
