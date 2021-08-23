import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";
import { connect } from "react-redux";
import { CartItem } from "../types";

const AddToCart = ({ id, dispatch, notify, cart }: any | undefined) => {
  const [numItems, setNumItems] = useState(1);

  const increment = () => {
    setNumItems((val) => (val === 10 ? val : val + 1));
  };

  const decrement = () => {
    setNumItems((val) => (val === 1 ? val : val - 1));
  };

  const addToCart = () => {
    setNumItems(1);

    if (cart.map((item: CartItem) => item.item.id).includes(id + 1)) {
      notify(
        "❌ Item already in cart! Click to view cart.",
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
      return;
    }

    dispatch({ type: "ADD_TO_CART", item: { id: id, quantity: numItems } });
  };

  return (
    <div className="mt-2">
      <div>
        <RemoveIcon
          onClick={decrement}
          className="mx-2 transform hover:scale-110"
        />
        <span
          className={`${
            numItems > 9 ? "px-1" : "px-2"
          } border-t-2 border-b-2 border-gray-600 rounded-sm`}
        >
          {numItems}
        </span>
        <AddIcon
          onClick={increment}
          className="mx-2 transform hover:scale-110"
        />
      </div>
      <AddShoppingCartIcon
        onClick={addToCart}
        className="mx-2 transform hover:scale-110"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  notify: state.notify,
  cart: state.cart,
});

export default connect(mapStateToProps)(AddToCart);
