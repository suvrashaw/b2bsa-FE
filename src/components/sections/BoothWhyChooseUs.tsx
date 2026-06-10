"use client";

import { motion } from "framer-motion";
import { Award, Globe2, TrendingUp, Users2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

const icons = { Award, Globe2, TrendingUp, Users2 } as const;

export interface BoothWhyChooseUsItem {
  description: string;
  icon: string;
  image: string;
  title: string;
}

export interface BoothWhyChooseUsProps {
  heading: string;
  headingHighlight?: string;
  items: BoothWhyChooseUsItem[];
}

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, transition: { duration: 0.55 }, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45 },
    y: 0,
  }),
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { delay: 0.35, duration: 0.45 }, y: 0 },
};

const viewport = { once: true } as const;

const BoothWhyChooseUsCard = ({
  index,
  item,
}: {
  index: number;
  item: BoothWhyChooseUsItem;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = icons[item.icon as keyof typeof icons] ?? Award;

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <motion.article
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-brand-blue/8 bg-white transition-all duration-500 hover:border-brand-blue/30 hover:shadow-2xl sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
      custom={index}
      initial="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      viewport={viewport}
      whileInView="visible"
    >
      <div className="relative h-32 overflow-hidden">
        <Image
          alt={item.title}
          className={`object-cover transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`}
          fill
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        <div
          className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-500 ${hovered ? "scale-110 rotate-6" : ""}`}
        >
          <Icon
            className={`h-6 w-6 text-brand-blue transition-transform duration-300 ${hovered ? "scale-110" : ""}`}
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <h3
          className={`mb-2 text-lg font-semibold transition-all duration-300 ${hovered ? "translate-x-1 text-brand-blue" : "text-brand-charcoal"}`}
        >
          {item.title}
        </h3>
        <p
          className={`text-sm leading-relaxed transition-all duration-300 md:text-base ${hovered ? "text-brand-charcoal" : "text-brand-charcoal/68"}`}
        >
          {item.description}
        </p>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-brand-blue transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />
    </motion.article>
  );
};

export const BoothWhyChooseUs = ({ heading, headingHighlight, items }: BoothWhyChooseUsProps) => {
  return (
    <section className="bg-brand-gray py-20" id="why-choose-us">
      <div className="container mx-auto px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          variants={headingVariants}
          viewport={viewport}
          whileInView="visible"
        >
          <Heading as="h2" className="inline" highlight={headingHighlight}>
            {heading}
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

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <BoothWhyChooseUsCard index={index} item={item} key={item.title} />
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          variants={ctaVariants}
          viewport={viewport}
          whileInView="visible"
        >
          <Button asChild variant="secondary">
            <a href="#contact">Browse All Our Projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
