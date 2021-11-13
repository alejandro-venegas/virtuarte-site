import React from "react";
import * as styles from "./CorcheaSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";
const CorcheaSvg = (props) => {
  return (
    <AnimatedSvg>
      <svg
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32.66 61.25"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g className={styles.cls1}>
            <path
              style={{
                strokeDashoffset: 199.32,
                strokeDasharray: 199.32,
              }}
              d="M15.38,23.55c0-6.65,0-13.3,0-19.95,0-1.23-.47-3,1.41-3.21,1.69-.17,1.6,1.51,1.87,2.68a12.25,12.25,0,0,0,3.67,6.31c1.73,1.62,3.58,3.12,5.26,4.79,6,6,6.23,14,.67,20.42-.64.73-1.32,1.62-2.37,1s-.51-1.69,0-2.51a19.18,19.18,0,0,0,2.46-6.63c.78-4.89-3.44-10.61-8.35-11.29-2.15-.29-1.42,1.38-1.43,2.28-.06,9.4,0,18.8,0,28.2,0,1.9,0,3.8,0,5.7A10.05,10.05,0,0,1,4.59,60.08C.35,58.25-1,53.55,1.93,50s6.45-5,10.86-3.87c2.06.54,2.66.12,2.63-2C15.32,37.22,15.38,30.39,15.38,23.55Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default CorcheaSvg;
