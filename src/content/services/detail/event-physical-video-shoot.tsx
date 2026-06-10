import { GLOBAL_CASE_STUDIES } from "@/content/shared";

const mediaProofLogos = [
  { alt: "Airtel", src: "/logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/logos/circle-csc.svg" },
  { alt: "United Payments", src: "/logos/circle-united-payments.svg" },
] as const;

export const EVENT_PHYSICAL_VIDEO_IMAGE_HERO = {
  description:
    "Capture the most impactful moments of your event with high-quality on-site video production - from interviews and client testimonials to thought leadership bytes, speaker highlights, and branded event coverage.",
  images: [
    "/images/recent-events/event_other_2.avif",
    "/images/recent-events/event_other_3.avif",
    "/images/recent-events/event_other_4.avif",
  ],
  poster: "/images/recent-events/event_other_2.avif",
  primaryCta: { href: "/contact", label: "Book a Video Shoot" },
  title: "Professional On-Site Video Shoots for Events That Deserve to Be Remembered",
  videoSrc: "/videos/hero-gtc-2026.mp4",
};

export const EVENT_PHYSICAL_VIDEO_PROOF_BAR = [
  "250+ events",
  "$1.2B+ pipeline influenced",
  "500+ event video productions",
  "98% client retention",
  "40+ countries",
];

export const EVENT_PHYSICAL_VIDEO_INTRO = {
  description:
    "From keynote sessions and brand experiences to interviews, testimonials, and thought leadership bytes, on-site video shoots help you capture the most valuable moments of your event in a professional and engaging format. This service transforms live event interactions into high-quality video content that can be used for marketing, branding, internal communications, post-event promotions, and long-term business growth.\n\nAt B2B Sales Arrow, we provide end-to-end on-site video shoot coverage tailored to your event goals. Whether you want to showcase customer experiences, capture executive insights, highlight speaker sessions, or create memorable event recaps, our team ensures every important moment is filmed with clarity, creativity, and purpose.",
  heading: "Professional On-Site Video Shoot Coverage for Events",
  headingHighlight: "On-Site Video Shoot",
};

export const EVENT_PHYSICAL_VIDEO_DELIVERABLES = {
  ctaLabel: "Plan Your Shoot",
  heading: "What We Deliver Through On-Site Video Shoot Coverage",
  headingHighlight: "We Deliver",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Capture meaningful conversations with speakers, attendees, partners, or internal teams to create authentic event-driven content.",
      icon: "Mic",
      id: "event-interview-videos",
      image:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b814f2?auto=format&fit=crop&q=80&w=1200",
      title: "Event Interview Videos",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Record on-site customer feedback and success stories that build trust and strengthen your brand credibility.",
      icon: "MessageSquare",
      id: "client-testimonial-shoots",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Client Testimonial Shoots",
    },
    {
      color: "bg-brand-primary",
      description:
        "Film short expert-led insights from founders, executives, or speakers to position your brand as an industry authority.",
      icon: "Users2",
      id: "thought-leadership-video-bytes",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      title: "Thought Leadership Video Bytes",
    },
    {
      color: "bg-brand-blue",
      description:
        "Showcase keynote moments, impactful quotes, and presentation snippets that can be repurposed for marketing and post-event engagement.",
      icon: "Presentation",
      id: "speaker-highlight-videos",
      image:
        "https://images.unsplash.com/photo-1475721027187-40247339488a?auto=format&fit=crop&q=80&w=1200",
      title: "Speaker Highlight Videos",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Turn your event into a polished summary video that captures the atmosphere, audience response, and key moments in one compelling story.",
      icon: "Film",
      id: "event-recap-videos",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      title: "Event Recap Videos",
    },
    {
      color: "bg-brand-primary",
      description:
        "Document branded booths, installations, activations, and interactions to highlight how your audience experienced the event.",
      icon: "Camera",
      id: "brand-experience-coverage",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Brand Experience Coverage",
    },
    {
      color: "bg-brand-blue",
      description:
        "Professionally record panel sessions and expert discussions for future use across social media, internal sharing, or gated content.",
      icon: "Users",
      id: "panel-discussion-coverage",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200",
      title: "Panel Discussion Coverage",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Capture on-site leadership messages, welcome notes, or post-event reflections that add a strong brand voice to your event communication.",
      icon: "UserPlus",
      id: "leadership-message-videos",
      image:
        "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80&w=1200",
      title: "Leadership Message Videos",
    },
    {
      color: "bg-brand-primary",
      description:
        "Create short-form event videos designed for quick sharing across LinkedIn, Instagram, YouTube, and other digital channels.",
      icon: "Share2",
      id: "social-media-event-clips",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      title: "Social Media Event Clips",
    },
    {
      color: "bg-brand-blue",
      description:
        "Film candid preparation moments, team coordination, and production details to add authenticity and humanize your event story.",
      icon: "Sparkles",
      id: "behind-the-scenes-event-content",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      title: "Behind-the-Scenes Event Content",
    },
  ],
};

export const EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN = {
  phases: [
    {
      description:
        "We align the event goal, audience, content priorities, shot requirements, speaker access, and delivery timelines before the shoot.",
      title: "Event Brief and Content Goals",
    },
    {
      description:
        "We define interviews, speaker clips, booth coverage, social cut-downs, B-roll, and recap footage so the event day is focused.",
      title: "Shot List and Production Map",
    },
    {
      description:
        "We plan cameras, audio, lighting, crew roles, venue access, and backup workflows around the realities of the live event space.",
      title: "Crew and Equipment Planning",
    },
    {
      description:
        "Our crew captures the high-value moments while coordinating around sessions, attendees, speakers, and brand activations.",
      title: "On-Site Shoot Direction",
    },
    {
      description:
        "Footage is organized into a practical post-production roadmap for highlight reels, testimonials, clips, and long-form assets.",
      title: "Post-Event Asset Roadmap",
    },
  ],
  title: "Event Video Production Plan",
};

