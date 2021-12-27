import React from "react";
import Button from "../../shared/Button/Button";

import * as styles from "./DocenteItem.module.scss";
import AnimLink from "../../shared/AnimLink/AnimLink";
const DocenteItem = (props) => {
  const { nombre, apellidos, titulo, resumen, foto, originalId } =
    props.docente;
  return (
    <article className={styles.docenteItem}>
      <div className={styles.imageContainer}>
        <img src={foto.url} alt={"Foto de " + nombre} />
        <h2>
          {titulo}. {nombre} {apellidos}
        </h2>
      </div>
      <div className={styles.textContainer}>
        <p>{resumen}</p>
        <AnimLink style={{ width: "100%" }} to={"/docentes/" + originalId}>
          <Button>Ver más</Button>
        </AnimLink>
      </div>
    </article>
  );
};

export default DocenteItem;
