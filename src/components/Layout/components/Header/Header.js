import React, { useEffect, useState } from "react";

import * as styles from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import AnimLink from "../../../shared/AnimLink/AnimLink";
import { globalHistory } from "@reach/router";
const Header = (props) => {
  const [activeUrl, setActiveUrl] = useState("");

  const checkLocation = () => {
    setActiveUrl(window.location.pathname);
  };
  useEffect(() => {
    checkLocation();
    globalHistory.listen(({ action }) => {
      checkLocation();
    });
  }, []);
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: props.isScrolled ? "var(--black)" : "transparent",
      }}
    >
      <StaticImage
        width={50}
        src="../../../../images/logo.jpeg"
        objectFit={"contain"}
        imgStyle={{ opacity: 1, transition: "none" }}
        loading={"eager"}
        style={{
          margin: "10px 20px",
          overflow: "hidden",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        alt="Logo"
      />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <AnimLink activeUrl={activeUrl} className={styles.link} to={"/"}>
              Inicio
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/quienes-somos"}
            >
              ¿Quiénes Somos?
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/docentes"}
            >
              Docentes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/experiencias-musicales"}
            >
              Experiencias Musicales
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/paquetes"}
            >
              Paquetes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/preguntas-frecuentes"}
            >
              Preguntas Frecuentes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              activeUrl={activeUrl}
              className={styles.link}
              to={"/contactenos"}
            >
              Contáctenos
            </AnimLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
