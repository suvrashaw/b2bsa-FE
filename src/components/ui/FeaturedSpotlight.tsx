"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

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
  const ctaBtnStyle = useMemo(
    () => ({
      backgroundColor: isHovered ? "rgb(30 96 145)" : "transparent",
      borderColor: isHovered ? "rgb(30 96 145)" : "rgb(107 114 128 / 0.3)",
      boxShadow: isHovered ? "0 8px 32px rgb(30 96 145 / 0.25)" : "0 0 0 transparent",
      color: isHovered ? "white" : "rgb(30 96 145)",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const arrowStyle = useMemo(
    () => ({ transform: isHovered ? "rotate(45deg)" : "rotate(0deg)", transitionTimingFunction: EASE }),
    [isHovered]
  );
  const ctaLabelStyle = useMemo(
    () => ({
      opacity: isHovered ? 1 : 0.5,
      transform: isHovered ? "translateX(0)" : "translateX(-8px)",
      transitionDelay: isHovered ? "100ms" : "0ms",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );

  return (
    <div className="relative z-10 flex w-full max-w-[360px] shrink-0 flex-col items-center text-center md:w-full md:max-w-[340px] lg:max-w-[420px] lg:pt-4">
      <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
        <div className="h-px bg-brand-charcoal transition-all duration-700" style={lineStyle} />
        <span className="text-[10px] font-medium text-brand-charcoal uppercase transition-all duration-700 md:text-xs" style={labelStyle}>
          {label}
        </span>
      </div>

      <Heading as="h2" className="relative" preserveClassName>
        <span className="block font-heading text-2xl font-bold tracking-tight text-brand-charcoal transition-all duration-700 sm:text-3xl lg:text-2xl" style={title1Style}>
          {titleLine1}
        </span>
        <span className="block font-heading text-2xl font-bold tracking-tight text-brand-blue transition-all duration-700 sm:text-3xl lg:text-2xl" style={title2Style}>
          {titleLine2}
        </span>
      </Heading>

      <p className="mt-6 max-w-[300px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[320px] md:text-base lg:mt-10 lg:max-w-[380px]" style={descStyle}>
        {description}
      </p>

      {ctaHref ? (
        <Link className="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10" href={ctaHref}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12" style={ctaBtnStyle}>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4" style={arrowStyle} />
          </div>
          <span className="text-[10px] font-medium tracking-widest text-brand-charcoal uppercase transition-all duration-700 md:text-xs" style={ctaLabelStyle}>
            {ctaLabel}
          </span>
        </Link>
      ) : (
        <div className="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12" style={ctaBtnStyle}>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4" style={arrowStyle} />
          </div>
          <span className="text-[10px] font-medium tracking-widest text-brand-charcoal uppercase transition-all duration-700 md:text-xs" style={ctaLabelStyle}>
            {ctaLabel}
          </span>
        </div>
      )}
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
    <div className="relative transition-all duration-700" style={wrapStyle}>
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
        "group relative mx-auto flex w-full max-w-6xl cursor-pointer flex-col items-center justify-center gap-8 md:grid md:grid-cols-[minmax(320px,0.9fr)_minmax(420px,1.1fr)] md:gap-14 lg:max-w-7xl lg:grid-cols-[minmax(380px,0.9fr)_minmax(560px,1.1fr)] lg:gap-20",
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
