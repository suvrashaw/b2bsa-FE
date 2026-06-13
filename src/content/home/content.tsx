import type { ReactNode } from "react";

import { HOME_BLOG_POSTS } from "./blogs";
import DATA from "./data.json";

export interface BlogItem {
  category?: string;
  date?: string;
  excerpt?: string;
  href?: string;
  id: number | string;
  image: string;
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
  icon: string;
  id: string;
  image: string;
  metric?: string;
  metricLabel?: string;
  solution: string;
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
  layoutMode?: "auto" | "carousel" | "fit";
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
  title: string;
}

export const HOME_CINEMATIC_SEQUENCE_CONTENT: CinematicSequenceContent =
  DATA.cinematicSequenceContent;

export const HOME_CLIENT_LOGOS: ClientLogoItem[] = DATA.clientLogos;

export const HOME_STATS_CONTENT: StatsContent = DATA.statsContent;

export const HOME_SERVICES_CONTENT: HomeServicesContent = DATA.servicesContent;

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = DATA.caseStudiesContent;

export const HOME_EVENTS_CONTENT: EventsContent = DATA.eventsContent;

export const HOME_WHY_CHOOSE_US_CONTENT: StickyScrollContent = DATA.whyChooseUsContent;

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = DATA.testimonialsContent;

export const HOME_BLOGS_CONTENT: BlogsContent = {
  ...DATA.blogsContent,
  blogs: HOME_BLOG_POSTS,
};

export const HOME_FAQ_CONTENT: FAQContent = DATA.faqContent;

export const HOME_CONTACT_CONTENT: ContactContent = DATA.contactContent;

export const HOME_PAGE = {
  pageId: "home",
  pageName: "Home",
  pageType: "home",
  seo: {
    canonicalPath: "/",
    description:
      "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
    focusKeyphrase: "B2B global event solutions",
    title: "B2B Sales Arrow | Premium Growth Partner",
  },
} as const;
