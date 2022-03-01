import React from "react";

import { getImage, StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";
import * as styles from "./Paquetes.module.scss";
import PaqueteItem from "../../components/paquetes/PaqueteItem";

const Paquetes = ({ data }) => {
  const paquetes = data.allPrismicPaquete.nodes;
  return (
    <section>
      <Helmet>
        <title>Paquetes</title>
      </Helmet>
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
      <section>
        <ContentWrapper>
          <h2>¡Escoge el paquete de preferencia!</h2>
          <div className={styles.paquetesGrid}>
            {paquetes.map((paquete) => {
              const imagen = getImage(paquete.data?.imagen?.gatsbyImageData);
              const titulo = paquete.data.titulo?.text;
              const id = paquete.id;

              return (
                <PaqueteItem image={imagen} title={titulo} id={id} key={id} />
              );
            })}
          </div>
        </ContentWrapper>
      </section>
    </section>
  );
};

export default Paquetes;

export const query = graphql`
  query PaquetesQuery {
    allPrismicPaquete(sort: { fields: first_publication_date }) {
      nodes {
        data {
          imagen {
            gatsbyImageData
          }
          titulo {
            text
          }
        }
        id
      }
    }
  }
`;
