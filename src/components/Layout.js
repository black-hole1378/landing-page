import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
