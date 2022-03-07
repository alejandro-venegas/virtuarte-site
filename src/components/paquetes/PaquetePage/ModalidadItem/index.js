import React from "react";
import * as styles from "./ModalidadItem.module.scss";
import CustomPrismicRichText from "../../../shared/CustomPrismicRichText/CustomPrismicRichText";

function ModalidadItem({ titulo, contenido }) {
  return (
    <article className={styles.modalidadItem}>
      <h2>{titulo}</h2>
      <CustomPrismicRichText field={contenido} />
    </article>
  );
}

export default ModalidadItem;
