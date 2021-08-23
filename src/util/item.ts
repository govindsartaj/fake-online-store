import { Item } from "../types";

export const getItems = async () => {
  const res: Response = await fetch("https://fakestoreapi.com/products");
  let resJSON = await res.json();
  resJSON = resJSON.map((a: Item) => ({ ...a, favorite: Math.random() > 0.5 }));
  return resJSON;
};
