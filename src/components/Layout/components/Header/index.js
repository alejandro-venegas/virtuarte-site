import React from "react";

import * as styles from "./index.module.scss";
import logo from "../../../../images/icon.png";
import AnimLink from "../../../shared/AnimLink";
import { StaticImage } from "gatsby-plugin-image";
const Header = () => {
  return (
    <header className={styles.header}>
      <StaticImage
        width={56}
        height={56}
        src="../../../../images/icon.png"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <AnimLink className={styles.link} to={"/"}>
              Inicio
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/quienes-somos"}>
              Quienes Somos?
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/docentes"}>
              Docentes
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/experiencias-musicales"}>
              Experiencias Musicales
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/paquetes"}>
              Paquetes
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/preguntas-frecuentes"}>
              Preguntas Frecuentes
            </AnimLink>
          </li>
          <li>
            <AnimLink className={styles.link} to={"/contactenos"}>
              Contactenos
            </AnimLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
