"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { FadeInComponent, FilteredList, Search } from "..";
import { pizzaProducts } from "@/constants";
import { ProductsType } from "@/types";

const ShopElement = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredList, setFilteredList] =
    useState<ProductsType[]>(pizzaProducts);

  useEffect(() => {
    setFilteredList(
      pizzaProducts.filter((item) =>
        item.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="flex w-full flex-col items-center mx-1">
      <div className="flex w-full justify-center">
        <Search changeSearch={setSearch} search={search} />
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
      <div className="text-white">
        <FilteredList filteredList={filteredList} />
      </div>
    </div>
  );
};

export default ShopElement;
