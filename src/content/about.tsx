export const ABOUT_HERO = {
  description:
    "B2B Sales Arrow is not a vendor. We are a strategic growth partner — bringing event solutions, video production, performance marketing, and market research under one team with one commercial brief and clear accountability to outcomes.",
  eyebrow: "WHO WE ARE",
  image: {
    alt: "B2B Sales Arrow team and office",
    loaderAlt: "Loading",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  primaryCtaHref: "/contact",
  primaryCtaLabel: "Request a Strategy Consultation",
  secondaryCtaHref: "#leadership",
  secondaryCtaLabel: "Meet the Team",
  showPreloader: false,
  stat: {
    icon: "Globe2",
    label: "Countries Served",
    value: "40+",
  },
  title: <>We Are the Growth Partner Your Enterprise Deserves</>,
};

export const ABOUT_ORIGIN_TIMELINE = {
  description: "The problem, the model, and the operating standard behind B2B Sales Arrow.",
  heading: "How B2B Sales Arrow Was Built",
  items: [
    {
      content: (
        <div className="prose prose-sm md:prose-base max-w-none text-brand-charcoal/80">
          <p>
            B2B Sales Arrow was founded to solve a problem we encountered repeatedly across
            enterprise marketing engagements: significant investment in events, campaigns, and
            market presence — but fragmented execution, poor measurement, and a persistent
            disconnect between marketing activity and sales outcomes.
          </p>
        </div>
      ),
      title: "Fragmented Execution",
    },
    {
      content: (
        <div className="prose prose-sm md:prose-base max-w-none text-brand-charcoal/80">
          <p>
            We built a model where event solutions, video production, performance marketing, and
            market research work together under one accountable team — and where every program is
            designed from the brief stage with commercial outcomes as the primary objective. The
            numbers below reflect what that model produces.
          </p>
        </div>
      ),
      title: "One Accountable Model",
    },
  ],
};

const ABOUT_LINKEDIN_URL = "https://www.linkedin.com/company/b2b-sales-arrow/";

export const ABOUT_TEAM = {
  heading: "The Leadership Behind the Results",
  members: [
    {
      bio: "Suvra shapes B2B Sales Arrow's unified growth model across event solutions, media, performance marketing, and market intelligence. He works with enterprise teams to connect event investment with measurable pipeline outcomes from the first brief. His focus is accountability: every program should clarify audience, execution, data, and commercial impact.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      linkedin: ABOUT_LINKEDIN_URL,
      name: "Suvra Shaw",
      role: "Founder & CEO",
    },
    {
      bio: "Sumant leads operations across booth builds, on-ground execution, and multi-market delivery. He coordinates production, logistics, media teams, and delivery partners so enterprise programs move cleanly from plan to show floor. His role keeps complex international work practical, documented, and accountable.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      linkedin: ABOUT_LINKEDIN_URL,
      name: "Sumant Shaw",
      role: "Co-Founder & COO",
    },
    {
      bio: "Elena leads performance marketing strategy for enterprise campaigns that support events, lead generation, and pipeline acceleration. She builds funnel plans around ICP clarity, conversion quality, and attribution rather than vanity metrics. Her work connects digital demand with sales follow-up and measurable opportunity creation.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      linkedin: ABOUT_LINKEDIN_URL,
      name: "Elena Rodriguez",
      role: "VP of Digital Marketing",
    },
    {
      bio: "David leads market intelligence and research programs that help clients understand accounts, sectors, and buying committees before outreach begins. He focuses on human-verified data quality, contact discovery, and market context across global regions. His team gives event and sales programs a cleaner target list and stronger commercial starting point.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      linkedin: ABOUT_LINKEDIN_URL,
      name: "David Chen",
      role: "Director of Market Intelligence",
    },
  ],
};

export const ABOUT_PRESENCE = {
  cities: [
    { color: "cyan", lat: 40.7128, lng: -74.006, name: "New York", size: 0.1 },
    { color: "cyan", lat: 51.5074, lng: -0.1278, name: "London", size: 0.1 },
    { color: "cyan", lat: 25.2048, lng: 55.2708, name: "Dubai", size: 0.1 },
    { color: "cyan", lat: 1.3521, lng: 103.8198, name: "Singapore", size: 0.1 },
    { color: "cyan", lat: -33.8688, lng: 151.2093, name: "Sydney", size: 0.1 },
    { color: "cyan", lat: 43.651_07, lng: -79.347_015, name: "Toronto", size: 0.1 },
  ],
  description:
    "Core offices in New York, London, Dubai, Singapore, Sydney, and Toronto — supported by a delivery and execution network spanning 40+ markets across North America, EMEA, APAC, the Middle East, and Latin America.",
  title: "Where We Operate",
};

export const ABOUT_STATS = {
  attribution: "— B2B Sales Arrow Mission",
  heading: <>Our Mission</>,
  quote:
    "To transform how B2B enterprise brands connect with their buyers — through innovative event experiences, high-quality media, precision digital marketing, and intelligent market intelligence — delivering measurable commercial outcomes that justify every investment and advance our clients' growth objectives.",
  stats: [
    {
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
      icon: "TrendingUp",
      label: "Enterprise Events",
      value: "250+",
    },
    {
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
      icon: "Globe2",
      label: "Countries Covered",
      value: "40+",
    },
    {
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
      icon: "BarChart3",
      label: "Influenced Pipeline",
      value: "$1.2B+",
    },
    {
      bg: "bg-linear-to-br from-[#1b5e82] to-[#164e6b]",
      icon: "Users",
      label: "Enterprise Leads",
      value: "15,000+",
    },
    {
      bg: "bg-linear-to-br from-[#306f75] to-[#255c61]",
      icon: "Target",
      label: "Client Retention",
      value: "98%",
    },
    {
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
      icon: "Target",
      label: "Booth Designs",
      value: "500+",
    },
  ],
};

export const ABOUT_RECENT_EVENTS = {
  badgeLabel: "RECENT",
  ctaLabel: "View Results",
  description:
    "Recent enterprise programs where our event, lead generation, and market execution teams delivered measurable commercial outcomes.",
  events: [
    {
      date: "2025",
      id: "world-aviation-festival-2025",
      image: "/images/recent-events/frame-219.png",
      location: "Lisbon, Portugal",
      title: "World Aviation Festival",
    },
    {
      date: "2025",
      id: "sibos-amsterdam-2025",
      image: "/images/recent-events/frame-222.png",
      location: "Amsterdam, Netherlands",
      title: "SIBOS",
    },
    {
      date: "2025",
      id: "money-20-20-europe-2025",
      image: "/images/recent-events/frame-223.png",
      location: "Amsterdam, Netherlands",
      title: "Money 20/20",
    },
  ],
  heading: <>Where We Have Been Delivering This Year</>,
};

export const ABOUT_VALUES = {
  description:
    "Commercial outcomes, quality, genuine partnership, and local execution discipline guide every program.",
  eyebrow: "OUR PRINCIPLES",
  heading: "What We Believe In",
  reasons: [
    {
      description:
        "We measure success by commercial outcomes — qualified conversations, measurable pipeline, and revenue impact. Not campaign volume or impression counts.",
      id: "accountability",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
      title: "Accountability Over Activity",
    },
    {
      description:
        "Quality, relevance, and conversion — not vanity numbers that look impressive on a report but do not move a sales team forward.",
      id: "precision",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      title: "Precision Over Volume",
    },
    {
      description:
        "Enterprise growth work requires more than execution. It requires context, genuine trust, and shared accountability for outcomes across the life of the program.",
      id: "partnership",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Partnership Over Vendor Relationships",
    },
    {
      description:
        "International strategy combined with regional market knowledge, cultural context, and on-ground delivery capability across every market we serve.",
      id: "global",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      title: "Global Thinking, Local Execution",
    },
  ],
};

export const ABOUT_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Request a Strategy Consultation",
  title:
    "If you need event presence, media content, performance marketing, or market intelligence connected to measurable commercial outcomes — start with one conversation.",
};

export const ABOUT_PAGE = {
  pageId: "about",
  pageName: "About Us",
  pageType: "company",
  seo: {
    canonicalPath: "/about",
    description:
      "B2B Sales Arrow is a global enterprise growth agency delivering event solutions, video production, performance marketing, and market research across 40+ countries. Built to connect strategy to measurable commercial outcomes.",
    focusKeyphrase: "B2B growth agency",
    secondaryKeywords: [
      "enterprise marketing company",
      "global B2B agency",
      "B2B Sales Arrow",
      "event solutions company",
    ],
    title: "About B2B Sales Arrow | Enterprise Growth Partners",
  },
} as const;
