import type { ReactNode } from "react";

import { HOME_BLOG_POSTS } from "./blogs";

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
  headingHighlight?: string;
}

export interface CaseStudiesContent {
  ctaLabel: string;
  eyebrow?: string;
  heading: ReactNode;
  headingHighlight?: string;
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

export interface CinematicStoryBeat {
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
  headingHighlight?: string;
  illustration: {
    alt: string;
    src: string;
  };
}

export interface ContactServiceOption {
  label: string;
  value: string;
}

export interface EventsContent {
  badgeLabel?: string;
  ctaLabel: string;
  description?: string;
  events: UpcomingEventItem[];
  eyebrow?: string;
  heading: ReactNode;
  headingHighlight?: string;
  viewAllLabel?: string;
}

export interface FAQContent {
  description?: string;
  eyebrow?: string;
  faqs: FAQItem[];
  heading: ReactNode;
  headingHighlight?: string;
  layoutMode?: "auto" | "carousel" | "fit";
  scrollAmount: number;
}

export interface FAQItem {
  answer: ReactNode | string;
  icon?: ReactNode;
  id: number | string;
  image?: string;
  question: string;
}

export interface HomeHeroContent {
  description: string;
  eyebrow: string;
  image: {
    alt: string;
    loaderAlt: string;
    src: string;
  };
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  stat: {
    icon: string;
    label: string;
    value: string;
  };
  timing: {
    doneDelay: number;
    expandDelay: number;
  };
  title: ReactNode;
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
  headingHighlight?: string;
  serviceLabel?: string;
  services: HomeServiceItem[];
}

export interface StickyScrollContent {
  eyebrow?: string;
  heading: ReactNode;
  headingHighlight?: string;
  reasons: StickyScrollReason[];
}

export interface StickyScrollReason {
  description: string;
  id: string;
  image: string;
  title: string;
}

export interface TestimonialItem {
  company: string;
  designation: string;
  id: number | string;
  image: string;
  name: string;
  quote: string;
  rating: number;
  serviceTag?: string;
}

export interface TestimonialsContent {
  autoplayInterval: number;
  eyebrow?: string;
  heading: ReactNode;
  headingHighlight?: string;
  initialIndex: number;
  testimonials: TestimonialItem[];
}

export interface UpcomingEventItem {
  date?: string;
  id: string;
  image?: string;
  location?: string;
  title: string;
}

export interface WhoWeAreContent {
  attribution?: string;
  heading: ReactNode;
  headingHighlight?: string;
  mission?: string;
  quote: string;
  stats: WhoWeAreStat[];
}

export interface WhoWeAreStat {
  bg: string;
  icon: string;
  label: string;
  value: string;
}

export const HOME_HERO_CONTENT: HomeHeroContent = {
  description:
    "Trusted across 30+ countries, we deliver custom trade show booth design, active on-ground prospecting, and end-to-end event execution that turns exhibitions into a qualified B2B sales pipeline.",
  eyebrow: "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  image: {
    alt: "Global B2B enterprise growth strategy",
    loaderAlt: "Loader",
    src: "/images/home/hero/home_hero_bg.avif",
  },
  primaryCtaLabel: "Get a Custom Proposal",
  secondaryCtaLabel: "See Our Work",
  stat: {
    icon: "Globe",
    label: "Countries Served",
    value: "30+",
  },
  timing: {
    doneDelay: 2800,
    expandDelay: 2000,
  },
  title: <>B2B Global Event Solutions & Trade Show Booth Design s</>,
};

