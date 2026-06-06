import Image from "next/image";

import { Heading } from "@/components/ui/Heading";

export interface AboutFounderStoryData {
  image: {
    alt: string;
    src: string;
  };
  name: string;
  story: string;
}

export const AboutFounderStory = ({ data }: { data: AboutFounderStoryData }) => {
  return (
    <section className="scroll-mt-28 bg-brand-white py-20" id="founder">
      <div className="container mx-auto grid items-center gap-12 px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-brand-gray shadow-xl">
          <Image
            alt={data.image.alt}
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            src={data.image.src}
          />
        </div>

        <div>
          <Heading as="h2" className="mb-8">
            {data.name}
          </Heading>
          <p className="text-xl leading-relaxed text-brand-charcoal/80 md:text-2xl">{data.story}</p>
        </div>
      </div>
    </section>
  );
};
