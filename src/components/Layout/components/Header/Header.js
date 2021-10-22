import React, { useEffect, useState } from "react";

import * as styles from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import AnimLink from "../../../shared/AnimLink/AnimLink";
import { globalHistory } from "@reach/router";
const Header = (props) => {
  const [activeUrl, setActiveUrl] = useState("");
  const [animLinksThemes, setAnimLinksThemes] = useState({});

  const checkLocation = () => {
    const pathname = window.location.pathname.replaceAll("/", "");
    setActiveUrl(pathname);
    switch (pathname) {
      case "quienes-somos":
      case "docentes":
        setAnimLinksThemes((prevState) => {
          prevState.blackTheme = true;
          return prevState;
        });
        break;
      default:
        setAnimLinksThemes((prevState) => {
          delete prevState.blackTheme;
          return prevState;
        });
        break;
    }
  };
  // Check location hook
  useEffect(() => {
    checkLocation();
    globalHistory.listen(({ action }) => {
      checkLocation();
    });
  }, []);

  // Is Scrolled hook
  useEffect(() => {
    if (props.isScrolled) {
      setAnimLinksThemes((prevState) => {
        const newState = { ...prevState };
        newState.isScrolled = true;
        return newState;
      });
    } else {
      setAnimLinksThemes((prevState) => {
        const newState = { ...prevState };
        delete newState.isScrolled;
        return newState;
      });
    }
  }, [props.isScrolled]);

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
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/"}
            >
              Inicio
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/quienes-somos"}
            >
              ¿Quiénes Somos?
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/docentes"}
            >
              Docentes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/experiencias-musicales"}
            >
              Experiencias Musicales
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/paquetes"}
            >
              Paquetes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
              activeUrl={activeUrl}
              className={styles.link}
              to={"/preguntas-frecuentes"}
            >
              Preguntas Frecuentes
            </AnimLink>
          </li>
          <li>
            <AnimLink
              theme={animLinksThemes}
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
