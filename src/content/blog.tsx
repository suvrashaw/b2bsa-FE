import type { ClientLogoItem } from "@/content/home";

export const BLOG_HERO = {
  description:
    "Ideas should help you make better decisions — not fill a content calendar. Practical intelligence on trade show strategy, performance marketing, B2B video, market research, and pipeline growth. Written for senior marketers who need substance, not noise.",
  eyebrow: "B2B GROWTH INSIGHTS",
  image: {
    alt: "Content and insights hub",
    loaderAlt: "Loading",
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
  },
  primaryCtaLabel: "Read the Latest Insights",
  secondaryCtaLabel: "Subscribe for Growth Intelligence",
  showPreloader: false,
  stat: {
    icon: "BookOpen",
    label: "Articles Published",
    value: "120+",
  },
  title: (
    <>
      Thought Leadership for <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Enterprise Growth Teams
      </span>
    </>
  ),
};

export const BLOG_LOGOS: ClientLogoItem[] = [
  { alt: "Event strategy category", id: "event-strategy", src: "/logos/blog/event-strategy.svg" },
  { alt: "Booth design category", id: "booth-design", src: "/logos/blog/booth-design.svg" },
  {
    alt: "Performance marketing category",
    id: "performance-marketing",
    src: "/logos/blog/performance-marketing.svg",
  },
  { alt: "Video production category", id: "video-production", src: "/logos/blog/video-production.svg" },
  { alt: "Market research category", id: "market-research", src: "/logos/blog/market-research.svg" },
  { alt: "Lead generation category", id: "lead-generation", src: "/logos/blog/lead-generation.svg" },
  { alt: "Case studies category", id: "case-studies", src: "/logos/blog/case-studies.svg" },
];

export const BLOG_POSTS = {
  blogs: [
    {
      category: "Event Strategy",
      date: "Jan 15, 2026",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
      title: "Trade Show ROI — How to Measure Real Return From Your Event Investment",
    },
    {
      category: "Booth Design",
      date: "Jan 08, 2026",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      title: "Trade Show Booth Design — How to Choose the Right Format for Your Goals",
    },
    {
      category: "Performance Marketing",
      date: "Dec 22, 2025",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
      title: "B2B LinkedIn Ads — The Complete Enterprise Guide",
    },
    {
      category: "Lead Generation",
      date: "Dec 10, 2025",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      title: "MQL vs SQL — Why the Distinction Determines Revenue",
    },
    {
      category: "Event Strategy",
      date: "Nov 28, 2025",
      id: 5,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      title: "GITEX 2025 — The Complete Exhibitor Guide for Enterprise B2B Brands",
    },
  ],
  ctaLabel: "Browse All Articles",
  eyebrow: "INSIGHTS & INTELLIGENCE",
  heading: (
    <>
      Expert Strategies to Maximize <br />
      <span className="text-brand-primary">Your Global Event Solutions</span>
    </>
  ),
};

export const BLOG_CONTACT = {
  description:
    "Monthly growth intelligence on event strategy, performance marketing, pipeline generation, and market intelligence — delivered to 4,000+ enterprise marketers.",
  eyebrow: "",
  form: {
    ctaLabel: "Subscribe to Growth Intelligence",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
  },
  heading: (
    <>
      Subscribe to <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Growth Intelligence
      </span>
    </>
  ),
  illustration: null,
};

export const BLOG_PAGE = {
  pageId: "blog",
  pageName: "Blogs",
  pageType: "resourceIndex",
  seo: {
    canonicalPath: "/blogs",
    description:
      "Practical B2B growth insights on trade show strategy, performance marketing, video production, lead generation, and market research — written for enterprise marketers and sales leaders.",
    focusKeyphrase: "B2B marketing blog",
    secondaryKeywords: [
      "enterprise marketing insights",
      "trade show strategy blog",
      "market research",
      "video production company",
    ],
    title: "B2B Growth Insights and Strategy Blog | B2B Sales Arrow",
  },
} as const;
