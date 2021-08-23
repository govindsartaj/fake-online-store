import React from "react";

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  favorite: boolean;
};

export type ItemProps = {
  item: Item;
  key: number | undefined;
  id: number | undefined;
  openItemModal: Function;
};

export type HeartIconProps = {
  favorite: boolean;
  id: number | undefined;
};

export type ItemCardListProps = {
  storeItems: Array<Item>;
  openItemModal: Function;
};

export type ItemModalProps = {
  itemIndex: number;
  storeItems: any;
  closeItemModal: React.MouseEventHandler<HTMLDivElement>;
};

export type CartItem = {
  item: Item;
  quantity: number;
};

export type ReduxStoreState = {
  cart: Array<CartItem>;
  storeItems: Array<Item>;
  notify: Function;
};
