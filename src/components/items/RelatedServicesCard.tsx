"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { cn } from "@/lib";

interface RelatedService {
  href: string;
  title: string;
}

const RELATEDSERVICES_INITIAL = { opacity: 0, scale: 0.95 };
const RELATEDSERVICES_WHILE_IN_VIEW = { opacity: 1, scale: 1 };
const RELATEDSERVICES_VIEWPORT = { once: true };

interface RelatedServicesCardProps {
  className?: string;
  index: number;
  service: RelatedService;
}

export const RelatedServicesCard = ({ className, index, service }: RelatedServicesCardProps) => {
  const transition = useMemo(() => ({ delay: index * 0.1, duration: 0.4 }), [index]);

  return (
    <motion.div
      className={cn("w-full", className)}
      initial={RELATEDSERVICES_INITIAL}
      transition={transition}
      viewport={RELATEDSERVICES_VIEWPORT}
      whileInView={RELATEDSERVICES_WHILE_IN_VIEW}
    >
      <Link
        className="group relative flex h-full items-center justify-between overflow-hidden rounded-2xl border border-brand-blue bg-brand-blue px-8 py-7 transition-colors duration-300 hover:border-brand-blue hover:bg-white md:rounded-xl"
        href={service.href}
      >
        {/* Cyan glow orb blooms from top-right corner on hover */}
        <span
          aria-hidden="true"
          className="absolute -top-8 -right-8 size-32 rounded-full bg-brand-cyan/25 opacity-0 transition-all duration-500 group-hover:scale-[2.5] group-hover:opacity-100"
        />

        <h3 className="type-h3 relative text-white transition-colors duration-300 group-hover:text-brand-charcoal">
          {service.title}
        </h3>

        <div className="relative ml-6 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-brand-cyan group-hover:text-brand-charcoal">
          <MoveRight className="size-5" />
        </div>
      </Link>
    </motion.div>
  );
};
