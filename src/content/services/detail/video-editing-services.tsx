import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const VIDEO_EDITING_HERO = {
  description:
    "Raw footage has potential. Edited footage has a job. We turn your event recordings, demos, and brand content into polished video editing deliverables ready for every channel your team uses.",
  title: "Professional Video Editing Services That Transform Raw Footage Into Revenue Assets",
};

export { GLOBAL_PROOF_STATS as VIDEO_EDITING_PROOF_BAR } from "../../shared";

export const VIDEO_EDITING_WHY = {
  description:
    "Great footage without great editing is invisible. The edit is where pacing, emotion, and commercial intent are built into the final asset. Our post-production team works from a clear brief — what should the viewer feel, understand, and do after watching — and structures every cut around that outcome.",
  imageUrl: "/images/home/services/media-production-2.avif",
  titleLine1: "The Edit is Where",
  titleLine2: "the Story Happens",
};

export const VIDEO_EDITING_DELIVERABLES = {
  heading: "Our Post-Production Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Selecting the strongest material, structuring the narrative, and shaping a complete video with clear intent and pacing.",
      icon: "Scissors",
      id: "edit",
      image: "/images/home/services/media-production-1.avif",
      title: "Full Edit and Assembly",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Technical consistency plus professional colour grading for a polished, premium visual look.",
      icon: "Palette",
      id: "colour",
      image: "/images/home/services/media-production-2.avif",
      title: "Colour Correction and Grading",
    },
    {
      color: "bg-brand-primary",
      description: "Branded titles, lower thirds, animated text, and data callouts.",
      icon: "Sparkles",
      id: "motion",
      image: "/images/recent-events/servicenow_2026.avif",
      title: "Motion Graphics and Title Design",
    },
    {
      color: "bg-brand-blue",
      description:
        "Accurate subtitles improving accessibility, LinkedIn performance, and viewer retention.",
      icon: "Type",
      id: "subtitles",
      image: "/images/recent-events/event_other_3.avif",
      title: "Subtitles and Captions",
    },
    {
      color: "bg-brand-cyan",
      description:
        "15s, 30s, 60s, vertical, square, and widescreen versions for LinkedIn, YouTube, Instagram, paid campaigns, and sales outreach.",
      icon: "Share2",
      id: "social",
      image: "/images/home/services/performance-marketing-1.avif",
      title: "Social Cut-Downs and Format Adaptation",
    },
    {
      color: "bg-brand-primary",
      description: "Audio clean-up, voice balancing, licensed music, and sound effects.",
      icon: "Music",
      id: "sound",
      image: "/images/recent-events/inma_2026.avif",
      title: "Sound Design and Music",
    },
  ],
};

export const VIDEO_EDITING_PROCESS = {
  phases: [
    {
      description:
        "Typical turnaround: 3–5 business days for a focused edit with assembly, polish, and export-ready delivery.",
      title: "Single Video Edit (Under 5 Minutes)",
    },
    {
      description:
        "Typical turnaround: 5–8 business days for event recap storytelling, pacing, graphics, music, and final channel-ready outputs.",
      title: "Event Highlight Reel",
    },
    {
      description:
        "Typical turnaround: 10–15 business days for coordinated editing across multiple assets, cut-downs, review rounds, and export formats.",
      title: "Multi-Video Package (5+ Videos)",
    },
    {
      description:
        "Custom workflow with agreed weekly delivery capacity, dedicated editing support, and rollout planning for always-on content programs.",
      title: "Ongoing High-Volume Program",
    },
  ],
  title: "Turnaround and Delivery Windows",
};

export const VIDEO_EDITING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const VIDEO_EDITING_FAQ = {
  faqs: [
    {
      answer:
        "Yes — we edit footage from any source. We advise honestly on what quality output is achievable from the material provided.",
      id: "external-footage",
      question: "Can you edit footage shot by someone else?",
    },
    {
      answer:
        "MP4, MOV, MXF, ProRes, AVCHD, and most camera raw formats. Secure transfer links provided for large uploads.",
      id: "formats",
      question: "What file formats do you accept?",
    },
    {
      answer:
        "Frame-accurate review platform — you comment directly on the video at specific timecodes. Standard projects include two revision rounds.",
      id: "feedback",
      question: "How do we give feedback?",
    },
  ],
  heading: "Video Editing FAQs",
};

export const VIDEO_EDITING_PAGE = {
  pageId: "service.video-editing-services",
  pageName: "Video Editing Services",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/video-editing-services",
    description:
      "B2B professional video editing — colour grading, motion graphics, social cut-downs, subtitles, and post-production. Fast turnaround. Enterprise-scale volume.",
    focusKeyphrase: "video editing services",
    secondaryKeywords: [
      "professional video editing",
      "corporate video editing",
      "video production services",
      "post-production",
    ],
    title: "Professional Video Editing Services for B2B Brands | B2B Sales Arrow",
  },
} as const;
