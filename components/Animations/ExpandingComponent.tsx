"use client";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { MotionDiv } from "..";

const ExpandingComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const variants = {
    hidden: {
      transform: "scaleX(.1)",
    },
    visible: {
      transform: "scaleX(1)",
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <MotionDiv
      variants={variants}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        delay: 0,
        ease: "easeInOut",
        duration: 0.6,
      }}
      viewport={{ amount: 0 }}
    >
      {children}
    </MotionDiv>
  );
};

export default ExpandingComponent;
