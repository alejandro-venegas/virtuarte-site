import React from "react";
import { Helmet } from "react-helmet";
import * as styles from "../docentes/Docentes.module.scss";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";
import Index from "../../components/curso/DocenteItem";

const Curso = ({ data }) => {
  const curso = data.prismicCurso?.data?.nombre?.text;
  const docentes = data.prismicCurso?.data?.docentes;
  console.log(data);
  return (
    <section>
      <Helmet>
        <title>Docentes de {curso}</title>
      </Helmet>
      <ParallaxTitle
        overlayColor={"rgba(255,255,255,0.5"}
        title={curso}
        titleStyle={{
          color: "var(--black)",
          fontSize: "83.333px",
        }}
        height={"340px"}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/curso/curso_hero.jpeg"}
          alt={""}
        ></StaticImage>
      </ParallaxTitle>
      <ContentWrapper>
        <h2 className={styles.title}>
          ¡Conocé nuestros docentes de {curso.toLowerCase()}!
        </h2>
        {docentes.map((docenteDoc) => {
          const docenteData = docenteDoc.docente.document?.data;
          const docente = {
            nombre: docenteData.nombres?.text,
            apellidos: docenteData.apellidos?.text,
            foto: docenteData.foto,
            titulo: docenteData.titulo?.text,
            resumen: docenteData.resumen?.text,
            prismicId: docenteDoc.docente.document.id,
          };

          return <Index key={docente.prismicId} docente={docente} />;
        })}
      </ContentWrapper>
    </section>
  );
};
export default Curso;

export const query = graphql`
  query Query($id: String) {
    prismicCurso(id: { eq: $id }) {
      data {
        docentes {
          docente {
            document {
              ... on PrismicDocente {
                id
                data {
                  apellidos {
                    text
                  }
                  foto {
                    url(imgixParams: { w: 365 })
                  }
                  titulo {
                    text
                  }
                  resumen {
                    text
                  }
                  nombres {
                    text
                  }
                }
                id
              }
            }
          }
        }
        nombre {
          text
        }
      }
    }
  }
`;