export const HOME_CINEMATIC_SEQUENCE_CONTENT: CinematicSequenceContent = {
  beats: [
    {
      className:
        "absolute left-0 text-left max-w-lg pl-8 md:pl-16 pr-8 py-10 bg-black/40 backdrop-blur-md rounded-r-3xl border-y border-r border-white/10 shadow-2xl",
      id: "intro",
      opacityInput: [0, 0.05, 0.18, 0.25],
      opacityOutput: [0, 1, 1, 0],
      title: <>Immersive Experience.</>,
      titleClassName:
        "font-heading text-3xl md:text-3xl font-bold !text-white leading-tight drop-shadow-lg",
      yInput: [0, 0.15],
      yOutput: [30, 0],
    },
    {
      className:
        "absolute right-8 lg:right-24 text-right max-w-xl px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      description: {
        className: "text-gray-200 mt-6 text-lg md:text-xl max-w-lg drop-shadow-md",
        text: "We don't just build booths. We architect conversion environments designed to capture enterprise leads and communicate market dominance.",
      },
      eyebrow: {
        className:
          "text-brand-cyan uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
        text: "Precision Engineered",
      },
      id: "approach",
      opacityInput: [0.25, 0.35, 0.45, 0.5],
      opacityOutput: [0, 1, 1, 0],
      title: <>A strategic approach to spatial storytelling.</>,
      titleClassName:
        "font-heading text-2xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg",
      yInput: [0.25, 0.35],
      yOutput: [30, 0],
    },
    {
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      eyebrow: {
        className:
          "text-brand-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
        text: "End-to-End Execution",
      },
      id: "services",
      opacityInput: [0.5, 0.6, 0.7, 0.75],
      opacityOutput: [0, 1, 1, 0],
      title: <>From Blueprint to Reality.</>,
      titleClassName:
        "font-heading text-2xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg",
      yInput: [0.5, 0.6],
      yOutput: [30, 0],
    },
    {
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      cta: {
        className:
          "bg-brand-primary hover:bg-brand-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-colors shadow-xl",
        label: "Start Your Project",
      },
      id: "cta",
      opacityInput: [0.75, 0.85, 1],
      opacityOutput: [0, 1, 1],
      title: <>Command The Floor.</>,
      titleClassName:
        "font-heading text-3xl md:text-3xl font-bold text-white leading-tight mb-8 drop-shadow-lg",
      yInput: [0.75, 0.85],
      yOutput: [30, 0],
    },
  ],
  frameCount: 60,
  frameUrlTemplate: "/Frames/ezgif-frame-%d.jpg",
  heroOverlay: {
    description:
      "Trusted across 30+ countries, we deliver custom trade show booth design, active on-ground prospecting, and end-to-end event execution that turns exhibitions into a qualified B2B sales pipeline.",
    eyebrow: "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
    primaryCta: { href: "/contact", label: "Get a Custom Proposal" },
    secondaryCta: { href: "/case-studies", label: "See Our Work" },
    title: "B2B Global Event Solutions & Trade Show Booth Design",
  },
  loadingText: "Loading Cinematic Experience...",
};

export const HOME_CLIENT_LOGOS: ClientLogoItem[] = [
  { alt: "Airtel", id: "airtel", src: "/logos/Airtel.svg" },
  { alt: "BOSCH", id: "bosch", src: "/logos/BOSCH.svg" },
  { alt: "CSC", id: "csc", src: "/logos/CSC.svg" },
  { alt: "Infosys", id: "infosys", src: "/logos/Infosys.svg" },
  { alt: "SingleStore", id: "singlestore", src: "/logos/SingleStore.svg" },
  { alt: "Syngene", id: "syngene", src: "/logos/Syngene.svg" },
  { alt: "Temenos", id: "temenos", src: "/logos/Temenos.svg" },
  { alt: "United Payment", id: "unitedpayment", src: "/logos/UnitedPayment.svg" },
  { alt: "Worldpay", id: "worldpay", src: "/logos/Worldpay.svg" },
];

export const HOME_WHO_WE_ARE_CONTENT: WhoWeAreContent = {
  heading: "Your Trusted Global B2B Event Partner",
  headingHighlight: "Global B2B Event Partner",
  mission:
    "To transform your global event presence into measurable, high-impact commercial outcomes.",
  quote:
    "We don't just design exhibition booths, we build sales pipelines. B2B Sales Arrow combines custom trade show booth design, on-ground lead generation, and performance-driven event marketing to turn floor traffic into qualified enterprise opportunities. One partner. One end-to-end B2B event solution built to drive measurable results.",
  stats: [
    {
      bg: "bg-gradient-to-br from-[#1E6091] to-[#184E77]",
      icon: "Globe2",
      label: "Countries Served",
      value: "30+",
    },
    {
      bg: "bg-gradient-to-br from-[#2A9D8F] to-[#21867A]",
      icon: "TrendingUp",
      label: "Global Events Handled",
      value: "300+",
    },
    {
      bg: "bg-gradient-to-br from-[#023E8A] to-[#03045E]",
      icon: "Target",
      label: "SQLs Delivered",
      value: "2,500+",
    },
    {
      bg: "bg-gradient-to-br from-[#1b5e82] to-[#164e6b]",
      icon: "Users",
      label: "Years of B2B Experience",
      value: "10+",
    },
  ],
};

