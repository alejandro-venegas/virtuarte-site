import React from "react";

import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

const Paquetes = ({ data }) => {
  console.log(data);
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
        </ContentWrapper>
      </section>
    </section>
  );
};

export default Paquetes;

export const query = graphql`
  query PaquetesQuery {
    allPrismicPaquete {
      nodes {
        data {
          imagen {
            localFile {
              internal {
                content
              }
              absolutePath
            }
            url
          }
          titulo {
            text
          }
        }
      }
    }
  }
`;
