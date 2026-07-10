"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface CapabilitiesGridProps {
  description?: ReactNode;
  heading?: ReactNode;
  services: CapabilityItem[];
}

interface CapabilityItem {
  description?: string;
  icon?: string;
  id: string;
  image?: string;
  label?: string;
  title?: string;
}

const MOTION_INITIAL = { opacity: 0, y: 24 };
const MOTION_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const MOTION_VIEWPORT = { amount: 0.2, once: true };
const COLUMN_TRANSITIONS = [0, 1, 2].map((col) => ({ delay: col * 0.08, duration: 0.6 }));

export const CapabilitiesGrid = ({ description, heading, services }: CapabilitiesGridProps) => {
  return (
    <section className="relative bg-brand-charcoal py-16 md:py-24" data-testid="capabilities-grid">
      {(heading || description) && (
        <div className="relative z-10 container mx-auto mb-12 max-w-screen-2xl px-4 md:mb-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {heading && (
              <SectionHeader as="h2" className="mb-6 text-brand-white">
                {heading}
              </SectionHeader>
            )}
            {description && (
              <p className="type-body-l mx-auto max-w-2xl leading-relaxed text-brand-white/70">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="relative container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const title = item.title ?? item.label ?? "";
            return (
              <motion.li
                className="list-none"
                initial={MOTION_INITIAL}
                key={item.id}
                transition={COLUMN_TRANSITIONS[idx % 3]}
                viewport={MOTION_VIEWPORT}
                whileInView={MOTION_WHILE_IN_VIEW}
              >
                <div className="relative h-full rounded-2xl border-[0.75px] border-brand-white/10 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    borderWidth={2}
                    disabled={false}
                    glow
                    inactiveZone={0.01}
                    proximity={64}
                    spread={40}
                  />
                  <div
                    className={cn(
                      "relative flex h-full min-h-[12rem] flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-brand-white/5 bg-brand-charcoal p-6 shadow-[0px_0px_27px_0px_rgba(0,0,0,0.3)] transition-colors duration-300 md:p-7"
                    )}
                  >
                    <div className="w-fit rounded-lg border-[0.75px] border-brand-white/10 bg-brand-white/5 p-2.5 text-brand-cyan">
                      {item.icon ? (
                        <Icon className="size-5" name={item.icon} />
                      ) : (
                        <LayoutGrid className="size-5" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="type-h4 text-lg leading-snug font-semibold text-balance text-brand-white">
                        {title}
                      </h3>
                      {item.description && (
                        <p className="text-sm leading-relaxed text-brand-white/60">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
