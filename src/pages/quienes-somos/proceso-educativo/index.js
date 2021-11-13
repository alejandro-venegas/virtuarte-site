import React from "react";
import * as styles from "./ProcesoEducativo.module.scss";
import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import CorcheaSvg from "../../../components/shared/SVGs/CorcheaSvg/CorcheaSvg";
import DobleCorcheaSvg from "../../../components/shared/SVGs/DobleCorcheaSvg/DobleCorcheaSvg";
import BlancaSvg from "../../../components/shared/SVGs/BlancaSvg/BlancaSvg";

const ProcesoEducativo = () => {
  return (
    <div>
      <ParallaxTitle
        height={"340px"}
        alt={""}
        overlayColor={"rgba(33,33,33,0.3)"}
        title={"Proceso Educativo"}
        titleStyle={{ color: "white", fontSize: "72px" }}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../../images/proceso-educativo/hero.jpeg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
      <div style={{ width: "100px" }}>
        <CorcheaSvg />
      </div>
      <div style={{ width: "100px" }}>
        <DobleCorcheaSvg />
      </div>
      <div style={{ width: "100px" }}>
        <BlancaSvg />
      </div>
    </div>
  );
};

export default ProcesoEducativo;
