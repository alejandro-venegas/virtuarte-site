import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
const QuienesSomos = () => {
  return (
    <div>
      <ParallaxTitle
        overlayColor={"rgba(255,255,255,0.5"}
        title={"¿Quiénes somos?"}
        titleStyle={{
          color: "var(--black)",
          fontSize: "83.333px",
        }}
        height={"340px"}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/quienes_somos_hero.jpg"}
          alt={""}
        ></StaticImage>
      </ParallaxTitle>
      <div>Quienes Somos page</div>
    </div>
  );
};

export default QuienesSomos;
