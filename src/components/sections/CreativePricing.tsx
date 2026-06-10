"use client";

import { Pencil, Sparkles, Star } from "lucide-react";

import { type PricingTier, PricingTierCard } from "@/components/items/PricingTierCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export interface CreativePricingProps {
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
          <Eyebrow className="mb-4 font-sans" variant="primary">
            {tag}
          </Eyebrow>

          <div className="relative mb-6">
            <Heading
              as="h2"
              className="relative"
            >
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

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingTierCard key={tier.name} tier={tier} />
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
