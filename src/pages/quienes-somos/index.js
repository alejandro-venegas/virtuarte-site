import React from "react";
import * as styles from "./QuienesSomos.module.scss";
import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";
import procesoEducativoImg from "../../images/quienes-somos/proceso_educativo.svg";
import experienciaMusicalImg from "../../images/quienes-somos/experiencia_musical.svg";
import AnimLink from "../../components/shared/AnimLink/AnimLink";

const QuienesSomos = () => {
  return (
    <section>
      <Helmet>
        <title>¿Quiénes somos?</title>
      </Helmet>
      <ParallaxTitle
        overlayColor={"rgba(255,255,255,0.5"}
        title={"¿Quiénes somos?"}
        titleStyle={{
          color: "var(--black)",
          fontSize: "83.333px",
        }}
        height={"340px"}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/quienes_somos_hero.jpg"}
          alt={""}
        ></StaticImage>
      </ParallaxTitle>
      <section>
        <ContentWrapper>
          <h2>¿Qué es Virtuarte?</h2>
          <p style={{ textAlign: "center", width: "940px" }}>
            Es una oportunidad para acceder de manera virtual al aprendizaje de
            la música. No solamente desde un referente meramente académico, sino
            desde las distintas virtudes que conforman a cada persona; buscando
            la manera más eficaz de aprender mediante herramientas digitales.{" "}
          </p>
        </ContentWrapper>
        <div className={styles.backgroundColor}>
          <ContentWrapper>
            <div className={styles.misionVisionContainer}>
              <section>
                <h3>Misión:</h3>
                <p>
                  Promover una educación musical virtual que potencie al máximo
                  las virtudes de cada persona, de acuerdo a sus intereses y
                  objetivos; las cuales se desarrollarán mediante actividades,
                  herramientas y plataformas digitales.
                </p>
              </section>
              <section>
                <h3>Visión:</h3>
                <p>
                  Ser un proveedor artístico por excelencia de una educación
                  virtual asequible.
                </p>
              </section>
            </div>
          </ContentWrapper>
        </div>
      </section>
      <section>
        <ContentWrapper>
          <h2>¿Cuál es nuestra metodología?</h2>
          <div className={styles.metodologiaContainer}>
            <AnimLink
              to={"./proceso-educativo"}
              className={styles.metodologiaItem}
            >
              <img src={procesoEducativoImg} alt="Proceso Educativo" />
              <p className={`h3 ${styles.h3}`}>Proceso Educativo</p>
            </AnimLink>
            <AnimLink
              to={"./experiencia-musical"}
              className={styles.metodologiaItem}
            >
              <img src={experienciaMusicalImg} alt="Experiencia Musical" />
              <p className={`h3 ${styles.h3}`}>Experiencia Musical</p>
            </AnimLink>
          </div>
        </ContentWrapper>
      </section>
    </section>
  );
};

export default QuienesSomos;