export const HOME_SERVICES_CONTENT: HomeServicesContent = {
  ctaLabel: "Learn More",
  heading: "Our B2B Event Services & Trade Show Solutions",
  headingHighlight: "Trade Show Solutions",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We design and build custom trade show booths that stop foot traffic, reflect your brand, and create the perfect environment for high-value sales conversations.",
      icon: "Presentation",
      id: "booth-design",
      image: "/images/home/services/booth/booth-5.avif",
      title: "Booth Design & Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We deploy trained multilingual sales specialists directly onto the event floor to engage senior decision-makers, qualify leads on the spot, and deliver verified SQLs to your team daily.",
      icon: "Users",
      id: "active-prospecting",
      image: "/images/home/services/market-intelligence.avif",
      title: "Active Prospecting",
    },
    {
      color: "bg-brand-primary",
      description:
        "We capture broadcast-quality video, interviews, and 3D animations at your event, turning a single day on the floor into 12 months of high-impact digital content.",
      icon: "MonitorPlay",
      id: "media",
      image: "/images/home/services/media-production-2.avif",
      title: "Corporate Media Production",
    },
    {
      color: "bg-brand-blue",
      description:
        "We source and deliver premium branded giveaways that keep your company top-of-mind long after the event floor closes.",
      icon: "Gift",
      id: "giveaways",
      image: "/images/case-studies/cs-6.avif",
      title: "Giveaways",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We design and manage exclusive networking experiences, VIP dinners, roundtables, and hosted meetings, that connect your team directly with key enterprise decision-makers.",
      icon: "Coffee",
      id: "networking",
      image: "/images/recent-events/event_other_1.avif",
      title: "Networking",
    },
    {
      color: "bg-brand-primary",
      description:
        "We create cohesive event branding, from booth graphics and signage to digital displays, so your enterprise presence commands attention across the entire venue.",
      icon: "Palette",
      id: "branding",
      image: "/images/home/why-choose-us/strategic_creativity.avif",
      title: "Branding",
    },
    {
      color: "bg-brand-blue",
      description:
        "We design immersive booth experiences, interactive demos, live activations, and engagement zones, that turn passive visitors into active pipeline opportunities.",
      icon: "Lightbulb",
      id: "experience-creation",
      image: "/images/recent-events/event_other_2.avif",
      title: "Experience Creation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We build verified, account-level prospect databases and deploy our proprietary HPMI methodology to uncover deep target market intelligence before your event begins.",
      icon: "Database",
      id: "market-research",
      image: "/images/home/services/database-research-revised.avif",
      title: "Database & Market Research",
    },
    {
      color: "bg-brand-primary",
      description:
        "We run targeted pre-event marketing campaigns across email and social to drive qualified attendee traffic to your booth and fill your team's calendar with high-intent meetings before day one.",
      icon: "Rocket",
      id: "performance-marketing",
      image: "/images/home/services/performance-marketing-1.avif",
      title: "Performance Marketing",
    },
  ],
};

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = {
  ctaLabel: "Full Study",
  heading: "Proven Global Event Solutions: Enterprise Success Stories",
  headingHighlight: "Success Stories",
  items: [
    {
      icon: "Plane",
      id: "world-aviation-festival-2023",
      image: "/images/case-studies/waf.avif",
      solution:
        "Fueling global brand recognition and lead generation success with 70% hot and warm leads from 80% of $1B+ organisations.",
      title: "World Aviation Festival 2023",
    },
    {
      icon: "Building2",
      id: "sibos-2023",
      image: "/images/case-studies/sibos.avif",
      solution:
        "Boosting on-ground lead generation 40% beyond target with 85%+ hot and warm leads and 75%+ director-level prospects.",
      title: "SIBOS 2023",
    },
    {
      icon: "Sparkles",
      id: "sap-sapphire-2023",
      image: "/images/case-studies/sap.jpg",
      solution:
        "Empowering global branding and on-ground lead generation success, delivering 80% hot and warm leads and 100% unique accounts.",
      title: "SAP Sapphire 2023",
    },
  ],
};

