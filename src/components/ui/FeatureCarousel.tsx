"use client";

import type { IconSvgElement } from "@hugeicons/react";

import {
  AiCloudIcon,
  CheckmarkCircle01Icon,
  CommandFreeIcons,
  DashboardSquare01Icon,
  GlobalSearchIcon,
  MagicWandIcon,
  Pizza04Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface FeatureCarouselItem {
  description: string;
  icon: IconSvgElement | string;
  id: string;
  image: string;
  label: string;
}

interface FeatureCarouselProps {
  features?: FeatureCarouselItem[];
}

export const DEFAULT_FEATURES: FeatureCarouselItem[] = [
  {
    description: "Ethically sourced ingredients from local farmers.",
    icon: Pizza04Icon,
    id: "sustainable",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    label: "Sustainable Sourcing",
  },
  {
    description: "Building stronger bonds through shared experiences.",
    icon: CommandFreeIcons,
    id: "community",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    label: "Community Focused",
  },
  {
    description: "Connecting visionaries across all continents.",
    icon: GlobalSearchIcon,
    id: "global",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    label: "Global Reach",
  },
  {
    description: "Recognized excellence in design and innovation.",
    icon: CheckmarkCircle01Icon,
    id: "award",
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200",
    label: "Award Winning",
  },
  {
    description: "Scale your infrastructure with seamless ease.",
    icon: AiCloudIcon,
    id: "cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    label: "Cloud Ready",
  },
  {
    description: "A world-class experience on every single device.",
    icon: SmartPhone01Icon,
    id: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    label: "Mobile First",
  },
  {
    description: "Insights at your fingertips, updated in real-time.",
    icon: DashboardSquare01Icon,
    id: "analytics",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    label: "Real-time Analytics",
  },
  {
    description: "Bank-grade security protocols for your data.",
    icon: CheckmarkCircle01Icon,
    id: "security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    label: "Enterprise Security",
  },
  {
    description: "Let AI handle the repetitive tasks for you.",
    icon: MagicWandIcon,
    id: "magic",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    label: "Magic Automations",
  },
  {
    description: "Supporting local businesses and creators.",
    icon: CheckmarkCircle01Icon,
    id: "local",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    label: "Locally Owned",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;
const NAV_ITEM_STYLE = { height: ITEM_HEIGHT, width: "fit-content" } as const;
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

const isHugeIcon = (icon: FeatureCarouselItem["icon"]): icon is IconSvgElement => {
  return typeof icon !== "string";
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
    return { opacity: 1, rotate: 0, scale: 1, x: 0 };
  }

  if (status === "prev") {
    return { opacity: 0.4, rotate: -3, scale: 0.85, x: -100 };
  }

  if (status === "next") {
    return { opacity: 0.4, rotate: 3, scale: 0.85, x: 100 };
  }

  return { opacity: 0, rotate: 0, scale: 0.7, x: 0 };
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
    "absolute inset-0 origin-center overflow-hidden rounded-[2rem] border-4 border-zinc-950 bg-zinc-950 shadow-2xl md:rounded-[2.8rem] md:border-8",
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
    isActive ? "text-[#62B2FE]" : "text-white/40"
  );
};

const renderFeatureIcon = (icon: FeatureCarouselItem["icon"], isActive: boolean) => {
  const iconClassName = getFeatureIconClassName(isActive);

  if (isHugeIcon(icon)) {
    return (
      <div className={iconClassName}>
        <HugeiconsIcon icon={icon} size={18} strokeWidth={2} />
      </div>
    );
  }

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
    "group relative flex items-center gap-4 rounded-full border px-6 py-3.5 text-left transition-all duration-700 md:px-10 md:py-5 lg:px-8 lg:py-4",
    isActive
      ? "z-10 border-white bg-white text-[#62B2FE] shadow-xl"
      : "border-white/20 bg-transparent text-white/60 hover:border-white/40 hover:text-white"
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
      className="absolute left-0 flex items-center justify-start"
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
        <span className="text-xs font-semibold tracking-wider whitespace-nowrap uppercase md:text-[13px]">
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
  const headerClassName = cn(
    "absolute left-8 top-8 flex items-center gap-3 transition-opacity duration-300",
    isActive ? "opacity-100" : "opacity-0"
  );

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

      <AnimatePresence>
        {isActive ? (
          <motion.div
            animate={ACTIVE_COPY_ANIMATE}
            className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-8 pt-24"
            exit={ACTIVE_COPY_EXIT}
            initial={ACTIVE_COPY_INITIAL}
          >
            <div className="mb-3 w-fit rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-[10px] font-bold tracking-widest text-lime-400 uppercase shadow-lg">
              {index + 1} • {feature.label}
            </div>
            <p className="text-lg leading-snug font-medium tracking-tight text-white drop-shadow-md md:text-xl">
              {feature.description}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={headerClassName}>
        <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400 shadow-[0_0_10px_#84cc16]" />
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
          B2B Sales Arrow
        </span>
      </div>
    </motion.div>
  );
};

const FeatureCarousel = ({ features = DEFAULT_FEATURES }: FeatureCarouselProps) => {
  const resolvedFeatures = features.length > 0 ? features : DEFAULT_FEATURES;
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
      <div className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 lg:min-h-[640px] lg:flex-row lg:rounded-[4rem]">
        <div className="relative z-30 flex min-h-[350px] w-full flex-col items-start justify-center overflow-hidden bg-[#62B2FE] px-8 md:min-h-[450px] md:px-16 lg:h-full lg:w-[40%] lg:pl-16">
          <div className="absolute inset-x-0 top-0 z-40 h-12 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent md:h-20 lg:h-16" />
          <div className="absolute inset-x-0 bottom-0 z-40 h-12 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent md:h-20 lg:h-16" />

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

        <div className="relative flex min-h-[500px] flex-1 items-center justify-center overflow-hidden border-t border-white/5 bg-zinc-900/40 px-6 py-16 md:min-h-[600px] md:px-12 md:py-24 lg:h-full lg:border-t-0 lg:border-l lg:px-10 lg:py-16">
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
