export interface NavLink {
  href: string;
  name: string;
}

export interface ServiceNavGroup {
  groups?: ServiceSubGroup[];
  href: string;
  links?: NavLink[];
  name: string;
}

export interface ServiceSubGroup {
  links: NavLink[];
  name: string;
}

export const topNavigation: NavLink[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About Us" },
  { href: "/services/global-event-solutions", name: "Services" },
  { href: "/trade-show-calendar", name: "Tradeshow Calendar" },
  { href: "/blogs", name: "Blogs" },
  { href: "/case-studies", name: "Case Studies" },
  { href: "/contact", name: "Contact" },
];

export const serviceNavigationGroups: ServiceNavGroup[] = [
  {
    groups: [
      {
        links: [
          {
            href: "/services/global-event-solutions/trade-show-booth-builder",
            name: "Trade Show Booth Builder",
          },
          {
            href: "/services/global-event-solutions/trade-show-booth-design",
            name: "Trade Show Booth Design",
          },
          {
            href: "/services/global-event-solutions/booth-hostess-services",
            name: "Booth Hostess Services",
          },
          {
            href: "/services/global-event-solutions/booth-logistics-services",
            name: "Booth Logistics Services",
          },
          {
            href: "/services/global-event-solutions/modular-booth-solutions",
            name: "Modular Booth Solutions",
          },
          {
            href: "/services/global-event-solutions/event-booth-rental",
            name: "Event Booth Rental",
          },
        ],
        name: "Booth Services",
      },
      {
        links: [
          {
            href: "/services/global-event-solutions/event-experience-creation",
            name: "Event Experience Creation",
          },
          {
            href: "/services/global-event-solutions/event-branding-services",
            name: "Event Branding Services",
          },
          {
            href: "/services/global-event-solutions/corporate-event-solutions",
            name: "Corporate Event Solutions",
          },
          {
            href: "/services/global-event-solutions/corporate-networking-events",
            name: "Corporate Networking Events",
          },
          {
            href: "/services/global-event-solutions/event-experience-video-production",
            name: "Event Experience Video Production",
          },
        ],
        name: "Event Services",
      },
    ],
    href: "/services/global-event-solutions",
    name: "Global Event Solutions",
  },
  {
    href: "/services/media-production",
    links: [
      { href: "/services/media-production/event-video-production", name: "Event Video Production" },
      {
        href: "/services/media-production/corporate-video-production",
        name: "Corporate Video Production",
      },
      {
        href: "/services/media-production/live-streaming-services",
        name: "Event Live Streaming Services",
      },
      {
        href: "/services/media-production/event-experience-video-production",
        name: "Event Experience Video Production",
      },
      {
        href: "/services/media-production/event-physical-video-shoot",
        name: "Event Physical Video Shoot",
      },
      {
        href: "/services/media-production/virtual-video-production",
        name: "Virtual Video Production",
      },
    ],
    name: "Media Production",
  },
  {
    href: "/services/sales-qualified-lead-generation",
    links: [],
    name: "Sales Qualified Lead Generation",
  },
  {
    href: "/services/performance-marketing",
    links: [
      { href: "/services/performance-marketing/seo-services", name: "SEO Services" },
      { href: "/services/performance-marketing/ppc-services", name: "PPC Services" },
      {
        href: "/services/performance-marketing/social-media-marketing-services",
        name: "Social Media Marketing Services",
      },
    ],
    name: "Performance Marketing",
  },
  {
    href: "/services/market-research",
    links: [
      {
        href: "/services/market-research/data-augmentation-services",
        name: "Data Augmentation Services",
      },
      {
        href: "/services/market-research/data-validation-services",
        name: "Data Validation Services",
      },
    ],
    name: "Market Research",
  },
  {
    href: "/services/human-powered-market-intelligence",
    links: [
      {
        href: "/services/human-powered-market-intelligence",
        name: "Human Powered Market Intelligence",
      },
    ],
    name: "HPMI",
  },
];

export const footerNavigation: NavLink[] = [
  { href: "/blogs", name: "Blogs" },
  { href: "/case-studies", name: "Case Studies" },
  { href: "/about", name: "About Us" },
  { href: "/contact", name: "Contact" },
];
