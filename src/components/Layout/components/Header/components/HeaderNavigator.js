import * as styles from "./HeaderNavigator.module.scss";
import AnimLink from "../../../../shared/AnimLink/AnimLink";
import React, { useEffect, useState } from "react";
import { globalHistory } from "@reach/router";

const HeaderNavigator = (props) => {
  const linkObjects = [
    {
      id: "/",
      to: "/",
      name: "Inicio",
    },
    {
      id: "/quienes-somos",
      to: "/quienes-somos",
      name: "¿Quiénes Somos?",
    },
    {
      id: "/docentes",
      to: "/docentes",
      name: "Docentes",
    },
    {
      id: "/experiencias-musicales",
      to: "/experiencias-musicales",
      name: "Experiencias Musicales",
    },
    {
      id: "/paquetes",
      to: "/paquetes",
      name: "Paquetes",
    },
    {
      id: "/preguntas-frecuentes",
      to: "/preguntas-frecuentes",
      name: "Preguntas Frecuentes",
    },
    {
      id: "/contactenos",
      to: "/contactenos",
      name: "Contáctenos",
    },
  ];
  const [activeUrl, setActiveUrl] = useState("");
  const [animLinksThemes, setAnimLinksThemes] = useState("");

  const linksElements = linkObjects.map((link) => {
    const isActive =
      activeUrl.replaceAll("/", "") === link.to.replaceAll("/", "");
    return (
      <li>
        <AnimLink
          to={link.to}
          className={`${styles.link} ${isActive && styles.selected} ${
            props.isScrolled && styles.isScrolled
          } ${animLinksThemes}`}
        >
          {link.name}
        </AnimLink>
      </li>
    );
  });

  const checkLocation = () => {
    const pathname = window.location.pathname.replaceAll("/", "");
    setActiveUrl(pathname);
    props.onRouteChanged();
    switch (pathname) {
      case "quienes-somos":
      case "docentes":
        setAnimLinksThemes(styles.blackTheme);
        break;
      default:
        setAnimLinksThemes("");
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

  return (
    <nav
      className={`${styles.nav} ${props.isToggled && styles.isToggled}`}
      style={{ paddingTop: props.topPadding + "px" }}
    >
      <ul className={styles.list}>{linksElements}</ul>
    </nav>
  );
};

export default HeaderNavigator;
