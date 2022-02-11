import * as styles from "./HeaderNavigator.module.scss";
import AnimLink from "../../../../shared/AnimLink/AnimLink";
import React from "react";

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
      id: "/blog",
      to: "/blog",
      name: "Blog",
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

  const linksElements = linkObjects.map((link) => {
    const activeUrl = props.activeUrl.replaceAll("/", "");
    const itemUrl = link.to.replaceAll("/", "");

    const isActive =
      (!itemUrl && activeUrl === itemUrl) ||
      (itemUrl && activeUrl.includes(itemUrl));

    return (
      <li key={link.to}>
        <AnimLink
          to={link.to}
          className={`${styles.link} ${isActive && styles.selected} ${
            props.isScrolled && styles.isScrolled
          } ${props.color === "black" && styles.blackTheme}`}
        >
          {link.name}
        </AnimLink>
      </li>
    );
  });

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
