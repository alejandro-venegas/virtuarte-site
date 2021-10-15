import React from "react";
import ParallaxTitle from "../../components/shared/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Contactenos = () => {
  return (
    <div>
      <ParallaxTitle height={"340px"} alt={""}>
        <StaticImage src={"../../images/contactenos_hero.jpg"} alt={"Hero"} />
      </ParallaxTitle>
    </div>
  );
};

export default Contactenos;
