import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const CORPORATE_VIDEO_HERO = {
  description:
    "Your corporate video should make your market believe you are the right partner, before a sales conversation begins.",
  title: "Corporate Video Production Solutions That Command Enterprise Attention",
};

export const CORPORATE_VIDEO_PROOF_BAR = [
  "250+ events",
  "$1.2B+ pipeline influenced",
  "500+ corporate video production service",
  "98% client retention",
  "100+ live streaming services",
  "40+ countries",
];

export const CORPORATE_VIDEO_INTRO = {
  description: (
    <>
      Corporate video production is the process of creating video content specifically for business
      purposes. Unlike traditional advertising or entertainment media, corporate videos are designed
      to support organizational goals such as marketing, training, internal communication, or
      stakeholder engagement.
      <br />
      <br />
      The process typically involves multiple stages: planning, scripting, production, and
      distribution. The aim is to ensure that videos are aligned with brand messaging and tailored
      to their target audiences. These videos can take many forms, from short promotional clips and
      product explainers to long-form training modules or event documentation.
      <br />
      <br />
      Their purpose is both to inform and to influence behavior, whether that means motivating
      employees, attracting customers, or building trust with partners. By combining visuals, sound,
      and narrative, corporate video production provides companies with a versatile communication
      tool that is both scalable and impactful.
    </>
  ),
  heading: "What Is Corporate Video Production?",
  headingHighlight: "Corporate Video Production",
};

export const CORPORATE_VIDEO_WHY = {
  description:
    "Research shows 87% of video marketers report video has directly increased sales. For enterprise B2B, corporate video shortens the time buyers need to understand your value, builds decision-maker confidence before the first meeting, and creates consistent messaging that scales across every channel.",
  imageUrl: "/images/home/services/media-production-1.avif",
  titleLine1: "How Corporate Video",
  titleLine2: "Accelerates Your Sales Cycle",
};

export const CORPORATE_VIDEO_INDUSTRIES = {
  description:
    "We’re all about crafting standout video content across a range of industries. From finance to tech and energy, we've got you covered!",
  heading: "Video production tailored to your industry.",
  headingHighlight: "your industry",
  industries: [
    {
      description:
        "Lead the market with a San Francisco video production company that transforms software into captivating stories. Drive user adoption faster.",
      title: "Tech Video Production",
    },
    {
      description:
        "Build credibility with a video production agency that simplifies complex offerings. Use recruiting videos to attract top talent and foster trust.",
      title: "Financial Services Video Production",
    },
    {
      description:
        "Inspire donors and volunteers with heartfelt recruiting videos. Our video production agency highlights your mission’s true impact.",
      title: "Nonprofit Video Production",
    },
    {
      description:
        "Showcase innovation with commercial video production that highlights sustainability. Let our production teams power your story for the future.",
      title: "Energy Company Video Production",
    },
    {
      description:
        "Elevate your products through commercial video production that boosts brand recognition. Our production teams spark customer engagement.",
      title: "CPG & Retail Video Production",
    },
  ],
};

export const CORPORATE_VIDEO_PORTFOLIO = {
  heading: "Check out our video production portfolio.",
  headingHighlight: "video production portfolio",
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const CORPORATE_VIDEO_DELIVERABLES = {
  heading: "What We Produce in Our Corporate Video Production Services",
  headingHighlight: "We Produce",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Who you are, what you stand for, and why buyers should trust you, for websites, investor comms, and enterprise credibility.",
      icon: "Star",
      id: "brand",
      image: "/images/home/services/media-production-2.avif",
      title: "Brand and Culture Films",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Complex platforms and solutions simplified into clear video stories buyers understand in 2–3 minutes, eliminating friction from every sales qualification call.",
      icon: "Cpu",
      id: "product",
      image: "/images/home/services/media-production-1.avif",
      title: "Product and Solution Explainer Videos",
    },
    {
      color: "bg-brand-primary",
      description:
        "Leadership perspectives and industry commentary that build credibility and generate the most-shared B2B content format on LinkedIn.",
      icon: "Users",
      id: "thought",
      image: "/images/home/testimonials/testimonial-1.avif",
      title: "Executive Interview and Thought Leadership Series",
    },
    {
      color: "bg-brand-blue",
      description:
        "Polished content for funding narratives, annual reviews, and stakeholder briefings.",
      icon: "TrendingUp",
      id: "investor",
      image: "/images/home/services/performance-marketing.avif",
      title: "Investor and Board Presentation Videos",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Demo videos, product walkthroughs, and objection-handling clips that help sales teams explain value faster and more consistently.",
      icon: "Zap",
      id: "sales",
      image: "/images/home/services/performance-marketing-1.avif",
      title: "Sales Enablement Video Content",
    },
    {
      color: "bg-brand-primary",
      description:
        "Real outcomes from real customers, the most trusted content format in B2B purchasing decisions.",
      icon: "MessageSquare",
      id: "testimonial",
      image: "/images/home/testimonials/testimonial-2.avif",
      title: "Customer Testimonial and Case Study Films",
    },
  ],
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
        "Yes, script development and messaging strategy are included in our full corporate video production service.",
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
        "Yes, client offices, conference venues, studios, product facilities, and trade show events.",
      id: "location",
      question: "Can we film on location?",
    },
  ],
  heading: "Corporate Video FAQs",
  headingHighlight: "Video FAQs",
};

export const CORPORATE_VIDEO_PAGE = {
  pageId: "service.corporate-video-production",
  pageName: "Corporate Video Production",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/media-production/corporate-video-production",
    description:
      "Enterprise corporate video production, brand films, product explainers, executive interviews, investor content and sales enablement videos that build authority and shorten sales cycles.",
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
