import React from "react";
import * as styles from "./BlancaSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";
const BlancaSvg = (props) => {
  return (
    <AnimatedSvg>
      <svg
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18.86 61.12"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g>
            <path
              className={styles.cls1}
              d="M18.45,27.3c0,7.89.06,15.77,0,23.65A10,10,0,0,1,5.82,60.38C3.3,59.68,1.25,58.33.6,55.66A7,7,0,0,1,3,48.47c2.72-2.43,6-3.55,9.5-2.56,2.92.83,2.86-.43,2.85-2.55q-.09-19.65,0-39.31c0-1.35-.75-3.68,1.42-3.67s1.64,2.37,1.65,3.85C18.48,11.92,18.45,19.61,18.45,27.3ZM6.28,57.08a11.63,11.63,0,0,0,7.85-3.94,2.16,2.16,0,0,0,.76-2.29c-.39-1-1.33-1-2.17-1a11.15,11.15,0,0,0-8.38,3.5c-.66.66-1.39,1.41-1,2.47C3.76,57.06,4.89,57,6.28,57.08Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default BlancaSvg;
