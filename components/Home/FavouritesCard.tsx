import { FavouritesCardType } from "@/types";
import Image from "next/image";
import React from "react";

const FavouritesCard = ({ title, content, imageSrc }: FavouritesCardType) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white lg:w-[800px] relative -top-96 md:-top-32">
      <div>
        <Image alt={title} src={imageSrc} width={200} height={200} />
      </div>
      <div className="px-5 max-sm:px-10 py-8">
        <h2 className="text-3xl font-extrabold py-2">{title}</h2>
        <p className="py-2">{content}</p>
      </div>
    </div>
  );
};

export default FavouritesCard;
