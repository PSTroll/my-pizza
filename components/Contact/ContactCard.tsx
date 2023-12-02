import React from "react";
import { MotionDiv } from "..";

const ContactCard = () => {
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

  return (
    <MotionDiv
      className="p-5 rounded border-primary border-2 text-[#efefef] text-xl m-1"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0,
        ease: "easeInOut",
        duration: 0.6,
      }}
      viewport={{ amount: 0 }}
    >
      <p className="p-2">
        <b>Email: </b>
        mypizza@example.com
      </p>
      <p className="p-2">
        <b>Instagram: </b>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener norefferer"
          className="hover:cursor-pointer hover:text-red-300 duration-300"
        >
          MyPizza
        </a>
      </p>
      <p className="text-l p-2">
        You can contact me with email or direct message on my instagram. I may
        also answer you in comments under my posts.
      </p>
    </MotionDiv>
  );
};

export default ContactCard;
