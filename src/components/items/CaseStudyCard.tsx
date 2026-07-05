import Image from "next/image";
import Link from "next/link";

export interface CaseStudyCardItem {
  client?: string;
  clientLogo?: string;
  href?: string;
  image: string;
  title: string;
}

export const CaseStudyCard = ({ item }: { item: CaseStudyCardItem }) => (
  <article className="group overflow-hidden rounded-2xl rounded-tl-none bg-white text-[#222222] shadow-[0_26px_70px_rgba(0,0,0,0.24)] md:rounded-lg md:rounded-tl-none">
    <div className="relative aspect-[1.45] overflow-hidden">
      <Image
        alt={item.title}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        src={item.image}
      />
    </div>

    <div className="flex min-h-[300px] flex-col p-5 md:p-10">
      {item.clientLogo ? (
        <Image
          alt={item.client ?? "Client logo"}
          className="mb-5 object-contain object-left"
          height={24}
          src={item.clientLogo}
          width={120}
        />
      ) : null}
      <h3 className="type-h3 line-clamp-3 leading-tight">{item.title}</h3>
      <p className="type-body-m mt-4 leading-relaxed text-[#333333]">Case Study</p>

      <Link
        className="mt-auto inline-flex w-fit items-center gap-2 pt-12 font-heading text-xl font-bold text-[#0C6573] underline decoration-2 underline-offset-4 transition-colors hover:text-[#1E6091] hover:no-underline md:text-2xl"
        href={item.href ?? "/case-studies"}
      >
        View Project
      </Link>
    </div>
  </article>
);
