import React from "react";
import * as styles from "./DobleCorcheaSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";

const DobleCorcheaSvg = (props) => {
  return (
    <AnimatedSvg pathClass={styles.cls1}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.98 49.69">
        <g id="Layer_2" data-name="Layer 2">
          <g data-name="Capa 1">
            <path
              className={`${styles.cls1}`}
              d="M44.58,20.43c0,5.68.08,11.36,0,17-.1,5.19-3.7,8.46-8.74,8.2a6.05,6.05,0,0,1-5.67-4,5.84,5.84,0,0,1,2.37-6.26,8.18,8.18,0,0,1,7.56-1.67c1.36.4,1.79-.05,1.78-1.4,0-6.83-.06-13.67,0-20.5,0-2-.94-2.33-2.59-2.13l-17.13,2a51.75,51.75,0,0,1-5.25.6c-1.84,0-2.07,1-2.06,2.52,0,8.83-.27,17.67.11,26.48.26,6-6.58,9-10.55,7.56C.17,47.42-1,43,2.21,39.8a8.17,8.17,0,0,1,8-2.46c2,.52,2.14-.25,2.13-1.86,0-9.44,0-18.88,0-28.33,0-3.13.1-3.25,3.1-3.6,9-1,18-2,27-3.14,2-.24,2.2.83,2.2,2.28q0,8.87,0,17.74Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default DobleCorcheaSvg;
