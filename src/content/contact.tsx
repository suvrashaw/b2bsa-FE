export const CONTACT_HERO = {
  description:
    "Whether you need a booth for next quarter, a sharper lead generation system, enterprise video, a full digital marketing program, or market intelligence, one conversation is enough to define the right path.",
  eyebrow: "CONTACT US",
  image: {
    alt: "Team collaboration",
    loaderAlt: "Loading",
    src: "/images/contact/hero.avif",
  },
  primaryCtaHref: "#contact",
  primaryCtaLabel: "Submit Inquiry",
  secondaryCtaHref: "#contact",
  secondaryCtaLabel: "Book a Meeting",
  showPreloader: false,
  stat: {
    icon: "Star",
    label: "Client Satisfaction",
    value: "98%",
  },
  title: (
    <>
      Let&apos;s Build Your Enterprise <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Growth Strategy
      </span>
    </>
  ),
};

export const CONTACT_FORM = {
  description:
    "Whether you need a booth for next quarter, a sharper lead generation system, enterprise video, a full digital marketing program, or market intelligence, one conversation is enough to define the right path.",
  eyebrow: "INQUIRY",
  form: {
    companyLabel: "Company Name",
    companyPlaceholder: "Your company",
    countryLabel: "Country / Region",
    countryPlaceholder: "United States",
    ctaLabel: "Submit Inquiry",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    jobTitleLabel: "Job Title",
    jobTitlePlaceholder: "Chief Marketing Officer",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    messageLabel: "Message / Project Brief",
    messagePlaceholder: "Tell us about your goals, event, timeline, or project requirements.",
    phoneLabel: "Phone",
    phonePlaceholder: "+1 (000) 000-0000",
    serviceLabel: "Service of Interest",
    serviceOptions: [
      { label: "Global Event Solutions", value: "global-event-solutions" },
      { label: "Trade Show Booth Design", value: "trade-show-booth-design" },
      { label: "Event Booth Rental", value: "event-booth-rental" },
      { label: "Trade Show Booth Builder", value: "trade-show-booth-builder" },
      { label: "Modular and Portable Booths", value: "modular-portable-booths" },
      { label: "Media Production", value: "media-production" },
      { label: "Event Video Production", value: "event-video-production" },
      { label: "Corporate Video Production", value: "corporate-video-production" },
      { label: "Live Streaming Services", value: "live-streaming-services" },
      { label: "Performance Marketing", value: "performance-marketing" },
      { label: "SEO Services", value: "seo-services" },
      { label: "Paid Advertising", value: "paid-advertising" },
      { label: "Sales Qualified Lead Generation", value: "sales-qualified-lead-generation" },
      { label: "Market Research", value: "market-research" },
      { label: "Data Augmentation", value: "data-augmentation" },
    ],
    servicePlaceholder: "Select a service of interest...",
    timelineLabel: "Estimated Project Timeline",
    timelinePlaceholder: "e.g. Q3 launch, next quarter, 8-12 weeks",
    trustNote:
      "We respond to every inquiry within one business day. Your information is never shared with third parties.",
  },
  heading: (
    <>
      Start the <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Conversation
      </span>
    </>
  ),
  illustration: {
    alt: "Contact Us",
    src: "/contact_illu.svg",
  },
};

export const CONTACT_NEXT_STEPS = {
  description: "",
  heading: "What Happens Next",
  items: [
    {
      content: <p>We review your inquiry within one business day and confirm receipt.</p>,
      title: "Step 1",
    },
    {
      content: (
        <p>A growth architect contacts you to schedule a discovery call at your preferred time.</p>
      ),
      title: "Step 2",
    },
    {
      content: (
        <p>
          We prepare a customised strategy proposal aligned to your objectives, timeline, and
          budget.
        </p>
      ),
      title: "Step 3",
    },
    {
      content: <p>Programme kickoff once scope and approach are agreed.</p>,
      title: "Step 4",
    },
  ],
};

export const CONTACT_CTA = {
  ctaHref: "/contact",
  ctaLabel: "Book a Strategy Consultation",
  description: "Tell us what you are trying to achieve. We will define the right path.",
  title: "One conversation can clarify your entire growth strategy.",
};

export const CONTACT_PAGE = {
  pageId: "contact",
  pageName: "Contact Us",
  pageType: "contact",
  seo: {
    canonicalPath: "/contact",
    description:
      "Contact B2B Sales Arrow to book a strategy consultation for event solutions, video production, performance marketing, market research, or sales qualified lead generation. We respond within one business day.",
    focusKeyphrase: "contact B2B Sales Arrow",
    secondaryKeywords: [
      "B2B growth agency consultation",
      "enterprise marketing inquiry",
      "strategy consultation",
    ],
    title: "Contact B2B Sales Arrow | Book a Strategy Consultation",
  },
} as const;
