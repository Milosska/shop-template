import { products as productItems } from "./products";

export const cathegories = [
  {
    id: 1,
    name: "Books",
    products: productItems.map((item) => {
      item.cathegoryId = 1;
      return item;
    }),
  },
  {
    id: 2,
    name: "Clothers",
    products: productItems.map((item) => {
      item.cathegoryId = 2;
      return item;
    }),
  },
  {
    id: 3,
    name: "Electronics",
    products: productItems.map((item) => {
      item.cathegoryId = 3;
      return item;
    }),
  },
  {
    id: 4,
    name: "Foods",
    products: productItems.map((item) => {
      item.cathegoryId = 4;
      return item;
    }),
  },
  {
    id: 5,
    name: "Furniture and decor",
    products: productItems.map((item) => {
      item.cathegoryId = 5;
      return item;
    }),
  },
];
