"use client";

import type { ReactNode } from "react";

import { Heading } from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";
import { HOME_WHO_WE_ARE_CONTENT, type WhoWeAreContent, type WhoWeAreStat } from "@/content/home";

export interface WhoWeAreProps {
  attribution?: WhoWeAreContent["attribution"];
  content?: WhoWeAreContent;
  heading?: WhoWeAreContent["heading"];
  items?: Array<{
    bg?: string;
    icon?: string;
    label: string;
    value: string;
  }>;
  mission?: WhoWeAreContent["mission"];
  quote?: WhoWeAreContent["quote"];
  stats?: Array<{
    bg?: string;
    icon?: string;
    label: string;
    value: string;
  }>;
  title?: ReactNode;
}

export const WhoWeAre = ({
  content = HOME_WHO_WE_ARE_CONTENT,
  attribution = content.attribution,
  heading,
  items,
  mission = content.mission,
  quote = content.quote,
  stats,
  title,
}: WhoWeAreProps = {}) => {
  const resolvedHeading = title ?? heading ?? content.heading;
  const resolvedStats: WhoWeAreStat[] = (items ?? stats ?? content.stats).map((stat, index) => ({
    ...stat,
    bg: stat.bg ?? ["bg-brand-blue", "bg-brand-cyan", "bg-brand-primary"][index % 3],
    icon: stat.icon ?? ["TrendingUp", "Globe", "Target"][index % 3],
  }));

  const col1Stats = [...resolvedStats, ...resolvedStats];
  const offsetStats = [...resolvedStats.slice(3), ...resolvedStats.slice(0, 3)];
  const col2Stats = [...offsetStats, ...offsetStats];

  return (
    <section className="overflow-hidden bg-white py-20" id="about">
      <div className="container mx-auto grid items-center gap-16 px-8 lg:grid-cols-2">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start space-y-12 text-left">
          <div className="w-full text-left">
            <Heading as="h2" className="mb-6">
              {resolvedHeading}
            </Heading>
          </div>

          <div className="w-full">
            <div className="group cursor-default rounded-3xl border border-transparent bg-brand-gray/50 p-8 transition-all duration-500 hover:border-brand-blue/20 hover:bg-brand-blue/5 hover:shadow-2xl lg:p-12">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="group-hover:text-brand-blue:text-brand-cyan font-serif text-xl leading-relaxed text-black italic transition-colors duration-500 md:text-3xl">
                  {quote}
                </p>
                {attribution && (
                  <div className="mt-8 text-sm font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-brand-blue/70">
                    {attribution}
                  </div>
                )}
              </div>
            </div>
            {mission && (
              <div className="mt-6 flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-sm font-bold tracking-wider text-brand-blue uppercase">
                  Our Mission:
                </span>
                <p className="text-sm leading-relaxed text-brand-charcoal/80 italic">
                  &ldquo;{mission}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Scrolling Insights */}
        <div className="group/scroller relative h-[600px] overflow-hidden p-4">
          {/* Top/Bottom Fade Masks */}
          <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

          <div className="relative grid h-full grid-cols-2 gap-6">
            {/* Column 1 - Scroll Up */}
            <div className="flex animate-scroll-up flex-col gap-6 pb-6 group-hover/scroller:[animation-play-state:paused]">
              {col1Stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="flex animate-scroll-down flex-col gap-6 pb-6 group-hover/scroller:[animation-play-state:paused]">
              {col2Stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }: { stat: WhoWeAreStat }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] p-8 shadow-lg ${stat.bg} border border-transparent text-white`}
    >
      <div className="relative z-10">
        <div className="mb-4 text-sm font-bold opacity-90">{stat.label}</div>
        <div className="flex items-center justify-between">
          <div className="font-heading text-4xl font-bold">{stat.value}</div>
          <Icon className="h-6 w-6 opacity-50" name={stat.icon} />
        </div>
      </div>
    </div>
  );
};
