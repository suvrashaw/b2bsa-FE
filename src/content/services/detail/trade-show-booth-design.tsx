import { Layers, Layout, Maximize } from "lucide-react";

import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const BOOTH_DESIGN_HERO = {
  description:
    "We design custom trade show booths that buyers stop at deliberately — because the space, the story, and the sales system inside it were built together from day one.",
  title: "Trade Show Booth Design That Converts Foot Traffic Into Pipeline",
};

export { GLOBAL_PROOF_STATS as BOOTH_DESIGN_PROOF_BAR } from "../../shared";

export const BOOTH_DESIGN_SHOWCASE_ITEMS = [
  {
    cta: { href: "/contact", label: "Get 10×10 Booth Quote" },
    descriptions: [
      "100 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Small",
    heading: "10×10",
    id: "showcase-10x10",
    image: "/images/booth/10x10.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 10×20 Booth Quote" },
    descriptions: [
      "200 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Medium",
    heading: "10×20",
    id: "showcase-10x20",
    image: "/images/booth/10x20.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 10×30 Booth Quote" },
    descriptions: [
      "400 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Large",
    heading: "10×30",
    id: "showcase-10x30",
    image: "/images/booth/10x30.png",
  },
  {
    cta: { href: "/contact", label: "Get 20×20 Booth Quote" },
    descriptions: [
      "400 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Large",
    heading: "20×20",
    id: "showcase-20x20",
    image: "/images/booth/20x20.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 20×30 Booth Quote" },
    descriptions: [
      "600 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "X-Large",
    heading: "20×30",
    id: "showcase-20x30",
    image: "/images/booth/20x30.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 20×40 Booth Quote" },
    descriptions: [
      "600 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "X-Large",
    heading: "20×40",
    id: "showcase-20x40",
    image: "/images/booth/20x40.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 30×30 Booth Quote" },
    descriptions: [
      "900 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Island",
    heading: "30×30",
    id: "showcase-30x30",
    image: "/images/booth/30x30.png",
  },
  {
    cta: { href: "/contact", label: "Get 30×40 Booth Quote" },
    descriptions: [
      "900 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Island",
    heading: "30×40",
    id: "showcase-30x40",
    image: "/images/booth/30x40.png",
  },
  {
    cta: { href: "/contact", label: "Get 40×40 Booth Quote" },
    descriptions: [
      "1600 sq ft",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    eyebrow: "Mega",
    heading: "40×40",
    id: "showcase-40x40",
    image: "/images/booth/40x40.jpg",
  },
];

export const BOOTH_DESIGN_STATS = {
  description:
    "At B2B Sales Arrow, we specialize in designing exceptional booths that attract, engage, and drive meaningful conversations. With our expertise in AI-VR integration, we bring your brand to life in ways that leave a lasting impression. We've delivered exceptional experiences across industries, from tech giants to global brands, creating tradeshow booth design that aren't just seen—they're remembered.",
  items: [
    { label: "Countries Served", value: "30+" },
    { label: "Global Events Handled", value: "300+" },
    { label: "SQLs Delivered", value: "2,500+" },
    { label: "Years of B2B Experience", value: "10+" },
  ],
  title: "Introduction to Our Services",
};

export const BOOTH_DESIGN_WHY = {
  ctaHref: "/contact",
  ctaLabel: "Request a Design Quote",
  description:
    "At B2B Sales Arrow, we design custom trade show booths that stop the right buyers deliberately — because the space, the story, and the sales system inside it were built together from day one. Every square foot is engineered around buyer psychology and commercial conversion, not aesthetics alone.",
  imageAlt: "Custom trade show booth design by B2B Sales Arrow",
  imageUrl:
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1600",
  label: "Our Services",
  titleLine1: "Introduction to Our",
  titleLine2: "Design Services",
};

export const BOOTH_DESIGN_SPOTLIGHT = {
  description:
    "A generic trade show display occupies floor space. It rarely creates a reason to stop. In a hall where 300 exhibitors compete for the same buyer attention, average design is effectively invisible.\n\nThe gap between a booth that generates badge scans and one that generates qualified meetings is almost entirely a design question: is the space engineered around buyer psychology and sales conversion, or around how it looks in a 3D render?",
  imageAlt: "Empty trade show booth without footfall",
  imageUrl:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600",
  titleLine1: "Why Generic Booth Design",
  titleLine2: "Costs You Qualified Leads",
};

export const BOOTH_DESIGN_DELIVERABLES = {
  heading: "Our Trade Show Booth Design Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We design booth layouts around how attendees actually move through a crowded exhibition floor — entrance angles, demo zones, meeting areas, and visual anchors placed to increase qualified engagement.",
      icon: "box",
      id: "architecture",
      image:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1200",
      title: "Spatial Architecture and Traffic Flow",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Your exhibition booth design should be unmistakably yours from 30 feet away — translating brand identity into large-format graphics, messaging hierarchy, and surface treatments.",
      icon: "palette",
      id: "branding",
      image:
        "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80&w=1200",
      title: "Graphic Design and Brand Integration",
    },
    {
      color: "bg-brand-primary",
      description:
        "Touchscreens, live product demos, and digital storytelling that turn passive floor visits into active brand engagement.",
      icon: "cpu",
      id: "digital",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200",
      title: "Interactive and Digital Display Integration",
    },
    {
      color: "bg-brand-blue",
      description:
        "For complex products that cannot be shown on a trade show floor — immersive technology that lets buyers explore what they cannot see.",
      icon: "monitor",
      id: "ar-vr",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200",
      title: "AR/VR Experience Design",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Private meeting rooms, semi-private discussion areas, and live demo zones — planned as primary commercial requirements, not afterthoughts, to move qualified prospects from curiosity to serious conversation.",
      icon: "users",
      id: "planning",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200",
      title: "Meeting Room and Demo Zone Planning",
    },
    {
      color: "bg-brand-primary",
      description:
        "The most underused commercial tool in exhibition stand design — accent lighting, screen placement, and material contrast that increase dwell time and elevate brand premium.",
      icon: "sun",
      id: "lighting",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200",
      title: "Lighting and Atmosphere Engineering",
    },
  ],
};

export const BOOTH_DESIGN_FORMATS_SECTION = {
  eyebrow: "Formats",
  heading: "Booth Sizes and Formats We Design",
  services: [
    {
      color: "bg-brand-blue",
      description: "Regional shows, first-time exhibitors, and satellite presences.",
      icon: "Layers",
      id: "booth-design-10x10",
      image: "/images/booth/10x30.png",
      title: "10x10 Booth (100 sq ft)",
    },
    {
      color: "bg-brand-cyan",
      description: "Product demos with visitor journey and conversation zone.",
      icon: "Monitor",
      id: "booth-design-10x20",
      image: "/images/booth/20x30.jpg",
      title: "10x20 Inline (200 sq ft)",
    },
    {
      color: "bg-brand-primary",
      description: "Premium four-sided visibility with demos, meetings, and AV zones.",
      icon: "Target",
      id: "booth-design-20x20",
      image: "/images/booth/20x40.jpg",
      title: "20x20 Island (400 sq ft)",
    },
    {
      color: "bg-brand-blue",
      description:
        "Executive meeting suite plus lower engagement zone for major global shows.",
      icon: "Users",
      id: "booth-design-double-deck",
      image: "/images/booth/30x40.png",
      title: "Double-Deck Structure",
    },
    {
      color: "bg-brand-cyan",
      description: "Fully bespoke flagship builds for maximum commercial impact.",
      icon: "Sparkles",
      id: "booth-design-custom",
      image: "/images/booth/40x40.jpg",
      title: "Custom Environments",
    },
  ],
};

export const BOOTH_DESIGN_PROCESS = {
  phases: [
    {
      description:
        "Budget and goal alignment. We understand your commercial objectives, event brief, audience, and success metrics before any design work begins.",
      title: "Phase 1: Deep-Dive Discovery",
    },
    {
      description:
        "Storyboarding the brand experience. We map how visitors move, feel, and think through every stage of the booth journey.",
      title: "Phase 2: Narrative Design",
    },
    {
      description:
        "3D rendering and iterative feedback. Full visualisation of the space — structure, graphics, lighting, and interaction zones reviewed with your team.",
      title: "Phase 3: Visual Prototyping",
    },
    {
      description:
        "Material sourcing and builder vetting. Materials, finishes, and fabrication partners selected for quality, durability, and logistics practicality.",
      title: "Phase 4: Expert Curation",
    },
    {
      description:
        "Pre-build validation for zero errors. Structural review, compliance check, and pre-assembly quality gate before production begins.",
      title: "Phase 5: Performance Testing",
    },
    {
      description:
        "Global shipping and on-site assembly. Packaging, customs, venue delivery, and installation managed end-to-end.",
      title: "Phase 6: Tactical Deployment",
    },
    {
      description:
        "Final 'white-glove' inspection and delivery. Every detail checked against the approved design before the show opens.",
      title: "Phase 7: Elite Handover",
    },
    {
      description:
        "Deconstruction and storage management. Breakdown, packing, return logistics, and reuse planning for future events.",
      title: "Phase 8: Post-Event Recovery",
    },
  ],
  title: "From Brief to Build — Our 8-Phase Booth Design Process",
};

export const BOOTH_DESIGN_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_FAQ = {
  faqs: [
    {
      answer:
        "Booth design is critical because it creates the first impression of your brand. A well-designed booth attracts attention, communicates value instantly, and encourages meaningful conversations that convert visitors into qualified leads.",
      id: "importance",
      question: "Why is booth design important for trade shows?",
    },
    {
      answer:
        "Costs vary based on size, customization, materials, and location. Small booths may start around $5,000–$10,000, while larger custom exhibits can exceed $50,000 depending on technology, logistics, and design complexity.",
      id: "cost",
      question: "How much does a custom trade show booth design cost?",
    },
    {
      answer:
        "Ideally, planning should begin 3–6 months before the event. Early planning ensures better design execution, cost efficiency, smoother logistics, and compliance with venue deadlines.",
      id: "timeline",
      question: "How soon should I start planning my trade show booth design?",
    },
    {
      answer:
        "Yes. Full-service booth partners manage shipping, customs, venue approvals, installation, dismantling, and on-site coordination—ensuring a stress-free exhibition experience.",
      id: "logistics",
      question: "Can you help with booth logistics and setup?",
    },
    {
      answer:
        "Strong branding, bold visuals, open layouts, interactive elements, and clear messaging help your booth attract attention and increase visitor engagement in competitive show environments.",
      id: "standout",
      question: "How do I make my trade show booth stand out?",
    },
    {
      answer:
        "A strategically designed booth increases qualified traffic, improves brand recall, and boosts lead conversion rates—resulting in stronger pipeline opportunities and measurable event ROI.",
      id: "roi",
      question: "What ROI can I expect from a well-designed booth?",
    },
  ],
  heading: "Trade Show Booth Design FAQs",
};

export const BOOTH_DESIGN_PAGE = {
  pageId: "service.trade-show-booth-design",
  pageName: "Trade Show Booth Design",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/trade-show-booth-design",
    description:
      "500+ custom trade show booth designs delivered globally. We design 10x10 to double-deck exhibition environments that stop foot traffic and convert floor visits into pipeline.",
    focusKeyphrase: "trade show booth design",
    secondaryKeywords: [
      "custom trade show booth",
      "exhibition booth design",
      "trade show displays",
      "10x10 trade show booth",
      "20x20 trade show booth",
    ],
    title: "Custom Trade Show Booth Design for Enterprise Brands | B2B Sales Arrow",
  },
} as const;

export const BOOTH_DESIGN_CREATIVE_PRICING = {
  description: "Custom exhibition stands built for buyer psychology and pipeline conversion",
  tag: "Design Pricing Guide",
  tiers: [
    {
      color: "blue",
      description: "Ideal for custom 10x10 spaces and compact satellite booths",
      features: [
        "10x10 Custom Architecture Design",
        "Spatial Layout & Traffic Flow Planning",
        "Premium Large-Format Graphics Vetting",
        "Fabricator Selection & Vetting Support",
        "Typical Turnaround: 2–3 Weeks",
      ],
      icon: <Layout className="h-5 w-5" />,
      name: "Compact Custom",
      price: 3000,
    },
    {
      color: "primary",
      description: "Perfect for high-impact 20x20 islands or modular systems",
      features: [
        "20x20 Island or Modular Design",
        "Semi-Private Discussion & Keynote Zones",
        "Interactive Digital Display Vetting",
        "Full 3D Visual Walkthrough Prototypes",
        "Fabrication Liaison & On-site Vetting",
      ],
      icon: <Maximize className="h-5 w-5" />,
      name: "Flagship Island",
      popular: true,
      price: 10_000,
    },
    {
      color: "cyan",
      description: "Fully bespoke multi-tier builds and flagship custom stands",
      features: [
        "Double-Deck or Elite Custom Layouts",
        "Integrated Private Executive Suites & VIP Lounge",
        "AR/VR Experience & Spatial Audio Design",
        "Dedicated Lead Architect Allocation",
        "Structural Compliance & Geographic Vetting",
      ],
      icon: <Layers className="h-5 w-5" />,
      name: "Elite Double-Deck",
      price: 20_000,
    },
  ],
  title: "Booth Design Investment Guide",
};

export const BOOTH_DESIGN_RELATED_SERVICES = [
  {
    href: "/services/global-event-solutions/event-lead-generation",
    title: "Event Lead Generation",
  },
  { href: "/services/global-event-solutions/custom-events", title: "Custom Events" },
  {
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
];

export const BOOTH_DESIGN_WHY_CHOOSE_US = {
  heading: "Why Choose B2B Sales Arrow for Booth Design?",
  items: [
    {
      description:
        "We manage every detail, from design to execution, ensuring a seamless and impactful booth experience.",
      icon: "Award" as const,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=300",
      title: "360-Degree Booth Solutions",
    },
    {
      description:
        "We've showcased at top international events in Dubai, Beijing, Toronto, the USA, and Australia, including Money20/20, Adobe Summit, Sibos, WAF, ONS, and more.",
      icon: "Globe2" as const,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400&h=300",
      title: "Global Reach & Premier Events",
    },
    {
      description:
        "Our booths incorporate the latest technology to boost engagement and enhance brand visibility.",
      icon: "TrendingUp" as const,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300",
      title: "Tech-Integrated Booths",
    },
    {
      description:
        "With experience across IT, finance, healthcare, BFSI, and more, we deliver customized solutions for every sector.",
      icon: "Users2" as const,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300",
      title: "Industry Expertise",
    },
  ],
};

export const BOOTH_DESIGN_BLOGS_SECTION = {
  heading: "Blogs",
};

export const BOOTH_DESIGN_CONTACT_CTA = {
  backgroundImage: {
    alt: "Trade show booth design consultation backdrop",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920",
  },
  badge: "Ready to Design?",
  description:
    "Every square foot of your booth should earn its place. We design custom trade show booths engineered for commercial momentum — because the space, the story, and the sales system inside it were built together from day one.",
  headingLines: ["Every Square Foot", "Should Earn Its Place"] as [string, string],
  primaryCta: {
    href: "/contact",
    label: "Request a Design Quote",
  },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [
    {
      alt: "Airtel",
      src: "/logos/circle-airtel.svg",
    },
    {
      alt: "SingleStore",
      src: "/logos/circle-singlestore.svg",
    },
    {
      alt: "CSC",
      src: "/logos/circle-csc.svg",
    },
    {
      alt: "United Payments",
      src: "/logos/circle-united-payments.svg",
    },
  ],
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
};
