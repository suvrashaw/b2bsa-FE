import { GLOBAL_CASE_STUDIES } from "@/content/shared";

const mediaProofLogos = [
  { alt: "Airtel", src: "/client-logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/client-logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/client-logos/circle-csc.svg" },
  { alt: "United Payments", src: "/client-logos/circle-united-payments.svg" },
] as const;

export const VIRTUAL_VIDEO_IMAGE_HERO = {
  description:
    "Produce engaging virtual events, fireside chats, webinars, and panel discussions with professional production, branded visuals, and seamless audience experiences.",
  images: [
    "/images/services/media-production-1.avif",
    "/images/services/media-production-2.avif",
    "/images/events/adobe_summit_2026.avif",
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
  imageUrl: "/images/services/media-production-1.avif",
  label: "Virtual Events",
  titleLine1: "Professional Virtual Video",
  titleLine2: "Event Production Services",
};

export const VIRTUAL_VIDEO_DELIVERABLES = {
  ctaLabel: "Contact Our Team",
  heading: "What's Included in Our Virtual Video Event Production Services",
  headingHighlight: "Virtual Video Event Production Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Produce engaging fireside chat sessions with professional speaker management, branded visuals, live moderation, and seamless virtual delivery.",
      icon: "MessageSquare",
      id: "fireside-chat-production",
      image: "/images/home/testimonials/testimonial-1.avif",
      title: "Fireside Chat Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Manage multi-speaker virtual panel discussions with audience interaction features, technical support, and smooth conversation flow.",
      icon: "Users",
      id: "panel-discussion-production",
      image: "/images/home/testimonials/testimonial-2.avif",
      title: "Panel Discussion Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Deliver professional webinars with branded presentations, audience engagement tools, speaker coordination, and reliable event streaming.",
      icon: "MonitorPlay",
      id: "webinar-production-services",
      image: "/images/services/media-production-1.avif",
      title: "Webinar Production Services",
    },
    {
      color: "bg-brand-blue",
      description:
        "Create polished executive conversations and leadership discussions optimized for virtual audiences and digital platforms.",
      icon: "Mic",
      id: "executive-virtual-interviews",
      image: "/images/home/testimonials/testimonial-3.avif",
      title: "Executive Virtual Interviews",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Connect physical and virtual audiences through hybrid event video production solutions designed for maximum audience engagement.",
      icon: "Radio",
      id: "hybrid-event-production",
      image: "/images/events/event_other_1.avif",
      title: "Hybrid Event Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Enhance online events with custom overlays, branded graphics, intro videos, lower thirds, and visual storytelling elements.",
      icon: "Palette",
      id: "virtual-event-branding",
      image: "/images/services/media-production-2.avif",
      title: "Virtual Event Branding",
    },
  ],
};

export const VIRTUAL_VIDEO_CAPABILITIES = {
  phases: [
    {
      description:
        "Speaker scheduling, virtual green rooms, session flow, and show timing for multi-speaker events.",
      title: "Multi-Speaker Virtual Event Management",
    },
    {
      description:
        "Professional video workflows for crisp virtual sessions, recordings, and post-event distribution.",
      title: "HD and 4K Virtual Video Production",
    },
    {
      description:
        "Live moderation support for intros, transitions, audience prompts, and session continuity.",
      title: "Live Event Moderation Support",
    },
    {
      description:
        "Q&A, polls, chat, surveys, virtual networking, and audience participation workflows.",
      title: "Virtual Audience Engagement Tools",
    },
    {
      description:
        "Custom overlays, lower thirds, title cards, branded backgrounds, and visual event identity.",
      title: "Branded Event Graphics and Overlays",
    },
    {
      description:
        "Production support for speaker issues, streaming checks, platform disruptions, and live fixes.",
      title: "Real-Time Technical Troubleshooting",
    },
    {
      description:
        "Streaming support across Zoom, Microsoft Teams, LinkedIn Live, YouTube Live, Vimeo, and custom platforms.",
      title: "Platform Integration and Streaming Support",
    },
    {
      description:
        "Recorded sessions prepared into recaps, clips, full-session archives, and marketing assets.",
      title: "Recording and Post-Event Editing",
    },
    {
      description:
        "Production support for webinars, virtual conferences, executive sessions, and online launches.",
      title: "Webinar and Conference Production Support",
    },
    {
      description:
        "Hybrid workflows that connect onsite speakers, remote speakers, and distributed audiences.",
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
  headingHighlight: "B2B Sales Arrow",
  items: [
    {
      description:
        "We manage planning, production, streaming, audience engagement, and technical support for smooth virtual event execution.",
      icon: "Globe2",
      image: "/images/home/why-choose-us/proven_execution.avif",
      title: "End-to-End Virtual Event Management",
    },
    {
      description:
        "Our team understands the requirements of executive webinars, leadership sessions, virtual conferences, and enterprise online events.",
      icon: "Award",
      image: "/images/home/testimonials/testimonial-4.avif",
      title: "Corporate Virtual Event Expertise",
    },
    {
      description:
        "We deliver broadcast-quality virtual experiences with polished visuals, branded graphics, and seamless technical execution.",
      icon: "TrendingUp",
      image: "/images/services/media-production-2.avif",
      title: "Professional Production Quality",
    },
    {
      description:
        "From speaker onboarding to live troubleshooting, our team ensures uninterrupted virtual event delivery.",
      icon: "Users2",
      image: "/images/home/why-choose-us/technology_led_delivery.avif",
      title: "Reliable Technical Support",
    },
    {
      description:
        "We help brands improve audience participation through interactive engagement tools, Q&A management, and virtual networking features.",
      icon: "TrendingUp",
      image: "/images/events/event_other_2.avif",
      title: "Interactive Audience Experiences",
    },
    {
      description:
        "We provide scalable virtual event production services tailored to webinars, panel discussions, hybrid events, and executive sessions.",
      icon: "Globe2",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "Flexible Virtual & Hybrid Solutions",
    },
  ],
};

export const VIRTUAL_VIDEO_BLOGS_SECTION = {
  heading: "Latest Insights on Virtual Event Production & Webinar Strategy",
  headingHighlight: "Latest Insights",
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
  headingHighlight: "Asked Questions",
};

export const VIRTUAL_VIDEO_RELATED_SERVICES = [
  {
    href: "/services/media-production/event-live-streaming-services",
    title: "Event Live Streaming Services",
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
];

export const VIRTUAL_VIDEO_CONTACT_CTA = {
  backgroundImage: {
    alt: "Virtual event production consultation",
    src: "/images/home/hero/home_hero_bg.avif",
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
