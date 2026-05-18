"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { Button } from "@/components/ui/Button";
import { Globe } from "@/components/ui/Globe";
import { GlobalPresence } from "@/components/ui/GlobeVisualization";
import { Heading } from "@/components/ui/Heading";
import { footerNavigation, footerServiceGroups } from "@/content/navigation";
import { cn } from "@/lib";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/b2b-sales-arrow/",
    icon: FaLinkedinIn,
    name: "LinkedIn",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
  },
];

const FOOTER_SCROLL_OFFSET: ["start start", "end end"] = ["start start", "end end"];

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: FOOTER_SCROLL_OFFSET,
    target: containerRef,
  });

  // Globe Animation: Start large in the center, shrink down and move up slightly
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const globeY = useTransform(scrollYProgress, [0, 1], ["18%", "-10%"]);

  // Footer Content Animation: Slide up from the bottom as you scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // Optional opacity fade for the content wrapper background so it feels like a soft overlay
  const contentBgOpacity = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  const globeStyle = useMemo(() => ({ scale: globeScale, y: globeY }), [globeScale, globeY]);
  const contentStyle = useMemo(() => ({ y: contentY }), [contentY]);
  const contentBgStyle = useMemo(() => ({ opacity: contentBgOpacity }), [contentBgOpacity]);

  return (
    <footer className="relative z-0 h-[200vh] bg-brand-blue" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
        {/* 1. Global Presence Slider Section (Fixed at top) */}
        <div className="pointer-events-none absolute top-0 right-0 left-0 z-20 bg-linear-to-b from-brand-blue via-brand-blue/80 to-transparent pt-12 pb-24">
          {/* We wrap it in a pointer-events-auto div to ensure it's still clickable/selectable if needed */}
          <div className="pointer-events-auto">
            <GlobalPresence />
          </div>
        </div>

        {/* 2. Interactive 3D Globe Centerpiece (Background layer) */}
        <motion.div
          className="absolute inset-0 z-0 flex origin-center items-center justify-center"
          style={globeStyle}
        >
          {/* We ensure it's fully interactive when dragged */}
          <div className="flex h-[min(62vh,800px)] w-[min(92vw,800px)] items-center justify-center">
            <Globe />
          </div>
        </motion.div>

        {/* 3. Main Footer Links Area (Slides up from bottom) */}
        <motion.div className="absolute right-0 bottom-0 left-0 z-10 w-full" style={contentStyle}>
          <motion.div
            className="absolute inset-0 -z-10 bg-linear-to-t from-brand-blue via-brand-blue/95 to-brand-blue/40 backdrop-blur-sm"
            style={contentBgStyle}
          />
          <div className="relative container mx-auto px-8 pt-32 pb-8">
            {/* Row 1: Brand + Navigation + Stay Ahead */}
            <div className="mb-12 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Link
                  className="relative mb-8 block h-12 w-48 transition-opacity hover:opacity-90"
                  href="/"
                >
                  <Image
                    alt="B2B Sales Arrow"
                    className="rounded-md bg-transparent object-contain object-left brightness-0 invert"
                    fill
                    sizes="192px"
                    src="/logo.png"
                  />
                </Link>
                <Heading as="h2" className="mb-3 text-lg font-bold text-white!" preserveClassName>
                  Turn Your Next Trade Show into a Revenue Engine
                </Heading>
                <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/90">
                  We deliver premier global event solutions that turn your corporate presence into a
                  measurable revenue engine. Let&apos;s build your pipeline together.
                </p>
                <div className="mb-6 space-y-1.5 text-sm text-white/90">
                  <p>
                    <a
                      className="transition-colors hover:text-white hover:underline"
                      href="mailto:info@b2bsalesarrow.com"
                    >
                      info@b2bsalesarrow.com
                    </a>
                  </p>
                  <p>New York, USA</p>
                  <p>Bengaluru, India</p>
                  <p className="text-white/85">Serving 30+ Countries</p>
                </div>
                <div className="flex items-center gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    const className =
                      "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-brand-gray text-brand-blue transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white";

                    if (item.href) {
                      return (
                        <a
                          aria-label={`Visit B2B Sales Arrow on ${item.name}`}
                          className={className}
                          href={item.href}
                          key={item.name}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    }

                    return (
                      <span
                        aria-disabled="true"
                        aria-label={`${item.name} profile coming soon`}
                        className={cn(
                          className,
                          "cursor-not-allowed opacity-60 hover:bg-brand-gray hover:text-brand-blue"
                        )}
                        key={item.name}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
                  Navigation
                </span>
                <ul className="space-y-3">
                  {footerNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-sm font-medium text-white/90 transition-colors hover:text-white hover:underline"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
                  Stay Ahead
                </span>
                <p className="mb-4 text-sm text-white/90">
                  Subscribe to our enterprise growth newsletter.
                </p>
                <div className="pointer-events-auto relative">
                  <input
                    className="w-full rounded-lg border border-white/35 bg-white/10 px-4 py-3 text-sm text-white transition-colors placeholder:text-white/85 focus:border-white focus:outline-none"
                    placeholder="Work Email"
                    type="email"
                  />
                  <Button
                    className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2"
                    size="icon"
                    variant="primary"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Row 2: Services — 4 equal columns */}
            <div className="mb-12 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-5">
              {footerServiceGroups.map((group) => (
                <div key={group.name}>
                  <Link
                    className="mb-3 block text-sm font-semibold text-white transition-colors hover:text-white hover:underline"
                    href={group.href}
                  >
                    {group.name}
                  </Link>
                  <ul className="space-y-1.5 border-l border-white/30 pl-3">
                    {group.links.map((item) => (
                      <li key={item.name}>
                        <Link
                          className="text-xs leading-5 text-white/85 transition-colors hover:text-white hover:underline"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-8 md:flex-row">
              <p className="text-xs text-white/80">
                © {new Date().getFullYear()} B2B Sales Arrow. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-xs text-white/80">
                <Link className="transition-colors hover:text-white hover:underline" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link
                  className="transition-colors hover:text-white hover:underline"
                  href="/terms-and-conditions"
                >
                  Terms of Service
                </Link>
                <Link className="transition-colors hover:text-white hover:underline" href="/cookie-policy">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
