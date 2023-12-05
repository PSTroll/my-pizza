import Image from "next/image";
import React from "react";

import { FavouritesCardType } from "@/types";

import { AppearingComponent } from "..";

const FavouritesCard = ({ title, content, imageSrc }: FavouritesCardType) => {
  return (
    <AppearingComponent>
      <div className="flex flex-col lg:flex-row bg-white sm:mx-36 lg:max-w-[900px] my-10">
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
      </div>
    </AppearingComponent>
  );
};

export default FavouritesCard;
