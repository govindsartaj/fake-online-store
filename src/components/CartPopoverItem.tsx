import { CartItem } from "../types";

const CartPopoverItem = ({ cartItem }: any) => {
  return (
    <div className="grid h-auto grid-cols-4 p-4 border-t-2">
      <img
        className="w-auto p-2 mx-auto h-36"
        src={cartItem.item.image}
        alt={`${cartItem.item.title}`}
      ></img>
      <div className="flex items-center justify-center w-full text-center">{cartItem.item.title}</div>
      <div className="flex items-center justify-center w-full text-center">${cartItem.item.price}</div>
    </div>
  );
};

export default CartPopoverItem;
