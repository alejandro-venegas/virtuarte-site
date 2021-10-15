import React, { createRef, useEffect } from "react";

import * as styles from "./ParallaxTitle.module.scss";
const ParallaxTitle = (props) => {
  let requestId;
  const imgRef = createRef();
  let img;
  function parallaxAnim() {
    if (this.imgRef.current) {
      img = this.imgRef.current;
    }
    const scroll = window.scrollY;

    img.setAttribute(
      "style",
      `transform: translate3d(0, ${scroll * 0.5}px, 0)`
    );

    requestId = requestAnimationFrame(
      parallaxAnim.bind({ imgRef: this.imgRef })
    );
  }
  useEffect(() => {
    if (
      typeof requestAnimationFrame !== "undefined" &&
      typeof window !== "undefined"
    ) {
      requestId = requestAnimationFrame(parallaxAnim.bind({ imgRef }));
    }
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className={styles.container} style={{ height: props.height }}>
      {/*<button onClick={()=> console.log(imgRef)}>Hello</button>*/}
      <img src={props.src} alt={props.alt} ref={imgRef} />
    </div>
  );
};
export default ParallaxTitle;
