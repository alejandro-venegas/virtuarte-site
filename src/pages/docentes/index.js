import React from "react";
import { Helmet } from "react-helmet";

import * as styles from "./Docentes.module.scss";
import { graphql } from "gatsby";
import CursoItem from "../../components/docentes/CursoItem";

const Docentes = ({ data }) => {
  return (
    <section style={{ marginTop: "100px" }}>
      <Helmet>
        <title>Docentes</title>
      </Helmet>
      <h1 className={styles.title}>¡Conocé nuestros docentes!</h1>
      <div className={styles.cursosList}>
        {data.allDatoCmsCurso?.nodes?.map?.((curso) => (
          <CursoItem
            key={curso.originalId}
            id={curso.originalId}
            name={curso.nombre}
            imgUrl={curso.imagen.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Docentes;

export const query = graphql`
  query {
    allDatoCmsCurso {
      nodes {
        nombre
        originalId
        imagen {
          url(imgixParams: { w: "250", h: "250", fit: "min" })
        }
      }
    }
  }
`;
