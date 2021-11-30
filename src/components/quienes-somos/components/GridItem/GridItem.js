import React from "react";
import * as styles from "./GridItem.module.scss";
const GridItem = (props) => {
  return (
    <section
      className={`${styles.gridItem} ${props.className}`}
      style={{
        maxWidth: props.imageDimensions?.width,
      }}
    >
      <div
        className={styles.image}
        style={{ height: props.imageDimensions?.height }}
      >
        {props.children}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default GridItem;
