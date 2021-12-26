import React from "react";
import { Helmet } from "react-helmet";
import * as styles from "./Docentes.module.scss";
import { graphql } from "gatsby";

const Curso = ({ data }) => {
  return (
    <section style={{ marginTop: "100px" }}>
      <Helmet>
        <title>Docentes de {data.datoCmsCurso?.nombre}</title>
      </Helmet>
      <h1 className={styles.title}>{data.datoCmsCurso?.nombre}</h1>
    </section>
  );
};
export default Curso;

export const query = graphql`
  query MyQuery($originalId: String) {
    datoCmsCurso(originalId: { eq: $originalId }) {
      docentes {
        nombre
        originalId
      }
      originalId
      nombre
    }
  }
`;
