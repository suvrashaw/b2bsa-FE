"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface FeaturedSpotlightProps {
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  description: string;
  imageAlt?: string;
  imageUrl: string;
  index?: string;
  label?: string;
  titleLine1: string;
  titleLine2: string;
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const SpotlightTextBlock = ({
  ctaHref,
  ctaLabel,
  description,
  isHovered,
  label,
  titleLine1,
  titleLine2,
}: {
  ctaHref?: string;
  ctaLabel: string;
  description: string;
  isHovered: boolean;
  label: string;
  titleLine1: string;
  titleLine2: string;
}) => {
  const lineStyle = useMemo(
    () => ({ transitionTimingFunction: EASE, width: isHovered ? 48 : 32 }),
    [isHovered]
  );
  const labelStyle = useMemo(
    () => ({ letterSpacing: isHovered ? "0.3em" : "0.25em", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const title1Style = useMemo(
    () => ({ transform: isHovered ? "translateY(-2px)" : "translateY(0)", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const title2Style = useMemo(
    () => ({ transform: isHovered ? "translateX(12px)" : "translateX(0)", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const descStyle = useMemo(
    () => ({
      color: isHovered ? "rgb(75 85 99)" : "rgb(75 85 99 / 0.6)",
      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );

  return (
    <div className="relative z-10 flex w-full max-w-[640px] shrink-0 flex-col items-center text-center md:w-full md:max-w-[480px] lg:max-w-[560px] lg:pt-4">
      <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
        <div className="h-px bg-brand-charcoal transition-all duration-700" style={lineStyle} />
        <span className="text-[10px] font-medium text-brand-charcoal uppercase transition-all duration-700 md:text-xs" style={labelStyle}>
          {label}
        </span>
      </div>

      <Heading as="h2" className="relative">
        <span className="block font-heading text-3xl font-bold tracking-tight whitespace-nowrap text-brand-charcoal transition-all duration-700 lg:text-4xl" style={title1Style}>
          {titleLine1}
        </span>
        <span className="block font-heading text-3xl font-bold tracking-tight whitespace-nowrap text-brand-blue transition-all duration-700 lg:text-4xl" style={title2Style}>
          {titleLine2}
        </span>
      </Heading>

      <p className="mt-6 max-w-[580px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[440px] md:text-base lg:mt-10 lg:max-w-[520px]" style={descStyle}>
        {description}
      </p>

      <div className="mt-6 md:mt-8 lg:mt-10">
        {ctaHref ? (
          <Button
            asChild
            className={cn(
              "gap-2 transition-all duration-500",
              isHovered && "border-brand-blue bg-brand-blue/5"
            )}
            variant="secondary"
          >
            <Link href={ctaHref}>
              {ctaLabel}
              {isHovered ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
          </Button>
        ) : (
          <Button
            className={cn(
              "gap-2 transition-all duration-500",
              isHovered && "border-brand-blue bg-brand-blue/5"
            )}
            variant="secondary"
          >
            {ctaLabel}
            {isHovered ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
};

const SpotlightImageBlock = ({
  imageAlt,
  imageUrl,
  isHovered,
}: {
  imageAlt: string;
  imageUrl: string;
  isHovered: boolean;
}) => {
  const wrapStyle = useMemo(
    () => ({
      transform: isHovered ? "translateX(4px) translateY(-4px)" : "translateX(0) translateY(0)",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const frameStyle = useMemo(
    () => ({
      borderColor: isHovered ? "rgb(30 96 145 / 0.2)" : "transparent",
      transform: isHovered ? "scale(1.01)" : "scale(1)",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const shadowStyle = useMemo(
    () => ({
      boxShadow: isHovered ? "0 24px 64px rgb(30 96 145 / 0.12)" : "0 0 0 transparent",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const imgStyle = useMemo(
    () => ({ transform: isHovered ? "scale(1.03)" : "scale(1)", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const overlayStyle = useMemo(
    () => ({ opacity: isHovered ? 1 : 0, transitionTimingFunction: EASE }),
    [isHovered]
  );
  const cornerTLV = useMemo(
    () => ({ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top" as const, transitionDelay: "50ms", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const cornerTLH = useMemo(
    () => ({ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" as const, transitionDelay: "100ms", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const cornerBRV = useMemo(
    () => ({ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleY(1)" : "scaleY(0)", transformOrigin: "bottom" as const, transitionDelay: "150ms", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const cornerBRH = useMemo(
    () => ({ opacity: isHovered ? 1 : 0, transform: isHovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "right" as const, transitionDelay: "200ms", transitionTimingFunction: EASE }),
    [isHovered]
  );
  return (
    <div className="relative w-fit transition-all duration-700" style={wrapStyle}>
      <div className="absolute -inset-3 border transition-all duration-700 md:-inset-4" style={frameStyle} />
      <div className="relative h-[300px] w-[280px] overflow-hidden sm:h-[360px] sm:w-[340px] md:h-[420px] md:w-[440px] lg:h-[520px] lg:w-[560px]">
        <div className="absolute -inset-1 transition-all duration-700" style={shadowStyle} />
        <Image alt={imageAlt} className="h-full w-full object-cover transition-all duration-1000" fill sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 440px, 560px" src={imageUrl} style={imgStyle} />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700" style={overlayStyle} />
        <div className="absolute top-2 left-2 h-5 w-px bg-white/80 transition-all duration-500 md:top-3 md:left-3 md:h-6" style={cornerTLV} />
        <div className="absolute top-2 left-2 h-px w-5 bg-white/80 transition-all duration-500 md:top-3 md:left-3 md:w-6" style={cornerTLH} />
        <div className="absolute right-2 bottom-2 h-5 w-px bg-white/80 transition-all duration-500 md:right-3 md:bottom-3 md:h-6" style={cornerBRV} />
        <div className="absolute right-2 bottom-2 h-px w-5 bg-white/80 transition-all duration-500 md:right-3 md:bottom-3 md:w-6" style={cornerBRH} />
      </div>

    </div>
  );
};

export const FeaturedSpotlight = ({
  className,
  ctaHref,
  ctaLabel = "Explore",
  description,
  imageAlt = "Feature image",
  imageUrl,
  index: _index = "01",
  label = "Featured",
  titleLine1,
  titleLine2,
}: FeaturedSpotlightProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className={cn(
        "group relative mx-auto flex w-full max-w-6xl cursor-pointer flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:gap-14 lg:max-w-6xl lg:gap-20",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SpotlightTextBlock
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        description={description}
        isHovered={isHovered}
        label={label}
        titleLine1={titleLine1}
        titleLine2={titleLine2}
      />
      <SpotlightImageBlock
        imageAlt={imageAlt}
        imageUrl={imageUrl}
        isHovered={isHovered}
      />
    </div>
  );
};
