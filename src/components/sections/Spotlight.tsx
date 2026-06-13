"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface SpotlightProps {
  align?: SpotlightAlignment;
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  description: string;
  descriptionItems?: readonly string[];
  id?: string;
  imageAlt?: string;
  imageUrl?: string;
  label?: string;
  onClick?: () => void;
  secondarySpotlight?: SpotlightSecondaryBlock;
  sectionClassName?: string;
  showCta?: boolean;
  titleLine1: string;
  titleLine2: string;
  triggerContactModal?: boolean;
  videoUrl?: string;
}

type SpotlightAlignment = "center" | "left" | "right";

interface SpotlightSecondaryBlock {
  align?: SpotlightAlignment;
  ctaHref?: string;
  ctaLabel?: string;
  description: string;
  descriptionItems?: readonly string[];
  label?: string;
  titleLine1: string;
  titleLine2: string;
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const SpotlightTextBlock = ({
  align = "center",
  ctaHref,
  ctaLabel,
  description,
  descriptionItems,
  isHovered,
  label,
  onClick,
  titleLine1,
  titleLine2,
}: {
  align?: SpotlightAlignment;
  ctaHref?: string;
  ctaLabel?: string;
  description: string;
  descriptionItems?: readonly string[];
  isHovered: boolean;
  label?: string;
  onClick?: () => void;
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
    () => ({
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const title2Style = useMemo(
    () => ({
      transform: isHovered ? "translateX(12px)" : "translateX(0)",
      transitionTimingFunction: EASE,
    }),
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
    <div
      className={cn(
        "relative z-10 flex w-full max-w-[640px] shrink-0 flex-col md:w-full md:max-w-[480px] lg:max-w-[560px] lg:pt-4",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        align === "center" && "items-center text-center"
      )}
    >
      {label && (
        <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
          <div className="h-px bg-brand-charcoal transition-all duration-700" style={lineStyle} />
          <span
            className="text-[10px] font-medium text-brand-charcoal uppercase transition-all duration-700 md:text-xs"
            style={labelStyle}
          >
            {label}
          </span>
        </div>
      )}

      <SectionHeader as="h2" className="relative">
        <span
          className="block font-heading text-3xl font-bold tracking-tight text-brand-charcoal transition-all duration-700 sm:whitespace-nowrap lg:text-4xl"
          style={title1Style}
        >
          {titleLine1}
        </span>
        <span
          className="block font-heading text-3xl font-bold tracking-tight text-brand-blue transition-all duration-700 sm:whitespace-nowrap lg:text-4xl"
          style={title2Style}
        >
          {titleLine2}
        </span>
      </SectionHeader>

      {descriptionItems ? (
        <div
          className="mt-6 max-w-[580px] space-y-3 text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[440px] md:text-base lg:mt-10 lg:max-w-[520px]"
          style={descStyle}
        >
          {description && <p>{description}</p>}
          <ul className="space-y-3">
            {descriptionItems.map((item) => (
              <li
                className={cn(
                  "flex gap-3",
                  align === "right" && "flex-row-reverse",
                  align === "center" && "justify-center"
                )}
                key={item}
              >
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p
          className="mt-6 max-w-[580px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[440px] md:text-base lg:mt-10 lg:max-w-[520px]"
          style={descStyle}
        >
          {description}
        </p>
      )}

      {ctaLabel && (
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
                {isHovered ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Link>
            </Button>
          ) : (
            <Button
              className={cn(
                "gap-2 transition-all duration-500",
                isHovered && "border-brand-blue bg-brand-blue/5"
              )}
              onClick={onClick}
              variant="secondary"
            >
              {ctaLabel}
              {isHovered ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

const SpotlightImageBlock = ({
  imageAlt,
  imageUrl,
  isHovered,
  videoUrl,
}: {
  imageAlt: string;
  imageUrl?: string;
  isHovered: boolean;
  videoUrl?: string;
}) => {
  const backingStyle = useMemo(
    () => ({
      boxShadow: isHovered
        ? "12px 12px 0px 0px rgba(30, 96, 145, 0.15)"
        : "6px 6px 0px 0px rgba(30, 96, 145, 0.10)",
      transform: isHovered ? "translate(-4px, -4px)" : "translate(0, 0)",
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
    () => ({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
      transformOrigin: "top" as const,
      transitionDelay: "50ms",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const cornerTLH = useMemo(
    () => ({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left" as const,
      transitionDelay: "100ms",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const cornerBRV = useMemo(
    () => ({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
      transformOrigin: "bottom" as const,
      transitionDelay: "150ms",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );
  const cornerBRH = useMemo(
    () => ({
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "right" as const,
      transitionDelay: "200ms",
      transitionTimingFunction: EASE,
    }),
    [isHovered]
  );

  let mediaElement: React.ReactNode = null;
  if (videoUrl) {
    mediaElement = (
      <video
        autoPlay
        className="h-full w-full object-cover transition-all duration-1000"
        loop
        muted
        playsInline
        preload="metadata"
        style={imgStyle}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    );
  } else if (imageUrl) {
    mediaElement = (
      <Image
        alt={imageAlt}
        className="h-full w-full object-cover transition-all duration-1000"
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 440px, 560px"
        src={imageUrl}
        style={imgStyle}
      />
    );
  }

  return (
    <div className="relative w-fit">
      <div
        className="absolute inset-0 rounded-2xl border border-brand-blue/10 transition-all duration-500"
        style={backingStyle}
      />
      <div className="relative h-[300px] w-[280px] overflow-hidden rounded-2xl sm:h-[360px] sm:w-[340px] md:h-[420px] md:w-[440px] lg:h-[520px] lg:w-[560px]">
        {mediaElement}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700"
          style={overlayStyle}
        />
        <div
          className="absolute top-2 left-2 h-5 w-px bg-white/80 transition-all duration-500 md:top-3 md:left-3 md:h-6"
          style={cornerTLV}
        />
        <div
          className="absolute top-2 left-2 h-px w-5 bg-white/80 transition-all duration-500 md:top-3 md:left-3 md:w-6"
          style={cornerTLH}
        />
        <div
          className="absolute right-2 bottom-2 h-5 w-px bg-white/80 transition-all duration-500 md:right-3 md:bottom-3 md:h-6"
          style={cornerBRV}
        />
        <div
          className="absolute right-2 bottom-2 h-px w-5 bg-white/80 transition-all duration-500 md:right-3 md:bottom-3 md:w-6"
          style={cornerBRH}
        />
      </div>
    </div>
  );
};

export const Spotlight = ({
  align = "center",
  className,
  ctaHref,
  ctaLabel = "Explore",
  description,
  descriptionItems,
  id,
  imageAlt = "Feature image",
  imageUrl,
  label,
  onClick,
  secondarySpotlight,
  sectionClassName,
  showCta = true,
  titleLine1,
  titleLine2,
  triggerContactModal = false,
  videoUrl,
}: SpotlightProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleCtaClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    if (triggerContactModal) {
      setIsModalOpen(true);
    }
  }, [onClick, triggerContactModal]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <section className={cn("bg-brand-gray py-20", sectionClassName)} id={id}>
        <div
          className={cn(
            "group relative mx-auto flex w-full max-w-6xl cursor-pointer flex-col items-center justify-center gap-8 px-8 md:grid md:grid-cols-2 md:gap-14 lg:max-w-6xl lg:gap-20",
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SpotlightTextBlock
            align={align}
            ctaHref={ctaHref}
            ctaLabel={showCta ? ctaLabel : undefined}
            description={description}
            descriptionItems={descriptionItems}
            isHovered={isHovered}
            label={label}
            onClick={handleCtaClick}
            titleLine1={titleLine1}
            titleLine2={titleLine2}
          />
          {secondarySpotlight ? (
            <SpotlightTextBlock
              align={secondarySpotlight.align ?? "right"}
              ctaHref={secondarySpotlight.ctaHref}
              ctaLabel={secondarySpotlight.ctaLabel}
              description={secondarySpotlight.description}
              descriptionItems={secondarySpotlight.descriptionItems}
              isHovered={isHovered}
              label={secondarySpotlight.label}
              titleLine1={secondarySpotlight.titleLine1}
              titleLine2={secondarySpotlight.titleLine2}
            />
          ) : (
            <SpotlightImageBlock
              imageAlt={imageAlt}
              imageUrl={imageUrl}
              isHovered={isHovered}
              videoUrl={videoUrl}
            />
          )}
        </div>
      </section>
      {triggerContactModal && <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  );
};
