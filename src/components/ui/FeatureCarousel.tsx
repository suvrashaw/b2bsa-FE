"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface FeatureCarouselItem {
  description: string;
  icon: string;
  id: string;
  image: string;
  label: string;
}

interface FeatureCarouselProps {
  features?: FeatureCarouselItem[];
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
const ACTIVE_COPY_ANIMATE = { opacity: 1, y: 0 } as const;
const ACTIVE_COPY_EXIT = { opacity: 0, y: 10 } as const;
const ACTIVE_COPY_INITIAL = { opacity: 0, y: 20 } as const;

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

const getNavItemMotion = (wrappedDistance: number) => ({
  opacity: 1 - Math.abs(wrappedDistance) * 0.25,
  y: wrappedDistance * ITEM_HEIGHT,
});

const getShowcaseMotion = (status: CardStatus) => {
  if (status === "active") {
    return { opacity: 1, rotate: 0, scale: 1, y: 0 };
  }

  if (status === "prev") {
    return { opacity: 0.4, rotate: -3, scale: 0.85, y: -60 };
  }

  if (status === "next") {
    return { opacity: 0.4, rotate: 3, scale: 0.85, y: 60 };
  }

  return { opacity: 0, rotate: 0, scale: 0.7, y: 0 };
};

const getShowcaseCardClassName = (status: CardStatus) => {
  const isActive = status === "active";
  const isAdjacent = status === "prev" || status === "next";
  let depthClassName = "z-0";

  if (isActive) {
    depthClassName = "z-20";
  } else if (isAdjacent) {
    depthClassName = "z-10";
  }

  const pointerEventsClassName = isActive ? "pointer-events-auto" : "pointer-events-none";

  return cn(
    "absolute inset-0 origin-center overflow-hidden rounded-[2rem] bg-white shadow-2xl md:rounded-[2.8rem]",
    depthClassName,
    pointerEventsClassName
  );
};

const getFeatureImageClassName = (isActive: boolean) => {
  return cn(
    "h-full w-full object-cover transition-all duration-700",
    isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75"
  );
};

const getFeatureIconClassName = (isActive: boolean) => {
  return cn(
    "flex items-center justify-center transition-colors duration-500",
    isActive ? "text-white" : "text-brand-charcoal/40"
  );
};

const renderFeatureIcon = (icon: FeatureCarouselItem["icon"], isActive: boolean) => {
  const iconClassName = getFeatureIconClassName(isActive);

  return (
    <div className={iconClassName}>
      <Icon className="h-[18px] w-[18px]" name={camelToKebab(icon)} strokeWidth={2} />
    </div>
  );
};

interface FeatureNavItemProps {
  currentIndex: number;
  feature: FeatureCarouselItem;
  index: number;
  itemCount: number;
  onChipClick: (index: number) => void;
  onPauseChange: (value: boolean) => void;
}

const FeatureNavItem = ({
  currentIndex,
  feature,
  index,
  itemCount,
  onChipClick,
  onPauseChange,
}: FeatureNavItemProps) => {
  const isActive = index === currentIndex;
  const distance = index - currentIndex;
  const wrappedDistance = wrap(-(itemCount / 2), itemCount / 2, distance);
  const navItemMotion = getNavItemMotion(wrappedDistance);
  const buttonClassName = cn(
    "group relative flex w-[90%] md:w-full items-center justify-center gap-4 rounded-full px-6 py-3.5 text-center transition-all duration-700 md:px-10 md:py-5 lg:px-8 lg:py-4 mx-auto",
    isActive
      ? "z-10 bg-brand-blue text-white shadow-xl shadow-brand-blue/20"
      : "bg-transparent text-brand-charcoal/60 hover:text-brand-charcoal"
  );
  const handleClick = useCallback(() => {
    onChipClick(index);
  }, [index, onChipClick]);
  const handleMouseEnter = useCallback(() => {
    onPauseChange(true);
  }, [onPauseChange]);
  const handleMouseLeave = useCallback(() => {
    onPauseChange(false);
  }, [onPauseChange]);

  return (
    <motion.div
      animate={navItemMotion}
      className="absolute inset-x-0 flex items-center justify-center px-4 md:px-0"
      style={NAV_ITEM_STYLE}
      transition={NAV_ITEM_TRANSITION}
    >
      <button
        className={buttonClassName}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
      >
        {renderFeatureIcon(feature.icon, isActive)}
        <span className="truncate text-xs font-semibold tracking-wider uppercase md:text-[13px]">
          {feature.label}
        </span>
      </button>
    </motion.div>
  );
};

interface FeatureShowcaseCardProps {
  currentIndex: number;
  feature: FeatureCarouselItem;
  index: number;
  itemCount: number;
}

const FeatureShowcaseCard = ({
  currentIndex,
  feature,
  index,
  itemCount,
}: FeatureShowcaseCardProps) => {
  const status = getCardStatus(currentIndex, index, itemCount);
  const isActive = status === "active";
  const showcaseMotion = getShowcaseMotion(status);
  const showcaseCardClassName = getShowcaseCardClassName(status);
  const featureImageClassName = getFeatureImageClassName(isActive);


  return (
    <motion.div
      animate={showcaseMotion}
      className={showcaseCardClassName}
      initial={false}
      transition={SHOWCASE_CARD_TRANSITION}
    >
      <Image
        alt={feature.label}
        className={featureImageClassName}
        fill
        sizes="(max-width: 1024px) 80vw, 420px"
        src={feature.image}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-8 pt-24 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="mb-3 w-fit rounded-full bg-brand-blue/80 px-3.5 py-1 font-heading text-[10px] font-bold tracking-widest text-white uppercase shadow-lg backdrop-blur-sm">
          {index + 1} • {feature.label}
        </div>
        <p className="text-base leading-relaxed text-gray-200 md:text-lg">
          {feature.description}
        </p>
      </div>


    </motion.div>
  );
};

const FeatureCarousel = ({ features = [] }: FeatureCarouselProps) => {
  const resolvedFeatures = features;
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % resolvedFeatures.length) + resolvedFeatures.length) % resolvedFeatures.length;

  const nextStep = useCallback(() => {
    setStep((previous) => previous + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + resolvedFeatures.length) % resolvedFeatures.length;
    if (diff > 0) setStep((currentStep) => currentStep + diff);
  };

  useEffect(() => {
    if (isPaused || resolvedFeatures.length < 2) return;

    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextStep, resolvedFeatures.length]);

  return (
    <div className="mx-auto w-full max-w-7xl md:p-8">
      <div className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-sm lg:min-h-[640px] lg:flex-row lg:rounded-[4rem]">
        <div className="relative z-30 flex min-h-[350px] w-full flex-col items-start justify-center overflow-hidden bg-brand-gray/50 px-8 md:min-h-[450px] md:px-16 lg:w-[45%] lg:pl-16">
          <div className="absolute inset-x-0 top-0 z-40 h-12 bg-gradient-to-b from-brand-gray/50 via-brand-gray/40 to-transparent md:h-20 lg:h-16" />
          <div className="absolute inset-x-0 bottom-0 z-40 h-12 bg-gradient-to-t from-brand-gray/50 via-brand-gray/40 to-transparent md:h-20 lg:h-16" />

          <div className="relative z-20 flex h-[300px] w-full items-center justify-center lg:justify-start">
            {resolvedFeatures.map((feature, index) => (
              <FeatureNavItem
                currentIndex={currentIndex}
                feature={feature}
                index={index}
                itemCount={resolvedFeatures.length}
                key={feature.id}
                onChipClick={handleChipClick}
                onPauseChange={setIsPaused}
              />
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[500px] flex-1 items-center justify-center overflow-hidden bg-brand-gray/20 px-6 py-16 md:min-h-[600px] md:px-12 md:py-24 lg:px-10 lg:py-16">
          <div className="relative flex aspect-[4/5] w-full max-w-[420px] items-center justify-center">
            {resolvedFeatures.map((feature, index) => (
              <FeatureShowcaseCard
                currentIndex={currentIndex}
                feature={feature}
                index={index}
                itemCount={resolvedFeatures.length}
                key={feature.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
