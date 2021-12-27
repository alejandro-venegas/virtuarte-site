import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as styles from "./Docente.module.scss";
import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import Button from "../../../components/shared/Button/Button";

const Docente = ({ data }) => {
  const { nombre, apellidos, titulo, biografia, videoId } = data.datoCmsDocente;
  console.log(data);
  return (
    <section style={{ marginTop: "100px" }}>
      <Helmet>
        <title>
          {nombre} {apellidos}
        </title>
      </Helmet>
      <ContentWrapper>
        <h1 className={"h2"}>Perfil de docente</h1>
        <div className={styles.videoContainer}>
          {videoId && (
            <iframe
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          <div>
            <h2>
              {nombre} {apellidos}
            </h2>
            <h3 style={{ textAlign: "center" }}>
              Reservá tu clase de muestra gratuita
            </h3>
            <a href="https://httpssitesgooglecomviewvirtuartecrinicio.simplybook.me/v2/">
              <Button>Reservar ahora</Button>
            </a>
          </div>
        </div>
        <section style={{ margin: "2rem 0" }}>
          <h3 style={{ alignSelf: "flex-start" }}>Biografía:</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{biografia}</p>
        </section>
      </ContentWrapper>
    </section>
  );
};

export default Docente;

export const query = graphql`
  query MyQuery($originalId: String) {
    datoCmsDocente(originalId: { eq: $originalId }) {
      apellidos
      biografia
      nombre
      titulo
      videoId
    }
  }
`;
