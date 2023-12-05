export type FavouritesCardType = {
  title: string;
  content: string;
  imageSrc: string;
};

export type SearchProps = {
  changeSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
};

export type ProductsType = {
  id: number;
  name: string;
  description: string;
  price: number;
};
