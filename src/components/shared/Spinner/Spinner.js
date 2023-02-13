import * as styles from "./Spinner.module.css";
import React from "react";

export const Spinner = () => (
  <div className={styles.ldsEllipsis}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
