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
        `transform: translate3d(0, ${scroll * 0.5}px, 0)`,
      );
    else img = document.querySelector(`.parallax-title`);

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
      <div className={styles.parallaxImageContainer + " " + "parallax-title"}>
        {props.children}
      </div>
      <div
        className={styles.overlay}
        style={{ backgroundColor: props.overlayColor }}
      ></div>
      <div className={styles.title}>
        <h1 style={props.titleStyle}>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
};
export default ParallaxTitle;
