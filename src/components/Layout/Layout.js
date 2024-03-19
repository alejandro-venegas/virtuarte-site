import React, { createRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import * as styles from "./Layout.module.scss";
import Footer from "./components/Footer/Footer";
import SEO from "../shared/SEO/SEO";
import { NewsletterModal } from "./components/NewsletterModal/NewsletterModal";

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
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="8a86c443-b63c-4f92-ae5b-cf9ccccb0964";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
      ></script>
      <div className={styles.scrollReference} ref={scrollReferenceRef} />
      <Header isScrolled={isScrolled} />
      <main>{props.children}</main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};
export default Layout;
