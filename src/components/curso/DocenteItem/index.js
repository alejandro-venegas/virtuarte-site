import React from "react";
import Button from "../../shared/Button/Button";

import * as styles from "./DocenteItem.module.scss";
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
        <Button>Ver más</Button>
      </div>
    </article>
  );
};

export default DocenteItem;
