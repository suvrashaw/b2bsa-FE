import { Heading } from "@/components/ui/Heading";

export interface CorporateVideoIndustriesSectionProps {
  description: string;
  heading: string;
  industries: CorporateVideoIndustryItem[];
}

interface CorporateVideoIndustryItem {
  description: string;
  title: string;
}

export const CorporateVideoIndustriesSection = ({
  description,
  heading,
  industries,
}: CorporateVideoIndustriesSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-[#111518] pt-52 pb-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,#4BC0D9_0%,rgba(75,192,217,0.82)_18%,rgba(30,96,145,0.55)_34%,transparent_50%),radial-gradient(circle_at_92%_78%,rgba(120,0,0,0.92)_0%,rgba(178,58,72,0.55)_26%,transparent_58%),linear-gradient(135deg,#111518_0%,#173D4C_34%,#28113A_68%,#4A001E_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,21,24,0.9)_0%,rgba(17,21,24,0.62)_46%,rgba(17,21,24,0.1)_100%)]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="max-w-5xl">
          <Heading
            as="h2"
            className="max-w-4xl text-5xl leading-none text-white md:text-6xl lg:text-7xl"
          >
            {heading}
          </Heading>
          <p className="mt-7 max-w-4xl text-base leading-relaxed text-white/86 md:text-lg">
            {description}
          </p>

          <div className="mt-8 max-w-4xl space-y-6 md:mt-10 md:space-y-7">
            {industries.map((industry) => (
              <article key={industry.title}>
                <h3 className="font-heading text-2xl leading-tight font-bold text-[#4BC0D9] md:text-3xl">
                  {industry.title}
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-white/84 md:text-lg">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
