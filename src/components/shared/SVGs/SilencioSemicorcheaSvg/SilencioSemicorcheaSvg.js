import React from "react";
import * as styles from "./SilencioSemicorcheaSvg.module.scss";
import AnimatedSvg from "../../AnimatedSvg/AnimatedSvg";
import anime from "animejs";
const DobleCorcheaSvg = (props) => {
  return (
    <AnimatedSvg pathClass={styles.cls1}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.09 46.82">
        <g id="Layer_2" data-name="Layer 2">
          <g data-name="Capa 1">
            <path
              className={`${styles.cls1}`}
              d="M21.63,16.1a12.61,12.61,0,0,1-6.49-.23A9.88,9.88,0,0,1,7.85,6.14a5.78,5.78,0,0,1,5-5.72,5.78,5.78,0,0,1,6,3.88A5.57,5.57,0,0,1,15.92,11c-.53.31-1.55.19-1.49,1.05s1,1.06,1.68,1.35a7.14,7.14,0,0,0,8.82-3.18c.74-1.32,1.37-2.71,2.13-4a1.33,1.33,0,0,1,1.72-.63,1.41,1.41,0,0,1,.84,1.87,18.73,18.73,0,0,1-.95,2.38q-8.22,17-16.46,34.08a11.6,11.6,0,0,1-.66,1.26c-.52.84-1.14,1.67-2.27,1s-.88-1.59-.44-2.5c1.42-3,2.9-6,4.32-9,1.25-2.64,1.15-2.77-1.83-2.83C4.42,31.78.14,27.75.39,21.61a5.41,5.41,0,0,1,4.51-5.4,5.6,5.6,0,0,1,6.2,3.46,5.69,5.69,0,0,1-2.19,6.76c-.66.48-2.29.31-1.79,1.67.37,1,1.65,1.13,2.71,1.26,3.72.45,6.23-.84,7.9-4.18,1.32-2.63,2.55-5.3,3.8-8A4,4,0,0,0,21.63,16.1Z"
            />
          </g>
        </g>
      </svg>
    </AnimatedSvg>
  );
};

export default DobleCorcheaSvg;
