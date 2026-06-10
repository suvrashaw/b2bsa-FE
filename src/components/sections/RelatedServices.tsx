"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface RelatedService {
  href: string;
  title: string;
}

interface RelatedServicesProps {
  className?: string;
  headingHighlight?: string;
  services: RelatedService[];
  title?: string;
}

const RELATEDSERVICES_INITIAL = { opacity: 0, scale: 0.95 };
const RELATEDSERVICES_WHILE_IN_VIEW = { opacity: 1, scale: 1 };
const RELATEDSERVICES_VIEWPORT = { once: true };

export const RelatedServices = ({
  className,
  headingHighlight,
  services,
  title = "Explore Related Solutions",
}: RelatedServicesProps) => {
  const serviceTransitions = useMemo(
    () => services.map((_, index) => ({ delay: index * 0.1, duration: 0.4 })),
    [services]
  );

  if (!services || services.length === 0) return null;

  return (
    <section className={cn("bg-brand-gray py-20", className)}>
      <div className="container mx-auto px-8">
        <Heading as="h2" className="mb-12 text-center" highlight={headingHighlight}>
          {title}
        </Heading>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              initial={RELATEDSERVICES_INITIAL}
              key={index}
              transition={serviceTransitions[index]}
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
          ))}
        </div>
      </div>
    </section>
  );
};
