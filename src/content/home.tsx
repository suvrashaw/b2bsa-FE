import type { ReactNode } from "react";

export interface BlogItem {
  category: string;
  date: string;
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
  eyebrow: string;
  heading: ReactNode;
  items: CaseStudyItem[];
  viewAllLabel: string;
}

export interface CaseStudyItem {
  challenge: string;
  client: string;
  icon: string;
  id: string;
  image: string;
  metric: string;
  metricLabel: string;
  solution: string;
  title: string;
}

export interface CinematicSequenceContent {
  beats: CinematicStoryBeat[];
  frameCount: number;
  frameUrls?: string[];
  frameUrlTemplate?: string;
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
  id: string;
  logoName?: string;
}

export interface ContactContent {
  description: string;
  eyebrow: string;
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

export interface ContactServiceOption {
  label: string;
  value: string;
}

export interface FAQContent {
  description: string;
  eyebrow: string;
  faqs: FAQItem[];
  heading: ReactNode;
  scrollAmount: number;
}

export interface FAQItem {
  answer: string;
  id: number | string;
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
  eyebrow: string;
  heading: ReactNode;
  serviceLabel: string;
  services: HomeServiceItem[];
}

export interface TestimonialItem {
  company: string;
  designation: string;
  id: number | string;
  image: string;
  name: string;
  quote: string;
  rating: number;
}

export interface TestimonialsContent {
  autoplayInterval: number;
  eyebrow: string;
  heading: ReactNode;
  initialIndex: number;
  testimonials: TestimonialItem[];
}

export interface UpcomingEventItem {
  date: string;
  id: string;
  image: string;
  location: string;
  title: string;
}

export interface UpcomingEventsContent {
  badgeLabel: string;
  ctaLabel: string;
  description?: string;
  events: UpcomingEventItem[];
  eyebrow: string;
  heading: ReactNode;
  viewAllLabel: string;
}

export interface WhoWeAreContent {
  attribution: string;
  heading: ReactNode;
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

export interface WhyChooseUsContent {
  eyebrow: string;
  heading: ReactNode;
  reasons: WhyChooseUsReason[];
}

export interface WhyChooseUsReason {
  description: string;
  id: string;
  image: string;
  title: string;
}

export const HOME_HERO_CONTENT: HomeHeroContent = {
  description:
    "Trusted across 30+ countries, we deliver custom trade show booth design, active on-ground prospecting, and end-to-end event execution that turns exhibitions into a qualified B2B sales pipeline.",
  eyebrow: "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  image: {
    alt: "Global B2B enterprise growth strategy",
    loaderAlt: "Loader",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
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
  title: <>B2B Global Event Solutions & Trade Show Booth Designs</>,
};

export const HOME_CINEMATIC_SEQUENCE_CONTENT: CinematicSequenceContent = {
  beats: [
    {
      className:
        "absolute left-0 text-left max-w-lg pl-8 md:pl-16 pr-8 py-10 bg-black/40 backdrop-blur-md rounded-r-3xl border-y border-r border-white/10 shadow-2xl",
      id: "intro",
      opacityInput: [0, 0.05, 1],
      opacityOutput: [0, 1, 1],
      title: <>Immersive Experience.</>,
      titleClassName:
        "font-heading text-5xl md:text-7xl font-bold !text-white leading-tight drop-shadow-lg",
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
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
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
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
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
        "font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg",
      yInput: [0.75, 0.85],
      yOutput: [30, 0],
    },
  ],
  frameCount: 60,
  frameUrlTemplate: "/Frames/ezgif-frame-%d.jpg",
  loadingText: "Loading Cinematic Experience...",
};

export const HOME_CLIENT_LOGOS: ClientLogoItem[] = [
  { id: "singlestore" },
  { id: "temenos" },
  { id: "worldpay" },
  { id: "syngene" },
  { id: "airtel" },
  { id: "infosys" },
];

export const HOME_WHO_WE_ARE_CONTENT: WhoWeAreContent = {
  attribution: "\u2014 Leadership Team, B2B Sales Arrow",
  heading: <>Your Trusted Global B2B Event Partner</>,
  mission:
    "To transform your global event presence into measurable, high-impact commercial outcomes.",
  quote:
    "We don't just design exhibition booths — we build sales pipelines. B2B Sales Arrow combines custom trade show booth design, on-ground lead generation, and performance-driven event marketing to turn floor traffic into qualified enterprise opportunities. One partner. One end-to-end B2B event solution built to drive measurable results.",
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
  eyebrow: "OUR CORE PILLARS",
  heading: <>Our B2B Event Services & Trade Show Solutions</>,
  serviceLabel: "Service",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We design and build custom trade show booths that stop foot traffic, reflect your brand, and create the perfect environment for high-value sales conversations.",
      icon: "Presentation",
      id: "booth-design",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      title: "Booth Design & Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We deploy trained multilingual sales specialists directly onto the event floor to engage senior decision-makers, qualify leads on the spot, and deliver verified SQLs to your team daily.",
      icon: "Users",
      id: "active-prospecting",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
      title: "Active Prospecting",
    },
    {
      color: "bg-brand-primary",
      description:
        "We capture broadcast-quality video, interviews, and 3D animations at your event — turning a single day on the floor into 12 months of high-impact digital content.",
      icon: "MonitorPlay",
      id: "media",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      title: "Corporate Media Production",
    },
    {
      color: "bg-brand-blue",
      description:
        "We source and deliver premium branded giveaways that keep your company top-of-mind long after the event floor closes.",
      icon: "Gift",
      id: "giveaways",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1600",
      title: "Giveaways",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We design and manage exclusive networking experiences — VIP dinners, roundtables, and hosted meetings — that connect your team directly with key enterprise decision-makers.",
      icon: "Coffee",
      id: "networking",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
      title: "Networking",
    },
    {
      color: "bg-brand-primary",
      description:
        "We create cohesive event branding — from booth graphics and signage to digital displays — so your enterprise presence commands attention across the entire venue.",
      icon: "Palette",
      id: "branding",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      title: "Branding",
    },
    {
      color: "bg-brand-blue",
      description:
        "We design immersive booth experiences — interactive demos, live activations, and engagement zones — that turn passive visitors into active pipeline opportunities.",
      icon: "Lightbulb",
      id: "experience-creation",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
      title: "Experience Creation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We build verified, account-level prospect databases and deploy our proprietary HPMI methodology to uncover deep target market intelligence before your event begins.",
      icon: "Database",
      id: "market-research",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      title: "Database & Market Research",
    },
    {
      color: "bg-brand-primary",
      description:
        "We run targeted pre-event marketing campaigns across email and social to drive qualified attendee traffic to your booth and fill your team's calendar with high-intent meetings before day one.",
      icon: "Rocket",
      id: "performance-marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      title: "Performance Marketing",
    },
  ],
};

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = {
  ctaLabel: "Full Study",
  eyebrow: "PROVEN EXECUTION",
  heading: <>Proven Global Event Solutions: Enterprise Success Stories</>,
  items: [
    {
      challenge: "Sustainable booth design and high-volume lead capture.",
      client: "Adobe Summit",
      icon: "Leaf",
      id: "adobe-summit",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
      metric: "70+",
      metricLabel: "SQLs Secured",
      solution:
        "We delivered a custom eco-friendly island booth and active on-site prospecting to secure 70+ SQLs and engage 60 unique billion-dollar enterprise accounts.",
      title: "Sustainable Design & Lead Generation",
    },
    {
      challenge: "High-speed outreach for executive meetings.",
      client: "World Aviation Festival",
      icon: "Plane",
      id: "world-aviation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      metric: "60",
      metricLabel: "Meetings Secured",
      solution:
        "Through rapid pre-event outreach and on-ground prospecting, we secured 60 executive meetings—doubling the initial target within a high-speed, 10-day campaign.",
      title: "Doubling Executive Pipeline",
    },
    {
      challenge: "Personalized global outreach and visitor engagement.",
      client: "SIBOS",
      icon: "BarChart3",
      id: "sibos",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
      metric: "270+",
      metricLabel: "Leads Captured",
      solution:
        "We created hyper-personalized global outreach and interactive booth design for two financial leaders, capturing 270+ leads and 64 strategic executive meetings.",
      title: "High-Impact Outreach & Interactive Exhibits",
    },
  ],
  viewAllLabel: "View All Work",
};

