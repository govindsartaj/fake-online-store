import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getItems } from "../util/item";
import ItemCardList from "./ItemCardList";
import ItemModal from "./ItemModal";

const Store = ({ storeItems, dispatch }: any) => {
  const [reqState, setReqState] = useState("idle");
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);
  const [clickedItemIndex, setClickedItemIndex] = useState<number>();

  const fetchItems = async () => {
    try {
      const items = await getItems();
      dispatch({ type: "SET_STORE_ITEMS", storeItems: items });
      setReqState("idle");
    } catch (e) {
      setReqState("error");
    }
  };

  const openItemModal = (id: number) => {
    setIsItemModalVisible(true);
    setClickedItemIndex(id);
    document.body.style.overflow ='hidden'
  };

  const closeItemModal = () => {
    setIsItemModalVisible(false);
    document.body.style.overflow ='auto'
  };

  useEffect(() => {
    setReqState("loading");
    fetchItems();
  }, []);

  if (reqState === "loading") return <h1>Loading...</h1>;

  if (reqState === "error") return <h1>Something went wrong!</h1>;

  return (
    <>
      {isItemModalVisible && (
        <ItemModal
          itemIndex={clickedItemIndex || 0}
          closeItemModal={closeItemModal}
        />
      )}
      <ItemCardList
        openItemModal={openItemModal}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  storeItems: state.storeItems,
});

export default connect(mapStateToProps)(Store);
