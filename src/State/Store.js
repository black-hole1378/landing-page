import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./Slice/authSlice";
import { cartSlice } from "./Slice/cartSlice";
import { ProfileSlice } from "./Slice/profile";
const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [ProfileSlice.name]: ProfileSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
