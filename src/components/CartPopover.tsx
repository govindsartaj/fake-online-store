import { connect } from "react-redux";
import { CartItem } from "../types";
import CartPopoverItem from "./CartPopoverItem";

const CartPopover = ({ cart }: any) => {
  return (
    <div className="fixed right-0 z-10 w-full max-h-full py-4 overflow-auto bg-white border-2 shadow-xl rounded-xl md:w-3/4 lg:w-1/2 xl:w-1/3">
      {cart.map((cartItem: CartItem, i: number) => (
        <CartPopoverItem cartItem={cartItem} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartPopover);
