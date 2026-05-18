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
  heading: "The Edit is Where the Story Happens",
  reasons: [
    {
      description:
        "We select the strongest material, structure the narrative, and shape a complete video with clear intent and pacing.",
      id: "story",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      title: "Story-Led Editing",
    },
    {
      description:
        "Professional colour grading, sound design, and motion graphics — production values that match your enterprise brand positioning.",
      id: "quality",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      title: "Enterprise Production Quality",
    },
  ],
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
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      title: "Full Edit and Assembly",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Technical consistency plus professional colour grading for a polished, premium visual look.",
      icon: "Palette",
      id: "colour",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Colour Correction and Grading",
    },
    {
      color: "bg-brand-primary",
      description: "Branded titles, lower thirds, animated text, and data callouts.",
      icon: "Sparkles",
      id: "motion",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      title: "Motion Graphics and Title Design",
    },
    {
      color: "bg-brand-blue",
      description:
        "Accurate subtitles improving accessibility, LinkedIn performance, and viewer retention.",
      icon: "Type",
      id: "subtitles",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Subtitles and Captions",
    },
    {
      color: "bg-brand-cyan",
      description:
        "15s, 30s, 60s, vertical, square, and widescreen versions for LinkedIn, YouTube, Instagram, paid campaigns, and sales outreach.",
      icon: "Share2",
      id: "social",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
      title: "Social Cut-Downs and Format Adaptation",
    },
    {
      color: "bg-brand-primary",
      description: "Audio clean-up, voice balancing, licensed music, and sound effects.",
      icon: "Music",
      id: "sound",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Sound Design and Music",
    },
  ],
};

export const VIDEO_EDITING_TIMELINE = {
  headers: ["Deliverable", "Typical Turnaround"],
  rows: [
    {
      deliverable: "Single video edit (under 5 min)",
      "typical turnaround": "3–5 business days",
    },
    {
      deliverable: "Event highlight reel",
      "typical turnaround": "5–8 business days",
    },
    {
      deliverable: "Multi-video package (5+ videos)",
      "typical turnaround": "10–15 business days",
    },
    {
      deliverable: "Ongoing high-volume program",
      "typical turnaround": "Custom workflow + weekly delivery capacity agreed upfront",
    },
  ],
  title: "Turnaround Times",
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

import { Pencil, Sparkles, Star } from "lucide-react";

export const VIDEO_EDITING_PRICING = {
  description: "High-end post-production packages tailored to B2B teams",
  tag: "Video Editing Plans",
  tiers: [
    {
      color: "blue",
      description: "Ideal for event highlight reels and single product updates",
      features: [
        "1 Fully Edited Video (up to 5 min)",
        "Premium Color Grading & Correction",
        "Professional Sound Design & Mix",
        "2 Rounds of Revisions",
        "3-5 Business Days Delivery",
      ],
      icon: <Pencil className="h-5 w-5" />,
      name: "Starter Edit",
      price: 499,
    },
    {
      color: "primary",
      description: "Perfect for high-engagement, active marketing campaigns",
      features: [
        "3 Edited Brand or Demo Videos",
        "5 Social Media Cut-downs (9:16 / 1:1)",
        "Motion Graphics & Lower Thirds",
        "Subtitle & Caption Creation",
        "48-Hour Priority Turnaround",
      ],
      icon: <Sparkles className="h-5 w-5" />,
      name: "Growth Suite",
      popular: true,
      price: 1299,
    },
    {
      color: "cyan",
      description: "Scale your entire corporate media engine seamlessly",
      features: [
        "Dedicated Lead Post-Production Editor",
        "Unlimited Monthly Editing Volume",
        "Custom 3D Animations & Graphics",
        "Direct Slack & Project Management Access",
        "Priority Same-Day Delivery Support",
      ],
      icon: <Star className="h-5 w-5" />,
      name: "Enterprise Engine",
      price: 2999,
    },
  ],
  title: "Creative Video Editing Pricing",
};
