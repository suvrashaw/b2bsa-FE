"use client";

import { motion } from "framer-motion";
import { CalendarDays, Layers, MapPin, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId } from "react";

import type { CaseStudyIndexEntry } from "@/types/case-studies";

import { ButtonLink } from "@/components/ui/ButtonLink";

const BACKDROP_ANIMATE = { opacity: 1 };
const BACKDROP_INITIAL = { opacity: 0 };
const MODAL_ANIMATE = { opacity: 1, scale: 1, y: 0 };
const MODAL_EXIT = { opacity: 0, scale: 0.98, y: 60 };
const MODAL_INITIAL = { opacity: 0, scale: 0.98, y: 60 };
const MODAL_TRANSITION = { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const };

interface CaseStudyModalProps {
  ctaHref: string;
  ctaLabel: string;
  isOpen: boolean;
  onClose: () => void;
  study: CaseStudyIndexEntry;
}

export const CaseStudyModal = ({
  ctaHref,
  ctaLabel,
  isOpen,
  onClose,
  study,
}: CaseStudyModalProps) => {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <motion.button
        animate={BACKDROP_ANIMATE}
        aria-label="Close case study modal"
        className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
        initial={BACKDROP_INITIAL}
        onClick={onClose}
        type="button"
      />

      <motion.div
        animate={MODAL_ANIMATE}
        aria-labelledby={titleId}
        aria-modal="true"
        className="relative z-10 grid h-full max-h-[85vh] w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white shadow-2xl md:grid-cols-[1.2fr_0.8fr] md:grid-rows-none"
        exit={MODAL_EXIT}
        initial={MODAL_INITIAL}
        role="dialog"
        transition={MODAL_TRANSITION}
      >
        <button
          className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white/90 text-gray-500 shadow-sm backdrop-blur-md transition-colors hover:text-brand-charcoal"
          onClick={onClose}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="min-h-0 overflow-y-auto p-8 md:p-14">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
            {study.industry}
          </span>
          <h2
            className="mt-4 max-w-3xl font-heading text-3xl leading-tight font-bold text-brand-charcoal md:text-5xl"
            id={titleId}
          >
            {study.title}
          </h2>

          <div className="mt-10 space-y-8 pr-0 md:pr-6">
            <section>
              <h3 className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                The Challenge
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{study.challenge}</p>
            </section>

            <section>
              <h3 className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                What We Did
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{study.whatWeDid}</p>
            </section>

            <section>
              <h3 className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                Detailed Results
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{study.results}</p>
            </section>
          </div>
        </div>

        <aside className="flex flex-col justify-between gap-8 border-t border-gray-100 bg-brand-gray p-8 md:border-t-0 md:border-l md:p-12">
          <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image alt={study.title} className="object-cover" fill src={study.card.image} />
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Event Details
                  </div>
                  <div className="mt-1 text-sm font-semibold text-brand-charcoal">
                    {study.event}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Location
                  </div>
                  <div className="mt-1 text-sm font-semibold text-brand-charcoal">
                    {study.geography}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Services Delivered
                  </div>
                  <div className="mt-1 text-sm font-semibold text-brand-charcoal">
                    {study.servicesText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-blue/10 bg-brand-blue/5 p-6 text-center">
              <div className="text-sm font-bold tracking-widest text-brand-blue uppercase">
                Impact Delivered
              </div>
              <div className="mt-2 font-heading text-4xl font-bold text-brand-blue">
                {study.card.metric}
              </div>
              <div className="mt-1 text-xs font-medium text-gray-500">
                {study.card.metricLabel}
              </div>
            </div>

            <ButtonLink className="w-full justify-center shadow-lg" href={ctaHref} variant="primary">
              {ctaLabel}
            </ButtonLink>
          </div>
        </aside>
      </motion.div>
    </div>
  );
};
