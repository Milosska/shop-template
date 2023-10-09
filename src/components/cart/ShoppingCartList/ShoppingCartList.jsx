import { products } from "@/data/products";

import { ShoppingCartCard } from "../ShoppingCartCard/ShoppingCartCard";
import { LinkBtn } from "@/components/global/LinkBtn/LinkBtn";
import { GeneralBtn } from "@/components/global/GeneralBtn/GeneralBtn";
import {
  List,
  CartFooterThumb,
  CartTotalThumb,
  CartTotalText,
} from "./ShoppingCartList.styled";

export const ShoppingCartList = () => {
  const handleOrder = () => {
    console.log("My order!");
  };

  return (
    <>
      <List>
        {products.map((item) => (
          <ShoppingCartCard key={item.id} item={item} />
        ))}
      </List>
      <CartFooterThumb>
        <LinkBtn text="Continue shopping" address="/" />
        <CartTotalThumb>
          <CartTotalText>Total $1000</CartTotalText>
          <GeneralBtn text="Make an order" callback={handleOrder} />
        </CartTotalThumb>
      </CartFooterThumb>
    </>
  );
};
