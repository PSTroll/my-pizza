import { FavouriteRecipes } from "@/components";

export default function Home() {
  return (
    <main className="w-full relative -z-10 top-[-116px] flex flex-col items-center">
      <div className="bg-hero-image bg-cover w-full h-[440px] md:rounded-b-full"></div>
      <div className="mt-48">
        <FavouriteRecipes />
      </div>
    </main>
  );
}
