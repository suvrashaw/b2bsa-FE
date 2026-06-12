"use client";

import { motion } from "framer-motion";
import { type ReactNode, useCallback, useMemo, useState } from "react";

import type { FAQProps } from "@/components/sections/FAQ";

import { FAQAccordionItem } from "@/components/items/FAQAccordionItem";
import { Heading } from "@/components/ui/Heading";
import { HOME_FAQ_CONTENT } from "@/content/home";
import { cn } from "@/lib";

const HEADING_INITIAL = { opacity: 0, y: 20 } as const;
const HEADING_ANIMATE = { opacity: 1, y: 0 } as const;
const HEADING_TRANSITION = { duration: 0.5 } as const;
const HEADING_VIEWPORT = { once: true } as const;
const ITEM_INITIAL = { opacity: 0, y: 16 } as const;
const ITEM_ANIMATE = { opacity: 1, y: 0 } as const;
const ITEM_VIEWPORT = { once: true } as const;

interface FAQAccordionRowProps {
  answer: ReactNode;
  id: number | string;
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
  question: string;
}

const FAQAccordionRow = ({
  answer,
  id,
  index,
  isOpen,
  onToggle,
  question,
}: FAQAccordionRowProps) => {
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

interface FAQAccordionProps extends FAQProps {
  variant?: "article" | "default";
}

export const FAQAccordion = ({
  content = HOME_FAQ_CONTENT,
  description = content.description,
  faqs = content.faqs,
  heading = content.heading,
  variant = "default",
}: FAQAccordionProps = {}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const isArticle = variant === "article";

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section
      className={cn(
        "relative",
        isArticle ? "bg-transparent py-0" : "bg-brand-gray py-14 md:py-20 lg:py-24"
      )}
      id="faq"
    >
      {!isArticle && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/5 blur-[100px]" />
        </div>
      )}

      <div
        className={cn(
          "relative z-10",
          isArticle ? "" : "container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8"
        )}
      >
        <motion.div
          animate={HEADING_ANIMATE}
          className={cn(isArticle ? "mb-8 text-left" : "mb-16 text-center")}
          initial={HEADING_INITIAL}
          transition={HEADING_TRANSITION}
          viewport={HEADING_VIEWPORT}
          whileInView={HEADING_ANIMATE}
        >
          <Heading as="h2" className="mb-4">
            {heading}
          </Heading>
          {description && (
            <p className={cn("max-w-xl text-base text-gray-600", !isArticle && "mx-auto")}>
              {description}
            </p>
          )}
        </motion.div>

        <div className={cn("flex flex-col gap-4", isArticle ? "" : "mx-auto max-w-[860px]")}>
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
