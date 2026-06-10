import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const LIVE_STREAMING_HERO = {
  description:
    "Deliver seamless live streaming experiences for conferences, trade shows, webinars, and corporate events with multi-camera production, branded visuals, and reliable technical support.",
  primaryCta: {
    href: "/contact",
    label: "Stream Your Event",
  },
  secondaryCta: null,
  title: "Event Live Streaming Services for\nCorporate Events, Conferences & Trade Shows",
};

export { GLOBAL_PROOF_STATS as LIVE_STREAMING_PROOF_BAR } from "../../shared";

export const LIVE_STREAMING_WHY = {
  description:
    "As a hybrid event solutions company, we combine the credibility of in-person presence with the reach of digital access, connecting in-room and remote audiences simultaneously. Your content reaches more stakeholders without increasing venue footprint, travel cost, or logistical complexity.",
  imageUrl: "/images/services/media-production-1.avif",
  titleLine1: "Hybrid Event",
  titleLine2: "Solutions",
};

export const LIVE_STREAMING_DELIVERABLES = {
  heading: "Live Streaming Services",
  headingHighlight: "Live Streaming",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Dynamic live streams with multiple camera angles for keynotes, panels, and product launches.",
      icon: "Video",
      id: "multi-camera",
      image: "/images/services/media-production-1.avif",
      title: "Multi-Camera Live Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "YouTube Live, LinkedIn Live, Vimeo, custom RTMP, private portals, multi-platform simultaneous streaming available.",
      icon: "Globe",
      id: "platform",
      image: "/images/services/media-production-2.avif",
      title: "Platform Management",
    },
    {
      color: "bg-brand-primary",
      description: "Speaker names, session titles, sponsor overlays, and live branded transitions.",
      icon: "Layers",
      id: "graphics",
      image: "/images/events/servicenow_2026.avif",
      title: "Real-Time Graphics and Lower Thirds",
    },
    {
      color: "bg-brand-blue",
      description: "Q&A, polls, moderated chat, and interactive tools for remote audiences.",
      icon: "MessageSquare",
      id: "engagement",
      image: "/images/events/event_other_2.avif",
      title: "Live Audience Engagement",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Sessions archived for post-event webinars, gated content, social clips, and internal use.",
      icon: "Archive",
      id: "archive",
      image: "/images/services/media-production-2.avif",
      title: "Recording and Archive Delivery",
    },
    {
      color: "bg-brand-primary",
      description:
        "Planning, testing, live troubleshooting, backup workflows, and on-site technical coordination.",
      icon: "ShieldCheck",
      id: "support",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "Global Technical Support",
    },
  ],
};

export const LIVE_STREAMING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_FAQ = {
  faqs: [
    {
      answer:
        "Corporate live streaming is the professional broadcast of business events to remote audiences via digital platforms, using professional cameras, lighting, audio, graphics, and platform management.",
      id: "what-is",
      question: "What is corporate live streaming?",
    },
    {
      answer:
        "Redundancy at every level: backup internet, secondary encoding hardware, backup streaming pathways, and a live technical team monitoring throughout. Mission-critical events get a full technical rehearsal 24–48 hours before broadcast.",
      id: "reliability",
      question: "How do you ensure reliability?",
    },
    {
      answer:
        "A live stream broadcasts an in-person event to remote viewers. A hybrid event is designed for simultaneous in-person and virtual participation, with interactivity and programming planned for both groups equally.",
      id: "hybrid-vs-stream",
      question: "What is the difference between live stream and hybrid event?",
    },
  ],
  heading: "Live Streaming FAQs",
  headingHighlight: "Streaming FAQs",
};

export const LIVE_STREAMING_PAGE = {
  pageId: "service.live-streaming-services",
  pageName: "Event Live Streaming Services",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/event-live-streaming-services",
    description:
      "Professional corporate live streaming and hybrid event production, multi-camera broadcasts for conferences, launches, town halls, and investor events. Global reach. Broadcast quality.",
    focusKeyphrase: "hybrid event solutions company",
    secondaryKeywords: [
      "virtual event solutions company",
      "corporate live streaming",
      "live event video production company",
    ],
    title: "Corporate Live Streaming and Hybrid Event Solutions | B2B Sales Arrow",
  },
} as const;

export const LIVE_STREAMING_SPOTLIGHT = {
  ctaLabel: "Take Your Event Live",
  description:
    "Audiences have come to expect live event production services, so they can tune in from anywhere. Power Plus Productions has years of expertise in live event production. We provide scalable live event production solutions for corporate conferences, entertainment, and sporting events, using high-quality streaming, multiple camera angles, real-time interaction, and wide content distribution.",
  titleLine1: "Virtual and Live",
  titleLine2: "Streaming Event Services",
  triggerContactModal: true,
  videoUrl: "/videos/hero-gtc-2026.mp4",
};

export const LIVE_STREAMING_WHY_CHOOSE_US = {
  eyebrow: "Why B2B Sales Arrow",
  heading: "Professional Event Live Streaming for Modern Corporate Events",
  headingHighlight: "Live Streaming",
  reasons: [
    {
      description:
        "Today's events are no longer limited by venue capacity or geography. With professional event live streaming services, businesses can connect with remote audiences, increase event participation, and maximize engagement across multiple digital platforms.",
      id: "global-reach",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "Break Geographic Limits",
    },
    {
      description:
        "We deliver end-to-end live streaming solutions for corporate conferences, trade shows, product launches, webinars, networking sessions, and executive events, managing every aspect of event streaming setup, camera operations, audio, branded visuals, platform integration, and live technical support.",
      id: "end-to-end",
      image: "/images/services/media-production-1.avif",
      title: "End-to-End Production Management",
    },
    {
      description:
        "Whether you are hosting an in-person, hybrid, or fully virtual event, our corporate live streaming services ensure a smooth viewing experience with broadcast-level quality and reliable event delivery.",
      id: "broadcast-quality",
      image: "/images/home/why-choose-us/technology_led_delivery.avif",
      title: "Any Format. Broadcast Quality.",
    },
  ],
};
