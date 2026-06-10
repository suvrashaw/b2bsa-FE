"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useCallback } from "react";

import { cn } from "@/lib";

export interface FAQAccordionItemProps {
  answer: React.ReactNode | string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  question: string;
}

const ANSWER_ANIMATE = { height: "auto", opacity: 1 } as const;
const ANSWER_EXIT = { height: 0, opacity: 0 } as const;
const ANSWER_INITIAL = { height: 0, opacity: 0 } as const;
const ANSWER_TRANSITION = { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as const;

export const FAQAccordionItem = ({ answer, index, isOpen, onToggle, question }: FAQAccordionItemProps) => {
  const handleClick = useCallback(() => onToggle(index), [index, onToggle]);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border bg-white transition-colors duration-300",
        isOpen ? "border-brand-cyan" : "border-gray-200 hover:border-gray-300"
      )}
    >
      <button
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
        onClick={handleClick}
        type="button"
      >
        <span className="w-9 shrink-0 text-base font-bold text-brand-blue">
          {num}.
        </span>
        <span className="flex-1 font-heading text-base font-semibold text-brand-charcoal md:text-lg">
          {question}
        </span>
        <span className="shrink-0 text-brand-cyan">
          {isOpen ? <X className="h-[18px] w-[18px]" /> : <Plus className="h-[18px] w-[18px]" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={ANSWER_ANIMATE}
            className="overflow-hidden"
            exit={ANSWER_EXIT}
            initial={ANSWER_INITIAL}
            transition={ANSWER_TRANSITION}
          >
            <div className="px-6 pt-1 pb-6">
              <p className="text-sm leading-relaxed text-brand-charcoal/60 md:text-base">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
