import { Layers, Layout, Maximize } from "lucide-react";

import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const BOOTH_DESIGN_HERO = {
  description:
    "We design custom trade show booths that buyers stop at deliberately, because the space, the story, and the sales system inside it were built together from day one.",
  title: (
    <>
      <strong className="font-bold">Trade Show Booth Design</strong> That Converts Foot Traffic Into
      Pipeline
    </>
  ),
};

export { GLOBAL_PROOF_STATS as BOOTH_DESIGN_PROOF_BAR } from "../../shared";

export const BOOTH_DESIGN_SHOWCASE_ITEMS = [
  {
    cta: { href: "/contact", label: "Get 10×10 Booth Quote" },
    descriptions: ["Regional shows, first-time exhibitors, satellite presences"],
    eyebrow: "100 sq ft",
    heading: "10x10 Booth",
    id: "showcase-10x10",
    image: "/images/booth/10x10.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 10×20 Booth Quote" },
    descriptions: ["Product demos with visitor journey and conversation zone"],
    eyebrow: "200 sq ft",
    heading: "10x20 Inline",
    id: "showcase-10x20",
    image: "/images/booth/10x20.jpg",
  },
  {
    cta: { href: "/contact", label: "Get 20×20 Booth Quote" },
    descriptions: ["Premium four-sided visibility, demos, meetings, AV zones"],
    eyebrow: "400 sq ft",
    heading: "20x20 Island",
    id: "showcase-20x20",
    image: "/images/booth/20x20.jpg",
  },
  {
    cta: { href: "/contact", label: "Get Double-Deck Quote" },
    descriptions: ["Executive meeting suite + lower engagement zone. Major global shows"],
    eyebrow: "Premium",
    heading: "Double-Deck Structure",
    id: "showcase-double-deck",
    image: "/images/booth/30x40.png",
  },
  {
    cta: { href: "/contact", label: "Get Custom Booth Quote" },
    descriptions: ["Fully bespoke flagship builds for maximum commercial impact"],
    eyebrow: "Bespoke",
    heading: "Custom Environments",
    id: "showcase-custom",
    image: "/images/booth/40x40.jpg",
  },
];


export const BOOTH_DESIGN_SPOTLIGHT = {
  description:
    "A generic trade show display occupies floor space. It rarely creates a reason to stop. In a hall where 300 exhibitors compete for the same buyer attention, average design is effectively invisible.\n\nThe gap between a booth that generates badge scans and one that generates qualified meetings is almost entirely a design question: is the space engineered around buyer psychology and sales conversion, or around how it looks in a 3D render?",
  imageAlt: "Empty trade show booth without footfall",
  imageUrl: "/images/home/services/booth/booth-6.avif",
  titleLine1: "Why Generic Exhibition Booth Design",
  titleLine2: "Costs You Qualified Leads",
};

export const BOOTH_DESIGN_DELIVERABLES = {
  heading: "Our Trade Show Booth Design Services",
  headingHighlight: "Booth Design Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We design booth layouts around how attendees actually move through a crowded exhibition floor, entrance angles, demo zones, meeting areas, and visual anchors placed to increase qualified engagement.",
      icon: "box",
      id: "architecture",
      image: "/images/home/services/booth/booth-5.avif",
      title: "Spatial Architecture and Traffic Flow",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Your exhibition booth design should be unmistakably yours from 30 feet away, translating brand identity into large-format graphics, messaging hierarchy, and surface treatments.",
      icon: "palette",
      id: "branding",
      image: "/images/home/services/booth/booth-6.avif",
      title: "Graphic Design and Brand Integration",
    },
    {
      color: "bg-brand-primary",
      description:
        "Touchscreens, live product demos, and digital storytelling that turn passive floor visits into active brand engagement.",
      icon: "cpu",
      id: "digital",
      image: "/images/home/services/booth/booth-7.avif",
      title: "Interactive and Digital Display Integration",
    },
    {
      color: "bg-brand-blue",
      description:
        "For complex products that cannot be shown on a trade show floor, immersive technology that lets buyers explore what they cannot see.",
      icon: "monitor",
      id: "ar-vr",
      image: "/images/home/services/booth/booth-8.avif",
      title: "AR/VR Experience Design",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Private meeting rooms, semi-private discussion areas, and live demo zones, planned as primary commercial requirements, not afterthoughts, to move qualified prospects from curiosity to serious conversation.",
      icon: "users",
      id: "planning",
      image: "/images/home/services/booth/booth-9.avif",
      title: "Meeting Room and Demo Zone Planning",
    },
    {
      color: "bg-brand-primary",
      description:
        "The most underused commercial tool in exhibition stand design, accent lighting, screen placement, and material contrast that increase dwell time and elevate brand premium.",
      icon: "sun",
      id: "lighting",
      image: "/images/home/services/booth/booth-10.avif",
      title: "Lighting and Atmosphere Engineering",
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
        "3D rendering and iterative feedback. Full visualisation of the space, structure, graphics, lighting, and interaction zones reviewed with your team.",
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
  title: "From Brief to Build, Our 8-Phase Booth Design Process",
};

