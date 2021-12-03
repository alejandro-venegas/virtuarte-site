import React from "react";
import { Helmet } from "react-helmet";

import * as styles from "./Docentes.module.scss";

const Docentes = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <Helmet>
        <title>Docentes</title>
      </Helmet>
      <h1 className={styles.title}>¡Conocé nuestros docentes!</h1>
    </section>
  );
};

export default Docentes;