export const HOME_UPCOMING_EVENTS_CONTENT: UpcomingEventsContent = {
  badgeLabel: "Upcoming",
  ctaLabel: "Meet Us There!",
  description:
    "Meet our team on the ground. We are bringing our end-to-end event solution expertise to the most anticipated enterprise conferences of the year:",
  events: [
    {
      date: "2026",
      id: "adobe",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "Adobe Summit",
    },
    {
      date: "2026",
      id: "autotech",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "Autotech",
    },
    {
      date: "2026",
      id: "cba",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "CBA Live",
    },
    {
      date: "2026",
      id: "databricks",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "Databricks Summit",
    },
    {
      date: "2026",
      id: "hannover",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      location: "Germany",
      title: "Hannover Messe",
    },
    {
      date: "2026",
      id: "hp",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "HP Discovery",
    },
    {
      date: "2026",
      id: "iucx",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "IUCX",
    },
    {
      date: "2026",
      id: "itw",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "ITW (International Telecoms Week)",
    },
    {
      date: "2026",
      id: "nvidia",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
      location: "USA",
      title: "NVIDIA GTC 2026",
    },
    {
      date: "2026",
      id: "sap-madrid",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "Spain",
      title: "SAP Sapphire 2026 Madrid",
    },
    {
      date: "2026",
      id: "sap-orlando",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "USA",
      title: "SAP Sapphire 2026 Orlando",
    },
    {
      date: "2026",
      id: "servicenow",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "ServiceNow Knowledge 2026",
    },
    {
      date: "2026",
      id: "snowflake",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "Snowflake Summit",
    },
    {
      date: "2026",
      id: "zenith",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "Global",
      title: "Zenith Live",
    },
  ],
  eyebrow: "GLOBAL PRESENCE",
  heading: <>Upcoming Trade Shows & Global Industry Events</>,
  viewAllLabel: "View All Events",
};

