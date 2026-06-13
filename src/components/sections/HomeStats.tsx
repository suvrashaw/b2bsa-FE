"use client";

import type { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { HOME_STATS_CONTENT, type HomeStatItem, type StatsContent } from "@/content/home";

const ROTATING_WORDS = ["Build Pipelines", "Close Deals", "Drive Revenue"];

const useRotatingWord = (words: string[], interval = 2500) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return { key: index, word: words[index] };
};

const WORD_ANIMATE = { opacity: 1, y: 0 };
const WORD_EXIT = { opacity: 0, y: -14 };
const WORD_INITIAL = { opacity: 0, y: 14 };
const WORD_TRANSITION = { duration: 0.38 } as const;

interface HomeStatsProps {
  attribution?: StatsContent["attribution"];
  content?: StatsContent;
  description?: ReactNode | string;
  heading?: StatsContent["heading"];
  items?: Array<{
    bg?: string;
    icon?: string;
    label: string;
    value: string;
  }>;
  mission?: StatsContent["mission"];
  quote?: StatsContent["quote"];
  stats?: Array<{
    bg?: string;
    icon?: string;
    label: string;
    value: string;
  }>;
  title?: ReactNode;
}

export const HomeStats = ({
  content = HOME_STATS_CONTENT,
  attribution = content.attribution,
  description,
  heading,
  items,
  mission = content.mission,
  quote = content.quote,
  stats,
  title,
}: HomeStatsProps = {}) => {
  const resolvedHeading = title ?? heading ?? content.heading;
  const resolvedStats: HomeStatItem[] = (items ?? stats ?? content.stats).map((stat, index) => ({
    ...stat,
    bg: stat.bg ?? ["bg-brand-blue", "bg-brand-cyan", "bg-brand-primary"][index % 3],
    icon: stat.icon ?? ["TrendingUp", "Globe", "Target"][index % 3],
  }));

  const col1Stats = [...resolvedStats, ...resolvedStats];
  const offsetStats = [...resolvedStats.slice(3), ...resolvedStats.slice(0, 3)];
  const col2Stats = [...offsetStats, ...offsetStats];

  const { key: wordKey, word: rotatingWord } = useRotatingWord(ROTATING_WORDS);

  return (
    <section className="overflow-hidden bg-brand-gray py-12 md:py-16 lg:py-20" id="about">
      <div className="container mx-auto grid items-center gap-16 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Side: Content */}
        <div className="order-last flex flex-col items-start space-y-6 text-left lg:order-none">
          <div className="w-full text-left">
            <Heading as="h2" className="mb-6 lg:text-5xl xl:text-6xl">
              <span className="block">{resolvedHeading}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  animate={WORD_ANIMATE}
                  className="block text-brand-blue"
                  exit={WORD_EXIT}
                  initial={WORD_INITIAL}
                  key={wordKey}
                  transition={WORD_TRANSITION}
                >
                  {rotatingWord}
                </motion.span>
              </AnimatePresence>
            </Heading>
            {description && (
              <div className="space-y-6 text-base leading-relaxed text-brand-charcoal/80 md:text-lg">
                {description}
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="group cursor-default rounded-2xl border border-transparent bg-brand-gray/50 p-6 transition-all duration-500 hover:border-brand-blue/20 hover:bg-brand-blue/5 hover:shadow-2xl md:rounded-3xl md:p-8 lg:p-12">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="group-hover:text-brand-blue:text-brand-cyan font-serif text-xl leading-relaxed text-black italic transition-colors duration-500 md:text-2xl">
                  {quote}
                </p>
                {mission && (
                  <p className="group-hover:text-brand-blue:text-brand-cyan mt-6 font-serif text-xl leading-relaxed text-black italic transition-colors duration-500 md:text-2xl">
                    <span className="font-bold text-brand-blue not-italic">Mission:</span> {mission}
                  </p>
                )}
                {attribution && (
                  <div className="mt-8 text-sm font-bold tracking-widest text-gray-500 uppercase transition-colors group-hover:text-brand-blue/70">
                    {attribution}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Insights */}
        <div className="group/scroller relative order-first h-[400px] overflow-hidden p-2 md:h-[600px] md:p-4 lg:order-none">
          {/* Top/Bottom Fade Masks */}
          <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-brand-gray to-transparent" />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-brand-gray to-transparent" />

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

const StatCard = ({ stat }: { stat: HomeStatItem }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-6 shadow-lg md:p-8 ${stat.bg} border border-transparent text-white`}
    >
      <div className="relative z-10">
        <div className="text-sm font-medium opacity-80">{stat.label}</div>
        <div className="mt-2 font-heading text-5xl font-bold">{stat.value}</div>
      </div>
    </div>
  );
};
