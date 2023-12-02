import React from "react";
import { MotionDiv } from "..";

const AboutCard = () => {
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
      className="p-5 rounded border-primary border-2 text-[#efefef] text-l m-1"
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
      <h2 className="text-xl font-bold pb-2 text-center">
        🍕 Welcome to the Home of Pizza Perfection! 🍕
      </h2>
      <p>
        Hey there, pizza lovers! 👋 I'm <b>PizzaMan</b>, your go-to guide for
        all things pizza on Instagram! 🍽️
      </p>
      <p className="py-2">
        🌟 Join me on a cheesy, saucy journey as I whip up mouthwatering pizza
        recipes that will transport your taste buds straight to Italy and
        beyond.
      </p>
      <p className="py-2">
        ✨ From classic Margheritas to bold, inventive flavor combinations, I'm
        here to inspire your pizza-making adventures. What started as a simple
        love affair with the perfect slice has blossomed into a passion for
        crafting, sharing, and savoring every cheesy, crispy bite. With a
        background in culinary arts and a deep-seated adoration for all things
        pizza-related, I've dedicated myself to curating recipes that cater to
        all tastes and skill levels. But hey, it's not just about the pies! 🎉
        It's about fostering a community of pizza aficionados who share the same
        zest for creating deliciousness at home. I'm here to share tips, tricks,
        and behind-the-scenes glimpses into my pizza-making escapades, and I
        can't wait to have you join this flavorful journey! So whether you're a
        seasoned dough-flipper or a newbie pizza enthusiast, stick around! Let's
        knead, top, bake, and savor the magic of pizza together. 🍕
      </p>
      <p className="py-2">
        ✨ Don't forget to tag me in your homemade creations—I love seeing your
        unique spins on these timeless classics! Get ready to elevate your pizza
        game, one slice at a time. Let's dive into the deliciousness! 🤩🍴
      </p>
    </MotionDiv>
  );
};

export default AboutCard;
