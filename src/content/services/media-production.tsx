import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MEDIA_HERO = {
  description:
    "Before a buyer books a meeting, they judge your brand by what they see. Our video production company creates content that earns trust, and keeps earning it long after the shoot.",
  title: "B2B Media Production That Builds Enterprise Authority Before the First Sales Call",
};

export { GLOBAL_PROOF_STATS as MEDIA_PROOF_BAR } from "../shared";

export const MEDIA_SERVICES = {
  heading: "What We Produce",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Highlight reels, testimonial clips, speaker coverage, and post-event recap content, extending the ROI of your event investment beyond the show floor.",
      href: "/services/media-production/event-video-production",
      icon: "Camera",
      id: "event-video",
      image: "/images/recent-events/event_other_1.avif",
      title: "Event Video Production",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Brand films, product explainers, executive interviews, investor content, and sales enablement videos built for long B2B sales cycles.",
      href: "/services/media-production/corporate-video-production",
      icon: "Clapperboard",
      id: "corporate-video",
      image: "/images/home/services/media-production-1.avif",
      title: "Corporate Video Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Raw footage transformed into polished assets with colour grading, captions, motion graphics, and multi-format delivery.",
      href: "/services/media-production/video-editing-services",
      icon: "MonitorPlay",
      id: "video-editing",
      image: "/images/home/services/media-production-2.avif",
      title: "Video Editing Services",
    },
    {
      color: "bg-brand-blue",
      description:
        "Multi-camera corporate live streaming for conferences, launches, and hybrid events.",
      href: "/services/media-production/live-streaming-services",
      icon: "Radio",
      id: "live-streaming",
      image: "/images/recent-events/event_other_2.avif",
      title: "Live Streaming",
    },
  ],
};

export const MEDIA_WHY = {
  description:
    "Strategy decides why footage matters. We shape every video around the buyer's pain point, the product's core value, and the action your audience should take after watching. Beautiful footage is a means, commercial impact is the objective.",
  imageUrl: "/images/recent-events/event_other_3.avif",
  titleLine1: "We Don't Just Film , ",
  titleLine2: "We Tell Stories That Sell",
};

export const MEDIA_PROCESS = {
  heading: "Production Capabilities",
  phases: [
    {
      description: "Professional lighting and audio on every shoot.",
      title: "4K Cinema Camera Capture",
    },
    {
      description: "Globally deployed multi-camera production for events of any scale.",
      title: "Multi-Camera Event Production",
    },
    {
      description: "Across 40+ markets.",
      title: "Studio and On-Location Crews",
    },
    {
      description: "Full post-production suite for polished, broadcast-grade assets.",
      title: "Motion Graphics, Colour Grading, and Sound Design",
    },
    {
      description: "For outdoor events and campus environments.",
      title: "Drone Footage",
    },
  ],
};

export const MEDIA_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MEDIA_FAQ = {
  faqs: [
    {
      answer:
        "B2B media production covers all video and content production services created for business-to-business brands, corporate films, event video, demos, live streaming, and post-production designed for enterprise marketing and sales enablement.",
      id: "what-is",
      question: "What is B2B media production?",
    },
    {
      answer: "Yes, combining shoots reduces cost and logistical complexity significantly.",
      id: "combined",
      question: "Can you handle event and corporate video in the same project?",
    },
    {
      answer:
        "Yes, 15-second, 30-second, and 60-second cuts for LinkedIn, YouTube, Instagram, and paid campaigns. Vertical and square formats on request.",
      id: "social",
      question: "Do you deliver social media formats?",
    },
  ],
  heading: "Media Production FAQs",
};

export const MEDIA_PAGE = {
  pageId: "service.media-production",
  pageName: "Media Production",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/media-production",
    description:
      "Enterprise B2B media production, event video, corporate films, product demos, live streaming and video editing. Content your sales and marketing teams keep using.",
    focusKeyphrase: "video production company",
    secondaryKeywords: [
      "video production services",
      "commercial video production company",
      "media and production company",
      "B2B media production",
    ],
    title: "B2B Media Production and Video Production Company | B2B Sales Arrow",
  },
} as const;
