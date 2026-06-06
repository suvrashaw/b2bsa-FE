import { CheckCircle2 } from "lucide-react";

import { Heading } from "@/components/ui/Heading";

export interface AboutCoreValuesData {
  description: string;
  heading: string;
  values: string[];
}

export const AboutCoreValues = ({ data }: { data: AboutCoreValuesData }) => {
  return (
    <section className="scroll-mt-28 bg-brand-white py-20" id="core-values">
      <div className="container mx-auto px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Heading as="h2" className="mb-6">
              {data.heading}
            </Heading>
            <p className="max-w-xl text-base leading-relaxed text-brand-charcoal/75">
              {data.description}
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {data.values.map((value) => (
              <li
                className="flex min-h-20 items-start gap-3 rounded-lg border border-brand-charcoal/10 bg-brand-gray p-5 text-sm leading-relaxed font-semibold text-brand-charcoal/85"
                key={value}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
