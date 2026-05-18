import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const CORPORATE_VIDEO_HERO = {
  description:
    "Your corporate video should make your market believe you are the right partner — before a sales conversation begins.",
  title: "Corporate Video Production Solutions That Command Enterprise Attention",
};

export { GLOBAL_PROOF_STATS as CORPORATE_VIDEO_PROOF_BAR } from "../../shared";

export const CORPORATE_VIDEO_WHY = {
  description:
    "Research shows 87% of video marketers report video has directly increased sales. For enterprise B2B, corporate video shortens the time buyers need to understand your value, builds decision-maker confidence before the first meeting, and creates consistent messaging that scales across every channel.",
  imageUrl:
    "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80&w=1600",
  titleLine1: "How Corporate Video",
  titleLine2: "Accelerates Your Sales Cycle",
};

export const CORPORATE_VIDEO_DELIVERABLES = {
  heading: "What We Produce",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Who you are, what you stand for, and why buyers should trust you — for websites, investor comms, and enterprise credibility.",
      icon: "Star",
      id: "brand",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      title: "Brand and Culture Films",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Complex platforms and solutions simplified into clear video stories buyers understand in 2–3 minutes — eliminating friction from every sales qualification call.",
      icon: "Cpu",
      id: "product",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      title: "Product and Solution Explainer Videos",
    },
    {
      color: "bg-brand-primary",
      description:
        "Leadership perspectives and industry commentary that build credibility and generate the most-shared B2B content format on LinkedIn.",
      icon: "Users",
      id: "thought",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Executive Interview and Thought Leadership Series",
    },
    {
      color: "bg-brand-blue",
      description:
        "Polished content for funding narratives, annual reviews, and stakeholder briefings.",
      icon: "TrendingUp",
      id: "investor",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Investor and Board Presentation Videos",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Demo videos, product walkthroughs, and objection-handling clips that help sales teams explain value faster and more consistently.",
      icon: "Zap",
      id: "sales",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
      title: "Sales Enablement Video Content",
    },
    {
      color: "bg-brand-primary",
      description:
        "Real outcomes from real customers — the most trusted content format in B2B purchasing decisions.",
      icon: "MessageSquare",
      id: "testimonial",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      title: "Customer Testimonial and Case Study Films",
    },
  ],
};

export const CORPORATE_VIDEO_STRATEGY = {
  headers: ["Content Type", "Purpose"],
  rows: [
    {
      "content type": "Brand Anthem",
      purpose: "Building high-level emotional trust and brand mission",
    },
    {
      "content type": "Product Explainer",
      purpose: "Detailed feature walk-throughs and value proof",
    },
    {
      "content type": "Client Success Story",
      purpose: "Social proof and real-world results validation",
    },
    {
      "content type": "Executive Insight",
      purpose: "Thought leadership and market authority positioning",
    },
  ],
  title: "Video Content Strategy",
};

export const CORPORATE_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const CORPORATE_VIDEO_FAQ = {
  faqs: [
    {
      answer:
        "Brief to delivery: 4–8 weeks for a standard project. Multi-video programs or executive series: 8–16 weeks.",
      id: "timeline",
      question: "How long does production take?",
    },
    {
      answer:
        "Yes — script development and messaging strategy are included in our full corporate video production service.",
      id: "script",
      question: "Do you write the script?",
    },
    {
      answer:
        "Master file, web-optimised version, social formats (16:9, 1:1, and 9:16 vertical). Subtitle files and thumbnails on request.",
      id: "formats",
      question: "What formats are included in delivery?",
    },
    {
      answer:
        "Yes — client offices, conference venues, studios, product facilities, and trade show events.",
      id: "location",
      question: "Can we film on location?",
    },
  ],
  heading: "Corporate Video FAQs",
};

export const CORPORATE_VIDEO_PAGE = {
  pageId: "service.corporate-video-production",
  pageName: "Corporate Video Production",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/corporate-video-production",
    description:
      "Enterprise corporate video production — brand films, product explainers, executive interviews, investor content and sales enablement videos that build authority and shorten sales cycles.",
    focusKeyphrase: "corporate video production solutions",
    secondaryKeywords: [
      "video production company",
      "video production agency",
      "commercial video production company",
      "brand film",
    ],
    title: "Corporate Video Production Solutions for Enterprise B2B Brands | B2B Sales Arrow",
  },
} as const;
