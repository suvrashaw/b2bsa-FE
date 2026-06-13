"use client";

import type { ReactNode } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface PricingProps {
  description?: string;
  tiers?: PricingTier[];
  title?: string;
}

export interface PricingTier {
  color: string;
  description: string;
  features: string[];
  icon?: ReactNode;
  name: string;
  popular?: boolean;
  price: number;
}

interface PricingCardProps {
  tier: PricingTier;
}

export const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div className={cn("group relative transition-all duration-500")}>
      {/* Neo-brutalist premium background card shadow */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl border border-brand-charcoal/10 bg-white",
          "transition-all duration-300",
          "shadow-[6px_6px_0px_0px] shadow-brand-blue/10",
          "group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]",
          tier.popular
            ? "border-brand-primary/20 shadow-brand-primary/20 group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-brand-primary/30"
            : "group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-brand-blue/15"
        )}
      />

      {/* Main Content Card Container */}
      <div className="relative rounded-2xl p-8">
        {tier.popular && (
          <div className="absolute -top-3.5 -right-2 z-20 rotate-6 rounded-full border border-brand-blue bg-gradient-to-r from-brand-blue to-brand-primary px-4 py-1.5 font-sans text-xs font-black tracking-wider text-white uppercase shadow-md">
            Popular!
          </div>
        )}

        {/* Header info */}
        <div className="mb-6">
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300",
              tier.color === "blue" && "border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
              tier.color === "cyan" && "border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan",
              tier.color === "primary" &&
                "border-brand-primary/20 bg-brand-primary/10 text-brand-primary",
              !["blue", "cyan", "primary"].includes(tier.color) &&
                "border-brand-blue/20 bg-brand-blue/10 text-brand-blue"
            )}
          >
            {tier.icon}
          </div>
          <SectionHeader
            as="h3"
            className="mb-2 font-sans text-2xl font-bold text-brand-charcoal"
            preserveClassName
          >
            {tier.name}
          </SectionHeader>
          <p className="font-sans text-sm font-semibold text-gray-500">{tier.description}</p>
        </div>

        {/* Pricing Display */}
        <div className="mb-6 flex items-baseline font-sans text-brand-charcoal">
          <span className="text-3xl font-black tracking-tight">${tier.price}</span>
          <span className="ml-2 text-sm font-bold text-gray-400">/month</span>
        </div>

        {/* Features List */}
        <div className="mb-8 space-y-4">
          {tier.features.map((feature) => (
            <div className="flex items-center gap-3.5" key={feature}>
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                <Check className="h-3 w-3" />
              </div>
              <span className="font-sans text-base font-semibold text-brand-charcoal/80">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Get Started CTA */}
        <Button
          className={cn(
            "relative h-13 w-full rounded-[4px] border font-sans text-base font-bold transition-all duration-300 active:scale-97",
            tier.popular
              ? "border-brand-cyan/20 bg-gradient-to-r from-brand-blue to-brand-primary text-white shadow-[4px_4px_0px_0px] shadow-brand-cyan/20 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[6px_6px_0px_0px]"
              : "border-brand-charcoal/20 bg-white text-brand-charcoal shadow-[4px_4px_0px_0px] shadow-brand-charcoal/5 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-charcoal/5 hover:shadow-[6px_6px_0px_0px]"
          )}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
