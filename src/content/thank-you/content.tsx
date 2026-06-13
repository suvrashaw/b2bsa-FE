import DATA from "./data.json";

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
  ...DATA.youServices,
  heading: (
    <>
      Explore What We <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Do Best
      </span>
    </>
  ),
};

export const THANK_YOU_BLOGS = {
  ...DATA.youBlogs,
  heading: (
    <>
      Intelligence to Read <br />
      <span className="text-brand-primary">While You Wait</span>
    </>
  ),
};
