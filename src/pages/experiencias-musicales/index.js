import React from "react";
import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const ExperienciasMusicales = () => {
  return (
    <div>
      <ParallaxTitle
        title={"Experiencias Musicales"}
        overlayColor={"rgba(33,33,33,0.3)"}
        titleStyle={{ color: "white", fontSize: "60px" }}
        height={"340px"}
        alt={""}
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

export default ExperienciasMusicales;
