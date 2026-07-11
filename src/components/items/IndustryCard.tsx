"use client";

import { Warp } from "@paper-design/shaders-react";
import { useCallback, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib";

const WARP_STYLE = { height: "100%", width: "100%" } as const;

interface IndustryCardProps {
  className?: string;
  description?: string;
  icon: string;
  image?: string;
  index: number;
  title: string;
}

const getShaderConfig = (index: number) => {
  const configs = [
    {
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
      distortion: 0.15,
      proportion: 0.3,
      shape: "checks" as const,
      shapeScale: 0.08,
      softness: 0.8,
      swirl: 0.6,
      swirlIterations: 8,
    },
    {
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
      distortion: 0.2,
      proportion: 0.4,
      shape: "stripes" as const,
      shapeScale: 0.12,
      softness: 1.2,
      swirl: 0.9,
      swirlIterations: 12,
    },
    {
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
      distortion: 0.18,
      proportion: 0.35,
      shape: "checks" as const,
      shapeScale: 0.1,
      softness: 0.9,
      swirl: 0.7,
      swirlIterations: 10,
    },
    {
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
      distortion: 0.22,
      proportion: 0.45,
      shape: "stripes" as const,
      shapeScale: 0.09,
      softness: 1.1,
      swirl: 0.8,
      swirlIterations: 15,
    },
    {
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
      distortion: 0.16,
      proportion: 0.38,
      shape: "checks" as const,
      shapeScale: 0.11,
      softness: 0.95,
      swirl: 0.85,
      swirlIterations: 11,
    },
    {
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
      distortion: 0.19,
      proportion: 0.42,
      shape: "stripes" as const,
      shapeScale: 0.13,
      softness: 1,
      swirl: 0.75,
      swirlIterations: 9,
    },
  ];
  return configs[index % configs.length];
};

export const IndustryCard = ({
  className,
  description,
  icon,
  image,
  index,
  title,
}: IndustryCardProps) => {
  const shaderConfig = getShaderConfig(index);
  const [isActive, setIsActive] = useState(false);
  const toggleActive = useCallback(() => setIsActive((prev) => !prev), []);
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleActive();
    },
    [toggleActive]
  );

  return (
    <div
      className={cn(
        "group relative flex aspect-[4/5] min-h-[280px] w-full flex-col overflow-hidden rounded-3xl border border-white/20 md:min-h-[320px] dark:border-white/10",
        className
      )}
      onClick={toggleActive}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* Background Image (Default state) */}
      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0",
          isActive && "opacity-0"
        )}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt={title} className="size-full object-cover" src={image} />
        ) : (
          <div className="size-full bg-zinc-800" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Shader Background (Hover state) */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100",
          isActive && "opacity-100"
        )}
      >
        <Warp
          colors={shaderConfig.colors}
          distortion={shaderConfig.distortion}
          proportion={shaderConfig.proportion}
          rotation={0}
          scale={1}
          shape={shaderConfig.shape}
          shapeScale={shaderConfig.shapeScale}
          softness={shaderConfig.softness}
          speed={0.8}
          style={WARP_STYLE}
          swirl={shaderConfig.swirl}
          swirlIterations={shaderConfig.swirlIterations}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-grow flex-col">
        {/* Default Content: Icon + Title */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col p-5 transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0 md:p-8",
            isActive && "-translate-y-4 opacity-0"
          )}
        >
          <div className="mb-4 drop-shadow-lg md:mb-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm md:size-12">
              <Icon className="size-5 text-white md:size-6" name={icon} />
            </div>
          </div>
          <h3 className="min-w-0 text-lg font-bold text-white md:text-lg">{title}</h3>
        </div>

        {/* Hover Content: Description */}
        <div
          className={cn(
            "absolute inset-0 flex translate-y-4 flex-col justify-center p-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 md:p-8",
            isActive && "translate-y-0 opacity-100"
          )}
        >
          {description ? (
            <p className="text-center text-[13px] leading-relaxed font-medium text-gray-100 md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
