import * as React from "react";

import ParallaxTitle from "../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Index.module.scss";
import ContentWrapper from "../components/shared/ContentWrapper/ContentWrapper";
import BenefitsItem from "../components/index/BenefitsItem/BenefitsItem";
import clickImg from "../images/benefits/click.svg";
import horarioImg from "../images/benefits/horario.svg";
import programasImg from "../images/benefits/programas.svg";
import juegosImg from "../images/benefits/juegos.svg";
import aprendeImg from "../images/benefits/aprende.svg";
import educacionImg from "../images/benefits/educacion.svg";
import AnimLink from "../components/shared/AnimLink/AnimLink";
import Button from "../components/shared/Button/Button";
const IndexPage = () => {
  const benefits = [
    {
      img: clickImg,
      alt: "Un solo click",
      description: "Accede desde cualquier lugar con tan solo un click.",
    },
    {
      img: horarioImg,
      alt: "Horario",
      description: "Escoge el horario y docente de preferencia.",
    },
    {
      img: programasImg,

      alt: "Programas adaptados",
      description: "Programas adaptados a sus objetivos.",
    },
    {
      img: juegosImg,
      alt: "Actividades",
      description:
        "Acceso a videos, juegos, actividades y más en nuestra plataforma virtual.",
    },
    {
      img: aprendeImg,

      alt: "Aprende",
      description: "Aprende disfrutando.",
    },
    {
      img: educacionImg,
      alt: "Integral",
      description: "Educación integral y positiva.",
    },
  ];
  return (
    <section>
      <ParallaxTitle
        overlayColor={"rgba(33,33,33,0.4)"}
        title={"Virtuarte"}
        titleStyle={{
          color: "white",
          fontSize: "72px",
        }}
        height={"520px"}
        alt={""}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../images/painted_piano.jpg"}
          alt={""}
        />
      </ParallaxTitle>
      <ContentWrapper>
        <span className={"h2"}>¡En crecimiento continuo!</span>
        <div className={styles.coursesContainer}>
          <section>
            <h2>Clases de piano y canto virtuales (+6 años)</h2>
            <p>
              Accede desde cualquier lugar utilizando nuestra plataforma
              virtual. Recibe clases de nivel principiante, intermedio y/o
              avanzado; así como acceso a videos, juegos, actividades y demás
              materiales para facilitar el aprendizaje. Dirigido a todas las
              edades.
            </p>
          </section>

          <section>
            <h2>Clase de muestra gratuita</h2>
            <p>
              Recibe una{" "}
              <a
                href="https://httpssitesgooglecomviewvirtuartecrinicio.simplybook.me/v2/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                clase de muestra gratuita
              </a>{" "}
              con el/la docente de preferencia (donde conocerás los programas,
              métodos, dinámicas, entre otras cosas).
            </p>
          </section>
        </div>
        <div style={{ margin: "3rem" }}>
          <StaticImage
            src={"../images/computer_logo.png"}
            aria-hidden={true}
            width={365}
            alt={"Computer with Logo"}
          />
        </div>
        <section>
          <h2>BENEFICIOS</h2>
          <div className={styles.benefitsContainer}>
            {benefits.map((benefit) => (
              <BenefitsItem
                description={benefit.description}
                img={benefit.img}
                alt={benefit.alt}
                key={benefit.alt}
              ></BenefitsItem>
            ))}
          </div>
        </section>
        <section>
          <h2>Variedad de paquetes</h2>
          <p style={{ maxWidth: "750px", textAlign: "center" }}>
            Virtuarte presenta variedad de paquetes para diferentes modalidades
            de aprendizaje. ¡Escoge el paquete que se adapte a su interés!
          </p>
          <AnimLink
            style={{ width: "100%", maxWidth: "560px" }}
            to={"/paquetes"}
          >
            <Button>Mirar Paquetes</Button>
          </AnimLink>
        </section>
      </ContentWrapper>
      <section>
        <div className={styles.coloredBackground}>
          <ContentWrapper>
            <h2 style={{ color: "white" }}>
              Reserva tu clase de muestra gratuita
            </h2>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <a
            style={{ maxWidth: "360px", width: "100%" }}
            href="https://httpssitesgooglecomviewvirtuartecrinicio.simplybook.me/v2/"
          >
            <Button>Reservar ahora</Button>
          </a>
        </ContentWrapper>
      </section>
    </section>
  );
};

export default IndexPage;
