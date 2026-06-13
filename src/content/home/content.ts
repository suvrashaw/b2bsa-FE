import type { ReactNode } from "react";

import type { MarketingPageDefinition } from "@/content/page-definitions";

import { HOME_BLOG_POSTS } from "@/content/blogs/data";

import SHARED_CASE_STUDIES_DATA from "@/content/shared/case-studies.json";
import SHARED_EVENTS_DATA from "@/content/shared/events.json";

import BLOGS_DATA from "./blogs.json";
import CINEMATICSEQUENCECONTENT_DATA from "./cinematic-sequence.json";
import CLIENTLOGOS_DATA from "./client-logos.json";
import CONTACTCONTENT_DATA from "./contact.json";
import EVENTS_DATA from "./events.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import SERVICES_DATA from "./services.json";
import STATSCONTENT_DATA from "./stats.json";
import TESTIMONIALSCONTENT_DATA from "./testimonials.json";
import WHYCHOOSEUSCONTENT_DATA from "./why-choose-us.json";

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

export interface CinematicSequenceContent {
  beats: CinematicStoryBeat[];
  frameCount: number;
  frameUrls?: string[];
  frameUrlTemplate?: string;
  heroOverlay?: {
    description: string;
    eyebrow?: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    title: string;
  };
  loadingText: string;
}

export interface ClientLogoItem {
  alt: string;
  id: string;
  src: string;
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
  layoutMode?: string;
  scrollAmount: number;
}

export interface HomeServiceItem {
  color: string;
  description: string;
  icon: string;
  id: string;
  image: string;
  title: string;
}

export interface HomeServicesContent {
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

interface CinematicStoryBeat {
  className: string;
  cta?: {
    className: string;
    label: string;
  };
  description?: {
    className: string;
    text: string;
  };
  eyebrow?: {
    className: string;
    text: string;
  };
  id: string;
  opacityInput: number[];
  opacityOutput: number[];
  title: ReactNode;
  titleClassName: string;
  yInput: number[];
  yOutput: number[];
}

interface ContactServiceOption {
  label: string;
  value: string;
}

interface FAQItem {
  answer: ReactNode | string;
  icon?: ReactNode;
  id: number | string;
  image?: string;
  question: string;
}

interface StickyScrollReason {
  description: string;
  id: string;
  image: string;
  title: string;
}

interface TestimonialItem {
  company: string;
  designation: string;
  id: number | string;
  image: string;
  name: string;
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

export const HOME_CINEMATIC_SEQUENCE_CONTENT: CinematicSequenceContent =
  CINEMATICSEQUENCECONTENT_DATA;

export const HOME_CLIENT_LOGOS: ClientLogoItem[] = CLIENTLOGOS_DATA;

export const HOME_STATS_CONTENT: StatsContent = STATSCONTENT_DATA;

export const HOME_SERVICES_CONTENT: HomeServicesContent = SERVICES_DATA;

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = {
  ctaLabel: "Full Study",
  heading: "Proven Global Event Solutions: Enterprise Success Stories",
  items: SHARED_CASE_STUDIES_DATA as CaseStudyItem[],
};

export const HOME_EVENTS_CONTENT: EventsContent = {
  ...EVENTS_DATA,
  events: SHARED_EVENTS_DATA.slice(0, 7) as UpcomingEventItem[],
};

export const HOME_WHY_CHOOSE_US_CONTENT: StickyScrollContent = WHYCHOOSEUSCONTENT_DATA;

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = TESTIMONIALSCONTENT_DATA;

export const HOME_BLOGS_CONTENT: BlogsContent = {
  ...BLOGS_DATA,
  blogs: HOME_BLOG_POSTS,
};

export const HOME_FAQ_CONTENT: FAQContent = FAQ_DATA;

export const HOME_CONTACT_CONTENT: ContactContent = CONTACTCONTENT_DATA;

export const HOME_PAGE = PAGE_DATA as MarketingPageDefinition;
