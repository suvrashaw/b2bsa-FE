"use client";

import { Pencil, Sparkles, Star } from "lucide-react";

import { PricingCard, type PricingTier } from "@/components/items/PricingCard";
import { Heading } from "@/components/ui/Heading";

export interface PricingProps {
  description?: string;
  tag?: string;
  tiers?: PricingTier[];
  title?: string;
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

export const Pricing = ({
  description = "High-end post-production packages tailored to B2B teams",
  tiers = DEFAULT_TIERS,
  title = "Creative Video Editing Pricing",
}: PricingProps) => {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-14 md:py-20 lg:py-24">
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <Heading as="h2" className="relative">
              {title}
              <span className="absolute top-0 -right-12 rotate-12 text-brand-primary max-sm:hidden">
                <Sparkles className="h-6 w-6 animate-bounce fill-brand-cyan/20 text-brand-cyan" />
              </span>
              <span className="absolute bottom-0 -left-10 -rotate-12 text-brand-blue max-sm:hidden">
                <Star className="h-6 w-6 animate-pulse fill-brand-blue/20 text-brand-blue" />
              </span>
            </Heading>
          </div>

          <p className="max-w-xl font-sans text-base font-medium text-gray-600 lg:text-xl">
            {description}
          </p>
        </div>

        {/* Mobile/Tablet: horizontal snap scroll */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:hidden [&::-webkit-scrollbar]:hidden">
          {tiers.map((tier) => (
            <div className="w-[85%] shrink-0 snap-start sm:w-[72%] md:w-[46%]" key={tier.name}>
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden grid-cols-3 gap-8 lg:grid">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
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
