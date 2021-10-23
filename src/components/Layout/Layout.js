import React, { createRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import * as styles from "./Layout.module.scss";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";

const Layout = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollReferenceRef = createRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsScrolled(!entries[0].isIntersecting);
    });
    observer.observe(scrollReferenceRef.current);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Virtuarte</title>
      </Helmet>
      <div className={styles.scrollReference} ref={scrollReferenceRef} />
      <Header isScrolled={isScrolled} />
      <main style={{ height: "200vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
