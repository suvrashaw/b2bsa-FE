import { CorporateVideoImageStrip } from "@/components/sections/CorporateVideoImageStrip";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface IndustriesAltProps {
  description: string;
  heading: string;
  industries: CorporateVideoIndustryItem[];
}

interface CorporateVideoIndustryItem {
  description: string;
  title: string;
}

export const IndustriesAlt = ({
  description,
  heading,
  industries,
}: IndustriesAltProps) => {
  return (
    <section className="relative overflow-hidden bg-[#111518] pt-20 pb-0 text-white md:pt-32 lg:pt-[100px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,#4BC0D9_0%,rgba(75,192,217,0.82)_18%,rgba(30,96,145,0.55)_34%,transparent_50%),radial-gradient(circle_at_92%_78%,rgba(120,0,0,0.92)_0%,rgba(178,58,72,0.55)_26%,transparent_58%),linear-gradient(135deg,#111518_0%,#173D4C_34%,#28113A_68%,#4A001E_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,21,24,0.9)_0%,rgba(17,21,24,0.62)_46%,rgba(17,21,24,0.1)_100%)]" />

      <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl">
          <SectionHeader as="h2" className="max-w-4xl text-[30px] md:text-[50px] lg:text-[70px] font-black leading-none text-white" level="h1">
            {heading}
          </SectionHeader>
          <p className="type-body-l mt-7 max-w-4xl leading-relaxed text-white/86">{description}</p>

          <div className="mt-8 max-w-4xl space-y-6 md:mt-10 md:space-y-7">
            {industries.map((industry) => (
              <article key={industry.title}>
                <h3 className="type-h3 font-black leading-tight text-[#4BC0D9]">{industry.title}</h3>
                <p className="type-body-l mt-2 max-w-3xl leading-relaxed text-white/84">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 md:mt-24 lg:mt-32">
        <CorporateVideoImageStrip />
      </div>
    </section>
  );
};
