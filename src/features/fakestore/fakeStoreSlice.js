import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products:null,
  cart: [],
};

export const getProducts = createAsyncThunk("fakeStore/fetchProducts", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data, "res");
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});

export const fakeStoreSlice = createSlice({
  name: "fakestore",
  initialState,

  reducers: {
    addToCart: (state, action) => {
        const product = action.payload
        console.log(action.payload);
        state.cart = [...state.cart,product]
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        console.log(state.products);
      });
  },
});

export const loading = (state) => state.fakeStore.loading
export const products = (state) => state.fakeStore.products
export const cart = (state) => state.fakeStore.cart

export const { addToCart } = fakeStoreSlice.actions;

export default fakeStoreSlice.reducer;
