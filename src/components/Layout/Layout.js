import React, { createRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import * as styles from "./Layout.module.scss";
import Footer from "./components/Footer/Footer";
import SEO from "../shared/SEO/SEO";

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
    <div className={styles.container}>
      <SEO />
      <div className={styles.scrollReference} ref={scrollReferenceRef} />
      <Header isScrolled={isScrolled} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
