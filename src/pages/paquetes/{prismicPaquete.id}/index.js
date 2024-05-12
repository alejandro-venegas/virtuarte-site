import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import * as styles from "./PaquetePage.module.scss";
import ModalidadItem from "../../../components/paquetes/PaquetePage/ModalidadItem";
import Button from "../../../components/shared/Button/Button";
import ReservarAhoraButton from "../../../components/shared/ReservarAhoraButton/ReservarAhoraButton";

function PaquetePage({ data }) {
  const paquete = data.prismicPaquete.data;
  
  const titulo = paquete.titulo.text;
  return (
    <section style={{ marginTop: "100px" }}>
      <Helmet>
        <title>Paquete {titulo}</title>
      </Helmet>
      <ContentWrapper>
        <h1 className="h2" style={{ fontWeight: "bold", fontSize: "50px" }}>
          Paquete {titulo}
        </h1>
        <div className={styles.modulos}>
          {paquete.modalidades.map((modalidad, index) => (
            <ModalidadItem
              key={index}
              titulo={modalidad.titulo.text}
              contenido={modalidad.contenido.richText}
            />
          ))}
        </div>
        <a
          style={{ width: "360px", margin: "2rem 0" }}
          href="https://httpssitesgooglecomviewvirtuartecrinicio.simplybook.me/v2/"
        >
          <ReservarAhoraButton />
        </a>
      </ContentWrapper>
      <section className={styles.reminderSection}>
        <ContentWrapper>
          <h2 className={"h3"}>IMPORTANTE RECORDAR:</h2>
          <p>
            Virtuarte no trabaja mediante niveles/programas/exámenes, sino
            mediante el avance personal de cada estudiante por separado. Sin
            embargo, el/la docente está comprometido/a a adecuar el material
            según su nivel y preparar la clase con anticipación de acuerdo al
            proceso del estudiante.{" "}
          </p>
        </ContentWrapper>
      </section>
    </section>
  );
}

export default PaquetePage;

export const query = graphql`
  query PaqueteQuery($id: String) {
    prismicPaquete(id: { eq: $id }) {
      data {
        modalidades {
          contenido {
            richText
          }
          titulo {
            text
          }
        }
        titulo {
          text
        }
      }
    }
  }
`;
