"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export interface RelatedService {
  href: string;
  title: string;
}

const RELATEDSERVICES_INITIAL = { opacity: 0, scale: 0.95 };
const RELATEDSERVICES_WHILE_IN_VIEW = { opacity: 1, scale: 1 };
const RELATEDSERVICES_VIEWPORT = { once: true };

interface ServicesLinkCardProps {
  index: number;
  service: RelatedService;
}

export const ServicesLinkCard = ({ index, service }: ServicesLinkCardProps) => {
  const transition = useMemo(() => ({ delay: index * 0.1, duration: 0.4 }), [index]);

  return (
    <motion.div
      className="w-full"
      initial={RELATEDSERVICES_INITIAL}
      transition={transition}
      viewport={RELATEDSERVICES_VIEWPORT}
      whileInView={RELATEDSERVICES_WHILE_IN_VIEW}
    >
      <Link
        className="group relative flex h-full items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-white px-8 py-7 transition-colors duration-300 hover:border-brand-blue hover:bg-brand-blue"
        href={service.href}
      >
        {/* Cyan glow orb blooms from top-right corner on hover */}
        <span
          aria-hidden="true"
          className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-cyan/25 opacity-0 transition-all duration-500 group-hover:scale-[2.5] group-hover:opacity-100"
        />

        <h3 className="relative font-heading text-xl font-bold text-brand-charcoal transition-colors duration-300 group-hover:text-white">
          {service.title}
        </h3>

        <div className="relative ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-brand-blue transition-all duration-300 group-hover:bg-brand-cyan group-hover:text-brand-charcoal">
          <MoveRight className="h-5 w-5" />
        </div>
      </Link>
    </motion.div>
  );
};
