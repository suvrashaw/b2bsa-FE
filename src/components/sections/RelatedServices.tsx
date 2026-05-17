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

interface RelatedServicesProps {
  className?: string;
  services: RelatedService[];
  title?: string;
}

const RELATEDSERVICES_INITIAL = { opacity: 0, scale: 0.95 };
const RELATEDSERVICES_WHILE_IN_VIEW = { opacity: 1, scale: 1 };
const RELATEDSERVICES_VIEWPORT = { once: true };

export const RelatedServices = ({
  className,
  services,
  title = "Explore Related Solutions",
}: RelatedServicesProps) => {
  const serviceTransitions = useMemo(
    () => services.map((_, index) => ({ delay: index * 0.1, duration: 0.4 })),
    [services]
  );

  if (!services || services.length === 0) return null;

  return (
    <section className={cn("bg-brand-gray/5 py-24", className)}>
      <div className="container mx-auto px-8">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-brand-gray">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={RELATEDSERVICES_INITIAL}
              key={index}
              transition={serviceTransitions[index]}
              viewport={RELATEDSERVICES_VIEWPORT}
              whileInView={RELATEDSERVICES_WHILE_IN_VIEW}
            >
              <Link
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-8 transition-all hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5"
                href={service.href}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-xl font-bold text-brand-gray transition-colors group-hover:text-brand-blue">
                    {service.title}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                    <MoveRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-8 h-1 w-0 bg-brand-blue transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
