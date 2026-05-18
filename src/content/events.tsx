import React from "react";

export const EVENTS_HERO = {
  description:
    "As a specialist B2B events agency and experiential marketing agency, we help enterprise brands choose the right events, build a presence strong enough to be remembered, and convert attention into qualified pipeline.",
  eyebrow: "INDUSTRY EVENTS",
  image: {
    alt: "Enterprise trade show floor",
    loaderAlt: "Loading",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  },
  primaryCtaLabel: "Build Your Event Strategy",
  secondaryCtaLabel: "Get a Free Event ROI Assessment",
  showPreloader: false,
  stat: {
    icon: "Globe2",
    label: "Events Managed",
    value: "250+",
  },
  title: (
    <>
      Dominate the Industry Events <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        That Drive Your Market
      </span>
    </>
  ),
};

export const EVENTS_POSITIONING = {
  eyebrow: "OUR APPROACH",
  heading: (
    <>
      Experiential Marketing <br />
      <span className="text-brand-cyan">Positioning</span>
    </>
  ),
  items: [
    {
      description:
        "Beyond logistics, we are an experiential marketing agency — designing event presences that create a genuine brand experience buyers remember. Every touchpoint is intentional: the moment of arrival, the sensory environment, the conversation flow, the demo sequence, and the follow-up that lands when the impression is still fresh.",
      id: "agency",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      title: "B2B Sales Arrow as Your Experiential Marketing Agency",
    },
    {
      description:
        "Experiential B2B marketing works because enterprise buyers make complex purchasing decisions through trust and context — not just information. A well-designed event experience builds both simultaneously. That is what separates a brand that generates qualified meetings from one that generates badge scans.",
      id: "why",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Why Experiential Works for B2B",
    },
  ],
};

export const EVENTS_INDUSTRIES = {
  eyebrow: "EVENTS WE COVER",
  heading: (
    <>
      Key Events <br />
      <span className="text-brand-blue">Where We Execute</span>
    </>
  ),
  industries: [
    {
      description: "Delivering corporate event solutions that generate qualified meetings with buyers and partners.",
      events: "GITEX (Dubai), CES (Las Vegas), Web Summit (Lisbon), AWS re:Invent, Salesforce Dreamforce",
      icon: "Cpu",
      id: "technology",
      title: "Technology and SaaS",
    },
    {
      description: "Creating conversations with CFOs, CTOs, and digital transformation leaders.",
      events: "Sibos, Money20/20 (Las Vegas and Amsterdam), Finovate",
      icon: "Building2",
      id: "fintech",
      title: "Financial Services and Fintech",
    },
    {
      description: "Compliant, credible event presence for technically sophisticated buyers.",
      events: "BIO International Convention, Arab Health (Dubai), HIMSS",
      icon: "HeartPulse",
      id: "healthcare",
      title: "Healthcare and Life Sciences",
    },
    {
      description: "Built for technical decision-makers and long-cycle partnership development.",
      events: "ADIPEC (Abu Dhabi), CERAWeek (Houston), Hannover Messe",
      icon: "Factory",
      id: "energy",
      title: "Energy and Infrastructure",
    },
    {
      description: "The single most concentrated gathering of telecom and cloud buyers globally.",
      events: "Mobile World Congress (Barcelona)",
      icon: "Globe",
      id: "telecom",
      title: "Telecom and Connectivity",
    },
  ],
};

export const EVENTS_PROCESS = {
  phases: [
    {
      description:
        "Our event ROI forecasting framework evaluates five criteria before committing budget: audience quality, ICP patterns, competitive presence, sponsorship value, and historical pipeline impact. We only recommend events where return justifies investment.",
      title: "Event Selection and ROI Forecasting",
    },
    {
      description:
        "We handle the end-to-end design, fabrication, and logistics of your custom exhibition stand, engineered for visitor flow and lead conversion.",
      title: "Booth Design & Fabrication",
    },
    {
      description:
        "Active prospecting using pre-event target account lists, real-time event app intelligence, and structured outreach to secure qualified meetings before you land.",
      title: "Pre-Show Targeting & Meetings",
    },
    {
      description:
        "On-the-ground management including briefed event staff, visitor engagement, lead capture systems, and meeting coordination.",
      title: "On-Site Execution & Capture",
    },
    {
      description:
        "Full reporting delivered within 72 hours of event close: qualified lead volume, cost per qualified opportunity, CRM pipeline movement, and ROI vs. forecast.",
      title: "Post-Show Analytics & Pipeline",
    },
  ],
  title: "What We Manage",
};

