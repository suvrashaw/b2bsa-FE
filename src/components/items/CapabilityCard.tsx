import { LayoutGrid } from "lucide-react";

import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface CapabilityCardProps {
  className?: string;
  description?: string;
  icon?: string;
  title: string;
}

export const CapabilityCard = ({ className, description, icon, title }: CapabilityCardProps) => {
  return (
    <div
      className={cn(
        "relative h-full rounded-2xl border-[0.75px] border-brand-charcoal/10 p-3 md:rounded-[1.5rem] md:p-4",
        className
      )}
    >
      <GlowingEffect
        borderWidth={4}
        disabled={false}
        glow
        inactiveZone={0.01}
        proximity={100}
        spread={60}
      />
      <div className="relative flex h-full min-h-[12rem] flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-brand-charcoal/5 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-7">
        <div className="w-fit rounded-lg border-[0.75px] border-brand-charcoal/10 bg-brand-blue/5 p-2.5 text-brand-blue">
          {icon ? <Icon className="size-5" name={icon} /> : <LayoutGrid className="size-5" />}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg leading-snug font-semibold text-balance text-brand-charcoal">
            {title}
          </h3>
          {description && (
            <p className="text-sm leading-relaxed text-brand-charcoal/60">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
