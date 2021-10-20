import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const PreguntasFrecuentes = () => {
  return (
    <div>
      <ParallaxTitle
        src={"experiencias_musicales_hero.jpg"}
        height={"340px"}
        alt={""}
      >
        <StaticImage backgroundColor={'rgb(97, 170, 165)'}
          src={"../../images/experiencias_musicales_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
    </div>
  );
};

export default PreguntasFrecuentes;
