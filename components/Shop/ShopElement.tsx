import React from "react";

import { FadeInComponent, Search } from "..";
import Image from "next/image";

const ShopElement = () => {
  return (
    <div className="flex w-full flex-col items-center mx-1">
      <div className="flex w-full justify-center">
        <Search />
        <FadeInComponent>
          <Image
            src="/images/icons/filter.svg"
            alt="filter icon"
            width={52}
            height={52}
            className="ml-3 w-16 p-3 rounded-full bg-slate-600 hover:cursor-pointer hover:bg-slate-500 duration-500"
          />
        </FadeInComponent>
      </div>
      <div></div>
    </div>
  );
};

export default ShopElement;
