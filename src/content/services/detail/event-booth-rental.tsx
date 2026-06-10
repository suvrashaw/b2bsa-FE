import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const BOOTH_RENTAL_RENT_VS_BUY = {
  description:
    "For enterprise brands exhibiting at multiple events or entering new markets, renting a trade show booth consistently delivers faster deployment, lower upfront commitment, and zero post-show logistics, making it the strategically smarter choice for most programs.",
  heading: "TOP 3 REASONS TO RENT VS. BUY",
  headingHighlight: "RENT VS. BUY",
  reasons: [
    {
      description:
        "You can stretch your budget without sacrificing design with the right custom rental solutions.",
      icon: "Coins",
      title: "Save Money",
    },
    {
      description:
        "If your exhibit needs change from show to show or year to year, rentals can help you quickly scale.",
      icon: "Move",
      title: "Stay Flexible",
    },
    {
      description:
        "By renting, you avoid storage, booth maintenance, and crating hassles and costs.",
      icon: "Truck",
      title: "Make it Easy",
    },
  ],
} as const;

export const BOOTH_RENTAL_HERO = {
  description:
    "When speed matters or you're testing a new market, trade show booth rental gives your brand a polished, fully branded exhibition presence, without the fabrication lead time or capital commitment.",
  title: (
    <strong className="font-bold">
      Trade Show Booth Rental, Enterprise Presence Without the Build Timeline
    </strong>
  ),
};

export { GLOBAL_PROOF_STATS as BOOTH_RENTAL_PROOF_BAR } from "../../shared";

export const BOOTH_RENTAL_WHY = {
  ctaHref: "/contact",
  ctaLabel: "Let's Connect",
  description:
    "At B2B Sales Arrow, we specialize in designing exceptional booths that attract, engage, and drive meaningful conversations. With our expertise in AI-VR integration, we bring your brand to life in ways that leave a lasting impression. We've delivered exceptional experiences across industries, from tech giants to global brands, creating tradeshow booth design that aren't just seen, they're remembered.",
  imageAlt: "B2B Sales Arrow trade show booth rental",
  imageUrl: "/images/services/booth/booth-9.avif",
  label: "Our Services",
  titleLine1: "Introduction to Our",
  titleLine2: "Services",
};


export const BOOTH_RENTAL_PROCESS = {
  phases: [
    {
      description: "Share event, location, dates, booth size, and timeline.",
      title: "Enquire",
    },
    {
      description: "Confirm inventory and venue compliance.",
      title: "Availability Check",
    },
    {
      description: "Graphics, furniture, AV, and meeting zones.",
      title: "Branding Configuration",
    },
    {
      description: "Installed and quality-checked before the show opens.",
      title: "Delivery and Setup",
    },
    {
      description: "Breakdown and storage managed after close.",
      title: "Post-Event Collection",
    },
  ],
  title: "Our Rental Process",
};

export const BOOTH_RENTAL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_RENTAL_FAQ = {
  faqs: [
    {
      answer: (
        <>
          For major global events, <strong className="font-bold">rental booths</strong> book 6–10
          weeks in advance. Enquire as soon as participation is confirmed.
        </>
      ),
      id: "booking",
      question: "How far ahead should I book?",
    },
    {
      answer:
        "Yes, graphics, messaging, colour system, and engagement setup. A well-executed branded rental is indistinguishable from a custom build to visitors.",
      id: "branded",
      question: "Can the rental be fully branded?",
    },
    {
      answer:
        "Yes, inter-event storage, graphic refresh between shows, and logistics coordination available.",
      id: "multiple-events",
      question: "Can we use the same rental at multiple events?",
    },
    {
      answer: (
        <>
          A <strong className="font-bold">rental booth</strong> uses a pre-existing structural
          system with custom branding. A custom booth is designed and built specifically for your
          brand. Rental suits speed and budget flexibility; custom delivers maximum creative and
          commercial impact for flagship events.
        </>
      ),
      id: "vs-custom",
      question: "What is the difference between rental and custom?",
    },
    {
      answer:
        "Yes, installation, quality review, and post-event breakdown included in all rental packages.",
      id: "installation",
      question: "Is installation included?",
    },
  ],
  heading: "Event Booth Rental FAQs",
  headingHighlight: "Rental FAQs",
  layoutMode: "fit" as const,
};

export const BOOTH_RENTAL_RELATED_SERVICES = [
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/trade-show-booth-builder",
    title: "Trade Show Booth Builder",
  },
  {
    href: "/services/global-event-solutions/modular-booth-solutions",
    title: "Modular and Portable Booths",
  },
];


export const BOOTH_RENTAL_BLOGS_SECTION = {
  heading: "Blogs",
};

export const BOOTH_RENTAL_CONTACT_CTA = {
  backgroundImage: {
    alt: "Trade show booth rental consultation backdrop",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920",
  },
  badge: "Ready to Rent?",
  description:
    "Fast does not have to feel temporary. A properly configured trade show rental booth represents your brand credibly, at a fraction of the custom build timeline.",
  headingLines: ["Fast Does Not Have To", "Feel Temporary"] as [string, string],
  primaryCta: {
    href: "/contact",
    label: "Check Rental Availability",
  },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [
    {
      alt: "Airtel",
      src: "/client-logos/circle-airtel.svg",
    },
    {
      alt: "SingleStore",
      src: "/client-logos/circle-singlestore.svg",
    },
    {
      alt: "CSC",
      src: "/client-logos/circle-csc.svg",
    },
    {
      alt: "United Payments",
      src: "/client-logos/circle-united-payments.svg",
    },
  ],
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
};

export const BOOTH_RENTAL_PAGE = {
  pageId: "service.event-booth-rental",
  pageName: "Event Booth Rental",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/event-booth-rental",
    description:
      "Enterprise trade show booth rental, modular, fully branded, globally deployable. From 10x10 to double-deck. Professional presence without the custom build timeline.",
    focusKeyphrase: "trade show booth rental",
    secondaryKeywords: [
      "trade show booth rentals",
      "trade show display booth rental",
      "event booth rental",
      "modular booth rental",
    ],
    title: "Trade Show Booth Rental for Enterprise Exhibitors | B2B Sales Arrow",
  },
} as const;
