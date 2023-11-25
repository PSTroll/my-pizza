import React from "react";
import { FavouritesCard } from "..";

const FavouriteRecipes = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-7xl font-light relative -top-[32.25rem] sm:-top-[26rem] w-auto max-lg:text-center px-2 text-white bg-opacity-30 lg:p-5 bg-black rounded-lg">
        MY FAVORITE PIZZA RECIPES
      </h1>
      <FavouritesCard
        title="BEST BURGER"
        content="my burger fdfdsfds f fdsf sd fsd fsd fsdfsd fsdfsdfsdfsdf sd fsdfsdfsdfsd f sd f sad asdasdasd as"
        imageSrc=""
      />
    </div>
  );
};

export default FavouriteRecipes;
