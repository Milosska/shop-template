import { useRef } from "react";
import { useLocation } from "react-router-dom";

import { products } from "@/data/products";
import prodPh from "@/assets/images/placeholders/product-card-min.jpg";
import prodPhBig from "@/assets/images/placeholders/product-card@2x-min.jpg";

import { LinkBtn } from "@/components/global/LinkBtn/LinkBtn";
import { PageTitle, Text, TextLabel } from "./ProductPage.styled";

const ProductPage = () => {
  const product = products[0];
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

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
    </>
  );
};

export default ProductPage;
