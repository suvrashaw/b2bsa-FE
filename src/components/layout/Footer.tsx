"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { footerNavigation, serviceNavigationGroups } from "@/content/navigation";
import { cn } from "@/lib";

import dynamic from "next/dynamic";

const FooterCommandMap = dynamic(
  () => import("./footer/FooterCommandMap").then((mod) => mod.FooterCommandMap),
  { ssr: false }
);

import { FooterServiceGroup } from "./footer/FooterServiceGroup";

const socialLinks = [
  {
    colorClass: "text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]",
    href: "https://www.facebook.com/b2bsalesarrow",
    icon: FaFacebookF,
    name: "Facebook",
  },
  {
    colorClass: "text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]",
    href: "https://www.linkedin.com/company/b2b-sales-arrow-llc/",
    icon: FaLinkedinIn,
    name: "LinkedIn",
  },
  {
    colorClass: "text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]",
    href: "https://www.instagram.com/b2b_sales_arrow/",
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    colorClass: "text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]",
    href: "https://www.youtube.com/@b2bsalesarrow167",
    icon: FaYoutube,
    name: "YouTube",
  },
];

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // eslint-disable-next-line compat/compat
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

  return (
    <footer className="relative overflow-hidden bg-brand-blue" ref={containerRef}>
      {/* Map as static background */}
      <div className="pointer-events-none absolute inset-0 z-0 translate-y-[10%] scale-[1.65] opacity-75">
        {footerInView && <FooterCommandMap />}
      </div>
      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-blue/95 via-brand-blue/75 to-brand-blue/40" />

      <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 md:px-8">
        {/* Row 1: Services sitemap */}
        <div className="mb-6 flex flex-col gap-7 border-b border-white/10 pb-6 lg:flex-row lg:justify-between lg:gap-4 xl:gap-8">
          <div className="min-w-0">
            <FooterServiceGroup group={serviceNavigationGroups[0]} />
          </div>
          <div className="min-w-0">
            <FooterServiceGroup group={serviceNavigationGroups[1]} />
          </div>
          <div className="min-w-0">
            <FooterServiceGroup group={serviceNavigationGroups[2]} noWrapTitle />
          </div>
          <div className="min-w-0 space-y-6">
            <FooterServiceGroup group={serviceNavigationGroups[3]} />
            <FooterServiceGroup group={serviceNavigationGroups[4]} />
            <FooterServiceGroup group={serviceNavigationGroups[5]} />
          </div>
        </div>

        {/* Row 2: Brand / Contact / Navigation / Newsletter */}
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
                src="/images/logo_white.svg"
              />
            </Link>
            <Heading as="h2" className="mb-3 text-lg font-bold text-white!" preserveClassName>
              Turn Your Next Trade Show into a Revenue Engine
            </Heading>
            <p className="max-w-sm text-sm leading-relaxed text-white/90">
              We deliver premier global event solutions that turn your corporate presence into a
              measurable revenue engine. Let&apos;s build your pipeline together.
            </p>
            <p className="mt-3 max-w-sm text-sm font-medium text-white/80">
              Mission: To transform your global event presence into measurable, high-impact
              commercial outcomes.
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
                  <button
                    aria-label={`${item.name} profile coming soon`}
                    className={cn(
                      baseClass,
                      item.colorClass.split(" ", 1)[0],
                      "cursor-not-allowed opacity-60 hover:bg-brand-gray"
                    )}
                    disabled
                    key={item.name}
                    type="button"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
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

        <div className="pointer-events-auto flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-6 md:flex-row">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} B2B Sales Arrow. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/80">
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/terms-and-conditions"
            >
              Terms of Service
            </Link>
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/cookie-policy"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
