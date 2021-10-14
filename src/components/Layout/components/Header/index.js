import React from "react";

import * as styles from "./index.module.scss";
import logo from "../../../../images/icon.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>Inicio</li>
          <li>Quienes Somos?</li>
          <li>Docentes</li>
          <li>Experiencias Musicales</li>
          <li>Paquetes</li>
          <li>Preguntas Frecuentes</li>
          <li>Contactenos</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
