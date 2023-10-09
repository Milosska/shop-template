import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    changeProductInCart: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        }
        return product;
      });
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, changeProductInCart, removeProductFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
