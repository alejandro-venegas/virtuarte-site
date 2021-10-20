import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
const QuienesSomos = () => {
  return (
    <div>
      <ParallaxTitle height={"340px"} alt={""}>
        <StaticImage backgroundColor={'rgb(97, 170, 165)'}
          src={"../../images/quienes_somos_hero.jpg"}
          alt={""}
        ></StaticImage>
      </ParallaxTitle>
      <div>Quienes Somos page</div>
    </div>
  );
};

export default QuienesSomos;
