import * as styles from "./HeaderNavigator.module.scss";
import AnimLink from "../../../../shared/AnimLink/AnimLink";
import React, { useEffect, useState } from "react";
import { globalHistory } from "@reach/router";

const HeaderNavigator = (props) => {
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
  );
};

export default HeaderNavigator;
