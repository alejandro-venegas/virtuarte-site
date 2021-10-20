import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Paquetes = () => {
  return (
    <div>
      <ParallaxTitle height={"520px"} alt={""}>
        <StaticImage backgroundColor={'rgb(97, 170, 165)'} src={"../../images/paquetes_hero.jpg"} alt={"Hero"} />
      </ParallaxTitle>
    </div>
  );
};

export default Paquetes;