export const HOME_EVENTS_CONTENT: EventsContent = {
  ctaLabel: "Meet Us There",
  description:
    "Meet our team on the ground. We are bringing our end-to-end event solution expertise to the most anticipated enterprise conferences of the year:",
  events: [
    {
      date: "Mar 2026",
      id: "adobe-summit-2026",
      image: "/images/recent-events/adobe_summit_2026.avif",
      location: "Las Vegas, USA",
      title: "Adobe Summit 2026",
    },
    {
      date: "2026",
      id: "inma-2026",
      image: "/images/recent-events/inma_2026.avif",
      location: "Global",
      title: "INMA World Congress 2026",
    },
    {
      date: "2026",
      id: "servicenow-2026",
      image: "/images/recent-events/servicenow_2026.avif",
      location: "Las Vegas, USA",
      title: "ServiceNow Knowledge 2026",
    },
    {
      date: "Oct 2025",
      id: "sibos-amsterdam",
      image: "/images/recent-events/event_other_1.avif",
      location: "Amsterdam, Netherlands",
      title: "SIBOS 2025",
    },
    {
      date: "Oct 2025",
      id: "money-20-20-amsterdam",
      image: "/images/recent-events/event_other_2.avif",
      location: "Amsterdam, Netherlands",
      title: "Money 20/20",
    },
    {
      date: "Oct 2025",
      id: "gitex-global",
      image: "/images/recent-events/event_other_3.avif",
      location: "Dubai, UAE",
      title: "GITEX Global 2025",
    },
    {
      date: "Dec 2025",
      id: "constellate",
      image: "/images/recent-events/event_other_4.avif",
      location: "New York, USA",
      title: "Constellate 2025",
    },
  ],
  heading: "Upcoming Trade Shows & Global Industry Events",
  headingHighlight: "Global Industry Events",
  viewAllLabel: "Explore All Upcoming Events",
};

export const HOME_WHY_CHOOSE_US_CONTENT: StickyScrollContent = {
  heading: "Why Enterprise Brands Trust Our Global Event Solutions?",
  headingHighlight: "Enterprise Brands Trust",
  reasons: [
    {
      description:
        "We deliberately engineer every event strategy directly from your commercial goals to drive measurable pipeline outcomes.",
      id: "revenue-driven-execution",
      image: "/images/home/why-choose-us/proven_execution.avif",
      title: "Revenue-Driven Execution",
    },
    {
      description:
        "We consolidate booth design, media production, and marketing under one accountable roof to eliminate vendor gaps.",
      id: "zero-coordination-tax",
      image: "/images/home/why-choose-us/strategic_creativity.avif",
      title: "Zero Coordination Tax",
    },
    {
      description:
        "We leverage deep regional intelligence across three continents to ensure flawless corporate experiences around the globe.",
      id: "seamless-worldwide-delivery",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "Seamless Worldwide Delivery",
    },
    {
      description:
        "We deploy trained sales specialists directly onto the active event floor to hunt high-value enterprise decision-makers.",
      id: "proprietary-active-prospecting",
      image: "/images/home/why-choose-us/technology_led_delivery.avif",
      title: "Proprietary Active Prospecting",
    },
    {
      description:
        "We possess extensive domain expertise across major global sectors so we already understand your specific language.",
      id: "deep-industry-expertise",
      image: "/images/home/why-choose-us/proven_execution.avif",
      title: "Deep Industry Expertise",
    },
  ],
};

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = {
  autoplayInterval: 3000,
  heading: "What Our Clients Say?",
  headingHighlight: "Clients Say",
  initialIndex: 2,
  testimonials: [
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 1,
      image: "/images/home/testimonials/testimonial-1.avif",
      name: "[Client Name]",
      quote:
        '"Their team built an incredible sustainable booth that perfectly captured our global brand identity this year."',
      rating: 5,
      serviceTag: "Trade Show Booth Design",
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 2,
      image: "/images/home/testimonials/testimonial-2.avif",
      name: "[Client Name]",
      quote:
        '"Their active prospecting team navigated the event floor and delivered fifty highly qualified sales leads daily."',
      rating: 5,
      serviceTag: "Active Prospecting",
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 3,
      image: "/images/home/testimonials/testimonial-3.avif",
      name: "[Client Name]",
      quote:
        '"They curated an exclusive networking experiences and provided premium custom giveaways that kept our attendees fully engaged."',
      rating: 5,
      serviceTag: "Event Audience Generation",
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 4,
      image: "/images/home/testimonials/testimonial-4.avif",
      name: "[Client Name]",
      quote:
        '"The media production team captured every key moment with broadcast-quality precision, the final content exceeded our expectations."',
      rating: 5,
      serviceTag: "Media Production",
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 5,
      image: "/images/home/testimonials/testimonial-5.avif",
      name: "[Client Name]",
      quote:
        '"From strategy to execution, the entire program ran seamlessly across three countries, a truly end-to-end global event partner."',
      rating: 5,
      serviceTag: "Global Event Solutions",
    },
  ],
};

