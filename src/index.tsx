import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import { ReduxStoreState } from "./types";

const initialState: ReduxStoreState = {
  cart: [],
  storeItems: [],
  notify: (message: string, options: any, dark = false) =>
    dark ? toast.dark(message, options) : toast(message, options),
};

function reducer(state = initialState, action: any) {
  let newState = { ...state };
  console.log(action);
  switch (action.type) {
    case "SET_STORE_ITEMS":
      newState.storeItems = action.storeItems;
      return newState;
    case "ADD_TO_CART":
      let newCart = [...newState.cart];
      let newItem = action.item;

      newCart.push({
        item: newState.storeItems[newItem.id],
        quantity: newItem.quantity,
      });
      newState.cart = newCart;

      newState.notify(
        `☑️ ${newCart[newCart.length - 1].item.title} added to cart!`,
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
      return newState;
    default:
      return newState;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
