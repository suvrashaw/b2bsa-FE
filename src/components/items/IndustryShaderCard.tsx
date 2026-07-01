"use client";

import { Warp } from "@paper-design/shaders-react";

import { Icon } from "@/components/ui/Icon";

interface IndustryShaderCardProps {
  description: string;
  icon: string;
  index: number;
  title: string;
}

const CARD_PALETTES: string[][] = [
  ["#0a1e2e", "#1E6091", "#74DBF3"],
  ["#0a1e2e", "#2a7ab5", "#c9f4ff"],
  ["#0d2035", "#1E6091", "#4fb8d8"],
  ["#071520", "#145c84", "#74DBF3"],
];

const WARP_STYLE: React.CSSProperties = { height: "100%", width: "100%" };

export const IndustryShaderCard = ({ description, icon, index, title }: IndustryShaderCardProps) => {
  const colors = CARD_PALETTES[index % CARD_PALETTES.length];

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Warp
          colors={colors}
          distortion={0.35}
          shape="edge"
          shapeScale={0.5}
          softness={0.8}
          speed={0.3 + (index % 4) * 0.1}
          style={WARP_STYLE}
          swirl={0.3}
          swirlIterations={4}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="relative flex h-full min-h-[200px] flex-col justify-end p-6">
        <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
          <Icon className="size-5 text-brand-cyan" name={icon} />
        </div>
        <h3 className="mb-1.5 font-heading text-base leading-snug font-semibold text-white">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
};
