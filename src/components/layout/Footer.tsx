"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import {
  footerNavigation,
  type NavLink,
  type ServiceNavGroup,
  serviceNavigationGroups,
  type ServiceSubGroup,
} from "@/content/navigation";
import { cn } from "@/lib";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/b2b-sales-arrow/",
    icon: FaLinkedinIn,
    name: "LinkedIn",
    colorClass: "text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]",
  },
  {
    icon: FaXTwitter,
    name: "X",
    colorClass: "text-[#000000] hover:border-[#000000] hover:bg-[#000000]",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    colorClass: "text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]",
  },
];

const FOOTER_SCROLL_OFFSET: ["start start", "end end"] = ["start start", "end end"];
const EMPTY_NAV_LINKS: NavLink[] = [];

const FooterCommandMap = dynamic(
  () => import("@/components/layout/FooterCommandMap").then((module) => module.FooterCommandMap),
  { ssr: false }
);

const FooterSitemapLinks = ({ links }: { links: NavLink[] }) => (
  <ul className="space-y-1.5 border-l border-white/30 pl-3">
    {links.map((item) => (
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
);

const FooterServiceSubGroup = ({ group }: { group: ServiceSubGroup }) => (
  <div>
    <span className="mb-2 block text-xs font-semibold tracking-wider text-white/60 uppercase">
      {group.name}
    </span>
    <FooterSitemapLinks links={group.links} />
  </div>
);

const FooterServiceGroup = ({
  group,
  noWrapTitle = false,
}: {
  group: ServiceNavGroup;
  noWrapTitle?: boolean;
}) => (
  <div>
    <Link
      className={cn(
        "mb-3 block text-sm font-semibold text-white transition-colors hover:text-white hover:underline",
        noWrapTitle ? "whitespace-nowrap" : ""
      )}
      href={group.href}
    >
      {group.name}
    </Link>
    {group.groups ? (
      <div className="grid gap-5 sm:grid-cols-2">
        {group.groups.map((subGroup) => (
          <FooterServiceSubGroup group={subGroup} key={subGroup.name} />
        ))}
      </div>
    ) : (
      <FooterSitemapLinks links={group.links ?? EMPTY_NAV_LINKS} />
    )}
  </div>
);

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    offset: FOOTER_SCROLL_OFFSET,
    target: containerRef,
  });

  const mapOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.78, 0.94, 0.82]);
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.14, 1.02]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["1%", "-13%"]);

  // Footer Content Animation: Slide up from the bottom as you scroll
  const contentY = useTransform(scrollYProgress, [0, 0.6, 1], ["8%", "-10%", "-10%"]);
  // Optional opacity fade for the content wrapper background so it feels like a soft overlay
  const contentBgOpacity = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  const mapStyle = useMemo(
    () => ({ opacity: mapOpacity, scale: mapScale, y: mapY }),
    [mapOpacity, mapScale, mapY]
  );
  const contentStyle = useMemo(() => ({ y: contentY }), [contentY]);
  const contentBgStyle = useMemo(() => ({ opacity: contentBgOpacity }), [contentBgOpacity]);

  return (
    <footer className="relative z-0 h-[180vh] bg-brand-blue" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
        {/* Animated flat world map (Background layer) */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[7vh] z-0 flex origin-center justify-center"
          style={mapStyle}
        >
          <div className="h-[min(95vh,1080px)] w-[min(195vw,2100px)] max-w-none">
            {footerInView && <FooterCommandMap />}
          </div>
        </motion.div>

        {/* Main Footer Links Area (Slides up from bottom) */}
        <motion.div className="absolute right-0 bottom-0 left-0 z-10 w-full" style={contentStyle}>
          <motion.div
            className="absolute inset-0 -z-10 bg-linear-to-t from-brand-blue via-brand-blue/90 to-brand-blue/25 backdrop-blur-[2px]"
            style={contentBgStyle}
          />
          <div className="relative container mx-auto px-8 pt-16 pb-6">
            {/* Row 1: Brand + Address + Navigation + Stay Ahead */}
            <div className="mb-6 grid gap-8 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.7fr_1.25fr] lg:gap-10">
              <div>
                <Link
                  className="relative mb-6 block h-12 w-48 transition-opacity hover:opacity-90"
                  href="/"
                >
                  <Image
                    alt="B2B Sales Arrow"
                    className="rounded-md bg-transparent object-contain object-left"
                    fill
                    sizes="192px"
                    src="/logos/logo_white.svg"
                  />
                </Link>
                <Heading as="h2" className="mb-3 text-lg font-bold text-white!" preserveClassName>
                  Turn Your Next Trade Show into a Revenue Engine
                </Heading>
                <p className="max-w-sm text-sm leading-relaxed text-white/90">
                  We deliver premier global event solutions that turn your corporate presence into a
                  measurable revenue engine. Let&apos;s build your pipeline together.
                </p>
              </div>

              <div>
                <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
                  Contact
                </span>
                <div className="mb-5 space-y-1.5 text-sm text-white/90">
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
                <div className="flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    const baseClass =
                      "flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-brand-gray transition-all duration-300";

                    if (item.href) {
                      return (
                        <a
                          aria-label={`Visit B2B Sales Arrow on ${item.name}`}
                          className={cn(baseClass, "hover:text-white", item.colorClass)}
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
                          baseClass,
                          item.colorClass.split(' ')[0], // only apply text color, not hover effects
                          "cursor-not-allowed opacity-60 hover:bg-brand-gray"
                        )}
                        key={item.name}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
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

              <div>
                <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
                  Stay Ahead
                </span>
                <p className="mb-4 text-sm text-white/90">
                  Subscribe to our enterprise growth newsletter.
                </p>
                <div className="pointer-events-auto flex min-w-0 items-center rounded-[4px] border border-white/35 bg-white/10 p-1 text-white transition-colors focus-within:border-white">
                  <input
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white transition-colors placeholder:text-white/85 focus:outline-none"
                    placeholder="Work Email"
                    type="email"
                  />
                  <Button
                    aria-label="Subscribe"
                    className="h-10 border-white/30 text-white hover:border-white hover:bg-white/10"
                    size="sm"
                    variant="secondary"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Row 2: Services sitemap matches the header megamenu grouping */}
            <div className="mb-6 grid gap-7 border-t border-white/10 pt-7 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <FooterServiceGroup group={serviceNavigationGroups[0]} />
              </div>
              <FooterServiceGroup group={serviceNavigationGroups[1]} />
              <FooterServiceGroup group={serviceNavigationGroups[3]} />
              <div className="space-y-6">
                <FooterServiceGroup group={serviceNavigationGroups[2]} noWrapTitle />
                <FooterServiceGroup group={serviceNavigationGroups[4]} />
                <FooterServiceGroup group={serviceNavigationGroups[5]} />
              </div>
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
