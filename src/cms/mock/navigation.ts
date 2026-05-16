import type { PageId } from "./types";

import { resolvePageHref } from "./resolve";

export interface NavLink {
  href: string;
  name: string;
  pageId?: PageId;
}

export interface ServiceNavGroup {
  href: string;
  links: NavLink[];
  name: string;
  pageId: PageId;
}

const navLink = (name: string, pageId: PageId): NavLink => ({
  href: resolvePageHref(pageId),
  name,
  pageId,
});

export const topNavigation: NavLink[] = [
  navLink("Home", "home"),
  navLink("About Us", "about"),
  navLink("Services", "service.global-event-solutions"),
  navLink("Trade Shows", "events"),
  navLink("Blog", "blog"),
  navLink("Case Studies", "case-studies"),
  navLink("Contact", "contact"),
];

export const tradeShowLinks: NavLink[] = [
  navLink("Upcoming Trade Shows 2026", "events"),
  navLink("Trade Shows in Las Vegas", "events"),
  navLink("Trade Shows in Germany", "events"),
  navLink("Trade Shows in Dubai", "events"),
  navLink("Trade Shows in US", "events"),
];

const serviceGroup = (name: string, pageId: PageId, links: NavLink[]): ServiceNavGroup => ({
  href: resolvePageHref(pageId),
  links,
  name,
  pageId,
});

export const serviceNavigationGroups: ServiceNavGroup[] = [
  serviceGroup("Global Event Solutions", "service.global-event-solutions", [
    navLink("Trade Show Booth Design", "service.trade-show-booth-design"),
    navLink("Event Lead Generation", "service.event-lead-generation"),
    navLink("Industry Events", "service.industry-events"),
    navLink("Custom Events", "service.custom-events"),
    navLink("Event Booth Rental", "service.event-booth-rental"),
    navLink("Trade Show Booth Builder", "service.trade-show-booth-builder"),
    navLink("Modular and Portable Booths", "service.modular-portable-booths"),
  ]),
  serviceGroup("Media Production", "service.media-production", [
    navLink("Event Video Production", "service.event-video-production"),
    navLink("Corporate Video Production", "service.corporate-video-production"),
    navLink("Live Streaming Services", "service.live-streaming-services"),
    navLink("Video Editing Services", "service.video-editing-services"),
  ]),
  serviceGroup("Performance Marketing", "service.performance-marketing", [
    navLink("SEO Services", "service.seo-services"),
    navLink("Paid Advertising", "service.paid-advertising"),
    navLink("LinkedIn Ads for B2B", "service.linkedin-ads"),
  ]),
  serviceGroup("Sales Qualified Lead Generation", "service.sales-qualified-lead-generation", []),
  serviceGroup("Market Research", "service.market-research", [
    navLink("Human-Powered Intelligence", "service.market-intelligence"),
    navLink("Data Validation", "service.data-validation"),
    navLink("Data Augmentation", "service.data-augmentation"),
  ]),
];

export const footerServiceGroups: ServiceNavGroup[] = serviceNavigationGroups.map((group) => ({
  ...group,
  links: [...group.links],
}));

export const footerNavigation: NavLink[] = [
  navLink("Blog", "blog"),
  navLink("Case Studies", "case-studies"),
  navLink("About Us", "about"),
  navLink("Contact", "contact"),
];
