"use client";

import type { ReactNode } from "react";

import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

// ─── CapabilitiesCarousel ────────────────────────────────────────────────────

export interface CapabilitiesItem {
  description?: string;
  icon: string;
  id: string;
  image: string;
  label: string;
}

interface CapabilitiesCarouselProps {
  capabilities?: CapabilitiesItem[];
  mediaPosition?: "left" | "right";
}

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;
const NAV_ITEM_STYLE = { height: ITEM_HEIGHT, width: "100%" } as const;
const NAV_ITEM_TRANSITION = {
  damping: 22,
  mass: 1,
  stiffness: 90,
  type: "spring",
} as const;
const SHOWCASE_CARD_TRANSITION = {
  damping: 25,
  mass: 0.8,
  stiffness: 260,
  type: "spring",
} as const;

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const camelToKebab = (value: string) => {
  return value
    .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replaceAll(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};

type CardStatus = "active" | "hidden" | "next" | "prev";

const getCardStatus = (currentIndex: number, index: number, itemCount: number): CardStatus => {
  const diff = index - currentIndex;
  let normalizedDiff = diff;
  if (diff > itemCount / 2) normalizedDiff -= itemCount;
  if (diff < -(itemCount / 2)) normalizedDiff += itemCount;
  if (normalizedDiff === 0) return "active";
  if (normalizedDiff === -1) return "prev";
  if (normalizedDiff === 1) return "next";
  return "hidden";
};

const getNavItemOpacity = (wrappedDistance: number) =>
  Math.max(0, 1 - Math.abs(wrappedDistance) * 0.5);

const getShowcaseMotion = (status: CardStatus) => {
  if (status === "active") return { opacity: 1, rotate: 0, scale: 1, y: 0 };
  if (status === "prev") return { opacity: 0.4, rotate: -3, scale: 0.85, y: -60 };
  if (status === "next") return { opacity: 0.4, rotate: 3, scale: 0.85, y: 60 };
  return { opacity: 0, rotate: 0, scale: 0.7, y: 0 };
};

const getDepthClassName = (status: CardStatus) => {
  if (status === "active") return "z-20";
  if (status === "prev" || status === "next") return "z-10";
  return "z-0";
};

const getShowcaseCardClassName = (status: CardStatus) => {
  const isActive = status === "active";
  const depthClassName = getDepthClassName(status);
  return cn(
    "absolute inset-0 origin-center overflow-hidden rounded-[2rem] bg-white shadow-2xl",
    depthClassName,
    isActive ? "pointer-events-auto" : "pointer-events-none"
  );
};

const getCapabilitiesImageClassName = (isActive: boolean) =>
  cn(
    "size-full object-cover transition-all duration-700",
    isActive ? "blur-0 grayscale-0" : "blur-[2px] brightness-75 grayscale"
  );

const getCapabilitiesIconClassName = (isActive: boolean) =>
  cn(
    "flex items-center justify-center transition-colors duration-500",
    isActive ? "text-white" : "text-brand-charcoal/40"
  );

const renderCapabilitiesIcon = (icon: CapabilitiesItem["icon"], isActive: boolean) => (
  <div className={getCapabilitiesIconClassName(isActive)}>
    <Icon className="size-[18px]" name={camelToKebab(icon)} strokeWidth={2} />
  </div>
);

interface CapabilitiesNavItemProps {
  capability: CapabilitiesItem;
  currentIndex: number;
  index: number;
  itemCount: number;
  onChipClick: (index: number) => void;
  onPauseChange: (isPaused: boolean) => void;
}

const CapabilitiesNavItem = ({
  capability,
  currentIndex,
  index,
  itemCount,
  onChipClick,
  onPauseChange,
}: CapabilitiesNavItemProps) => {
  const isActive = index === currentIndex;
  const wrappedDistance = wrap(-(itemCount / 2), itemCount / 2, index - currentIndex);

  const yMV = useMotionValue(wrappedDistance * ITEM_HEIGHT);
  const opacityMV = useMotionValue(getNavItemOpacity(wrappedDistance));
  const prevDistRef = useRef(wrappedDistance);

  useEffect(() => {
    const prev = prevDistRef.current;
    const curr = wrappedDistance;
    prevDistRef.current = curr;
    const targetY = curr * ITEM_HEIGHT;
    const targetOpacity = getNavItemOpacity(curr);

    if (Math.abs(curr - prev) > 1) {
      // Wrap boundary crossed — teleport instantly so the jump is invisible
      yMV.set(targetY);
      opacityMV.set(targetOpacity);
    } else {
      animate(yMV, targetY, NAV_ITEM_TRANSITION);
      animate(opacityMV, targetOpacity, { duration: 0.4 });
    }
  }, [wrappedDistance, yMV, opacityMV]);

  const style = useMemo(
    () => ({ ...NAV_ITEM_STYLE, opacity: opacityMV, y: yMV }),
    [opacityMV, yMV]
  );

  const buttonClassName = cn(
    "group relative inline-flex w-fit items-center gap-4 rounded-full px-6 py-3.5 transition-all duration-700 md:px-10 md:py-5 lg:px-8 lg:py-4",
    isActive
      ? "z-10 bg-brand-blue text-white shadow-xl shadow-brand-blue/20"
      : "bg-white/60 text-brand-charcoal/60 hover:bg-white hover:text-brand-charcoal"
  );
  const handleClick = useCallback(() => onChipClick(index), [index, onChipClick]);
  const handleMouseEnter = useCallback(() => onPauseChange(true), [onPauseChange]);
  const handleMouseLeave = useCallback(() => onPauseChange(false), [onPauseChange]);

  return (
    <motion.div
      className="absolute inset-x-0 flex items-center justify-center px-4 md:px-0"
      style={style}
    >
      <button
        className={buttonClassName}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
      >
        {renderCapabilitiesIcon(capability.icon, isActive)}
        <span className="text-xs font-semibold tracking-wider uppercase md:text-[13px]">
          {capability.label}
        </span>
      </button>
    </motion.div>
  );
};

interface CapabilitiesShowcaseCardProps {
  capability: CapabilitiesItem;
  currentIndex: number;
  index: number;
  itemCount: number;
  showCapabilityDescription: boolean;
}

const CapabilitiesShowcaseCard = ({
  capability,
  currentIndex,
  index,
  itemCount,
  showCapabilityDescription,
}: CapabilitiesShowcaseCardProps) => {
  const status = getCardStatus(currentIndex, index, itemCount);
  const isActive = status === "active";

  return (
    <motion.div
      animate={getShowcaseMotion(status)}
      className={getShowcaseCardClassName(status)}
      initial={false}
      transition={SHOWCASE_CARD_TRANSITION}
    >
      <Image
        alt={capability.label}
        className={getCapabilitiesImageClassName(isActive)}
        fill
        sizes="(max-width: 1024px) 80vw, 420px"
        src={capability.image}
      />
      {showCapabilityDescription && capability.description ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-8 pt-24 transition-opacity duration-500",
            isActive ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="type-body-l leading-relaxed text-gray-200">{capability.description}</p>
        </div>
      ) : null}
    </motion.div>
  );
};

