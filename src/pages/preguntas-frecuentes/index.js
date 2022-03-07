import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";
import Pregunta from "../../components/preguntas-frecuentes/Pregunta";
import * as styles from "./PreguntasFrecuentes.module.scss";

const PreguntasFrecuentes = ({ data }) => {
  const preguntas = data.prismicPreguntasFrecuentes.data.item;

  return (
    <section>
      <ParallaxTitle
        src={"experiencias_musicales_hero.jpg"}
        height={"340px"}
        alt={""}
        overlayColor={"rgba(33,33,33,0.3)"}
        title={"Preguntas Frecuentes"}
        titleStyle={{ color: "white", fontSize: "72px" }}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/experiencias_musicales_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
      <ContentWrapper>
        <div className={styles.preguntasFrecuentesContainer}>
          {preguntas?.map?.((pregunta, index) => (
            <Pregunta
              key={index}
              pregunta={pregunta.pregunta}
              respuesta={pregunta.respuesta}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default PreguntasFrecuentes;

export const query = graphql`
  {
    prismicPreguntasFrecuentes {
      data {
        item {
          pregunta
          respuesta {
            richText
          }
        }
      }
    }
  }
`;
