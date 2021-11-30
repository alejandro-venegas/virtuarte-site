import React from "react";
import * as styles from "./ExperienciaMusical.module.scss";
import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import CorcheaSvg from "../../../components/shared/SVGs/CorcheaSvg/CorcheaSvg";
import SemicorcheaSvg from "../../../components/shared/SVGs/SemicorcheaSvg/SemicorcheaSvg";
import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import BemolSvg from "../../../components/shared/SVGs/BemolSvg/BemolSvg";
import GridItem from "../../../components/quienes-somos/components/GridItem/GridItem";
import DobleSemicorcheaSvg from "../../../components/shared/SVGs/DobleSemicorcheaSvg/DobleSemicorcheaSvg";
import CorcheaCortaSvg from "../../../components/shared/SVGs/CorcheaCortaSvg/CorcheaCortaSvg";
import SemicorcheaAbiertaSvg from "../../../components/shared/SVGs/SemicorcheaAbiertaSvg/SemicorcheaAbiertaSvg";

const ProcesoEducativo = () => {
  const procesos = [
    {
      image: <SemicorcheaAbiertaSvg />,
      title: "Creatividad",
      description:
        "Se abrirán espacios donde el estudiantado pondrá en práctica sus dotes creativos más allá de los teóricos/técnicos. Ej: Componer una canción, creación de juegos musicales, entre otros. ",
    },
    {
      image: <DobleSemicorcheaSvg />,
      title: "Recitales",
      description:
        "Virtuarte no funciona por niveles, por ende, no se realizan pruebas/exámenes. Sin embargo, se realizarán recitales semestrales como una oportunidad para mostrar al público los objetivos alcanzados. ",
    },
    {
      image: <CorcheaCortaSvg />,
      title: "Talleres y clases maestras",
      description:
        "Se abrirán espacios para compartir conocimiento junto a maestros (as) nacionales e internacionales.",
    },
    {
      image: <BemolSvg />,
      title: "Concursos",
      description:
        "Es importante tener claro el objetivo, y de esa manera estimular la motivación para lograr metas a corto/ largo plazo. Por ello, el/la docente facilitará herramientas sobre cómo afrontar estos retos en el futuro.",
    },
  ];

  return (
    <section>
      <ParallaxTitle
        height={"340px"}
        alt={""}
        overlayColor={"rgba(33,33,33,0.3)"}
        title={"Experiencia Musical"}
        titleStyle={{ color: "white", fontSize: "72px" }}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../../images/experiencia-musical/hero.jpeg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
      <ContentWrapper>
        <div className={styles.experienciasContainer}>
          {procesos.map((proceso) => (
            <GridItem
              className={styles.experienciaItem}
              key={proceso.title}
              title={proceso.title}
              description={proceso.description}
              imageDimensions={{ width: "360px", height: "360px" }}
            >
              {proceso.image}
            </GridItem>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ProcesoEducativo;
