import React, { useEffect } from "react";

import * as styles from "./ParallaxTitle.module.scss";
const ParallaxTitle = (props) => {
  let requestId;

  let img;
  function parallaxAnim() {
    const scroll = window.scrollY;

    if (img)
      img.setAttribute(
        "style",
        `transform: translate3d(0, ${scroll * 0.5}px, 0)`
      );
    else img = document.querySelector(`.${styles.parallaxImageContainer}`);

    requestId = requestAnimationFrame(parallaxAnim);
  }
  useEffect(() => {
    if (
      typeof requestAnimationFrame !== "undefined" &&
      typeof window !== "undefined"
    ) {
      requestId = requestAnimationFrame(parallaxAnim);
    }
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className={styles.container} style={{ height: props.height }}>
      <div className={styles.parallaxImageContainer}>{props.children}</div>
      <div
        className={styles.overlay}
        style={{ backgroundColor: props.overlayColor }}
      ></div>
      <h1 className={styles.title} style={props.titleStyle}>
        {props.title}
      </h1>
      p
    </div>
  );
};
export default ParallaxTitle;
