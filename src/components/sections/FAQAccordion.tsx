"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import type { FAQProps } from "@/components/sections/FAQ";

import { FAQAccordionItem } from "@/components/cards/FAQAccordionItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_FAQ_CONTENT } from "@/content/home";

const HEADING_INITIAL = { opacity: 0, y: 20 } as const;
const HEADING_ANIMATE = { opacity: 1, y: 0 } as const;
const HEADING_TRANSITION = { duration: 0.5 } as const;
const HEADING_VIEWPORT = { once: true } as const;
const ITEM_INITIAL = { opacity: 0, y: 16 } as const;
const ITEM_ANIMATE = { opacity: 1, y: 0 } as const;
const ITEM_VIEWPORT = { once: true } as const;

interface FAQAccordionRowProps {
  answer: string;
  id: string;
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
  question: string;
}

const FAQAccordionRow = ({ answer, id, index, isOpen, onToggle, question }: FAQAccordionRowProps) => {
  const transition = useMemo(() => ({ delay: index * 0.07, duration: 0.4 }), [index]);
  return (
    <motion.div
      animate={ITEM_ANIMATE}
      initial={ITEM_INITIAL}
      key={id}
      transition={transition}
      viewport={ITEM_VIEWPORT}
      whileInView={ITEM_ANIMATE}
    >
      <FAQAccordionItem
        answer={answer}
        index={index}
        isOpen={isOpen}
        onToggle={onToggle}
        question={question}
      />
    </motion.div>
  );
};

export const FAQAccordion = ({
  content = HOME_FAQ_CONTENT,
  description = content.description,
  eyebrow = content.eyebrow,
  faqs = content.faqs,
  heading = content.heading,
}: FAQProps = {}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="relative bg-brand-gray py-24" id="faq">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        <motion.div
          animate={HEADING_ANIMATE}
          className="mb-16 text-center"
          initial={HEADING_INITIAL}
          transition={HEADING_TRANSITION}
          viewport={HEADING_VIEWPORT}
          whileInView={HEADING_ANIMATE}
        >
          {eyebrow && (
            <Eyebrow className="mb-4 rotate-[-1deg]" variant="neutral">
              {eyebrow}
            </Eyebrow>
          )}
          <Heading as="h2" className="mb-4">
            {heading}
          </Heading>
          {description && (
            <p className="mx-auto max-w-xl text-lg text-gray-600">{description}</p>
          )}
        </motion.div>

        <div className="mx-auto flex max-w-[860px] flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQAccordionRow
              answer={faq.answer}
              id={faq.id}
              index={i}
              isOpen={openIndex === i}
              key={faq.id}
              onToggle={handleToggle}
              question={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
