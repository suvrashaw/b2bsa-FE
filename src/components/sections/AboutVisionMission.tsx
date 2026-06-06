import { CheckCircle2 } from "lucide-react";

import { Heading } from "@/components/ui/Heading";

export interface AboutVisionMissionData {
  heading: string;
  missionItems: string[];
  missionTitle: string;
  vision: string;
  visionTitle: string;
}

export const AboutVisionMission = ({ data }: { data: AboutVisionMissionData }) => {
  return (
    <section className="bg-brand-white py-20" id="vision-mission">
      <div className="container mx-auto px-8">
        <div className="mb-12 max-w-3xl">
          <Heading as="h2">{data.heading}</Heading>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-brand-blue/15 bg-brand-blue/5 p-8">
            <p className="mb-4 text-sm font-bold tracking-widest text-brand-blue uppercase">
              {data.visionTitle}
            </p>
            <p className="text-2xl leading-snug font-semibold text-brand-charcoal md:text-3xl">
              {data.vision}
            </p>
          </div>

          <div className="rounded-lg border border-brand-charcoal/10 bg-brand-gray p-8">
            <p className="mb-6 text-sm font-bold tracking-widest text-brand-blue uppercase">
              {data.missionTitle}
            </p>
            <ul className="space-y-5">
              {data.missionItems.map((item) => (
                <li className="flex gap-4 text-base leading-relaxed text-brand-charcoal/80" key={item}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
