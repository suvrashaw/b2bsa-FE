import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";

export interface IndustriesGridProps {
  heading: string;
  industries: string[];
}

export const IndustriesGrid = ({ heading, industries }: IndustriesGridProps) => {
  return (
    <SectionShell className="bg-white">
      <Heading as="h2" className="mb-10 text-center">
        {heading}
      </Heading>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((industry) => (
          <span
            className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-5 py-2.5 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-blue/40 hover:bg-brand-blue/10"
            key={industry}
          >
            {industry}
          </span>
        ))}
      </div>
    </SectionShell>
  );
};
