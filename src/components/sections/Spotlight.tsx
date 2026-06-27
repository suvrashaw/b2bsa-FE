"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface SpotlightProps {
  align?: SpotlightAlignment;
  className?: string;
  description: string;
  descriptionItems?: readonly string[];
  id?: string;
  imageAlt?: string;
  imageContainerClassName?: string;
  imagePosition?: "left" | "right";
  imageUrl?: string;
  label?: string;
  locationBadges?: readonly string[];
  secondarySpotlight?: SpotlightSecondaryBlock;
  sectionClassName?: string;
  stats?: string[];
  titleLine1: string;
  titleLine2: string;
  triggerContactModal?: boolean;
  videoUrl?: string;
}

type SpotlightAlignment = "center" | "left" | "right";

interface SpotlightSecondaryBlock {
  align?: SpotlightAlignment;
  description: string;
  descriptionItems?: readonly string[];
  label?: string;
  titleLine1: string;
  titleLine2: string;
}

interface StatItem {
  key: string;
  label: string;
  value: string;
}

const MARQUEE_SPEED = 5;

const useStatsMarquee = (isVisible: boolean, isReduced: boolean) => {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((_, delta) => {
    if (isVisible && !isReduced && !isHovered) {
      baseX.set(baseX.get() - MARQUEE_SPEED * (delta / 1000));
    }
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const handleWheel = (e: React.WheelEvent) => {
    const scrollAmount = e.deltaX === 0 ? e.deltaY : e.deltaX;
    baseX.set(baseX.get() - scrollAmount * 0.05);
  };

  return { handleWheel, setIsHovered, x };
};

const StatChip = ({ index, item }: { index: number; item: StatItem }) => {
  const bg = ["bg-brand-blue", "bg-brand-cyan", "bg-brand-primary"][index % 3];
  return (
    <div
      className={cn(
        "mx-3 flex min-w-[180px] shrink-0 flex-col items-center gap-1.5 rounded-xl px-8 py-6 shadow-lg",
        bg,
        "text-white"
      )}
    >
      <span className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">{item.value}</span>
      <span className="text-xs font-bold tracking-widest uppercase opacity-80">{item.label}</span>
    </div>
  );
};

const StatRow = ({ items, keyPrefix }: { items: StatItem[]; keyPrefix: string }) => (
  <>
    {items.map((item, i) => (
      <div className="flex shrink-0 items-center" key={`${keyPrefix}-${item.key}`}>
        <StatChip index={i} item={item} />
      </div>
    ))}
  </>
);

const StatsMarquee = ({ items }: { items: StatItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced =
    globalThis.window !== undefined &&
    globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { handleWheel, setIsHovered, x } = useStatsMarquee(isVisible, prefersReduced);
  const marqueeStyle = useMemo(() => ({ x }), [x]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered]);
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-auto relative -mx-4 w-[calc(100%+2rem)] overflow-hidden py-4 md:-mx-6 md:w-[calc(100%+3rem)] lg:mx-0 lg:w-full"
      onWheel={handleWheel}
      ref={containerRef}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-brand-gray to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-brand-gray to-transparent md:w-48" />
      <motion.div
        className="flex w-max cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={marqueeStyle}
      >
        <div className="flex items-center">
          <StatRow items={items} keyPrefix="a" />
        </div>
        <div className="flex items-center">
          <StatRow items={items} keyPrefix="b" />
        </div>
      </motion.div>
    </div>
  );
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";



const SpotlightTextBlock = ({
  align = "center",
  className,
  description,
  descriptionItems,
  isHovered,
  label,
  locationBadges,
  onLocationBadgeClick,
  pairedWithMedia = false,
  stats,
  titleLine1,
  titleLine2,
}: {
  align?: SpotlightAlignment;
  className?: string;
  description: string;
  descriptionItems?: readonly string[];
  isHovered: boolean;
  label?: string;
  locationBadges?: readonly string[];
  onLocationBadgeClick?: () => void;
  pairedWithMedia?: boolean;
  stats?: string[];
  titleLine1: string;
  titleLine2: string;
}) => {
  const hasDescriptionItems = Boolean(descriptionItems);
  
  let flatItems: StatItem[] = [];
  if (stats && stats.length > 0) {
    flatItems = stats.flatMap((stat, index) =>
      stat.split("|").map((s, pIndex) => {
        const trimmed = s.trim();
        const spaceIdx = trimmed.indexOf(" ");
        return {
          key: `${index}-${pIndex}`,
          label: spaceIdx === -1 ? "" : trimmed.slice(spaceIdx + 1),
          value: spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx),
        };
      })
    );
  }

  const lineStyle = useMemo(
    () => ({ transitionTimingFunction: EASE, width: isHovered ? 48 : 32 }),
    [isHovered]
  );
  const labelStyle = useMemo(
    () => ({
      letterSpacing: isHovered ? "0.3em" : "0.25em",
      transitionTimingFunction: EASE,
    }),
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
        "relative z-10 flex w-full max-w-[640px] shrink-0 flex-col items-center text-center",
        pairedWithMedia && "md:w-full md:max-w-[640px] md:min-w-0 lg:max-w-[720px]",
        !pairedWithMedia && "md:w-full md:max-w-[480px] lg:max-w-[560px]",
        align === "left" && "md:items-start md:text-left",
        align === "right" && "md:items-end md:text-right",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "mb-6 flex items-center justify-center gap-3 md:mb-8 md:gap-4",
            align === "left" && "md:justify-start",
            align === "right" && "md:flex-row-reverse md:justify-start"
          )}
        >
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
          className="block text-balance text-brand-charcoal transition-all duration-700"
          style={title1Style}
        >
          {titleLine1}
        </span>
        <span
          className="block text-balance text-[var(--heading-h2)] transition-all duration-700"
          style={title2Style}
        >
          {titleLine2}
        </span>
      </SectionHeader>

      {hasDescriptionItems ? (
        <div
          className={cn(
            "mt-6 max-w-[580px] space-y-3 text-sm leading-relaxed transition-all duration-700 md:mt-8 md:text-base lg:mt-10",
            pairedWithMedia && "md:max-w-none",
            !pairedWithMedia && "md:max-w-[440px] lg:max-w-[520px]"
          )}
          style={descStyle}
        >
          {description && <p>{description}</p>}
          <ul className="space-y-3">
            {descriptionItems?.map((item) => (
              <li
                className={cn(
                  "flex justify-center gap-3",
                  align === "left" && "md:justify-start",
                  align === "right" && "md:flex-row-reverse"
                )}
                key={item}
              >
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-cyan" />
                <span
                  className={cn(
                    align === "left" && "md:text-left",
                    align === "right" && "md:text-right"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p
          className={cn(
            "mt-6 max-w-[580px] text-sm leading-relaxed whitespace-pre-line transition-all duration-700 md:mt-8 md:text-base lg:mt-10",
            pairedWithMedia && "md:max-w-none",
            !pairedWithMedia && "md:max-w-[440px] lg:max-w-[520px]"
          )}
          style={descStyle}
        >
          {description}
        </p>
      )}

      {locationBadges && locationBadges.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8">
          {locationBadges.map((city) => (
            <Button className="gap-1.5" key={city} onClick={onLocationBadgeClick} variant="primary">
              <MapPin className="size-3.5 shrink-0" />
              {city}
            </Button>
          ))}
        </div>
      )}

      {flatItems.length > 0 && (
        <div className="mt-8 w-full md:mt-10">
          <StatsMarquee items={flatItems} />
        </div>
      )}
    </div>
  );
};

const SpotlightImageBlock = ({
  className,
  imageAlt,
  imageUrl,
  isHovered,
  videoUrl,
}: {
  className?: string;
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
    () => ({
      transform: isHovered ? "scale(1.03)" : "scale(1)",
      transitionTimingFunction: EASE,
    }),
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
        className="size-full object-cover transition-all duration-1000"
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
        className="size-full object-cover transition-all duration-1000"
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 440px, 560px"
        src={imageUrl}
        style={imgStyle}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative w-[280px] sm:w-[340px] md:w-full md:max-w-[440px] md:min-w-0 lg:max-w-[560px]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-2xl border border-brand-blue/10 transition-all duration-500"
        style={backingStyle}
      />
      <div className="relative aspect-[14/15] w-full overflow-hidden rounded-2xl sm:aspect-[17/18] md:aspect-[22/21] lg:aspect-[14/13]">
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
  description,
  descriptionItems,
  id,
  imageAlt = "Feature image",
  imageContainerClassName,
  imagePosition = "right",
  imageUrl,
  label,
  locationBadges,
  secondarySpotlight,
  sectionClassName,
  stats,
  titleLine1,
  titleLine2,
  triggerContactModal = false,
  videoUrl,
}: SpotlightProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isUsesMediaSplitLayout = !secondarySpotlight;
  const mediaGridClassName =
    imagePosition === "left"
      ? "md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center"
      : "md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center";
  let textBlockClassName: string | undefined;
  let imageBlockClassName: string | undefined;

  if (isUsesMediaSplitLayout) {
    textBlockClassName = imagePosition === "left" ? "md:justify-self-start" : "md:justify-self-end";
    imageBlockClassName = cn(
      imagePosition === "left" && "md:order-first md:justify-self-start",
      imagePosition === "right" && "md:justify-self-end"
    );
  } else if (imagePosition === "left") {
    imageBlockClassName = "md:order-first";
  }

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleBadgeClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <section className={cn("bg-brand-gray py-20", sectionClassName)} id={id}>
        <div
          className={cn(
            "group relative mx-auto flex w-full cursor-pointer flex-col items-center justify-center gap-8 px-4 md:gap-14 md:px-8 lg:gap-20",
            isUsesMediaSplitLayout ? "max-w-6xl lg:max-w-[1360px]" : "max-w-6xl lg:max-w-6xl",
            isUsesMediaSplitLayout ? mediaGridClassName : "md:grid md:grid-cols-2",
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SpotlightTextBlock
            align={align}
            className={textBlockClassName}
            description={description}
            descriptionItems={descriptionItems}
            isHovered={isHovered}
            label={label}
            locationBadges={locationBadges}
            onLocationBadgeClick={handleBadgeClick}
            pairedWithMedia={isUsesMediaSplitLayout}
            stats={stats}
            titleLine1={titleLine1}
            titleLine2={titleLine2}
          />
          {secondarySpotlight ? (
            <SpotlightTextBlock
              align={secondarySpotlight.align ?? "right"}
              description={secondarySpotlight.description}
              descriptionItems={secondarySpotlight.descriptionItems}
              isHovered={isHovered}
              label={secondarySpotlight.label}
              titleLine1={secondarySpotlight.titleLine1}
              titleLine2={secondarySpotlight.titleLine2}
            />
          ) : (
            <SpotlightImageBlock
              className={cn(imageBlockClassName, imageContainerClassName)}
              imageAlt={imageAlt}
              imageUrl={imageUrl}
              isHovered={isHovered}
              videoUrl={videoUrl}
            />
          )}
        </div>
      </section>
      {(triggerContactModal || (locationBadges && locationBadges.length > 0)) && (
        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};
