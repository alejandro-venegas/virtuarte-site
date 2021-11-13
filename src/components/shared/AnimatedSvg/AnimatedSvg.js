import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import * as styles from "./AnimatedSvg.module.scss";
import anime from "animejs";
const AnimatedSvg = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  if (inView)
    anime({
      targets: `.animate-svg .${props.pathClass}`,
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
        },
        {
          fillOpacity: [0, 1],
          duration: 1000,
        },
      ],
      easing: "easeOutSine",
      direction: "normal",
    });

  return (
    <div className={`animate-svg`} ref={ref}>
      {props.children}
    </div>
  );
};

export default AnimatedSvg;