export const EVENTS_CASE_STUDIES = {
  ctaLabel: "Full Recap",
  eyebrow: "CLIENT SUCCESS STORIES",
  heading: (
    <>
      Real Events. <br />
      <span className="text-brand-blue">Real Results.</span>
    </>
  ),
  items: [
    {
      challenge: "Securing executive meetings within a short campaign timeline",
      client: "Global digital services and AI transformation leader",
      icon: "Target",
      id: "waf-2025",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      metric: "60",
      metricLabel: "Qualified Meetings",
      solution: "Delivered active prospecting and meeting coordination to secure 60 qualified meetings",
      title: "World Aviation Festival 2025",
    },
    {
      challenge: "Standing out in a competitive expo without attendee data",
      client: "Enterprise digital experience and cloud transformation brand",
      icon: "BarChart3",
      id: "adobe-2025",
      image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200",
      metric: "70+",
      metricLabel: "Qualified Leads",
      solution: "Delivered booth engagement and prospecting support to generate 70+ qualified leads",
      title: "Adobe Summit 2025",
    },
    {
      challenge: "Managing dual-client outreach under restricted event timelines",
      client: "Core banking and revenue management technology brands",
      icon: "TrendingUp",
      id: "sibos-2025",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      metric: "ROI",
      metricLabel: "Pipeline Growth",
      solution: "Delivered active prospecting, meeting coordination, and booth engagement support",
      title: "SIBOS 2025",
    },
  ],
  viewAllLabel: "View All Events",
};

export const EVENTS_FAQ = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  faqs: [
    {
      answer:
        "A B2B experiential marketing agency designs event presences that create memorable, trust-building experiences for enterprise buyers — going beyond booth logistics to engineer the full brand encounter from arrival to follow-up.",
      id: "experiential-marketing",
      question: "What is an experiential marketing agency for B2B?",
    },
    {
      answer:
        "We evaluate audience quality, buyer intent density, ICP attendance patterns, competitive presence, sponsorship value, and historical pipeline impact — recommending only events where the return justifies the investment.",
      id: "selection",
      question: "How do you select the right industry events?",
    },
    {
      answer:
        "Before committing budget, we estimate the commercial return: expected meeting volume, qualified lead rate, cost per qualified opportunity, and pipeline influenced — benchmarked against your pre-event commercial targets.",
      id: "roi",
      question: "What is event ROI forecasting?",
    },
    {
      answer:
        "Yes — concurrent multi-event programs are a standard delivery mode for our enterprise clients. Our logistics and project management networks are designed for parallel deployment.",
      id: "multiple",
      question: "Can you support multiple events in the same quarter?",
    },
    {
      answer:
        "Yes — briefed event staff for booth management, visitor engagement, lead capture, and meeting coordination.",
      id: "staff",
      question: "Do you provide on-site staff?",
    },
    {
      answer:
        "Qualified lead volume by tier, meeting conversion rate, cost per qualified opportunity, CRM pipeline movement, and event ROI vs. forecast — delivered within 72 hours of event close.",
      id: "reporting",
      question: "How do you report post-event outcomes?",
    },
    {
      answer:
        "A B2B events agency measures success by pipeline and revenue. An event management company measures success by logistics execution. We do both — but commercial outcome is always the primary brief.",
      id: "difference",
      question: "What makes a B2B events agency different from an event management company?",
    },
  ],
  heading: "Event Strategy FAQs",
};

export const EVENTS_CONTACT = {
  description:
    "The strongest strategy is not about showing up everywhere — it is about choosing the rooms where your buyers already gather.",
  eyebrow: "PLAN YOUR PRESENCE",
  form: {
    ctaLabel: "Get Event Strategy",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    messageLabel: "Tell Us About Your Goals",
    messagePlaceholder: "Which events are you targeting? What results do you need?",
    serviceLabel: "Service of Interest",
    serviceOptions: [
      { label: "Event Strategy & Selection", value: "strategy" },
      { label: "Booth Design & Fabrication", value: "booth" },
      { label: "Pre-Show Lead Generation", value: "lead-gen" },
      { label: "Full Event Management", value: "full" },
    ],
    servicePlaceholder: "Select a service...",
  },
  heading: (
    <>
      Get a Free Event <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        ROI Assessment
      </span>
    </>
  ),
  illustration: {
    alt: "Contact Us",
    src: "/undraw_contact-us_s4jn.svg",
  },
};

export const EVENTS_PAGE = {
  pageId: "events",
  pageName: "Industry Events",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/events",
    description:
      "Full-service corporate event management for enterprise brands — event selection, ROI forecasting, booth design, pre-show targeting and on-ground execution across 40+ countries.",
    focusKeyphrase: "B2B events agency",
    title: "Industry Events Strategy and Execution | B2B Sales Arrow",
  },
} as const;