export const HOME_WHY_CHOOSE_US_CONTENT: WhyChooseUsContent = {
  eyebrow: "THE B2BSA ADVANTAGE",
  heading: <>Why Enterprise Brands Trust Our Global Event Solutions?</>,
  reasons: [
    {
      description:
        "We deliberately engineer every event strategy directly from your commercial goals to drive measurable pipeline outcomes.",
      id: "revenue-driven",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Revenue-Driven Execution",
    },
    {
      description:
        "We consolidate booth design, media production, and marketing under one accountable roof to eliminate vendor gaps.",
      id: "zero-coordination",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      title: "Zero Coordination Tax",
    },
    {
      description:
        "We leverage deep regional intelligence across three continents to ensure flawless corporate experiences around the globe.",
      id: "seamless-delivery",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      title: "Seamless Worldwide Delivery",
    },
    {
      description:
        "We deploy trained sales specialists directly onto the active event floor to hunt high-value enterprise decision-makers.",
      id: "active-prospecting",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Proprietary Active Prospecting",
    },
    {
      description:
        "We possess extensive domain expertise across major global sectors so we already understand your specific language.",
      id: "industry-expertise",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Deep Industry Expertise",
    },
  ],
};

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = {
  autoplayInterval: 3000,
  eyebrow: "CLIENT SUCCESS",
  heading: <>What Our Clients Say?</>,
  initialIndex: 2,
  testimonials: [
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      name: "[Client Name]",
      quote:
        '"Their team built an incredible sustainable booth that perfectly captured our global brand identity this year."',
      rating: 5,
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      name: "[Client Name]",
      quote:
        '"Their active prospecting team navigated the event floor and delivered fifty highly qualified sales leads daily."',
      rating: 5,
    },
    {
      company: "[Enterprise Brand]",
      designation: "[Job Title]",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      name: "[Client Name]",
      quote:
        '"They curated an exclusive networking experiences and provided premium custom giveaways that kept our attendees fully engaged."',
      rating: 5,
    },
  ],
};

