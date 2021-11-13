import React from "react";
import * as styles from "./ProcesoEducativo.module.scss";
import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import CorcheaSvg from "../../../components/shared/SVGs/CorcheaSvg/CorcheaSvg";
import DobleCorcheaSvg from "../../../components/shared/SVGs/DobleCorcheaSvg/DobleCorcheaSvg";
import BlancaSvg from "../../../components/shared/SVGs/BlancaSvg/BlancaSvg";
import SilencioSemicorcheaSvg from "../../../components/shared/SVGs/SilencioSemicorcheaSvg/SilencioSemicorcheaSvg";
import SemicorcheaSvg from "../../../components/shared/SVGs/SemicorcheaSvg/SemicorcheaSvg";
import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import BemolSvg from "../../../components/shared/SVGs/BemolSvg/BemolSvg";
import ProcesoItem from "./components/ProcesoItem/ProcesoItem";

const ProcesoEducativo = () => {
  const procesos = [
    {
      image: <CorcheaSvg />,
      title: "Flexibilidad",
      description:
        "El/la docente se adapta a las necesidades del estudiantado: horarios, métodos, formas, trato profesional, entre otras.",
    },
    {
      image: <DobleCorcheaSvg />,
      title: "Comunicación",
      description:
        "Constante comunicación entre ambas partes, tanto del/la docente como del estudiantado, en cuanto a preferencias para lograr un buen entendimiento.",
    },
    {
      image: <BlancaSvg />,
      title: "Maneja tu proceso",
      description:
        "El/la docente acompañará al estudiantado en su proceso; las personas aprenden diferente. ",
    },
    {
      image: <SilencioSemicorcheaSvg />,
      title: "Metas a corto plazo",
      description:
        "El/la docente junto al estudiantado planificarán los caminos para facilitar el alcance de objetivos específicos. ",
    },
    {
      image: <SemicorcheaSvg />,
      title: "Disponibilidad",
      description:
        "En la medida de lo posible, el/la docente respondará sus consultas extra clases",
    },
    {
      image: <BemolSvg />,
      title: "Familia",
      description:
        "Se trabaja bajo el concepto de que el arte tiene la capacidad de unir a las personas. Por ende, en dadas ocasiones, los docentes acordarán intercambiar estudiantes para así tener contacto con toda la familia de Virtuarte. ",
    },
  ];

  return (
    <section>
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
      <ContentWrapper>
        <div className={styles.procesosContainer}>
          {procesos.map((proceso) => (
            <ProcesoItem
              key={proceso.title}
              title={proceso.title}
              description={proceso.description}
            >
              {proceso.image}
            </ProcesoItem>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ProcesoEducativo;
