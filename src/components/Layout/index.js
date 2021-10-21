import React, { createRef, useEffect } from "react";
import Header from "./components/Header";
import * as styles from "./Layout.scss";

const Layout = (props) => {
  const scrollReferenceRef = createRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {});
  }, []);
  return (
    <div>
      <div className={styles.scrollReference} ref={scrollReferenceRef}></div>
      <Header />
      <main style={{ height: "200vh" }}>{props.children}</main>
    </div>
  );
};
export default Layout;