export const HOME_BLOGS_CONTENT: BlogsContent = {
  blogs: HOME_BLOG_POSTS,
  ctaLabel: "Read the complete blog",
  eyebrow: "BLOGS",
  heading: "Expert Strategies to Maximize Your Global Event Solutions",
  headingHighlight: "Global Event Solutions",
};

export const HOME_FAQ_CONTENT: FAQContent = {
  faqs: [
    {
      answer:
        "We provide end-to-end solutions, from custom booth design and floor prospecting to digital marketing and market research, all engineered to drive measurable pipeline growth.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
        </svg>
      ),
      id: 1,
      image: "/images/home/services/booth/booth-5.avif",
      question: "What services do you offer as an event partner?",
    },
    {
      answer:
        "Yes. We deliver global event solutions across 30+ countries, leveraging regional expertise to ensure a consistent, high-impact brand presence anywhere you exhibit.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z" />
        </svg>
      ),
      id: 2,
      image: "/images/home/why-choose-us/global_reach.avif",
      question: "Do you manage exhibitions outside of the United States?",
    },
    {
      answer:
        "Our team crafts premium booth designs tailored to your industry, fusing architectural creativity with sales psychology to convert floor traffic into qualified enterprise leads.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z" />
        </svg>
      ),
      id: 3,
      image: "/images/home/services/booth/booth-7.avif",
      question: "Can you build custom exhibits for our specific industry?",
    },
    {
      answer:
        "We deploy trained sales specialists to the floor to engage senior delegates, qualify them via BANT criteria, and deliver verified SQLs directly to your team.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z" />
        </svg>
      ),
      id: 4,
      image: "/images/home/services/sql-generation-revised.avif",
      question: "How do you guarantee high-quality leads from an exhibition?",
    },
    {
      answer:
        "We elevate your brand through curated experiences, including exclusive VIP dinners, premium corporate giveaways, and interactive booth activities designed for deep engagement.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
        </svg>
      ),
      id: 5,
      image: "/images/recent-events/event_other_1.avif",
      question: "Do you help with attendee engagement and networking?",
    },
    {
      answer:
        "We offer turnkey solutions that integrate commercial strategy with structural design and media production, managing all logistics so your team can focus on closing deals.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z" />
        </svg>
      ),
      id: 6,
      image: "/images/home/why-choose-us/proven_execution.avif",
      question: "Do you handle both strategic planning and physical build?",
    },
    {
      answer:
        "We execute targeted pre-event marketing using personalized email sequences and social media to fill your calendar with high-intent meetings before the show begins.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z" />
        </svg>
      ),
      id: 7,
      image: "/images/home/services/performance-marketing-1.avif",
      question: "How do you drive traffic to our booth before events?",
    },
    {
      answer:
        "Our media team captures broadcast-grade video and 3D animations on-site, transforming your event into a year's worth of digital content to fuel your ongoing sales pipeline.",
      icon: (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 256 256"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z" />
        </svg>
      ),
      id: 8,
      image: "/images/home/services/media-production-2.avif",
      question: "Can you help us repurpose the event for digital marketing?",
    },
  ],
  heading: "Frequently Asked Questions",
  headingHighlight: "Asked Questions",
  scrollAmount: 340,
};

export const HOME_CONTACT_CONTENT: ContactContent = {
  description:
    "Partner with B2B Sales Arrow to design high-impact trade show booths and execute data-driven event marketing strategies that generate qualified leads and pipeline. Share your requirements, and our team will create a tailored plan for your next exhibition.",
  form: {
    companyLabel: "Company Name",
    companyPlaceholder: "Your Company",
    consentLabel:
      "I agree to receive communications from B2B Sales Arrow regarding their services.",
    ctaLabel: "Get Your Custom Proposal",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    firstNameLabel: "Name",
    firstNamePlaceholder: "Your Name",
    messageLabel: "Tell us about your event goals and requirements:",
    messagePlaceholder: "Enter your requirements here...",
    phoneLabel: "Phone Number (Optional)",
    phonePlaceholder: "+1 (000) 000-0000",
  },
  heading: "Ready to Build Your Global Event Strategy?",
  headingHighlight: "Global Event Strategy",
  illustration: {
    alt: "Contact Us",
    src: "/contact_illu.svg",
  },
};

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
