"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { FavouritesCardType } from "@/types";
import { MotionDiv } from "..";

const FavouritesCard = ({ title, content, imageSrc }: FavouritesCardType) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: {
      transform: "translateY(50px)",
      opacity: 0,
    },
    visible: {
      transform: "translateY(0)",
      opacity: 100,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <MotionDiv
      className="flex flex-col lg:flex-row bg-white sm:mx-36 lg:max-w-[900px] my-10"
      variants={variants}
      initial="hidden"
      animate={controls}
      ref={ref}
      transition={{
        delay: 0,
        ease: "easeInOut",
        duration: 0.6,
      }}
      viewport={{ amount: 0 }}
    >
      <div>
        <Image
          alt={title}
          src={imageSrc}
          width={3000}
          height={3000}
          className="basis-3 lg:w-[3000px] lg:h-96"
        />
      </div>
      <div className="px-5 max-sm:px-10 py-8">
        <h2 className="text-3xl font-extrabold py-2">{title}</h2>
        <p className="py-2">{content}</p>
      </div>
    </MotionDiv>
  );
};

export default FavouritesCard;
