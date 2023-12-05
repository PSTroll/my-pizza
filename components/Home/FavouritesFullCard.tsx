import React from "react";

import { FavouritesCardType } from "@/types";
import { AppearingComponent } from "..";

const FavouritesFullCard = ({ title, content }: FavouritesCardType) => {
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
    <AppearingComponent>
      <div
        className={`lg:max-w-[900px] my-10 bg-no-repeat bg-cover ${image} bg-white`}
      >
        <div
          className={`max-sm:w-full ${image2} bg-no-repeat max-sm:h-72`}
        ></div>
        <div className="px-5 max-sm:px-10 py-8 max-sm:text-black text-white sm:ml-72">
          <h2 className="text-3xl font-extrabold py-2">{title}</h2>
          <p className="py-2">{content}</p>
        </div>
      </div>
    </AppearingComponent>
  );
};

export default FavouritesFullCard;
