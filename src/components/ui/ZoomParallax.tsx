"use client";

import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";

interface Image {
  alt?: string;
  src: string;
}

interface ParallaxItemProps {
  alt?: string;
  index: number;
  scale: MotionValue<number>;
  src: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: Image[];
}

const ParallaxItem = ({ alt, index, scale, src }: ParallaxItemProps) => {
  const motionStyle = useMemo(() => ({ scale }), [scale]);

  return (
    <motion.div
      className={`absolute top-0 flex h-full w-full items-center justify-center ${
        index === 1
          ? "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]"
          : ""
      } ${
        index === 2
          ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]"
          : ""
      } ${
        index === 3 ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]" : ""
      } ${
        index === 4
          ? "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]"
          : ""
      } ${
        index === 5
          ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]"
          : ""
      } ${
        index === 6
          ? "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]"
          : ""
      } `}
      style={motionStyle}
    >
      <div className="relative h-[25vh] w-[25vw]">
        <Image
          alt={alt || `Parallax image ${index + 1}`}
          className="object-cover"
          fill
          sizes="25vw"
          src={src || "/placeholder.svg"}
        />
      </div>
    </motion.div>
  );
};

export const ZoomParallax = ({ images }: ZoomParallaxProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: container,
  });

  const scale5_center = useTransform(scrollYProgress, [0, 0.8, 1], [1, 5, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 5, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 6, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 8, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 9, 9]);

  const scales = [scale5_center, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div className="relative h-[300vh]" ref={container}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ alt, src }, index) => {
          const scale = scales[index % scales.length];

          return (
            <ParallaxItem
              alt={alt}
              index={index}
              key={index}
              scale={scale}
              src={src}
            />
          );
        })}
      </div>
    </div>
  );
};
