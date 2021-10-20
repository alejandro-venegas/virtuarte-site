import React from "react";
import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Contactenos = () => {
  return (
    <div>
      <ParallaxTitle
        overlayColor={"rgba(33,33,33,0.6)"}
        title={"Contáctenos"}
        titleStyle={{ color: "white", fontSize: "61.3333px" }}
        height={"340px"}
        alt={""}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/contactenos_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
    </div>
  );
};

export default Contactenos;
