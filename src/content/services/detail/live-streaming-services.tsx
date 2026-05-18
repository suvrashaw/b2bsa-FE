import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const LIVE_STREAMING_HERO = {
  description:
    "Our corporate live streaming and hybrid event solutions bring your event to buyers, partners, and employees worldwide — with broadcast quality and technical reliability from setup to archive.",
  title: "Live Streaming and Hybrid Event Solutions That Extend Your Event to Every Screen",
};

export { GLOBAL_PROOF_STATS as LIVE_STREAMING_PROOF_BAR } from "../../shared";

export const LIVE_STREAMING_WHY = {
  description:
    "As a hybrid event solutions company, we combine the credibility of in-person presence with the reach of digital access — connecting in-room and remote audiences simultaneously. Your content reaches more stakeholders without increasing venue footprint, travel cost, or logistical complexity.",
  imageUrl:
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1600",
  titleLine1: "Hybrid Event",
  titleLine2: "Solutions",
};

export const LIVE_STREAMING_DELIVERABLES = {
  heading: "Live Streaming Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Dynamic live streams with multiple camera angles for keynotes, panels, and product launches.",
      icon: "Video",
      id: "multi-camera",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Multi-Camera Live Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "YouTube Live, LinkedIn Live, Vimeo, custom RTMP, private portals — multi-platform simultaneous streaming available.",
      icon: "Globe",
      id: "platform",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      title: "Platform Management",
    },
    {
      color: "bg-brand-primary",
      description: "Speaker names, session titles, sponsor overlays, and live branded transitions.",
      icon: "Layers",
      id: "graphics",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      title: "Real-Time Graphics and Lower Thirds",
    },
    {
      color: "bg-brand-blue",
      description: "Q&A, polls, moderated chat, and interactive tools for remote audiences.",
      icon: "MessageSquare",
      id: "engagement",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Live Audience Engagement",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Sessions archived for post-event webinars, gated content, social clips, and internal use.",
      icon: "Archive",
      id: "archive",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Recording and Archive Delivery",
    },
    {
      color: "bg-brand-primary",
      description:
        "Planning, testing, live troubleshooting, backup workflows, and on-site technical coordination.",
      icon: "ShieldCheck",
      id: "support",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      title: "Global Technical Support",
    },
  ],
};

export const LIVE_STREAMING_EVENTS = {
  items: [
    "Trade shows and exhibition presentations",
    "Corporate town halls and all-hands",
    "Product launches and announcements",
    "Conferences and panel discussions",
    "Investor relations events",
    "Hybrid internal events — in-room and remote audiences combined",
  ],
  title: "Events We Stream",
};

export const LIVE_STREAMING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_FAQ = {
  faqs: [
    {
      answer:
        "Corporate live streaming is the professional broadcast of business events to remote audiences via digital platforms — using professional cameras, lighting, audio, graphics, and platform management.",
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
        "A live stream broadcasts an in-person event to remote viewers. A hybrid event is designed for simultaneous in-person and virtual participation — with interactivity and programming planned for both groups equally.",
      id: "hybrid-vs-stream",
      question: "What is the difference between live stream and hybrid event?",
    },
  ],
  heading: "Live Streaming FAQs",
};

export const LIVE_STREAMING_PAGE = {
  pageId: "service.live-streaming-services",
  pageName: "Live Streaming Services",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/live-streaming-services",
    description:
      "Professional corporate live streaming and hybrid event production — multi-camera broadcasts for conferences, launches, town halls, and investor events. Global reach. Broadcast quality.",
    focusKeyphrase: "hybrid event solutions company",
    secondaryKeywords: [
      "virtual event solutions company",
      "corporate live streaming",
      "live event video production company",
    ],
    title: "Corporate Live Streaming and Hybrid Event Solutions | B2B Sales Arrow",
  },
} as const;
