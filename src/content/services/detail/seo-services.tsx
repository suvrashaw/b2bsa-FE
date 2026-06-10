import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const SEO_DEFINITION =
  "B2B SEO services: optimising a website to be found by enterprise buyers across a complex, multi-touch purchasing journey, from initial awareness through active vendor evaluation, generating organic pipeline that compounds over time.";

export const SEO_HERO = {
  description:
    "Enterprise buyers search before they buy, at every stage of their decision. Our B2B SEO services build the technical foundation, content depth, and topical authority required to be found and trusted throughout.",
  title: "B2B SEO Services That Build Organic Pipeline, Not Just Traffic",
};

export { GLOBAL_PROOF_STATS as SEO_PROOF_BAR } from "../../shared";

export const SEO_WHY = {
  description:
    "B2B buyers operate in buying committees of 3–7 decision-makers. They research for months using lower-volume but highly specific search terms. They need content at every stage of a long evaluation cycle. Ranking for high-volume consumer keywords is a poor strategic objective for an enterprise brand. The goal is to rank for terms your actual buyers use when they are actively evaluating, and to be credible and authoritative throughout the entire research process.",
  imageUrl: "/images/home/services/database-research-revised.avif",
  titleLine1: "B2B SEO Is Fundamentally",
  titleLine2: "Different From B2C",
};

export const SEO_DELIVERABLES = {
  heading: "Our B2B SEO Services",
  headingHighlight: "B2B SEO Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Crawlability, Core Web Vitals, broken links, redirects, schema markup, sitemaps, and page speed, identifying and fixing technical issues that prevent proper indexing.",
      icon: "Settings",
      id: "technical",
      image: "/images/home/services/database-research-1.avif",
      title: "Technical SEO Audit and Remediation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Identifying terms enterprise buyers use across awareness, consideration, comparison, and purchase stages, mapped to intent, page type, funnel stage, and commercial value.",
      icon: "Search",
      id: "keyword",
      image: "/images/home/services/market-intelligence.avif",
      title: "Keyword Research and Search Intent Mapping",
    },
    {
      color: "bg-brand-primary",
      description:
        "Titles, meta descriptions, headings, URLs, internal linking, schema markup, and body copy, optimised for both search engines and buyers.",
      icon: "FileText",
      id: "on-page",
      image: "/images/home/services/performance-marketing.avif",
      title: "On-Page SEO Optimisation",
    },
    {
      color: "bg-brand-blue",
      description:
        "Pillar pages, service pages, cluster articles, FAQs, and conversion-focused copy, building topical authority and converting qualified visitors.",
      icon: "PenLine",
      id: "content",
      image: "/images/home/services/sql-generation-1.avif",
      title: "Content Strategy and SEO Copywriting",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Ethical link acquisition through digital PR, content partnerships, and industry mentions, quality, relevance, and long-term domain credibility.",
      icon: "Link",
      id: "links",
      image: "/images/home/services/database-research-revised.avif",
      title: "Authority Link Building",
    },
    {
      color: "bg-brand-primary",
      description:
        "Hreflang implementation, regional landing pages, and market-specific keyword strategy for brands operating across multiple geographies.",
      icon: "Globe",
      id: "international",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "International and Local SEO",
    },
    {
      color: "bg-brand-blue",
      description:
        "Rankings, organic traffic, conversions, qualified leads, and pipeline influence, reported with clear commercial context.",
      icon: "BarChart3",
      id: "reporting",
      image: "/images/home/services/sql-generation-revised.avif",
      title: "SEO Reporting and KPI Dashboards",
    },
  ],
};

export const SEO_PROCESS = {
  phases: [
    {
      description:
        "Making the website crawlable, indexable, and fast before any content investment.",
      title: "Technical Foundation",
    },
    {
      description:
        "Pillar-and-cluster content model built around buyer intent across the full purchase journey.",
      title: "Content Architecture",
    },
    {
      description:
        "Quality backlinks, digital PR, and thought leadership content that builds domain credibility over time.",
      title: "Authority Building",
    },
    {
      description:
        "Quarterly strategy refinement based on rankings, organic traffic, qualified leads, and pipeline data.",
      title: "Measurement and Iteration",
    },
  ],
  title: "Our SEO Methodology",
};

export const SEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const SEO_FAQ = {
  faqs: [
    {
      answer:
        "Technical improvements: 4–8 weeks. Organic traffic from content: 4–9 months. Consistent organic pipeline: 12–24 months in competitive markets. SEO is the most durable and cost-efficient long-term B2B channel, but it requires patience and consistency.",
      id: "timeline",
      question: "How long does B2B SEO take to produce results?",
    },
    {
      answer:
        "Yes, SEO copywriting and content architecture are included in the full service. We write service pages, pillar articles, blog posts, FAQs, and conversion-focused copy.",
      id: "content",
      question: "Do you write the content as well?",
    },
    {
      answer:
        "Technical SEO: infrastructure, crawlability, Core Web Vitals, site speed, schema. On-page SEO: visible content, titles, headings, body copy, internal links. Both are required.",
      id: "technical-vs-onpage",
      question: "What is the difference between technical and on-page SEO?",
    },
    {
      answer:
        "Yes, every engagement begins with a comprehensive technical SEO audit identifying the highest-priority issues affecting crawlability, indexing, and organic visibility.",
      id: "audit",
      question: "Do you provide a technical audit before starting?",
    },
    {
      answer:
        "Ranking movement, organic traffic quality, conversion rate, qualified leads generated, and pipeline influenced, connected to actual commercial outcomes, not just search metrics.",
      id: "roi",
      question: "How do you measure SEO ROI?",
    },
  ],
  heading: "B2B SEO FAQs",
  headingHighlight: "SEO FAQs",
};

export const SEO_PAGE = {
  pageId: "service.seo-services",
  pageName: "SEO Services",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/seo-services",
    description:
      "Enterprise B2B SEO services, technical SEO audits, keyword strategy, content architecture, and authority building. Organic pipeline for enterprise buyers at every stage of a complex sales cycle.",
    focusKeyphrase: "B2B SEO services",
    secondaryKeywords: [
      "SEO agency",
      "technical SEO audit services",
      "SEO digital marketing",
      "enterprise SEO",
    ],
    title: "B2B SEO Services and Enterprise SEO Agency | B2B Sales Arrow",
  },
} as const;
