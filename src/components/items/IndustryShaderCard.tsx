"use client";

import { Warp } from "@paper-design/shaders-react";

import { Icon } from "@/components/ui/Icon";

interface IndustryShaderCardProps {
  description?: string;
  icon: string;
  index: number;
  title: string;
}

const getShaderConfig = (index: number) => {
  const configs = [
    {
      proportion: 0.3,
      softness: 0.8,
      distortion: 0.15,
      swirl: 0.6,
      swirlIterations: 8,
      shape: "checks" as const,
      shapeScale: 0.08,
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
    },
    {
      proportion: 0.4,
      softness: 1.2,
      distortion: 0.2,
      swirl: 0.9,
      swirlIterations: 12,
      shape: "dots" as const,
      shapeScale: 0.12,
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
    },
    {
      proportion: 0.35,
      softness: 0.9,
      distortion: 0.18,
      swirl: 0.7,
      swirlIterations: 10,
      shape: "checks" as const,
      shapeScale: 0.1,
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
    },
    {
      proportion: 0.45,
      softness: 1.1,
      distortion: 0.22,
      swirl: 0.8,
      swirlIterations: 15,
      shape: "dots" as const,
      shapeScale: 0.09,
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
    },
    {
      proportion: 0.38,
      softness: 0.95,
      distortion: 0.16,
      swirl: 0.85,
      swirlIterations: 11,
      shape: "checks" as const,
      shapeScale: 0.11,
      colors: ["#1e6091", "#4bc0d9", "#1e6091", "#4bc0d9"],
    },
    {
      proportion: 0.42,
      softness: 1.0,
      distortion: 0.19,
      swirl: 0.75,
      swirlIterations: 9,
      shape: "dots" as const,
      shapeScale: 0.13,
      colors: ["#4bc0d9", "#1e6091", "#4bc0d9", "#1e6091"],
    },
  ];
  return configs[index % configs.length];
};

export const IndustryShaderCard = ({
  description,
  icon,
  index,
  title,
}: IndustryShaderCardProps) => {
  const shaderConfig = getShaderConfig(index);

  return (
    <div className="group relative flex w-full flex-col aspect-[4/5] min-h-[280px] md:aspect-auto md:min-h-[320px]">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
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
          style={{ height: "100%", width: "100%" }}
          swirl={shaderConfig.swirl}
          swirlIterations={shaderConfig.swirlIterations}
        />
      </div>

      <div className="relative z-10 flex h-full flex-grow flex-col rounded-3xl border border-white/20 bg-black/80 p-5 dark:border-white/10 md:p-8">
        <div className="mb-4 drop-shadow-lg md:mb-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm md:size-12">
            <Icon className="size-5 text-white md:size-6" name={icon} />
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white md:mb-4 md:text-lg">{title}</h3>

        {description ? (
          <p className="flex-grow text-[11px] font-medium leading-relaxed text-gray-100 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};
