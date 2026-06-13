import DATA from "./data.json";

export const TERMS_HERO = {
  description:
    "Please read these terms carefully before using our services. Last updated: January 2025.",
  eyebrow: "LEGAL",
  image: {
    alt: "Legal documentation",
    loaderAlt: "Loading",
    src: "/images/contact/hero.avif",
  },
  primaryCtaLabel: null,
  secondaryCtaLabel: null,
  showPreloader: false,
  stat: null,
  title: (
    <>
      Terms &amp; <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Conditions
      </span>
    </>
  ),
};

export const TERMS_FAQ = {
  description: "Hover any card to read the full detail. Questions? Contact us below.",
  eyebrow: "TERMS OF SERVICE",
  faqs: [
    {
      answer:
        "By accessing or using B2B Sales Arrow services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our services immediately.",
      id: "acceptance",
      question: "Acceptance of Terms",
    },
    {
      answer:
        "B2B Sales Arrow provides B2B marketing, event management, media production, lead generation, and market research services. Specific deliverables are defined in individual service agreements.",
      id: "services",
      question: "Description of Services",
    },
    {
      answer:
        "Payment terms are outlined in your service agreement. Invoices are due within 30 days of issuance unless otherwise agreed. Late payments may incur interest at 1.5% per month.",
      id: "payment",
      question: "Payment & Billing",
    },
    {
      answer:
        "All deliverables produced by B2B Sales Arrow become client property upon full payment. Our proprietary methodologies, frameworks, and tools remain the exclusive property of B2B Sales Arrow.",
      id: "ip",
      question: "Intellectual Property",
    },
    {
      answer:
        "Both parties agree to maintain strict confidentiality of all proprietary information shared during the engagement. This obligation survives termination of the agreement for 3 years.",
      id: "confidentiality",
      question: "Confidentiality",
    },
    {
      answer:
        "Our total liability shall not exceed the fees paid for the relevant service in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages.",
      id: "liability",
      question: "Limitation of Liability",
    },
    {
      answer:
        "Either party may terminate an engagement with 30 days written notice. Client is liable for all work completed up to the termination date. Prepaid fees for undelivered work will be refunded pro-rata.",
      id: "termination",
      question: "Termination",
    },
    {
      answer:
        "These Terms are governed by the laws of the jurisdiction in which B2B Sales Arrow is incorporated. Disputes shall be resolved through binding arbitration before resorting to litigation.",
      id: "governing-law",
      question: "Governing Law",
    },
    {
      answer:
        "We reserve the right to update these terms at any time. Material changes will be communicated via email 30 days in advance. Continued use of services constitutes acceptance of revised terms.",
      id: "changes",
      question: "Changes to Terms",
    },
  ],
  heading: (
    <>
      Our Terms, <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Clearly Stated
      </span>
    </>
  ),
  scrollAmount: 340,
};

export const TERMS_CONTACT = {
  ...DATA.contact,
  heading: (
    <>
      Speak to Our <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Legal Team
      </span>
    </>
  ),
  illustration: null,
};
