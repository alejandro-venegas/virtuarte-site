import React from "react";
import * as styles from "./BemolSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";
const DobleCorcheaSvg = (props) => {
  return (
    <AnimatedSvg pathClass={styles.cls1}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.81 51.19">
        <g id="Layer_2" data-name="Layer 2">
          <g data-name="Capa 1">
            <path
              className={`${styles.cls1}`}
              d="M3.57,29.2c2.72-1.67,4.77-3.23,7.31-3.86,3.41-.86,5.76.32,6.91,3.66a11.8,11.8,0,0,1-1.2,10.11c-3.12,5.43-8.14,8.63-13.5,11.4C1.58,51.29.75,50.48.47,49a12.29,12.29,0,0,1-.09-2.27V4.35c0-.47,0-.95,0-1.42C.44,1.76.49.41,2,.38s1.56,1.37,1.56,2.5c0,7.59,0,15.18,0,22.76Zm0,17.93c6.18-2.36,9.75-8.39,8.63-14.28-.35-1.84-1-3.55-3.38-3.52-2.2,0-5.17,1.94-5.21,3.6C3.54,37.62,3.6,42.32,3.6,47.13Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default DobleCorcheaSvg;
