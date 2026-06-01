export interface NavLink {
  href: string;
  name: string;
}

export interface ServiceNavGroup {
  href: string;
  links: NavLink[];
  name: string;
}

export const topNavigation: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About Us" },
  { href: "/services/global-event-solutions", name: "Services" },
  { href: "/trade-show-calendar", name: "Trade Show Calendar" },
  { href: "/blogs", name: "Blogs" },
  { href: "/case-studies", name: "Case Studies" },
  { href: "/contact", name: "Contact" },
];

export const serviceNavigationGroups: ServiceNavGroup[] = [
  {
    href: "/services/global-event-solutions",
    links: [
      { href: "/services/global-event-solutions/trade-show-booth-design", name: "Trade Show Booth Design" },
      { href: "/services/global-event-solutions/event-lead-generation", name: "Event Lead Generation" },
      { href: "/services/global-event-solutions/industry-events", name: "Industry Events" },
      { href: "/services/global-event-solutions/custom-events", name: "Custom Events" },
      { href: "/services/global-event-solutions/event-booth-rental", name: "Event Booth Rental" },
      { href: "/services/global-event-solutions/trade-show-booth-builder", name: "Trade Show Booth Builder" },
      { href: "/services/global-event-solutions/modular-portable-booths", name: "Modular and Portable Booths" },
    ],
    name: "Global Event Solutions",
  },
  {
    href: "/services/media-production",
    links: [
      { href: "/services/media-production/event-video-production", name: "Event Video Production" },
      { href: "/services/media-production/corporate-video-production", name: "Corporate Video Production" },
      { href: "/services/media-production/live-streaming-services", name: "Live Streaming Services" },
      { href: "/services/media-production/video-editing-services", name: "Video Editing Services" },
    ],
    name: "Media Production",
  },
  {
    href: "/services/performance-marketing",
    links: [
      { href: "/services/seo-services", name: "SEO Services" },
      { href: "/services/paid-advertising", name: "Paid Advertising" },
      { href: "/services/linkedin-ads", name: "LinkedIn Ads for B2B" },
    ],
    name: "Performance Marketing",
  },
  {
    href: "/services/sales-qualified-lead-generation",
    links: [],
    name: "Sales Qualified Lead Generation",
  },
  {
    href: "/services/market-research",
    links: [
      { href: "/services/data-augmentation", name: "Data Augmentation" },
    ],
    name: "Market Research",
  },
];

export const footerServiceGroups: ServiceNavGroup[] = serviceNavigationGroups.map((group) => ({
  ...group,
  links: [...group.links],
}));

export const footerNavigation: NavLink[] = [
  { href: "/blogs", name: "Blogs" },
  { href: "/case-studies", name: "Case Studies" },
  { href: "/about", name: "About Us" },
  { href: "/contact", name: "Contact" },
];
