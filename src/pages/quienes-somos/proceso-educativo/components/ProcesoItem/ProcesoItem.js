import React from "react";
import * as styles from "./ProcesoItem.module.scss";
const ProcesoItem = (props) => {
  return (
    <section className={styles.procesoItem}>
      <div className={styles.image}>{props.children}</div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default ProcesoItem;
