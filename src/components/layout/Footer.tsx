"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.547l-5.13-6.707L5.205 22H1.947l7.605-8.694L1.53 2h6.713l4.638 6.132L18.244 2Zm-1.142 17.91h1.804L7.27 3.98H5.335L17.102 19.91Z" />
  </svg>
);

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { footerNavigation, serviceNavigationGroups } from "@/content/navigation";
import { cn, toTitleCase } from "@/lib";

/* eslint-disable unicorn/prefer-await -- next/dynamic with named exports requires .then() */
const FooterCommandMap = dynamic(
  () => import("./footer/FooterCommandMap").then((mod) => mod.FooterCommandMap),
  { ssr: false }
);
/* eslint-enable unicorn/prefer-await */

import { FooterServiceGroup } from "./footer/FooterServiceGroup";

const socialLinks = [
  {
    colorClass: "text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]",
    href: "https://www.facebook.com/b2bsalesarrow",
    icon: FacebookIcon,
    name: "Facebook",
  },
  {
    colorClass: "text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]",
    href: "https://www.linkedin.com/company/b2b-sales-arrow-llc/",
    icon: LinkedinIcon,
    name: "LinkedIn",
  },
  {
    colorClass: "text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]",
    href: "https://www.instagram.com/b2b_sales_arrow/",
    icon: InstagramIcon,
    name: "Instagram",
  },
  {
    colorClass: "text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]",
    href: "https://www.youtube.com/@b2bsalesarrow167",
    icon: YoutubeIcon,
    name: "YouTube",
  },
  {
    colorClass: "text-black",
    href: "https://x.com/B2B_SalesArrow",
    icon: XIcon,
    name: "X",
  },
];

const footerAddresses = [
  {
    address: ["10 A 5 Parijat Colony", "Mahaveer Nagar 3 Kota", "Rajasthan 324005"],
    name: "BTWOB Sales Arrow",
    region: "India",
  },
  {
    address: ["16192 Coastal Highway", "Lewes DE 19958"],
    name: "BTWOB SALES ARROW INC",
    region: "United States",
  },
  {
    address: ["71-75 Shelton Street", "Covent Garden", "London, WC2H 9JQ"],
    name: "Btwob Sales Arrow Limited",
    region: "United Kingdom",
  },
  {
    address: ["Karlsplatz 3,", "Munich, 80335"],
    name: "BTWOB Sales Arrow EU UG",
    region: "Germany",
  },
];

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setFooterInView(true);
        observer.disconnect();
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
        <div className="mb-6 grid gap-7 border-b border-white/10 pb-6 md:grid-cols-2 lg:flex lg:justify-between lg:gap-4 xl:gap-8">
          <div className="min-w-0 space-y-6">
            <FooterServiceGroup group={serviceNavigationGroups[0]} />
            <FooterServiceGroup group={serviceNavigationGroups[5]} />
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
            <FooterServiceGroup group={serviceNavigationGroups[6]} />
          </div>
        </div>

        {/* Row 2: Brand / Navigation / Top Cities / Contact */}
        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.65fr_0.9fr] lg:gap-10">
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
                src="/media/logo/logo-white.svg"
              />
            </Link>
            <SectionHeader as="h2" className="mb-3 text-lg font-bold text-white!" preserveClassName>
              Turn Your Next Trade Show into a Revenue Engine
            </SectionHeader>
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
              Navigation
            </span>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-sm text-white/90 transition-colors hover:text-white hover:underline"
                    href={item.href}
                  >
                    {toTitleCase(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
              Top Cities
            </span>
            <ul className="space-y-2">
              {[
                "New York",
                "London",
                "Dubai",
                "Singapore",
                "Las Vegas",
                "Amsterdam",
                "Frankfurt",
              ].map((city) => (
                <li className="text-sm text-white/90" key={city}>
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
              Contact
            </span>
            <div className="mb-5 space-y-1.5 text-sm text-white/90">
              <p>
                <a
                  className="group inline-flex min-h-[48px] items-center gap-1 transition-colors hover:text-white hover:underline"
                  href="mailto:info@b2bsalesarrow.com"
                >
                  info@b2bsalesarrow.com
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm text-white/90">
              Subscribe to our enterprise growth newsletter.
            </p>
            <div className="pointer-events-auto mt-3 flex min-w-0 items-center rounded-[4px] border border-white/35 bg-white/10 p-1 text-white transition-colors focus-within:border-white">
              <input
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white transition-colors placeholder:text-white/85 focus:outline-none"
                placeholder="Work Email"
                type="email"
              />
              <Button
                aria-label="Subscribe"
                className="h-10 border-white/30 text-white hover:border-white hover:bg-white/10"
                size="sm"
                variant="primary"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {footerAddresses.map((item) => (
            <address className="text-sm text-white/85 not-italic" key={item.region}>
              <span className="mb-2 block text-xs font-semibold tracking-widest text-white/60 uppercase">
                {item.region}
              </span>
              <span className="mb-2 block font-semibold text-white">{item.name}</span>
              <span className="block leading-relaxed">
                {item.address.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </span>
            </address>
          ))}
        </div>

        <div className="pointer-events-auto flex flex-col items-center justify-between gap-6 border-t border-white/25 pt-6 md:flex-row md:gap-4">
          <div className="text-xs text-white/80 md:flex-1">
            <p>© {new Date().getFullYear()} B2B Sales Arrow. All Rights Reserved.</p>
          </div>

          <div className="flex justify-center md:flex-1">
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
                      <Icon className="size-4" />
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
                    <Icon className="size-4" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/80 md:flex-1 md:justify-end">
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
