import React from "react";

import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const ExperienciaMusical = () => {
  return (
    <div>
      <ParallaxTitle
        src={"experiencias_musicales_hero.jpg"}
        height={"340px"}
        alt={""}
        overlayColor={"rgba(33,33,33,0.3)"}
        title={"Experiencia Musical"}
        titleStyle={{ color: "white", fontSize: "72px" }}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/experiencias_musicales_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
    </div>
  );
};

export default ExperienciaMusical;
