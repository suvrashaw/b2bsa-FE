import { Heading } from "@/components/ui/Heading";

export interface AboutCoreValuesData {
  description: string;
  heading: string;
  headingHighlight?: string;
  values: string[];
}

interface CoreValueFlipCardProps {
  detail: string;
  index: number;
  value: string;
}

const CORE_VALUE_DETAILS = [
  "Confidence in our craft, policies, and promises keeps every client engagement grounded.",
  "We show up with drive, resilience, and the will to finish what matters.",
  "Every touchpoint should feel sharper, more helpful, and more accountable than expected.",
  "We keep learning so our teams, systems, and client outcomes keep improving.",
  "We adapt quickly when markets, briefs, and buyer behavior move.",
  "We stay grounded, listen carefully, and let the work earn trust.",
  "We build lean systems that turn constraints into smarter execution.",
  "Clear communication keeps relationships open, honest, and commercially useful.",
  "We protect team harmony while building the emotional connection great work needs.",
  "We prove commitment through follow-through, quality, and measurable outcomes.",
] as const;

const CoreValueFlipCard = ({ detail, index, value }: CoreValueFlipCardProps) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      aria-label={`Explore core value ${number}: ${value}`}
      className="group h-full min-h-48 w-full cursor-pointer text-left [perspective:1200px] sm:min-h-52 lg:min-h-60"
      type="button"
    >
      <span className="relative block h-full min-h-48 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] sm:min-h-52 lg:min-h-60">
        <span className="absolute inset-0 flex flex-col overflow-hidden border border-brand-charcoal/10 bg-brand-white shadow-[0_18px_50px_rgba(14,22,31,0.08)] [backface-visibility:hidden]">
          <span className="flex h-9 shrink-0 items-center gap-1.5 border-b border-brand-charcoal/10 bg-brand-gray px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-charcoal/15" />
            <span className="ml-auto text-[10px] leading-none font-bold tracking-[0.16em] text-brand-charcoal/35 uppercase">
              {number}
            </span>
          </span>
          <span className="flex flex-1 items-center justify-center p-4 text-center lg:p-5">
            <span className="text-sm leading-snug font-black break-words text-brand-charcoal lg:text-base">
              {value}
            </span>
          </span>
        </span>

        <span className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden border border-brand-cyan/25 bg-brand-blue text-brand-white shadow-[0_22px_60px_rgba(30,96,145,0.2)] [backface-visibility:hidden]">
          <span className="flex h-9 shrink-0 items-center border-b border-brand-white/15 px-3">
            <span className="text-[10px] leading-none font-bold tracking-[0.16em] text-brand-cyan uppercase">
              In Practice
            </span>
            <span className="ml-auto text-[10px] leading-none font-bold tracking-[0.16em] text-brand-white/45 uppercase">
              {number}
            </span>
          </span>
          <span className="flex flex-1 items-center p-4 lg:p-5">
            <span className="text-xs leading-relaxed font-semibold text-brand-white/85 sm:text-sm">
              {detail}
            </span>
          </span>
        </span>
      </span>
    </button>
  );
};

export const AboutCoreValues = ({ data }: { data: AboutCoreValuesData }) => {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-brand-gray py-20" id="core-values">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-cyan/40 to-transparent"
      />
      <div className="container mx-auto px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Heading as="h2" highlight={data.headingHighlight}>
            {data.heading}
          </Heading>
          <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {data.values.map((value, index) => (
            <CoreValueFlipCard
              detail={CORE_VALUE_DETAILS[index] ?? data.description}
              index={index}
              key={value}
              value={value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
