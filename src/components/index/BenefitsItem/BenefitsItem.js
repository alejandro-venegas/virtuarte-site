import React from "react";
import * as styles from "./BenefitsItem.module.scss";
const BenefitsItem = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.alt} />
      <p style={{ textAlign: "center" }}>{props.description}</p>
    </div>
  );
};

export default BenefitsItem;
