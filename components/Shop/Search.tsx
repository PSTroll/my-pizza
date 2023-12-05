import Image from "next/image";
import React from "react";
import { ExpandingComponent } from "..";

const Search = () => {
  return (
    <ExpandingComponent>
      <div className="flex items-center w-full">
        <Image
          src="/images/icons/search.svg"
          alt="search icon"
          width={32}
          height={32}
          className="absolute ml-2 bg-slate-600"
        />
        <input
          type="text"
          placeholder="Enter a product name..."
          className="bg-slate-600 h-12 rounded-3xl p-2 py-8 pl-12 text-white text-lg outline-none sm:w-[450px] md:w-[600px]"
        />
      </div>
    </ExpandingComponent>
  );
};

export default Search;
