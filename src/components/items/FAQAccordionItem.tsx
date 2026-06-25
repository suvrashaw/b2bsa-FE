"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

import { cn } from "@/lib";

export interface FAQAccordionItemProps {
  answer: React.ReactNode | string;
  index: number;
  isOpen: boolean;
  question: string;
}

const ANSWER_ANIMATE = { height: "auto", opacity: 1 } as const;
const ANSWER_EXIT = { height: 0, opacity: 0 } as const;
const ANSWER_INITIAL = { height: 0, opacity: 0 } as const;
const ANSWER_TRANSITION = { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as const;

export const FAQAccordionItem = ({ answer, index, isOpen, question }: FAQAccordionItemProps) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Accordion.Item
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition-colors duration-300 md:rounded-xl",
        isOpen ? "border-brand-cyan" : "border-gray-200 hover:border-gray-300"
      )}
      value={String(index)}
    >
      <Accordion.Trigger asChild>
        <button
          className="flex w-full items-center gap-3 p-5 text-left md:gap-4 md:px-6"
          type="button"
        >
          <span className="w-6 shrink-0 text-base font-bold text-brand-blue md:w-8">{num}.</span>
          <span className="flex-1 font-heading text-base font-semibold text-brand-charcoal md:text-lg">
            {question}
          </span>
          <span className="shrink-0 text-brand-cyan">
            {isOpen ? <X className="size-[18px]" /> : <Plus className="size-[18px]" />}
          </span>
        </button>
      </Accordion.Trigger>

      <Accordion.Content forceMount>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              animate={ANSWER_ANIMATE}
              className="overflow-hidden"
              exit={ANSWER_EXIT}
              initial={ANSWER_INITIAL}
              transition={ANSWER_TRANSITION}
            >
              <div className="px-5 pt-1 pb-6 md:px-6">
                <p className="text-sm leading-relaxed text-brand-charcoal/60 md:text-base">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Accordion.Content>
    </Accordion.Item>
  );
};
