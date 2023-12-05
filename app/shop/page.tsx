import { ShopElement } from "@/components";
import React from "react";

const Shop = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <div className="bg-hero-image bg-cover bg-opacity-60 w-full h-[300px] md:rounded-b-full">
        <div className="h-full flex justify-center items-center">
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-light max-lg:text-center sm:px-2 text-white bg-opacity-60 bg-black rounded-lg">
            MY PRODUCTS
          </h1>
        </div>
      </div>
      <div className="mt-48 mb-48 w-full">
        <div className="flex flex-col w-full ">
          <ShopElement />
        </div>
      </div>
    </main>
  );
};

export default Shop;
