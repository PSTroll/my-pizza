import React from "react";
import { FavouritesCard } from "..";
import { recipes } from "@/constants";
import FavouritesFullCard from "./FavouritesFullCard";

const FavouriteRecipes = () => {
  return (
    <div className="flex items-center flex-col">
      <div>
        <FavouritesCard
          title={recipes[0].title}
          content={recipes[0].description}
          imageSrc={recipes[0].imageSrc}
        />
      </div>
      <div>
        <FavouritesFullCard
          title={recipes[2].title}
          content={recipes[2].description}
          imageSrc={recipes[2].imageSrc}
        />
      </div>
      <div>
        <FavouritesCard
          title={recipes[1].title}
          content={recipes[1].description}
          imageSrc={recipes[1].imageSrc}
        />
      </div>
      <div>
        <FavouritesFullCard
          title={recipes[3].title}
          content={recipes[3].description}
          imageSrc={recipes[3].imageSrc}
        />
      </div>
    </div>
  );
};

export default FavouriteRecipes;
