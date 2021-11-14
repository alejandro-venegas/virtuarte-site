import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { nanoid } from "nanoid";
import * as styles from "./AnimatedSvg.module.scss";
const AnimatedSvg = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const [uniqueClass] = useState("animated-svg-" + nanoid());

  if (typeof window !== "undefined") {
    if (inView) {
      anime({
        targets: `.${uniqueClass} path`,
        keyframes: [
          {
            strokeDashoffset: anime.setDashoffset,
            duration: 0,
          },
          {
            fillOpacity: 0,
            duration: 0,
          },
          {
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1600,
            delay: 300,
          },
          {
            fillOpacity: [0, 1],
            duration: 1000,
          },
        ],
        easing: "easeOutSine",
        direction: "normal",
      });
    } else {
      anime({
        targets: `.${uniqueClass} path`,
        strokeDashoffset: anime.setDashoffset,
        fillOpacity: 0,
        easing: "linear",
        duration: 0,
        direction: "normal",
      });
    }
  }

  return (
    <div className={`${uniqueClass} ${styles.container}`} ref={ref}>
      {props.children}
    </div>
  );
};

export default AnimatedSvg;
