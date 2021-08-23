import { ItemModalProps } from "../types";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { useEffect } from "react";
import AddToCart from "./AddToCart";

const ItemModal = ({
  itemIndex,
  closeItemModal,
  storeItems,
}: ItemModalProps) => {
  const item = storeItems[itemIndex];

  const handleClick = (e: any) => {
    if ((e.target as HTMLDivElement).id === "overlay") {
      closeItemModal(e);
    }
  };

  return (
    <div
      onClick={handleClick}
      id="overlay"
      className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-black bg-opacity-40"
    >
      <div className="relative z-50 w-full h-full p-8 mx-auto text-center text-black transform -translate-y-1/2 bg-white bg-opacity-100 shadow-xl sm:h-auto sm:w-3/4 md:w-3/5 lg:w-1/2 top-1/2 rounded-xl">
        <div
          onClick={closeItemModal}
          className="absolute top-0 right-0 p-2 cursor-pointer"
        >
          <CloseIcon />
        </div>
        {item.image ? (
          <img
            className="block h-56 max-w-full p-4 ml-auto mr-auto"
            src={item.image}
            alt={item.title}
          ></img>
        ) : (
          <div className="block h-56 max-w-full p-4 ml-auto mr-auto">
            Image not available!
          </div>
        )}
        <div className="font-bold">{item.title}</div>
        <div>{item.description}</div>
        <AddToCart id={itemIndex} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  storeItems: state.storeItems,
});

export default connect(mapStateToProps)(ItemModal);
