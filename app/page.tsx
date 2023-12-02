import { FavouriteRecipes } from "@/components";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <div className="bg-hero-image bg-cover w-full h-[540px] md:rounded-b-full">
        <div className="h-full flex justify-center items-center">
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-light max-lg:text-center sm:px-2 text-white bg-opacity-60 bg-black rounded-lg">
            MY FAVORITE PIZZA RECIPES
          </h1>
        </div>
      </div>
      <div className="mt-10 sm:mt-[-100px]">
        <FavouriteRecipes />
      </div>
    </main>
  );
}
