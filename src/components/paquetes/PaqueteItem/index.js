import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import Button from "../../shared/Button/Button";
import AnimLink from "../../shared/AnimLink/AnimLink";

import * as styles from "./PaqueteItem.module.scss";

function PaqueteItem({ title, image, id }) {
  return (
    <article className={styles.paqueteWrapper}>
      <GatsbyImage
        image={image}
        alt={"Imagen paquete"}
        className={styles.image}
        imgStyle={{ objectFit: "contain" }}
      />
      <h3>{title}</h3>
      <AnimLink className={styles.button} to={`/paquete/${id}`}>
        <Button>Ver más</Button>
      </AnimLink>
    </article>
  );
}

export default PaqueteItem;
