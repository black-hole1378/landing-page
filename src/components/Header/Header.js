import Head from "next/head";
import React from "react";
import AppBar from "./AppBar";
const Header = () => {
  return (
    <>
      <Head>
        <title>Snap</title>
        <meta name="description" content="This is Snap Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppBar />
    </>
  );
};

export default Header;
