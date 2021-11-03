import React from "react";
import * as styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      style={{ maxWidth: props.width || "auto" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