export const BOOTH_DESIGN_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_FAQ = {
  faqs: [
    {
      answer:
        "Design fees typically range from $3,000 for a compact 10x10 to $60,000+ for large custom or double-deck structures. See our pricing guide table above for reference ranges. Contact us for a project-specific estimate based on your booth size, event, and brief.",
      id: "cost",
      question: "How much does custom trade show booth design cost?",
    },
    {
      answer: (
        <>
          A <strong className="font-bold">custom trade show booth</strong> is designed and built
          specifically for your brand. A <strong className="font-bold">modular booth</strong> uses a
          reusable system with updated graphics between events, faster and more cost-efficient for
          multi-event programs. We design and build both.
        </>
      ),
      id: "modular-vs-custom",
      question: "What is the difference between modular and custom booth design?",
    },
    {
      answer:
        "From brief to approved 3D renders: 3–5 weeks. Fabrication lead time varies by complexity. For major international events, engage us 14–20 weeks before the show.",
      id: "timeline",
      question: "How long does the design process take?",
    },
    {
      answer:
        "Yes. We extend your brand system, typefaces, colour palette, photography style, into a physical exhibition environment without losing consistency.",
      id: "brand-guidelines",
      question: "Can you work with our existing brand guidelines?",
    },
    {
      answer:
        "Yes. Reuse planning is built into the design from the start. Many clients run the same booth system for 3–5 years with graphic updates, reducing cost per event by 30–50%.",
      id: "reuse",
      question: "Can the booth be reused at multiple events?",
    },
    {
      answer:
        "Yes, full design-to-build service or design-only with production-ready files for your fabrication partner. You choose the scope.",
      id: "fabrication",
      question: "Do you handle fabrication and build as well?",
    },
    {
      answer: (
        <>
          GITEX, CES, MWC, AWS re:Invent, Dreamforce, Web Summit, ADIPEC, Money20/20, Hannover
          Messe, and major regional <strong className="font-bold">industry trade shows</strong>{" "}
          across all sectors and markets.
        </>
      ),
      id: "events",
      question: "What events do you design booths for?",
    },
  ],
  heading: "Trade Show Booth Design FAQs",
  headingHighlight: "Design FAQs",
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
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
];

export const BOOTH_DESIGN_WHY_CHOOSE_US = {
  heading: "Why Choose B2B Sales Arrow for Booth Designing?",
  headingHighlight: "B2B Sales Arrow",
  items: [
    {
      description:
        "We manage every detail, from design to execution, ensuring a seamless and impactful booth experience.",
      icon: "Award" as const,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=300",
      title: "360-Degree Booth Solutions",
    },
    {
      description:
        "We've showcased at top international events in Dubai, Beijing, Toronto, the USA, and Australia, including Money20/20, Adobe Summit, Sibos, WAF, ONS, and more.",
      icon: "Globe2" as const,
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400&h=300",
      title: "Global Reach & Premier Events",
    },
    {
      description:
        "Our booths incorporate the latest technology to boost engagement and enhance brand visibility.",
      icon: "TrendingUp" as const,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300",
      title: "Tech-Integrated Booths",
    },
    {
      description:
        "With experience across IT, finance, healthcare, BFSI, and more, we deliver customized solutions for every sector.",
      icon: "Users2" as const,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300",
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
    "Every square foot of your booth should earn its place. Build a custom trade show booth engineered for commercial momentum.",
  headingLines: ["Every Square Foot", "Should Earn Its Place"] as [string, string],
  primaryCta: {
    href: "/contact",
    label: "Start Your Design Project",
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
