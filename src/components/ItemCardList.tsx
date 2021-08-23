import { Item, ItemCardListProps } from "../types";
import ItemCard from "./ItemCard";
import { connect } from 'react-redux'

const ItemCardList = ({ storeItems, openItemModal }: ItemCardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {storeItems.map((item: Item, i) => (
        <ItemCard item={item} key={i} id={i} openItemModal={openItemModal} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  storeItems: state.storeItems
})

export default connect(mapStateToProps)(ItemCardList)