const CapabilitiesCarousel = ({
  capabilities = [],
  mediaPosition = "right",
  showCapabilityDescriptions = true,
}: { showCapabilityDescriptions?: boolean } & CapabilitiesCarouselProps) => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentIndex = ((step % capabilities.length) + capabilities.length) % capabilities.length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      const forward = (index - currentIndex + capabilities.length) % capabilities.length;
      const backward = capabilities.length - forward;
      if (forward <= backward) {
        setStep((cur) => cur + forward);
      } else {
        setStep((cur) => cur - backward);
      }
    },
    [currentIndex, capabilities.length]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible || capabilities.length < 2) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, isVisible, nextStep, capabilities.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let lastWheelTime = 0;
    const onWheel = (e: WheelEvent) => {
      const r = el.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 300) return;
      lastWheelTime = now;
      setStep((prev) => prev + (e.deltaY > 0 ? 1 : -1));
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl" ref={containerRef}>
      <div
        className={cn(
          "relative flex min-h-[480px] flex-col overflow-hidden md:min-h-[520px] md:flex-row",
          mediaPosition === "left" && "md:flex-row-reverse"
        )}
      >
        <div
          className={cn(
            "relative z-30 flex min-h-[240px] w-full flex-col items-start justify-center overflow-hidden px-4 md:min-h-[450px] md:w-[55%] md:px-16 md:pr-8",
            mediaPosition === "left" ? "md:pr-16 md:pl-0" : "md:pl-16"
          )}
        >
          <div
            className={cn(
              "relative z-20 flex h-[300px] w-full items-center justify-center",
              mediaPosition === "left" ? "md:justify-end" : "md:justify-start"
            )}
          >
            {capabilities.map((capability, index) => (
              <CapabilitiesNavItem
                capability={capability}
                currentIndex={currentIndex}
                index={index}
                itemCount={capabilities.length}
                key={capability.id}
                onChipClick={handleChipClick}
                onPauseChange={setIsPaused}
              />
            ))}
          </div>
        </div>
        <div
          className={cn(
            "relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden px-4 py-8 md:min-h-[500px] md:px-12 md:py-16",
            mediaPosition === "left" ? "md:pr-0 md:pl-14" : "md:pr-14 md:pl-0"
          )}
        >
          <div className="relative flex aspect-[4/5] w-full max-w-[420px] items-center justify-center">
            {capabilities.map((capability, index) => (
              <CapabilitiesShowcaseCard
                capability={capability}
                currentIndex={currentIndex}
                index={index}
                itemCount={capabilities.length}
                key={capability.id}
                showCapabilityDescription={showCapabilityDescriptions}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Capabilities ────────────────────────────────────────────────────────────

interface CapabilitiesProps {
  capabilities: CapabilitiesItem[];
  description?: ReactNode;
  heading: ReactNode;
  mediaPosition?: "left" | "right";
  showCapabilityDescriptions?: boolean;
}

export const Capabilities = ({
  capabilities,
  description,
  heading,
  mediaPosition = "right",
  showCapabilityDescriptions = true,
}: CapabilitiesProps) => {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-8 right-[8%] size-48 rounded-full bg-brand-cyan/12 blur-3xl" />
        <div className="absolute bottom-0 left-[6%] size-56 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>
      <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader as="h2" className="mb-6">
            {heading}
          </SectionHeader>
          {description ? (
            <p className="type-body-l mx-auto max-w-2xl leading-relaxed text-brand-charcoal/70">
              {description}
            </p>
          ) : null}
        </div>
        <CapabilitiesCarousel
          capabilities={capabilities}
          mediaPosition={mediaPosition}
          showCapabilityDescriptions={showCapabilityDescriptions}
        />
      </div>
    </section>
  );
};