export const HOME_BLOGS_CONTENT: BlogsContent = {
  blogs: [
    {
      category: "Design",
      date: "Oct 12, 2025",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
      title: "8 Must-Ask Questions Before Hiring a Trade Show Booth Design Company",
    },
    {
      category: "Trends",
      date: "Sep 28, 2025",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      title: "5 Trade Show Booth Design Setup Trends Reshaping Exhibits in 2026",
    },
    {
      category: "Features",
      date: "Sep 15, 2025",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
      title: "6 Must-Have Features for Effective B2B Booth Design",
    },
  ],
  ctaLabel: "Read the complete blog",
  eyebrow: "BLOGS",
  heading: <>Expert Strategies to Maximize Your Global Event Solutions</>,
};

export const HOME_FAQ_CONTENT: FAQContent = {
  description:
    "Everything you need to know about our global event solutions and how we drive pipeline for enterprise brands.",
  eyebrow: "INTELLIGENCE & CLARITY",
  faqs: [
    {
      answer:
        "We provide end-to-end solutions, from custom booth design and floor prospecting to digital marketing and market research, all engineered to drive measurable pipeline growth.",
      id: 1,
      question: "What services do you offer as an event partner?",
    },
    {
      answer:
        "Yes. We deliver global event solutions across 30+ countries, leveraging regional expertise to ensure a consistent, high-impact brand presence anywhere you exhibit.",
      id: 2,
      question: "Do you manage exhibitions outside of the United States?",
    },
    {
      answer:
        "Our team crafts premium booth designs tailored to your industry, fusing architectural creativity with sales psychology to convert floor traffic into qualified enterprise leads.",
      id: 3,
      question: "Can you build custom exhibits for our specific industry?",
    },
    {
      answer:
        "We deploy trained sales specialists to the floor to engage senior delegates, qualify them via BANT criteria, and deliver verified SQLs directly to your team.",
      id: 4,
      question: "How do you guarantee high-quality leads from an exhibition?",
    },
    {
      answer:
        "We elevate your brand through curated experiences, including exclusive VIP dinners, premium corporate giveaways, and interactive booth activities designed for deep engagement.",
      id: 5,
      question: "Do you help with attendee engagement and networking?",
    },
    {
      answer:
        "We offer turnkey solutions that integrate commercial strategy with structural design and media production, managing all logistics so your team can focus on closing deals.",
      id: 6,
      question: "Do you handle both strategic planning and physical build?",
    },
    {
      answer:
        "We execute targeted pre-event marketing using personalized email sequences and social media to fill your calendar with high-intent meetings before the show begins.",
      id: 7,
      question: "How do you drive traffic to our booth before events?",
    },
    {
      answer:
        "Our media team captures broadcast-grade video and 3D animations on-site, transforming your event into a year's worth of digital content to fuel your ongoing sales pipeline.",
      id: 8,
      question: "Can you help us repurpose the event for digital marketing?",
    },
  ],
  heading: <>Frequently Asked Questions</>,
  scrollAmount: 340,
};

export const HOME_CONTACT_CONTENT: ContactContent = {
  description:
    "Partner with B2B Sales Arrow to design high-impact trade show booths and execute data-driven event marketing strategies that generate qualified leads and pipeline. Share your requirements, and our team will create a tailored plan for your next exhibition.",
  eyebrow: "START THE CONVERSATION",
  form: {
    companyLabel: "Company Name",
    companyPlaceholder: "Your Company",
    consentLabel:
      "I agree to receive communications from B2B Sales Arrow regarding their services.",
    ctaLabel: "Get Your Custom Proposal",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    eventLabel: "Upcoming Event Name & Date (Optional)",
    eventPlaceholder: "e.g. GITEX 2026, October 2026",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    messageLabel: "Tell us about your event goals and requirements:",
    messagePlaceholder: "Enter your requirements here...",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (000) 000-0000",
    serviceLabel: "Select the services you need",
    serviceOptions: [
      { label: "End-to-End Global Event Solutions", value: "end-to-end" },
      { label: "Trade Show Booth Design & Production", value: "booth-design" },
      { label: "On-Ground Active Prospecting", value: "on-ground" },
      { label: "Corporate Media Production", value: "media" },
      { label: "Database & Market Research", value: "research" },
      { label: "Performance Marketing", value: "marketing" },
    ],
    servicePlaceholder: "Select a service...",
  },
  heading: <>Ready to Build Your Global Event Strategy?</>,
  illustration: {
    alt: "Contact Us",
    src: "/undraw_contact-us_s4jn.svg",
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
