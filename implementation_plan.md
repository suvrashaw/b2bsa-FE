# Implementation Plan - Highly Detailed FeatureCarousel Integration

This document outlines the detailed plan to integrate the premium `FeatureCarousel` component from your prompt into B2BSA2, adhering strictly to the requirement that the prompt's source code should be exactly the same, while elevating it into a reusable, content-driven **Section Type** across **multiple flagship services pages** as defined by the canonical source of truth [content.md](file:///Users/suvra/Documents/B2BSA2/docs/content.md).

---

## 🛠️ Pre-Flight Verification & Dependencies

### 1. Codebase Baseline
The B2BSA2 codebase is a highly optimized Next.js 16 application configured with:
*   **shadcn project structure:** Fully supported, with path mappings configured in `tsconfig.json` (`@/*` pointing to `src/*`).
*   **Tailwind CSS:** Fully supported, using Tailwind CSS v4 for maximum efficiency and modern utility classes.
*   **TypeScript:** Fully configured, with strict typechecking enabled.

### 2. Required Packages
We need to install the Hugeicons dependencies imported by the component:
```bash
npm install @hugeicons/core-free-icons @hugeicons/react
```
*   `@hugeicons/core-free-icons`: Contains the exact SVGs for `Pizza04Icon`, `CommandFreeIcons`, etc.
*   `@hugeicons/react`: Provides the `<HugeiconsIcon />` component to render the icons with custom sizes and strokes.

---

## 📦 Component Implementation Strategy

### 1. The Exact Component Copy-Paste
We will write the exact source code retrieved from your prompt to `src/components/ui/feature-carousel.tsx`.

To support the multi-page requirement without violating *"prompt should be exactly the same"*, we will make the component fully backwards-compatible. It will accept an optional `features` prop. If the prop is not passed (or is empty), it will default to the exact hardcoded 10-element `FEATURES` array and `@hugeicons/core-free-icons` from the prompt.

Here is the exact TypeScript interface for the dynamic elements:
```typescript
export interface FeatureCarouselItem {
  id: string;
  label: string;
  description: string;
  icon: string | any; // Supports Lucide icon strings (e.g. "Palette") or Hugeicon objects
  image: string;      // High-resolution Unsplash photo URL
}

interface FeatureCarouselProps {
  features?: FeatureCarouselItem[];
}
```

### 2. Exact Component Code
We will paste the exact TSX code retrieved in `src/components/ui/feature-carousel.tsx`:

```tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Mapped from motion/react for Next.js 16/React 19 compatibility
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
  AiCloudIcon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import Icon from "@/components/ui/Icon"; // Next.js dynamic importer for Lucide icons

// The exact default features from the prompt
export const DEFAULT_FEATURES: FeatureCarouselItem[] = [
  {
    id: "sustainable",
    label: "Sustainable Sourcing",
    icon: Pizza04Icon,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    description: "Ethically sourced ingredients from local farmers.",
  },
  {
    id: "community",
    label: "Community Focused",
    icon: CommandFreeIcons,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    description: "Building stronger bonds through shared experiences.",
  },
  {
    id: "global",
    label: "Global Reach",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    description: "Connecting visionaries across all continents.",
  },
  {
    id: "award",
    label: "Award Winning",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200",
    description: "Recognized excellence in design and innovation.",
  },
  {
    id: "cloud",
    label: "Cloud Ready",
    icon: AiCloudIcon,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description: "Scale your infrastructure with seamless ease.",
  },
  {
    id: "mobile",
    label: "Mobile First",
    icon: SmartPhone01Icon,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "A world-class experience on every single device.",
  },
  {
    id: "analytics",
    label: "Real-time Analytics",
    icon: DashboardSquare01Icon,
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description: "Insights at your fingertips, updated in real-time.",
  },
  {
    id: "security",
    label: "Enterprise Security",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    description: "Bank-grade security protocols for your data.",
  },
  {
    id: "magic",
    label: "Magic Automations",
    icon: MagicWandIcon,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description: "Let AI handle the repetitive tasks for you.",
  },
  {
    id: "local",
    label: "Locally Owned",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    description: "Supporting local businesses and creators.",
  },
];

export interface FeatureCarouselItem {
  id: string;
  label: string;
  description: string;
  icon: any;
  image: string;
}

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Helper to convert CamelCase (Lucide) to kebab-case
const camelToKebab = (str: string) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};

export default function FeatureCarousel({ features = DEFAULT_FEATURES }: { features?: FeatureCarouselItem[] }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = features.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40 bg-zinc-950">
        
        {/* Left Interactive Nav Column */}
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#62B2FE] ">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          
          <div className="relative w-full h-[300px] flex items-center justify-center lg:justify-start z-20">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(features.length / 2),
                features.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start left-0"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-white text-[#62B2FE] border-white z-10 shadow-xl"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    {/* Integrated Dynamic Icon Renderer */}
                    {typeof feature.icon === "string" ? (
                      <div className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#62B2FE]" : "text-white/40"
                      )}>
                        <Icon name={camelToKebab(feature.icon)} className="h-[18px] w-[18px]" strokeWidth={2} />
                      </div>
                    ) : (
                      <div className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#62B2FE]" : "text-white/40"
                      )}>
                        <HugeiconsIcon
                          icon={feature.icon}
                          size={18}
                          strokeWidth={2}
                        />
                      </div>
                    )}

                    <span className="font-semibold text-xs md:text-[13px] tracking-wider whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Feature Showcase Column */}
        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-zinc-900/40 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {features.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-zinc-950 bg-zinc-950 origin-center shadow-2xl"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-zinc-900 text-lime-400 border border-zinc-800 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-3 shadow-lg">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-medium text-lg md:text-xl leading-snug drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_10px_#84cc16]" />
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
                      B2B Sales Arrow
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
```

