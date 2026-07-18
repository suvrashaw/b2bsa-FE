import type { ReactNode } from "react";

import type { MarketingPageDefinition } from "@/content/page-definitions";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import CONTACT_FORM_DATA from "./contact-form.json";
import EVENTS_DATA from "./events.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import SERVICES_DATA from "./services.json";
import STATS_DATA from "./stats.json";
import TESTIMONIALS_DATA from "./testimonials.json";
import WHY_CHOOSE_US_DATA from "./why-choose-us.json";

export interface BlogItem {
  category?: string;
  date?: string;
  excerpt?: string;
  href?: string;
  id: number | string;
  image: string;
  serviceIds?: string[];
  tags?: string[];
  title: string;
}

export interface BlogsContent {
  blogs: BlogItem[];
  ctaLabel: string;
  eyebrow: string;
  heading: ReactNode;
}

export interface CaseStudiesContent {
  ctaLabel: string;
  eyebrow?: string;
  heading: ReactNode;
  items: CaseStudyItem[];
  viewAllLabel?: string;
}

export interface CaseStudyItem {
  challenge?: string;
  client?: string;
  date?: string;
  icon: string;
  id: string;
  image: string;
  metric?: string;
  metricLabel?: string;
  serviceIds?: string[];
  solution: string;
  tags?: string[];
  title: string;
}

export interface ContactContent {
  description: string;
  eyebrow?: string;
  form: {
    companyLabel?: string;
    companyPlaceholder?: string;
    consentLabel?: string;
    countryLabel?: string;
    countryPlaceholder?: string;
    ctaLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    eventLabel?: string;
    eventPlaceholder?: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    jobTitleLabel?: string;
    jobTitlePlaceholder?: string;
    lastNameLabel?: string;
    lastNamePlaceholder?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    phoneLabel?: string;
    phonePlaceholder?: string;
    serviceLabel?: string;
    serviceOptions?: ContactServiceOption[];
    servicePlaceholder?: string;
    timelineLabel?: string;
    timelinePlaceholder?: string;
    trustNote?: string;
  };
  heading: ReactNode;
  illustration: {
    alt: string;
    src: string;
  };
}

export interface EventsContent {
  badgeLabel?: string;
  ctaLabel: string;
  description?: string;
  events: UpcomingEventItem[];
  eyebrow?: string;
  heading: ReactNode;
  viewAllLabel?: string;
}

export interface FAQContent {
  description?: string;
  eyebrow?: string;
  faqs: FAQItem[];
  heading: ReactNode;
}

export interface HomeServiceItem {
  description?: string;
  href?: string;
  icon: string;
  id: string;
  image?: string;
  title: string;
}

export interface HomeServicesContent {
  commonCtaLabel?: string;
  ctaLabel: string;
  eyebrow?: string;
  heading: ReactNode;
  serviceLabel?: string;
  services: HomeServiceItem[];
}

export interface HomeStatItem {
  bg: string;
  icon: string;
  label: string;
  value: string;
}

export interface StatsContent {
  attribution?: string;
  heading: ReactNode;
  mission?: string;
  quote: string;
  stats: HomeStatItem[];
}

export interface StickyScrollContent {
  eyebrow?: string;
  heading: ReactNode;
  reasons: StickyScrollReason[];
}

export interface TestimonialsContent {
  autoplayInterval: number;
  eyebrow?: string;
  heading: ReactNode;
  initialIndex: number;
  testimonials: TestimonialItem[];
}

interface ContactServiceOption {
  label: string;
  value: string;
}

interface FAQItem {
  answer: ReactNode | string;
  id: number | string;
  question: string;
}

interface StickyScrollReason {
  description: string;
  id: string;
  image: string;
  title: string;
}

interface TestimonialItem {
  author: string;
  id: number | string;
  quote: string;
  rating: number;
  serviceTag?: string;
}

interface UpcomingEventItem {
  date?: string;
  id: string;
  image?: string;
  location?: string;
  serviceIds?: string[];
  tags?: string[];
  title: string;
}

export const HOME_STATS: StatsContent = STATS_DATA;

export const HOME_SERVICES: HomeServicesContent = SERVICES_DATA;

export const HOME_CASE_STUDIES: CaseStudiesContent = {
  ctaLabel: "Full Study",
  heading: "Proven Global Event Solutions: Enterprise Success Stories",
  items: GLOBAL_CASE_STUDIES as unknown as CaseStudyItem[],
  viewAllLabel: "View All Case Studies",
};

export const HOME_SERVICES_CONTACT_MODAL = {};

export const HOME_EVENTS: EventsContent = {
  ...EVENTS_DATA,
  events: [],
};

export const HOME_WHY_CHOOSE_US: StickyScrollContent = WHY_CHOOSE_US_DATA;

export const HOME_TESTIMONIALS: TestimonialsContent = TESTIMONIALS_DATA;

export const HOME_FAQ: FAQContent = FAQ_DATA;

export const HOME_CONTACT_FORM: ContactContent = CONTACT_FORM_DATA;

export const HOME_PAGE = PAGE_DATA as MarketingPageDefinition;

export { default as HOME_HERO } from "./hero.json";
