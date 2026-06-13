import DATA from "./data.json";

export const CONTACT_FORM = {
    ...DATA.contactForm,
    heading: (
    <>
      Start the <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Conversation
      </span>
    </>
  )
};

export const CONTACT_NEXT_STEPS = DATA.contactNextSteps;

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
