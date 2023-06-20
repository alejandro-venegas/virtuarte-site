import * as styles from "./TestimonioItem.module.scss";
import React from "react";

function TestimonioItem({ texto, nombre, rol }) {
  return (
    <article className={styles.testimonioItem}>
      <p className={styles.text}>{texto}</p>
      <div className={styles.divider}/>
      <p className={styles.name}>{nombre}</p>
      <span>{rol}</span>
    </article>
  );
}

export default TestimonioItem