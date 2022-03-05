import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as styles from "./ModalidadItem.module.scss";

function ModalidadItem({ titulo, contenido }) {
  return (
    <article className={styles.modalidadItem}>
      <h2>{titulo}</h2>
      <PrismicRichText field={contenido} />
    </article>
  );
}

export default ModalidadItem;
