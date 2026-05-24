"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Globe2, TrendingUp, Users2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

const highlightIcons = {
  Award,
  Globe2,
  TrendingUp,
  Users2,
} as const;

export interface WhyChooseUsHighlightItem {
  description: string;
  icon: keyof typeof highlightIcons;
  title: string;
}

export interface WhyChooseUsHighlightsProps {
  cta?: {
    href: string;
    label: string;
  };
  heading: string;
  items: WhyChooseUsHighlightItem[];
}

const highlightRows = [0, 1, 2, 3];
const highlightColumns = [0, 1, 2, 3, 4];
const highlightViewport = { once: true } as const;
const highlightHeadingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55 },
    y: 0,
  },
};
const highlightCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    transition: { delay: index * 0.08, duration: 0.45 },
    y: 0,
  }),
};
const highlightCtaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.45 },
    y: 0,
  },
};

export const WhyChooseUsHighlights = ({ cta, heading, items }: WhyChooseUsHighlightsProps) => {
  return (
    <section className="bg-white py-24" id="why-choose-us">
      <div className="container mx-auto px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          variants={highlightHeadingVariants}
          viewport={highlightViewport}
          whileInView="visible"
        >
          <Heading
            as="h2"
            className="inline font-heading text-4xl leading-tight font-black text-brand-charcoal md:text-6xl"
            preserveClassName
          >
            <span className="bg-brand-blue/10 box-decoration-clone px-3 py-1">{heading}</span>
          </Heading>

          <div className="mt-8 flex justify-center">
            <svg
              fill="none"
              height="22"
              viewBox="0 0 140 22"
              width="140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 16.5C35.8 4.1 75.1 1.7 134 15.6"
                stroke="#4BC0D9"
                strokeLinecap="round"
                strokeWidth="7"
              />
            </svg>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = highlightIcons[item.icon];

            return (
              <motion.article
                className="group relative overflow-hidden rounded-[2rem] border border-brand-blue/8 bg-brand-gray px-8 py-9 shadow-[0_24px_60px_rgba(18,38,54,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_26px_70px_rgba(18,38,54,0.1)]"
                custom={index}
                initial="hidden"
                key={item.title}
                variants={highlightCardVariants}
                viewport={highlightViewport}
                whileInView="visible"
              >
                <div className="absolute top-6 right-7 grid grid-cols-5 gap-2 opacity-55">
                  {highlightRows.flatMap((row) =>
                    highlightColumns.map((column) => (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-brand-cyan/40"
                        key={`${item.title}-${row}-${column}`}
                      />
                    ))
                  )}
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ff2458]/10 text-[#ff2458] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 font-sans text-3xl leading-tight font-semibold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[18rem] text-base leading-relaxed text-brand-charcoal/68">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {cta ? (
          <motion.div
            className="mt-14 flex justify-center"
            initial="hidden"
            variants={highlightCtaVariants}
            viewport={highlightViewport}
            whileInView="visible"
          >
            <Button asChild className="rounded-[1.1rem] px-8 py-4" size="lg" variant="primary">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};
