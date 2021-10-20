import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Paquetes = () => {
  return (
    <div>
      <ParallaxTitle
        title={"Paquetes"}
        titleStyle={{ color: "white", fontSize: "85.3333px" }}
        overlayColor={"rgba(33,33,33,0.6)"}
        height={"520px"}
        alt={""}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/paquetes_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
    </div>
  );
};

export default Paquetes;
