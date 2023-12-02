import { AboutCard } from "@/components";
import React from "react";

const About = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="bg-hero-image bg-cover bg-opacity-60 w-full h-[540px] md:rounded-b-full">
        <div className="h-full flex justify-center items-center">
          <h1 className="md:text-6xl text-5xl font-light max-lg:text-center sm:px-2 text-white bg-opacity-60 bg-black rounded-lg">
            ABOUT ME
          </h1>
        </div>
      </div>
      <div className="mt-48 mb-48">
        <div className="flex flex-col sm:mx-36 lg:max-w-[900px]">
          <AboutCard />
        </div>
      </div>
    </main>
  );
};

export default About;
