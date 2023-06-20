import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as styles from "./Docente.module.scss";
import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import Button from "../../../components/shared/Button/Button";
import CustomPrismicRichText from "../../../components/shared/CustomPrismicRichText/CustomPrismicRichText";

const Docente = ({ data }) => {
  const docente = data.prismicDocente?.data;

  const nombre = docente.nombres?.text;
  const apellidos = docente.apellidos?.text;
  const biografia = docente.biografia;
  const nivelesQueImparte = docente.niveles_que_imparte;
  const experienciaLaboral = docente.experiencia_laboral;
  const video = docente.video;

  
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
          {video && (
            <div
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{ __html: video.html }}
            />
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
        <section className={styles.section}>
          <h3>Biografía:</h3>
          <CustomPrismicRichText field={biografia.richText} />
        </section>
        <section className={styles.section}>
          <h3>Experiencia laboral:</h3>
          <CustomPrismicRichText field={experienciaLaboral.richText} />
        </section>
        <section className={styles.section}>
          <h3>Niveles que imparte:</h3>
          <CustomPrismicRichText field={nivelesQueImparte.richText} />
        </section>
      </ContentWrapper>
    </section>
  );
};

export default Docente;

export const query = graphql`
  query MyQuery($id: String) {
    prismicDocente(id: { eq: $id }) {
      data {
        apellidos {
          text
        }
        biografia {
          richText
        }
        experiencia_laboral {
          richText
        }
        niveles_que_imparte {
          richText
        }
        nombres {
          text
        }
        video {
          embed_url
          html
        }
      }
    }
  }
`;
