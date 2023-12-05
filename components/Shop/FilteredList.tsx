import React from "react";

import { ProductsType } from "@/types";

const FilteredList = ({ filteredList }: ProductsType[] | any) => {
  return (
    <div>
      {filteredList.map((item: ProductsType, index: number) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};

export default FilteredList;
