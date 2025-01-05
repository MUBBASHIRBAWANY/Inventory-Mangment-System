import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products : []
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.Products  = action.payload
      },
      removeProduct: (state, action) => {
        state.Products = state.Products.filter(product => product._id!== action.payload);
      }, 
    }
})

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;