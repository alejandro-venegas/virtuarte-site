import React from "react";
import * as styles from "./DobleSemicorcheaSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";

const DobleCorcheaSvg = (props) => {
  return (
    <AnimatedSvg pathClass={styles.cls1}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.23 44.61">
        <g id="Layer_2" data-name="Layer 2">
          <g data-name="Capa 1">
            <path
              className={`${styles.cls1}`}
              d="M39.84,18.58c0,5.09,0,10.18,0,15.27a7.16,7.16,0,0,1-9.69,6.66,4.63,4.63,0,0,1-2.36-7.35,7.57,7.57,0,0,1,7.83-2.94c1.68.45,2-.07,2-1.62-.08-4.13,0-8.26,0-12.38,0-1.23-.3-1.7-1.66-1.53-6.76.82-13.52,1.57-20.28,2.29-1.71.18-2.28.92-2.25,2.67.1,5.84.06,11.69,0,17.54a7.23,7.23,0,0,1-9.95,6.5,4.58,4.58,0,0,1-2.27-7c1.45-2.43,4.89-4.11,7.65-3.3,2.22.66,2.33-.24,2.32-2-.06-8.39,0-16.79-.07-25.18,0-2,.52-2.82,2.54-3C21.83,2.35,30,1.38,38.2.4c1.63-.2,1.65.77,1.65,1.88Q39.84,10.43,39.84,18.58ZM36,6.59,14.64,9.08c-.83.1-1.25.52-1.15,1.36s.78.85,1.41.77c2-.23,4.08-.51,6.13-.75C26,9.89,31,9.33,36,8.74c.75-.09,1.6-.26,1.52-1.3S36.57,6.62,36,6.59Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default DobleCorcheaSvg;
