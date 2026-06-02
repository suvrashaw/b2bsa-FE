import { GLOBAL_CASE_STUDIES } from "@/content/shared";

const mediaProofLogos = [
  { alt: "Airtel", src: "/logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/logos/circle-csc.svg" },
  { alt: "United Payments", src: "/logos/circle-united-payments.svg" },
] as const;

export const VIRTUAL_VIDEO_IMAGE_HERO = {
  description:
    "Produce engaging virtual events, fireside chats, webinars, and panel discussions with professional production, branded visuals, and seamless audience experiences.",
  images: [
    "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600",
  ],
  primaryCta: { href: "/contact", label: "Plan Virtual Event" },
  title: "Virtual Video Event Production Services",
};

export const VIRTUAL_VIDEO_PROOF_BAR = [
  "250+ events",
  "500+ video productions",
  "40+ countries",
  "98% client retention",
];

export const VIRTUAL_VIDEO_INTRO = {
  ctaHref: "/contact",
  ctaLabel: "Plan Virtual Event",
  description:
    "Virtual events have become an essential part of modern business communication, helping organizations connect with global audiences through interactive digital experiences. Professional virtual video event production ensures smooth event delivery, high-quality visuals, audience engagement, and reliable technical execution.\n\nAt B2B Sales Arrow, we provide end-to-end virtual video production services for fireside chats, panel discussions, webinars, executive interviews, virtual conferences, and hybrid corporate events. Our production team manages speaker coordination, branded visuals, live streaming support, audience interaction tools, technical management, and post-production editing.\n\nWhether you are hosting a virtual leadership session, product launch, customer webinar, or online networking event, we help create professional and engaging virtual event experiences that strengthen brand visibility and audience participation.",
  imageAlt: "Virtual video event production control room",
  imageUrl:
    "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=1600",
  label: "Virtual Events",
  titleLine1: "Professional Virtual Video",
  titleLine2: "Event Production Services",
};

export const VIRTUAL_VIDEO_DELIVERABLES = {
  ctaLabel: "Contact Our Team",
  heading: "What's Included in Our Virtual Video Event Production Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Produce engaging fireside chat sessions with professional speaker management, branded visuals, live moderation, and seamless virtual delivery.",
      icon: "MessageSquare",
      id: "fireside-chat-production",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      title: "Fireside Chat Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Manage multi-speaker virtual panel discussions with audience interaction features, technical support, and smooth conversation flow.",
      icon: "Users",
      id: "panel-discussion-production",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200",
      title: "Panel Discussion Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Deliver professional webinars with branded presentations, audience engagement tools, speaker coordination, and reliable event streaming.",
      icon: "MonitorPlay",
      id: "webinar-production-services",
      image:
        "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=1200",
      title: "Webinar Production Services",
    },
    {
      color: "bg-brand-blue",
      description:
        "Create polished executive conversations and leadership discussions optimized for virtual audiences and digital platforms.",
      icon: "Mic",
      id: "executive-virtual-interviews",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      title: "Executive Virtual Interviews",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Connect physical and virtual audiences through hybrid event video production solutions designed for maximum audience engagement.",
      icon: "Radio",
      id: "hybrid-event-production",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
      title: "Hybrid Event Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Enhance online events with custom overlays, branded graphics, intro videos, lower thirds, and visual storytelling elements.",
      icon: "Palette",
      id: "virtual-event-branding",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200",
      title: "Virtual Event Branding",
    },
  ],
};

export const VIRTUAL_VIDEO_CAPABILITIES = {
  phases: [
    {
      description: "Speaker scheduling, virtual green rooms, session flow, and show timing for multi-speaker events.",
      title: "Multi-Speaker Virtual Event Management",
    },
    {
      description: "Professional video workflows for crisp virtual sessions, recordings, and post-event distribution.",
      title: "HD and 4K Virtual Video Production",
    },
    {
      description: "Live moderation support for intros, transitions, audience prompts, and session continuity.",
      title: "Live Event Moderation Support",
    },
    {
      description: "Q&A, polls, chat, surveys, virtual networking, and audience participation workflows.",
      title: "Virtual Audience Engagement Tools",
    },
    {
      description: "Custom overlays, lower thirds, title cards, branded backgrounds, and visual event identity.",
      title: "Branded Event Graphics and Overlays",
    },
    {
      description: "Production support for speaker issues, streaming checks, platform disruptions, and live fixes.",
      title: "Real-Time Technical Troubleshooting",
    },
    {
      description: "Streaming support across Zoom, Microsoft Teams, LinkedIn Live, YouTube Live, Vimeo, and custom platforms.",
      title: "Platform Integration and Streaming Support",
    },
    {
      description: "Recorded sessions prepared into recaps, clips, full-session archives, and marketing assets.",
      title: "Recording and Post-Event Editing",
    },
    {
      description: "Production support for webinars, virtual conferences, executive sessions, and online launches.",
      title: "Webinar and Conference Production Support",
    },
    {
      description: "Hybrid workflows that connect onsite speakers, remote speakers, and distributed audiences.",
      title: "Hybrid Event Production Capabilities",
    },
  ],
  title: "Virtual Event Production Capabilities & Technical Expertise",
};

