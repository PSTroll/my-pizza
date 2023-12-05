export type FavouritesCardType = {
  title: string;
  content: string;
  imageSrc: string;
};

export type SearchProps = {
  changeSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
};
