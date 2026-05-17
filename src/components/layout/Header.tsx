"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { serviceNavigationGroups, topNavigation, tradeShowLinks } from "@/content/navigation";
import { cn } from "@/lib";

// Remove ThemeToggle import

const HEADER_ANIMATE = { y: 0 };
const HEADER_INITIAL = { y: -100 };
const HEADER_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_MENU_ANIMATE = { opacity: 1, y: 0 };
const MOBILE_MENU_INITIAL = { opacity: 0, y: -20 };
const MOBILE_MENU_EXIT = { opacity: 0, y: -20 };

export const Header = ({
  darkBackground = false,
  forceLightMode = false,
}: { darkBackground?: boolean; forceLightMode?: boolean; } = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solidHeader = forceLightMode || scrolled;
  const lightText = darkBackground && !solidHeader;
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={HEADER_ANIMATE}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
        solidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
      initial={HEADER_INITIAL}
      transition={HEADER_TRANSITION}
    >
      <div className="flex items-center gap-2">
        <Link
          className="relative block h-14 w-52 transition-all duration-300 hover:opacity-80"
          href="/"
        >
          <Image
            alt="B2B Sales Arrow"
            className="object-contain"
            fill
            priority
            sizes="160px"
            src="/logo.png"
          />
        </Link>
      </div>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        {topNavigation.map((link) => (
          <div className="group/nav-item relative flex items-center py-4" key={link.name}>
            <Link
              className={cn(
                "group relative text-sm font-medium transition-colors flex items-center gap-1.5",
                lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
              )}
              href={link.href}
            >
              {link.name}
              {(link.name === "Services" || link.name === "Trade Shows") && (
                <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover/nav-item:rotate-180" />
              )}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover/nav-item:w-full" />
            </Link>

            {link.name === "Services" && (
              <div className="pointer-events-none absolute top-[80%] left-1/2 z-[100] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover/nav-item:pointer-events-auto group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                <div className="w-[1200px] max-w-[calc(100vw-4rem)] rounded-lg border border-gray-100 bg-white/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  <div className="grid grid-cols-5 gap-4">
                    {serviceNavigationGroups.map((group) => (
                      <div
                        className="rounded-lg border border-brand-charcoal/5 bg-brand-gray/5 p-4"
                        key={group.name}
                      >
                        <Link
                          className="mb-3 block text-sm font-black  transition-colors hover:text-brand-blue"
                          href={group.href}
                        >
                          {group.name}
                        </Link>
                        <div className="space-y-2">
                          {group.links.map((sub) => (
                            <Link
                              className="/60 block text-xs leading-5 font-semibold transition-colors hover:text-brand-blue"
                              href={sub.href}
                              key={sub.name}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {link.name === "Trade Shows" && (
              <div className="pointer-events-none absolute top-[80%] left-1/2 z-[100] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover/nav-item:pointer-events-auto group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                <div className="w-64 rounded-lg border border-gray-100 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  <div className="flex flex-col gap-3">
                    {tradeShowLinks.map((item) => (
                      <Link
                        className="block text-sm font-semibold transition-colors hover:text-brand-blue"
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
          )}
        >
          <span className="flex items-center" suppressHydrationWarning>
            <Globe className="h-4 w-4" />
          </span>
          <span>EN</span>
          <span className="flex items-center" suppressHydrationWarning>
            <ChevronDown className="h-3 w-3" />
          </span>
        </button>

        <Link href="/contact">
          <Button size="sm" variant="primary">
            Let&apos;s Talk
          </Button>
        </Link>
        <div className="lg:hidden">
          <button
            className={cn(
              "rounded-full p-2 transition-colors hover:bg-brand-gray/5",
              lightText ? "text-white" : ""
            )}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            animate={MOBILE_MENU_ANIMATE}
            className="absolute top-full right-0 left-0 flex flex-col gap-6 border-b border-gray-100 bg-white p-8 shadow-2xl lg:hidden"
            exit={MOBILE_MENU_EXIT}
            initial={MOBILE_MENU_INITIAL}
          >
            {topNavigation.map((link) => (
              <div className="space-y-4" key={link.name}>
                <Link
                  className="block font-heading text-2xl  font-bold transition-colors hover:text-brand-blue"
                  href={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
                {link.name === "Services" && (
                  <div className="space-y-4 border-l-2 border-brand-blue/10 pl-4">
                    {serviceNavigationGroups.map((group) => (
                      <div className="space-y-2" key={group.name}>
                        <Link
                          className="block text-lg  font-bold transition-colors hover:text-brand-blue"
                          href={group.href}
                          onClick={closeMobileMenu}
                        >
                          {group.name}
                        </Link>
                        {group.links.map((sub) => (
                          <Link
                            className="block pl-4 text-base font-medium text-gray-500 transition-colors hover:text-brand-blue"
                            href={sub.href}
                            key={sub.name}
                            onClick={closeMobileMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="mt-4 w-full" variant="primary">
                Let&apos;s Talk
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
