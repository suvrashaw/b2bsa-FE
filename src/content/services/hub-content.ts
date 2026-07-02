import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";
import GES_CONTACT_DATA from "@/content/services/global-event-solutions/contact.json";

export const HUB_PAGE = {
  pageId: "services",
  pageName: "Services",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services",
    description:
      "Explore B2B Sales Arrow services across global events, tradeshow booth solutions, media production, sales qualified lead generation, digital marketing, market research, and HPMI.",
    focusKeyphrase: "B2B Sales Arrow services",
    title: "Services | B2B Sales Arrow",
  },
};

export const HUB_HERO = {
  description:
    "From booth design to lead generation, media production to market research — B2B Sales Arrow delivers the full suite of services enterprise brands need to win at live events and beyond.",
  images: ["/media/home/hero/home_hero_bg.avif"],
  primaryCta: { href: "/contact-us", label: "Book a Strategy Session" },
  secondaryCta: { href: "/case-studies", label: "View Our Work" },
  title: "End-to-End B2B Event & Marketing Services",
};

export const HUB_CLIENT_LOGOS = {
  heading: "Trusted by Global Enterprise Brands",
};

export const HUB_INTRO = {
  description:
    "Enterprise B2B revenue does not grow from fragmented vendors and siloed programs. B2B Sales Arrow connects every layer of your commercial presence — booth design, live events, lead generation, media production, market research, and digital marketing — into one integrated system, managed by one team, accountable for one outcome: qualified pipeline.\n\nWe have supported over 250 events across 40+ countries, influenced $1.2B+ in pipeline, and maintained a 98% client retention rate because we build programs that compound, not campaigns that expire.",
  imageUrl: "/media/home/hero/home_hero_bg.avif",
  stats: GLOBAL_PROOF_STATS,
  titleLine1: "One Partner for Every Layer",
  titleLine2: "of Your B2B Growth Stack",
};

export const HUB_SERVICES = {
  description:
    "Seven specialist practices, each built for enterprise B2B, designed to operate independently or as an integrated program.",
  heading: "Our Core Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Strategy, booth design, lead capture, logistics, and post-event reporting across international markets, all under one accountable partner.",
      href: "/global-event-solutions",
      icon: "Globe2",
      id: "global-event-solutions",
      image: "/media/home/services/branding.avif",
      title: "Global Event Solutions",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Custom booth design, fabrication, rental, modular systems, logistics, and on-site staffing for exhibitions worldwide.",
      href: "/tradeshow-booth-solutions",
      icon: "Presentation",
      id: "tradeshow-booth-solutions",
      image: "/media/home/services/booth-design-and-production.avif",
      title: "Tradeshow Booth Solutions",
    },
    {
      color: "bg-brand-primary",
      description:
        "Corporate video, event video production, live streaming, and virtual production that builds trust before and after the event.",
      href: "/media-production",
      icon: "MonitorPlay",
      id: "media-production",
      image: "/media/home/services/corporate-media-production.avif",
      title: "Media Production",
    },
    {
      color: "bg-brand-blue",
      description:
        "Verified decision-makers with ICP fit, buying authority, qualification notes, and a recommended next action — not a badge scan CSV.",
      href: "/sales-qualified-lead-generation",
      icon: "Users",
      id: "sales-qualified-lead-generation",
      image: "/media/home/services/active-prospecting.avif",
      title: "Sales Qualified Lead Generation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Performance marketing, SEO, and social media programs evaluated against one standard: qualified buyers moving closer to a sales conversation.",
      href: "/digital-marketing",
      icon: "Rocket",
      id: "digital-marketing",
      image: "/media/home/services/digital-marketing.avif",
      title: "Digital Marketing",
    },
    {
      color: "bg-brand-primary",
      description:
        "B2B market research, data augmentation, and data validation that helps enterprise teams understand their markets more clearly than the competition.",
      href: "/market-research",
      icon: "Database",
      id: "market-research",
      image: "/media/home/services/database-and-market-research.avif",
      title: "Market Research",
    },
    {
      color: "bg-brand-blue",
      description:
        "Human-powered competitive intelligence, buyer research, and strategic reports — insight that cannot be automated or approximated.",
      href: "/hpmi/human-powered-market-intelligence",
      icon: "Lightbulb",
      id: "hpmi",
      image: "/media/home/services/networking.avif",
      title: "Human Powered Market Intelligence",
    },
  ],
};

export const HUB_CASE_STUDIES = {
  ctaLabel: "Full Study",
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
  viewAllLabel: "",
};

export const HUB_FAQ = {
  faqs: [
    {
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: "faq-1",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: "faq-2",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?",
    },
    {
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      id: "faq-3",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    },
    {
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      id: "faq-4",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse?",
    },
    {
      answer:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      id: "faq-5",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus?",
    },
    {
      answer:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      id: "faq-6",
      image: "/media/home/hero/home_hero_bg.avif",
      question: "Et harum quidem rerum facilis est et expedita distinctio?",
    },
  ],
  heading: "Frequently Asked Questions",
};

export { default as HUB_WHY } from "@/content/services/tradeshow-booth-solutions/why.json";

export const HUB_CONTACT_CTA = {
  ...GES_CONTACT_DATA,
  ...CINEMATIC_CTA_SHARED,
};
