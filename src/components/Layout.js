import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
