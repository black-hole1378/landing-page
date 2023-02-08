import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  quantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setNewCart(state, action) {
      state.quantity = action.payload;
    },
    IncreaseCart(state) {
      state.quantity += 1;
    },
    DecreaseCart(state) {
      state.quantity =
        state.quantity > 0 ? (state.quantity -= 1) : state.quantity;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.cart,
        };
      },
    },
  },
});

export const { IncreaseCart, DecreaseCart } = cartSlice.actions;
export const selectQuantity = (state) => state.cart.quantity;
export default cartSlice.reducer;
