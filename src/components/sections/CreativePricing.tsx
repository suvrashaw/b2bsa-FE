"use client";

import type { ReactNode } from "react";

import { Check, Pencil, Sparkles, Star } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface CreativePricingProps {
  description?: string;
  tag?: string;
  tiers?: PricingTier[];
  title?: string;
}

export interface PricingTier {
  color: string;
  description: string;
  features: string[];
  icon: ReactNode;
  name: string;
  popular?: boolean;
  price: number;
}

const DEFAULT_TIERS: PricingTier[] = [
  {
    color: "blue",
    description: "Ideal for event highlight reels and single product updates",
    features: [
      "1 Fully Edited Video (up to 5 min)",
      "Premium Color Grading & Correction",
      "Professional Sound Design & Mix",
      "2 Rounds of Revisions",
      "3-5 Business Days Delivery",
    ],
    icon: <Pencil className="h-5 w-5" />,
    name: "Starter Edit",
    price: 499,
  },
  {
    color: "primary",
    description: "Perfect for high-engagement, active marketing campaigns",
    features: [
      "3 Edited Brand or Demo Videos",
      "5 Social Media Cut-downs (9:16 / 1:1)",
      "Motion Graphics & Lower Thirds",
      "Subtitle & Caption Creation",
      "48-Hour Priority Turnaround",
    ],
    icon: <Sparkles className="h-5 w-5" />,
    name: "Growth Suite",
    popular: true,
    price: 1299,
  },
  {
    color: "cyan",
    description: "Scale your entire corporate media engine seamlessly",
    features: [
      "Dedicated Lead Post-Production Editor",
      "Unlimited Monthly Editing Volume",
      "Custom 3D Animations & Graphics",
      "Direct Slack & Project Management Access",
      "Priority Same-Day Delivery Support",
    ],
    icon: <Star className="h-5 w-5" />,
    name: "Enterprise Engine",
    price: 2999,
  },
];

export const CreativePricing = ({
  description = "High-end post-production packages tailored to B2B teams",
  tag = "Video Editing Plans",
  tiers = DEFAULT_TIERS,
  title = "Creative Video Editing Pricing",
}: CreativePricingProps) => {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-24">
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        {/* Header Block */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Eyebrow className="mb-4 rotate-[-1deg] font-sans" variant="primary">
            {tag}
          </Eyebrow>

          <div className="relative mb-6">
            <Heading
              as="h2"
              className="relative rotate-[-1deg] font-heading text-2xl font-black text-brand-charcoal md:text-3xl lg:text-2xl"
              preserveClassName
            >
              {title}
              <span className="absolute top-0 -right-12 rotate-12 text-brand-primary max-sm:hidden">
                <Sparkles className="h-6 w-6 animate-bounce fill-brand-cyan/20 text-brand-cyan" />
              </span>
              <span className="absolute bottom-0 -left-10 -rotate-12 text-brand-blue max-sm:hidden">
                <Star className="h-6 w-6 animate-pulse fill-brand-blue/20 text-brand-blue" />
              </span>
            </Heading>
            <div className="absolute -bottom-2 left-1/2 h-3 w-44 -translate-x-1/2 rotate-[-1deg] rounded-full bg-brand-blue/15 blur-xs" />
          </div>

          <p className="max-w-xl rotate-[-1deg] font-sans text-lg font-medium text-gray-600 lg:text-xl">
            {description}
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <div
                className={cn(
                  "group relative transition-all duration-500",
                  isFirst && "rotate-[-1deg] hover:rotate-0",
                  isSecond && "rotate-[1deg] hover:rotate-0",
                  !isFirst && !isSecond && "rotate-[-1.5deg] hover:rotate-0"
                )}
                key={tier.name}
              >
                {/* Neo-brutalist premium background card shadow */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-white border border-brand-charcoal/10",
                    "transition-all duration-300",
                    "shadow-[6px_6px_0px_0px] shadow-brand-blue/10",
                    "group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]",
                    tier.popular
                      ? "shadow-brand-primary/20 border-brand-primary/20 group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-brand-primary/30"
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
                        tier.color === "blue" &&
                          "bg-brand-blue/10 border-brand-blue/20 text-brand-blue",
                        tier.color === "cyan" &&
                          "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan",
                        tier.color === "primary" &&
                          "bg-brand-primary/10 border-brand-primary/20 text-brand-primary",
                        !["blue", "cyan", "primary"].includes(tier.color) &&
                          "bg-brand-blue/10 border-brand-blue/20 text-brand-blue"
                      )}
                    >
                      {tier.icon}
                    </div>
                    <Heading as="h3" className="mb-2 font-sans text-2xl font-bold text-brand-charcoal" preserveClassName>
                      {tier.name}
                    </Heading>
                    <p className="font-sans text-sm font-semibold text-gray-500">
                      {tier.description}
                    </p>
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
                      "w-full h-13 font-sans text-base font-bold relative transition-all duration-300 active:scale-97 rounded-[4px] border",
                      tier.popular
                        ? "bg-gradient-to-r from-brand-blue to-brand-primary text-white border-brand-cyan/20 shadow-[4px_4px_0px_0px] shadow-brand-cyan/20 hover:shadow-[6px_6px_0px_0px] hover:brightness-110 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        : "bg-white hover:bg-brand-charcoal/5 text-brand-charcoal border-brand-charcoal/20 shadow-[4px_4px_0px_0px] shadow-brand-charcoal/5 hover:shadow-[6px_6px_0px_0px] hover:-translate-x-0.5 hover:-translate-y-0.5"
                    )}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stylized background illustrations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5 select-none">
        <div className="absolute top-40 left-12 rotate-12 text-3xl font-bold text-brand-charcoal">
          ✎
        </div>
        <div className="absolute right-12 bottom-40 -rotate-12 text-3xl font-bold text-brand-charcoal">
          ✏️
        </div>
      </div>
    </section>
  );
};
