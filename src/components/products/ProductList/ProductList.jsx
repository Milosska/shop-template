import { products } from "@/data/products";

import { ProductCard } from "../ProductCard/ProductCard";
import { List } from "./ProductList.styled";

export const ProductList = () => {
  return (
    <List>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </List>
  );
};
