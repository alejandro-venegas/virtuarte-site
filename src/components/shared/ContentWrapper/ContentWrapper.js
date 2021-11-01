import React from "react";
import * as styles from "./ContentWrapper.module.scss";
const ContentWrapper = (props) => {
  return (
    <div className={`${styles.wrapper} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default ContentWrapper;