export const VIRTUAL_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 5),
};

export const VIRTUAL_VIDEO_WHY_CHOOSE_US = {
  heading: "Why Choose B2B Sales Arrow for Virtual Video Event Production",
  items: [
    {
      description:
        "We manage planning, production, streaming, audience engagement, and technical support for smooth virtual event execution.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=1200",
      title: "End-to-End Virtual Event Management",
    },
    {
      description:
        "Our team understands the requirements of executive webinars, leadership sessions, virtual conferences, and enterprise online events.",
      icon: "Award",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200",
      title: "Corporate Virtual Event Expertise",
    },
    {
      description:
        "We deliver broadcast-quality virtual experiences with polished visuals, branded graphics, and seamless technical execution.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200",
      title: "Professional Production Quality",
    },
    {
      description:
        "From speaker onboarding to live troubleshooting, our team ensures uninterrupted virtual event delivery.",
      icon: "Users2",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      title: "Reliable Technical Support",
    },
    {
      description:
        "We help brands improve audience participation through interactive engagement tools, Q&A management, and virtual networking features.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
      title: "Interactive Audience Experiences",
    },
    {
      description:
        "We provide scalable virtual event production services tailored to webinars, panel discussions, hybrid events, and executive sessions.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      title: "Flexible Virtual & Hybrid Solutions",
    },
  ],
};

export const VIRTUAL_VIDEO_BLOGS_SECTION = {
  heading: "Latest Insights on Virtual Event Production & Webinar Strategy",
};

export const VIRTUAL_VIDEO_FAQ = {
  faqs: [
    {
      answer:
        "Virtual video event production involves planning, managing, and producing online corporate events such as webinars, fireside chats, panel discussions, and virtual conferences.",
      id: "what-is-virtual-video-event-production",
      question: "What is virtual video event production?",
    },
    {
      answer:
        "Yes. We provide end-to-end webinar production services, including technical setup, speaker management, branding, and audience engagement support.",
      id: "webinar-production-services",
      question: "Do you provide webinar production services?",
    },
    {
      answer:
        "Yes. We specialize in multi-speaker virtual event production for panel discussions, executive conversations, and hybrid conferences.",
      id: "multi-speaker-virtual-events",
      question: "Can you manage multi-speaker virtual events?",
    },
    {
      answer:
        "Yes. We provide hybrid event production services that connect onsite and remote audiences through professional virtual event technology.",
      id: "hybrid-events",
      question: "Do you support hybrid events?",
    },
    {
      answer:
        "We support Zoom, Microsoft Teams, LinkedIn Live, YouTube Live, Vimeo, and custom virtual event platforms.",
      id: "platforms-supported",
      question: "Which platforms do you support?",
    },
  ],
  heading: "Frequently Asked Questions About Virtual Video Event Production",
};

export const VIRTUAL_VIDEO_RELATED_SERVICES = [
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production Services",
  },
  {
    href: "/services/media-production/event-experience-video-production",
    title: "Event Experience Video Production",
  },
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/event-physical-video-shoot",
    title: "Event Physical Video Shoot",
  },
  {
    href: "/services/media-production/video-editing-services",
    title: "Video Editing Services",
  },
];

export const VIRTUAL_VIDEO_CONTACT_CTA = {
  backgroundImage: {
    alt: "Virtual event production consultation",
    src: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=1920",
  },
  badge: "Virtual Production",
  description:
    "Partner with B2B Sales Arrow for professional virtual video event production services that help your brand deliver engaging webinars, fireside chats, panel discussions, and virtual corporate experiences with confidence.",
  headingLines: ["Ready to Produce Your", "Next Virtual Event?"] as [string, string],
  primaryCta: { href: "/contact", label: "Schedule a Consultation", opensModal: true },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: mediaProofLogos,
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
};

export const VIRTUAL_VIDEO_PAGE = {
  pageId: "service.virtual-video-production",
  pageName: "Virtual Video Production",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/virtual-video-production",
    description:
      "Virtual video event production for webinars, fireside chats, panel discussions, executive interviews, virtual conferences, and hybrid corporate events.",
    focusKeyphrase: "virtual video event production",
    secondaryKeywords: [
      "virtual video production",
      "webinar production services",
      "virtual event production",
      "hybrid event production",
    ],
    title: "Virtual Video Event Production Services | B2B Sales Arrow",
  },
} as const;
