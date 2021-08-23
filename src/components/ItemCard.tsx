import React from "react";
import { ItemProps } from "../types";
import AddToCart from "./AddToCart";
import HeartIcon from "./HeartIcon";

const ItemCard = ({ item, id, openItemModal }: ItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    const clickedNodeType = (e.target as HTMLElement).nodeName;
    const heartNodeTypes = ["svg", "path"];
    if (!heartNodeTypes.includes(clickedNodeType)) openItemModal(id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-full h-auto p-4 overflow-hidden text-center transform border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-500"
    >
      <HeartIcon favorite={item.favorite} id={id} />
      {item.image ? (
        <img
          className="block h-56 max-w-full p-4 ml-auto mr-auto"
          src={item.image}
          alt={`${item.title}`}
        ></img>
      ) : (
        <div className="block h-56 max-w-full p-4 ml-auto mr-auto">
          Image not available!
        </div>
      )}
      <div className="font-bold">{item.title}</div>
      <div className="mb-auto">
      ${item.price}
      </div>
      <AddToCart id={id}/>
    </div>
  );
};

export default ItemCard;
