import { GLOBAL_CASE_STUDIES } from "@/content/shared";

const mediaProofLogos = [
  { alt: "Airtel", src: "/logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/logos/circle-csc.svg" },
  { alt: "United Payments", src: "/logos/circle-united-payments.svg" },
] as const;

export const EVENT_EXPERIENCE_VIDEO_IMAGE_HERO = {
  description:
    "Capture conferences, trade shows, and corporate events with high-quality pre-event, highlight, and post-event videos designed to extend audience engagement and brand visibility.",
  images: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80&w=1600",
  ],
  primaryCta: { href: "/contact", label: "Create Event Videos" },
  title: "Event Video Production Services",
};

export const EVENT_EXPERIENCE_VIDEO_PROOF_BAR = [
  "250+ events",
  "500+ event videos",
  "40+ countries",
  "98% client retention",
];

export const EVENT_EXPERIENCE_VIDEO_INTRO = {
  ctaHref: "/contact",
  ctaLabel: "Create Event Videos",
  description:
    "Modern corporate events are more than physical experiences; they are powerful brand storytelling opportunities. Professional event experience video production helps businesses capture audience engagement, showcase event success, and extend event visibility across digital marketing channels.\n\nAt B2B Sales Arrow, we provide end-to-end event video production services for conferences, trade shows, product launches, networking receptions, corporate events, and executive gatherings. From pre-event promotional videos to post-event highlight reels, our team captures every important interaction, keynote moment, booth engagement, and audience experience with cinematic-quality production.",
  imageAlt: "Corporate event video production crew capturing an audience experience",
  imageUrl:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
  label: "Event Video",
  titleLine1: "Professional Event Experience",
  titleLine2: "Video Production Services",
};

export const EVENT_EXPERIENCE_VIDEO_DELIVERABLES = {
  ctaLabel: "Contact Our Team",
  heading: "What's Included in Our Event Experience Video Production Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Build excitement and increase event attendance with professionally produced teaser videos, invitation videos, countdown videos, and event marketing campaigns.",
      icon: "Video",
      id: "pre-event-promotional-videos",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200",
      title: "Pre-Event Promotional Videos",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Capture the best moments from conferences, exhibitions, networking sessions, keynote speeches, and trade show activities with engaging highlight reels.",
      icon: "Clapperboard",
      id: "event-highlight-videos",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Event Highlight Videos",
    },
    {
      color: "bg-brand-primary",
      description:
        "Extend your event impact with post-event recap videos designed for social media, internal communication, audience engagement, and future event promotion.",
      icon: "MonitorPlay",
      id: "post-event-recap-videos",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      title: "Post-Event Recap Videos",
    },
    {
      color: "bg-brand-blue",
      description:
        "Showcase booth engagement, customer interactions, live demonstrations, and brand experiences with professional trade show video production.",
      icon: "Presentation",
      id: "trade-show-booth-coverage",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
      title: "Trade Show Booth Coverage",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Capture executive presentations, networking experiences, fireside chats, award ceremonies, and audience interactions with high-quality event videography services.",
      icon: "Mic",
      id: "corporate-event-videography",
      image:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b814f2?auto=format&fit=crop&q=80&w=1200",
      title: "Corporate Event Videography",
    },
    {
      color: "bg-brand-primary",
      description:
        "Create short-form event videos optimized for LinkedIn, Instagram, YouTube, and other digital marketing channels.",
      icon: "Share2",
      id: "social-media-event-content",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      title: "Social Media Event Content",
    },
  ],
};

export const EVENT_EXPERIENCE_VIDEO_CAPABILITIES = {
  phases: [
    {
      description: "Multi-camera coverage for keynotes, sessions, booth activity, and audience reactions.",
      title: "Multi-Camera Event Coverage",
    },
    {
      description: "Professional camera workflows for sharp, polished event footage and final delivery.",
      title: "4K Video Production Capabilities",
    },
    {
      description: "Clean speaker, panel, interview, and ambient audio captured for usable event storytelling.",
      title: "Professional Audio Recording",
    },
    {
      description: "Aerial venue footage where location, permissions, and event format make it appropriate.",
      title: "Drone Event Videography",
    },
    {
      description: "Gimbal and motion shots that give event videos a more cinematic, dynamic feel.",
      title: "Gimbal and Cinematic Motion Shots",
    },
    {
      description: "Photo capture can be integrated alongside video to support post-event marketing needs.",
      title: "Event Photography Integration",
    },
    {
      description: "Onsite editing support for urgent social media clips, recaps, or same-day campaign assets.",
      title: "Onsite Video Editing Support",
    },
    {
      description: "Lower thirds, title cards, logo animations, branded transitions, and event-specific graphics.",
      title: "Branded Motion Graphics",
    },
    {
      description: "Fast post-event editing support for immediate publishing and internal communication needs.",
      title: "Fast Turnaround Post-Production",
    },
    {
      description: "Landscape, square, and vertical formats prepared for LinkedIn, YouTube, Instagram, and more.",
      title: "Social Media Optimized Video Formats",
    },
  ],
  title: "Professional Event Video Production Equipment & Capabilities",
};

export const EVENT_EXPERIENCE_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 5),
};

