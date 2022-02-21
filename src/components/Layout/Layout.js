import React, { createRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import * as styles from "./Layout.module.scss";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";
import { PrismicProvider, usePrismicClient } from "@prismicio/react";

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
      <Helmet>
        <title>Virtuarte</title>
      </Helmet>
      <div className={styles.scrollReference} ref={scrollReferenceRef} />
      <Header isScrolled={isScrolled} />
      <main>
        <PrismicProvider
          richTextComponents={{
            image: (props) => {
              return (
                <div className={styles.imageContainer}>
                  <img src={props.node.url} alt={props.node.alt || "Image"} />
                </div>
              );
            },
            embed: (props) => (
              <div
                className={styles.embed}
                dangerouslySetInnerHTML={{
                  __html: props.node?.oembed?.html,
                }}
              />
            ),
          }}
        >
          {props.children}
        </PrismicProvider>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