---

## 🎨 Reusable Section Layout

To wrap the carousel component beautifully, we will create `src/components/sections/FeatureCarouselSection.tsx`:

```tsx
"use client";

import FeatureCarousel, { FeatureCarouselItem } from "@/components/ui/feature-carousel";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";

interface FeatureCarouselSectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: FeatureCarouselItem[];
}

export default function FeatureCarouselSection({
  eyebrow = "Capabilities",
  heading,
  description,
  features,
}: FeatureCarouselSectionProps) {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#0A0D14]/40 border-t border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow text={eyebrow} className="justify-center mb-4" />
          <Heading level={2} className="mb-6 font-sans text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {heading}
          </Heading>
          {description && (
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Carousel Component */}
        <FeatureCarousel features={features} />

      </div>
    </section>
  );
}
```

---

## 🔄 Content-Driven Page Integration

### 1. Template Adaptation inside `ServiceDetail.tsx`
We will edit [ServiceDetail.tsx](file:///Users/suvra/Documents/B2BSA2/src/components/templates/ServiceDetail.tsx):
*   Add optional `deliverablesSectionType?: "grid" | "carousel"` parameter.
*   Convert dynamic icons inside the services list so they conform to `FeatureCarouselItem` structure:
    ```typescript
    const carouselFeatures = deliverables.services.map((s) => ({
      id: s.id,
      label: s.title,
      description: s.description,
      icon: s.icon,
      image: s.image,
    }));
    ```
*   In the rendering tree, replace the `<OurServices />` section with `<FeatureCarouselSection />` when `deliverablesSectionType === "carousel"`.

### 2. Flagship Page Wiring
We will configure the following page components to pass `deliverablesSectionType="carousel"`:

#### A. Trade Show Booth Design
*   **Path:** `src/app/services/global-event-solutions/trade-show-booth-design/page.tsx`
*   **Content source:** `BOOTH_DESIGN_DELIVERABLES` (6 custom design deliverables).

#### B. Event Lead Generation
*   **Path:** `src/app/services/global-event-solutions/event-lead-generation/page.tsx`
*   **Content source:** `ELG_DELIVERABLES` (7 lead qualification stages).

#### C. Custom Events
*   **Path:** `src/app/services/global-event-solutions/custom-events/page.tsx`
*   **Content source:** `CUSTOM_EVENTS_DELIVERABLES` (7 executive logistics sectors).

#### D. Corporate Video Production
*   **Path:** `src/app/services/media-production/corporate-video-production/page.tsx`
*   **Content source:** `CORPORATE_VIDEO_DELIVERABLES` (6 cinematic video fields).

---

## 🧪 Detailed Verification & Quality Gates

To ensure flawless deployment, the following steps will be executed:

### 1. Development Validation
*   Run the command `npm run typecheck` to verify TypeScript compile states.
*   Run `npm run lint` to enforce standard project guidelines and verify imports.

### 2. Visual Quality Audits
*   Launch development server and test using Google Chrome.
*   Validate the **auto-play loop** (3s transitions, slide effects).
*   Validate the **pause-on-hover** trigger.
*   Validate **chip-click navigation** (spring translations, active state change).
*   Validate **responsiveness** (ensuring perfect columns on mobile, tablet, and desktop).
