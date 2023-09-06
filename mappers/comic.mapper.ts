import { ApiComic, IComic } from "contracts/comics.contract";

export const toFront = (data: ApiComic): IComic[] => {
  if (!data.results) {
    return [];
  }
  return data.results.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.thumbnail.path + "." + item.thumbnail.extension,
    description: item.description || "No description available",
    price: item.prices[0]?.price || 0,
    characters: item.characters.items.map((character) => character.name),
    stock: item.stories.available || 0, // para mi ahi va comics no stories pero no esta
  }));
};
