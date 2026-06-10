"use client";

import { motion } from "framer-motion";

import { BoothWhyCard, type BoothWhyChooseUsItem } from "@/components/items/BoothWhyCard";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export interface BoothWhyChooseUsProps {
  heading: string;
  headingHighlight?: string;
  items: BoothWhyChooseUsItem[];
}

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, transition: { duration: 0.55 }, y: 0 },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { delay: 0.35, duration: 0.45 }, y: 0 },
};

const viewport = { once: true } as const;

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
            <BoothWhyCard index={index} item={item} key={item.title} />
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
