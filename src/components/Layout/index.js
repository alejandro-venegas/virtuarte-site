import React from "react";
import Header from "./components/Header";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ height: "200vh" }}>{props.children}</main>
    </div>
  );
};
export default Layout;
