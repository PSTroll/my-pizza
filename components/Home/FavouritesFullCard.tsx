import React from "react";
import { FavouritesFullCardType } from "@/types";

const FavouritesFullCard = ({ title, content }: FavouritesFullCardType) => {
  return (
    <div className={`lg:max-w-[900px] my-10 sm:bg-fungi  bg-white`}>
      <div className="max-sm:w-full max-sm:bg-fungi max-sm:h-72"></div>
      <div className="px-5 max-sm:px-10 py-8 max-sm:text-black text-white sm:ml-72">
        <h2 className="text-3xl font-extrabold py-2">{title}</h2>
        <p className="py-2">{content}</p>
      </div>
    </div>
  );
};

export default FavouritesFullCard;
