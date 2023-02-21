import React from "react";
import { selectAuthState } from "../src/State/Slice/authSlice";
import { useSelector } from "react-redux";
import ErrorPage from "next/error";
const Cart = () => {
  const select = useSelector(selectAuthState);
  if (!select) return <ErrorPage statusCode={404} />;
  else return <div>Hello</div>;
};

export default Cart;
