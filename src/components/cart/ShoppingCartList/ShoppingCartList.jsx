import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/redux/selectors";

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
  const [total, setTotal] = useState(0);
  const products = useSelector(selectCartProducts);

  useEffect(() => {
    const countedTotal = products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setTotal(countedTotal);
  }, [products]);

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
          <CartTotalText>Total ${total}</CartTotalText>
          <GeneralBtn text="Make an order" callback={handleOrder} />
        </CartTotalThumb>
      </CartFooterThumb>
    </>
  );
};
