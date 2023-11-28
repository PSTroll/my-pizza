import { FavouriteRecipes } from "@/components";

export default function Home() {
  return (
    <main className="w-full relative -z-10 top-[-116px] flex flex-col items-center">
      <div className="bg-hero-image bg-cover w-full h-[540px] md:rounded-b-full">
        <div className="h-full flex justify-center items-center">
          <h1 className="text-6xl sm:text-7xl text-center font-light max-lg:text-center px-2 text-white bg-opacity-30 lg:p-5 bg-black rounded-lg">
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
