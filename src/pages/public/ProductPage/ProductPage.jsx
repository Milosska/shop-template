import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/redux/cart/cartSlice.js";
import { selectCartProducts } from "@/redux/selectors";

import { products } from "@/data/products";
import prodPh from "@/assets/images/placeholders/product-card-min.jpg";
import prodPhBig from "@/assets/images/placeholders/product-card@2x-min.jpg";

import { LinkBtn } from "@/components/global/LinkBtn/LinkBtn";
import { GeneralBtn } from "@/components/global/GeneralBtn/GeneralBtn";
import { PageTitle, Text, TextLabel } from "./ProductPage.styled";

const ProductPage = () => {
  const product = products[0];
  const productsInCart = useSelector(selectCartProducts);
  const [inCart, setInCart] = useState(
    productsInCart.find((cartProduct) => cartProduct.id === product.id)
  );
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  const dispatch = useDispatch();

  useEffect(() => {
    inCart
      ? dispatch(addProductToCart({ ...product, quantity: 1 }))
      : dispatch(removeProductFromCart(product.id));
  }, [inCart, product, dispatch]);

  const handleInCart = () => {
    setInCart((prevState) => !prevState);
  };

  return (
    <>
      <LinkBtn text="Go back" address={backLinkHref.current} icon={true} />
      <PageTitle>{product.name}</PageTitle>
      <img
        srcSet={`${prodPh} 1x, ${prodPhBig} 2x`}
        src={prodPh}
        alt={product.name}
      />
      <Text>
        <TextLabel>Description:</TextLabel>{" "}
        {product.description || "No description"}
      </Text>
      <Text>
        <TextLabel>Price:</TextLabel> ${product.price}
      </Text>
      <GeneralBtn
        text={inCart ? "Remove from cart" : "Add in cart"}
        callback={handleInCart}
      />
    </>
  );
};

export default ProductPage;
