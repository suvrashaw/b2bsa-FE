import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const ELG_DEFINITION =
  "Trade show lead generation is the end-to-end process of identifying, engaging, qualifying, and routing potential buyers at B2B events into your sales pipeline, with enough context for your sales team to act on them immediately.";

export const ELG_HERO = {
  description:
    "We don't just capture leads, we engineer a complete trade show lead generation system: ICP targeting before the show, BANT-qualified capture during, and CRM-ready pipeline delivered within 48 hours of close.",
  title: "Trade Show Lead Generation Systems That Fill Your Enterprise Pipeline",
};

export { GLOBAL_PROOF_STATS as ELG_PROOF_BAR } from "../../shared";

export const ELG_WHY = {
  description:
    "We use two structured qualification frameworks, agreed with your sales team before the event begins:\n\nBANT, Budget (is there budget available?), Authority (is this the decision-maker?), Need (is there a verified business problem?), Timeline (when are they solving it?). Ideal for enterprise sales with clear procurement cycles.\n\nCHAMP, Challenges (what is the core problem?), Authority (who owns the decision?), Money (is budget allocated?), Prioritisation (how urgent is this?). Ideal for consultative, complex sales where the challenge comes first.\n\nBoth frameworks ensure qualification happens during the live booth conversation, not retrospectively from a contact list.",
  imageUrl: "/images/home/services/performance-marketing.avif",
  titleLine1: "How We Qualify Leads",
  titleLine2: "BANT and CHAMP",
};

export const ELG_DELIVERABLES = {
  heading: "What Our Trade Show Lead Generation Service Covers",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Defining your ideal attendee by role, company, and intent before the show opens.",
      icon: "Target",
      id: "icp-mapping",
      image: "/images/home/services/market-intelligence.avif",
      title: "Pre-Event ICP Mapping and Targeting",
    },
    {
      color: "bg-brand-cyan",
      description:
        "NFC, QR, badge scan, custom intake, and CRM integration (Salesforce, HubSpot, Marketo).",
      icon: "Scan",
      id: "capture-tech",
      image: "/images/home/services/sql-generation-1.avif",
      title: "On-Site Lead Capture Technology",
    },
    {
      color: "bg-brand-primary",
      description: "BANT or CHAMP qualification during live conversations.",
      icon: "Filter",
      id: "lead-scoring",
      image: "/images/home/services/sql-generation-2.avif",
      title: "Real-Time Lead Scoring",
    },
    {
      color: "bg-brand-blue",
      description: "Proactive floor outreach to target accounts beyond booth traffic.",
      icon: "Users",
      id: "active-prospecting",
      image: "/images/home/services/booth/booth-5.avif",
      title: "Active Prospecting",
    },
    {
      color: "bg-brand-cyan",
      description: "Hot leads flagged and delivered to the right sales owner same-day.",
      icon: "Zap",
      id: "crm-routing",
      image: "/images/home/services/database-research-1.avif",
      title: "Instant CRM Routing",
    },
    {
      color: "bg-brand-primary",
      description: "Personalised follow-up by lead quality tier and conversation context.",
      icon: "Mail",
      id: "nurture",
      image: "/images/home/services/performance-marketing-1.avif",
      title: "Post-Event Nurture Sequences",
    },
    {
      color: "bg-brand-blue",
      description:
        "Lead volume, qualification rate, meeting conversion, and event ROI vs. pre-event forecast.",
      icon: "BarChart3",
      id: "attribution",
      image: "/images/home/services/sql-generation-revised.avif",
      title: "Pipeline Attribution Reporting",
    },
  ],
};

export const ELG_PROCESS = {
  phases: [
    {
      description:
        "ICP mapping, qualification criteria definition, target account list building from registered attendee data, and pre-event meeting generation with priority accounts.",
      title: "Before, Targeted Setup",
    },
    {
      description:
        "Structured lead capture workflows, booth team briefing, BANT/CHAMP qualification in every conversation, and real-time hot-lead routing to the right sales owner before the day ends.",
      title: "During, Real-Time Capture",
    },
    {
      description:
        "Within 48 hours: clean lead file with quality scores, conversation notes, qualification outcomes, and a recommended next action for every record.",
      title: "After, CRM-Ready Pipeline",
    },
  ],
  title: "Before, During, and After",
};

export const ELG_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const ELG_FAQ = {
  faqs: [
    {
      answer:
        "Trade show lead generation is the systematic process of identifying, engaging, qualifying, and routing potential buyers at B2B events, covering pre-event targeting, on-site capture, and post-event follow-up.",
      id: "what-is",
      question: "What is trade show lead generation?",
    },
    {
      answer:
        "A badge scan captures contact details. A qualified lead captures commercial intent, confirmed buying authority, verified business need, and an agreed next step with your sales team.",
      id: "badge-vs-lead",
      question: "What is the difference between a badge scan and a qualified lead?",
    },
    {
      answer:
        "Active prospecting means your team proactively identifies and approaches target attendees across the event floor, not just waiting for booth visitors. It significantly increases qualified lead volume when combined with a strong booth presence.",
      id: "active-prospecting",
      question: "What is active prospecting at a trade show?",
    },
    {
      answer:
        "Clean CRM-ready lead file within 48 hours of event close. Hot leads routed in real time during the event itself.",
      id: "lead-data",
      question: "How quickly do we receive the lead data?",
    },
    {
      answer:
        "Yes, pre-event meeting generation is one of the highest-ROI components of any event program. We use attendee data, LinkedIn targeting, and direct outreach to book meetings before the floor opens.",
      id: "pre-event-meetings",
      question: "Can you generate pre-event meetings?",
    },
  ],
  heading: "Event Lead Generation FAQs",
};

export const ELG_PAGE = {
  pageId: "service.event-lead-generation",
  pageName: "Event Lead Generation",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/event-lead-generation",
    description:
      "Stop losing leads after the show. Our trade show lead generation system covers ICP targeting, real-time lead scoring, CRM sync and post-event nurture.",
    focusKeyphrase: "trade show lead generation",
    secondaryKeywords: [
      "trade show lead capture",
      "exhibitor lead capture service",
      "on-ground lead generation",
      "post-event lead generation for exhibitors",
    ],
    title: "Trade Show Lead Generation and Event Lead Capture | B2B Sales Arrow",
  },
} as const;
