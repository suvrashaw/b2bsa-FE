import Image from "next/image";

const IMAGES = [
  "/media/services/media-production/corporate-video-production/deliverables-1.avif",
  "/media/services/media-production/corporate-video-production/deliverables-2.avif",
  "/media/services/media-production/corporate-video-production/deliverables-3.avif",
  "/media/services/media-production/corporate-video-production/why-choose-us-1.avif",
  "/media/services/media-production/corporate-video-production/why-choose-us-2.avif",
];

export const CorporateVideoImageStrip = () => {
  return (
    <div className="flex h-[216px] w-full overflow-hidden">
      {IMAGES.map((src, idx) => (
        <div
          className={`relative size-full flex-1 ${
            idx >= 2 ? "hidden lg:block" : "block"
          }`}
          key={idx}
        >
          <Image
            alt="Corporate video production behind the scenes"
            className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            fill
            sizes="(max-width: 1024px) 50vw, 20vw"
            src={src}
          />
        </div>
      ))}
    </div>
  );
};