export const EVENT_PHYSICAL_VIDEO_PROCESS = {
  phases: [
    {
      description: "Professional lighting and audio planning for each interview, session, and event environment.",
      title: "4K Cinema Camera Capture",
    },
    {
      description: "Multi-camera coverage for larger events, keynotes, panel discussions, and brand activations.",
      title: "Multi-Camera Event Production",
    },
    {
      description: "On-location crew planning across major event cities and international conference venues.",
      title: "Studio and On-Location Crews",
    },
    {
      description: "Motion graphics, color grading, sound design, captions, and social formats after the shoot.",
      title: "Post-Production Delivery",
    },
    {
      description: "Aerial footage for venues, outdoor experiences, and campus environments where approved.",
      title: "Drone Footage",
    },
  ],
  title: "Production Capabilities",
};

export const EVENT_PHYSICAL_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US = {
  heading: "Why Choose B2B Sales Arrow for On-Site Video Shoot Coverage?",
  headingHighlight: "B2B Sales Arrow",
  items: [
    {
      description:
        "We manage pre-production, event-day filming, post-production, and content delivery so every stage stays coordinated.",
      icon: "Award",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "End-to-End Shoot Management",
    },
    {
      description:
        "Our crews understand live event constraints, speaker schedules, booth activity, audience movement, and venue rules.",
      icon: "Users2",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
      title: "Live Event Expertise",
    },
    {
      description:
        "We combine professional cameras, audio, lighting, and direction to turn real event moments into polished business content.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      title: "Production-Ready Quality",
    },
    {
      description:
        "We support corporate and trade show video projects across major international event destinations.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200",
      title: "Global Event Coverage",
    },
  ],
};

export const EVENT_PHYSICAL_VIDEO_BLOGS_SECTION = {
  heading: "Blogs",
};

export const EVENT_PHYSICAL_VIDEO_FAQ = {
  faqs: [
    {
      answer:
        "Yes. Interview footage, product demos, speaker clips, testimonials, and B-roll captured on location can feed directly into corporate films, social content, and post-event recap videos.",
      id: "combined-with-other-services",
      question: "Can this be combined with other video production services?",
    },
    {
      answer:
        "We support projects across major exhibition and conference markets, including Dubai, Las Vegas, London, Barcelona, Singapore, Frankfurt, and Sydney.",
      id: "crew-locations",
      question: "Where do you deploy crews?",
    },
    {
      answer:
        "Raw footage can usually be prepared within 24 to 48 hours. Edited selects, social clips, and full post-production timelines are confirmed during the brief.",
      id: "footage-turnaround",
      question: "How quickly do we receive the footage?",
    },
    {
      answer:
        "Yes. Drone operators and permissions are handled according to local regulations, venue policies, and airspace restrictions.",
      id: "drone-operators",
      question: "Are drone operators certified?",
    },
    {
      answer:
        "Yes. We capture client testimonials, speaker interviews, executive messages, and attendee conversations directly at the event venue.",
      id: "onsite-interviews-testimonials",
      question: "Can you film interviews and testimonials during the event?",
    },
    {
      answer:
        "Yes. We can deliver vertical, square, and landscape clips for LinkedIn, Instagram, YouTube, internal sharing, and paid campaigns.",
      id: "social-clips",
      question: "Do you create social media event clips?",
    },
    {
      answer:
        "We can cover keynote highlights, panel discussions, booth interactions, product demos, brand activations, leadership messages, and behind-the-scenes footage.",
      id: "event-moments",
      question: "What event moments should we capture?",
    },
  ],
  heading: "Frequently Asked Questions About On-Site Video Shoots",
  headingHighlight: "Asked Questions",
};

export const EVENT_PHYSICAL_VIDEO_RELATED_SERVICES = [
  {
    href: "/services/media-production/event-experience-video-production",
    title: "Event Experience Video Production",
  },
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
];

export const EVENT_PHYSICAL_VIDEO_CONTACT_CTA = {
  backgroundImage: {
    alt: "On-site event video shoot consultation",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1920",
  },
  badge: "On-Site Production",
  description:
    "Capture your event properly and turn live interactions into video assets your marketing, sales, and leadership teams can keep using long after the show closes.",
  headingLines: ["Ready to Capture", "Your Event On-Site?"] as [string, string],
  primaryCta: { href: "/contact", label: "Book a Video Shoot", opensModal: true },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: mediaProofLogos,
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
};

export const EVENT_PHYSICAL_VIDEO_PAGE = {
  pageId: "service.event-physical-video-shoot",
  pageName: "Event Physical Video Shoot",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/event-physical-video-shoot",
    description:
      "Professional on-site video shoot coverage for events, including interviews, testimonials, speaker highlights, recaps, brand coverage, and social media event clips.",
    focusKeyphrase: "event physical video shoot",
    secondaryKeywords: [
      "on-site video production",
      "event video shoot",
      "trade show video shoot",
      "event filming company",
    ],
    title: "Professional On-Site Event Video Shoot Services | B2B Sales Arrow",
  },
} as const;