export const EVENT_EXPERIENCE_VIDEO_EVENT_TYPES_SECTION = {
  heading: "Event Experience Video Formats We Cover",
  services: [
    {
      color: "bg-brand-blue",
      description: "Multi-camera keynote filming, speaker coverage, and session capture at conferences.",
      icon: "Mic",
      id: "conference-highlight-video-production",
      image:
        "https://images.unsplash.com/photo-1475721027187-40247339488a?auto=format&fit=crop&q=80&w=1200",
      title: "Conference Highlight Video Production",
    },
    {
      color: "bg-brand-cyan",
      description: "Booth coverage, audience interactions, live demos, and trade show recap videos.",
      icon: "Presentation",
      id: "trade-show-recap-videos",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      title: "Trade Show Recap Videos",
    },
    {
      color: "bg-brand-primary",
      description: "Atmosphere footage, attendee conversations, and engagement capture at networking receptions.",
      icon: "Users",
      id: "networking-reception-coverage",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      title: "Networking Reception Coverage",
    },
    {
      color: "bg-brand-blue",
      description: "Teaser videos, launch-day filming, and post-event recap content for product launches.",
      icon: "Rocket",
      id: "product-launch-event-videos",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
      title: "Product Launch Event Videos",
    },
    {
      color: "bg-brand-cyan",
      description: "Corporate after movies that capture the energy, audience response, and key brand moments.",
      icon: "Film",
      id: "corporate-event-after-movies",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      title: "Corporate Event After Movies",
    },
    {
      color: "bg-brand-primary",
      description: "Pre-event teaser campaigns and post-event marketing videos for campaign distribution.",
      icon: "Megaphone",
      id: "event-teaser-video-campaigns",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
      title: "Event Teaser Video Campaigns",
    },
  ],
};

export const EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US = {
  heading: "Why Choose B2B Sales Arrow for Event Experience Video Production",
  items: [
    {
      description:
        "We manage planning, filming, editing, post-production, and content delivery for seamless event video execution.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "End-to-End Event Video Production",
    },
    {
      description:
        "Our team understands the fast-paced environment of conferences, exhibitions, networking events, and executive experiences.",
      icon: "Award",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
      title: "Corporate Event Expertise",
    },
    {
      description:
        "We deliver visually engaging event videos with professional filming, dynamic editing, and branded storytelling.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      title: "Cinematic-Quality Production",
    },
    {
      description:
        "We provide quick post-event editing support for social media publishing and immediate marketing use.",
      icon: "Users2",
      image:
        "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80&w=1200",
      title: "Fast Turnaround Delivery",
    },
    {
      description:
        "We support event videography projects across international conferences, trade shows, and corporate events worldwide.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200",
      title: "Global Event Coverage",
    },
    {
      description:
        "Our event videos are designed to support brand visibility, audience engagement, event promotion, and digital marketing campaigns.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Marketing-Focused Content",
    },
  ],
};

export const EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION = {
  heading: "Latest Insights on Event Video Production & Event Marketing",
};

export const EVENT_EXPERIENCE_VIDEO_FAQ = {
  faqs: [
    {
      answer:
        "Event experience video production services help businesses capture conferences, trade shows, networking events, and corporate experiences through professional video storytelling.",
      id: "what-are-event-experience-video-production-services",
      question: "What are event experience video production services?",
    },
    {
      answer:
        "Yes. We create teaser videos, invitation videos, event countdown videos, and promotional content to increase audience engagement before the event.",
      id: "pre-event-promotional-videos",
      question: "Do you provide pre-event promotional videos?",
    },
    {
      answer:
        "Yes. We produce post-event highlight reels and recap videos optimized for marketing, social media, and audience engagement.",
      id: "post-event-recap-videos",
      question: "Can you create post-event recap videos?",
    },
    {
      answer:
        "Yes. We provide trade show videography services including booth coverage, customer interaction filming, live demo coverage, and event highlights.",
      id: "trade-show-video-coverage",
      question: "Do you provide trade show video coverage?",
    },
    {
      answer:
        "Delivery timelines depend on project scope, but we also provide fast-turnaround editing support for urgent marketing requirements.",
      id: "event-video-delivery-speed",
      question: "How quickly can you deliver event videos?",
    },
  ],
  heading: "Frequently Asked Questions About Event Experience Video Production",
};

export const EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES = [
  {
    href: "/services/media-production/event-physical-video-shoot",
    title: "Event Physical Video Shoot",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production Services",
  },
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
  {
    href: "/services/media-production/virtual-video-production",
    title: "Virtual Video Production Services",
  },
];

export const EVENT_EXPERIENCE_VIDEO_CONTACT_CTA = {
  backgroundImage: {
    alt: "Event experience video production consultation",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
  },
  badge: "Event Video",
  description:
    "Partner with B2B Sales Arrow for professional event experience video production services that transform conferences, trade shows, and corporate events into powerful visual stories that drive engagement long after the event ends.",
  headingLines: ["Ready to Capture Your", "Next Event Experience?"] as [string, string],
  primaryCta: { href: "/contact", label: "Schedule a Consultation", opensModal: true },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: mediaProofLogos,
  secondaryCta: { href: "/case-studies", label: "View Case Studies" },
};

export const EVENT_EXPERIENCE_VIDEO_PAGE = {
  pageId: "service.event-experience-video-production",
  pageName: "Event Experience Video Production",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/event-experience-video-production",
    description:
      "Event experience video production services for conferences, trade shows, product launches, networking receptions, and corporate events.",
    focusKeyphrase: "event video production services",
    secondaryKeywords: [
      "event experience video production",
      "trade show video production",
      "conference video production",
      "event highlight reel production",
    ],
    title: "Event Video Production Services for Corporate Events | B2B Sales Arrow",
  },
} as const;
