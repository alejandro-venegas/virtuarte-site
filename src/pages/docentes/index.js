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
        {data.allPrismicCurso?.nodes?.map?.((curso) => (
          <CursoItem
            key={curso.id}
            id={curso.id}
            name={curso.data.nombre?.text}
            imgUrl={curso.data.imagen?.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Docentes;

export const query = graphql`
  query {
    allPrismicCurso {
      nodes {
        data {
          imagen {
            url(imgixParams: { w: 250 })
          }
          nombre {
            text
          }
        }
        id
      }
    }
  }
`;
