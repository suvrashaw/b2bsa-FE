export const THANK_YOU_HERO = {
  description:
    "Your inquiry has landed safely. Our growth architects will review your message and get back to you within 24 business hours.",
  eyebrow: "MESSAGE RECEIVED",
  image: {
    alt: "Partnership and success",
    loaderAlt: "Loading",
    src: "/images/about/hero.avif",
  },
  primaryCtaLabel: "Explore Services",
  secondaryCtaLabel: "Read Our Blog",
  showPreloader: false,
  stat: {
    icon: "CheckCircle",
    label: "Response Time",
    value: "< 24h",
  },
  title: (
    <>
      Thank You for <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Reaching Out
      </span>
    </>
  ),
} as const;

export const THANK_YOU_SERVICES = {
  ctaLabel: "Learn More",
  eyebrow: "WHILE YOU WAIT",
  heading: (
    <>
      Explore What We <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Do Best
      </span>
    </>
  ),
  serviceLabel: "Service",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "End-to-end exhibition management across 40+ countries, from booth design to on-floor lead capture.",
      icon: "Globe",
      id: "global-events",
      image: "/images/home/hero/home_hero_bg.avif",
      title: "Global Event Solutions",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Cinematic brand storytelling and high-fidelity corporate content that builds authority.",
      icon: "MonitorPlay",
      id: "media",
      image: "/images/services/media-production-2.avif",
      title: "Media Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Data-driven SEO, paid advertising, and LinkedIn campaigns engineered to scale enterprise pipeline.",
      icon: "Rocket",
      id: "performance",
      image: "/images/services/performance-marketing-1.avif",
      title: "Performance Marketing",
    },
    {
      color: "bg-brand-blue",
      description:
        "Precision-targeted acquisition strategies for high-value B2B accounts ready to buy.",
      icon: "Users",
      id: "lead-gen",
      image: "/images/services/sql-generation-revised.avif",
      title: "Sales Qualified Lead Generation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Human-powered intelligence, data augmentation, and validation to fuel confident decisions.",
      icon: "Lightbulb",
      id: "market-research",
      image: "/images/services/database-research-revised.avif",
      title: "Market Research",
    },
  ],
};

export const THANK_YOU_BLOGS = {
  blogs: [
    {
      category: "Strategy",
      date: "Oct 12, 2025",
      id: 1,
      image: "/images/blog/thumbnails/trade-show-booth-trends-2026.avif",
      title: "The Future of Experiential B2B Marketing",
    },
    {
      category: "Design",
      date: "Sep 28, 2025",
      id: 2,
      image: "/images/blog/thumbnails/hiring-trade-show-booth-company.avif",
      title: "Why Standard Trade Show Booths Are Failing",
    },
    {
      category: "Media",
      date: "Sep 15, 2025",
      id: 3,
      image: "/images/events/event_other_1.avif",
      title: "Architecting a High-Converting Media Strategy",
    },
  ],
  ctaLabel: "View All Articles",
  eyebrow: "STAY SHARP",
  heading: (
    <>
      Intelligence to Read <br />
      <span className="text-brand-primary">While You Wait</span>
    </>
  ),
};
