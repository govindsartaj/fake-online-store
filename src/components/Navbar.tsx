import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { useState } from "react";
import CartPopover from "./CartPopover";

const Navbar = ({ cart, notify }: any) => {
  const [isCartPopoverVisible, setIsCartPopoverVisible] = useState(false);

  const handleClick = () => {
    if (cart.length === 0) {
      notify(
        "❗ Add an item to your cart first!",
        {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          closeButton: false,
          draggable: true,
          progress: undefined,
        },
        true
      );
    } else {
      setIsCartPopoverVisible((prev) => !prev);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10 p-3 text-xl text-right text-white bg-govindgray">
        <div onClick={handleClick} className="cursor-pointer">
          <ShoppingCartIcon />
          <span className="text-sm">{cart.length} </span>
        </div>
      </div>
      {isCartPopoverVisible && <CartPopover />}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
    notify: state.notify,
  };
};

export default connect(mapStateToProps)(Navbar);
