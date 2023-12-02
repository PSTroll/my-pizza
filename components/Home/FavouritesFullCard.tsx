"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { FavouritesCardType } from "@/types";
import { MotionDiv } from "..";

const FavouritesFullCard = ({ title, content }: FavouritesCardType) => {
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

  let image = "";
  let image2 = "";

  if (title === "Pizza Funghi") {
    image = "sm:bg-[url(/images/recipes/fungi.jpg)]";
  } else {
    image = "sm:bg-[url(/images/recipes/capricciosa.jpg)]";
  }

  if (title === "Pizza Funghi") {
    image2 = "max-sm:bg-[url(/images/recipes/fungi.jpg)]";
  } else {
    image2 = "max-sm:bg-[url(/images/recipes/capricciosa.jpg)]";
  }

  return (
    <MotionDiv
      className={`lg:max-w-[900px] my-10 bg-no-repeat bg-cover ${image} bg-white`}
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
      <div className={`max-sm:w-full ${image2} bg-no-repeat max-sm:h-72`}></div>
      <div className="px-5 max-sm:px-10 py-8 max-sm:text-black text-white sm:ml-72">
        <h2 className="text-3xl font-extrabold py-2">{title}</h2>
        <p className="py-2">{content}</p>
      </div>
    </MotionDiv>
  );
};

export default FavouritesFullCard;
