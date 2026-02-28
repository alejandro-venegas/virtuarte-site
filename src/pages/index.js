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
import TestimonioItem from "../components/index/TestimoniosCarousel/TestimonioItem";
import { graphql } from "gatsby";
import { TestimoniosCarousel } from "../components/index/TestimoniosCarousel/TestimoniosCarousel";
import ReservarAhoraButton from "../components/shared/ReservarAhoraButton/ReservarAhoraButton";

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

const IndexPage = ({ data }) => {
  const testimonios = data.allPrismicTestimonio.nodes;

  return (
    <section>
      <ParallaxTitle
        overlayColor={"rgba(33,33,33,0.6)"}
        title={"Virtuarte"}
        titleStyle={{
          color: "white",
          fontSize: "72px",
        }}
        height={"520px"}
        alt={""}
        subtitle="¡En crecimiento continuo!"
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../images/painted_piano.jpg"}
          alt={""}
        />
      </ParallaxTitle>
      <ContentWrapper>
        <section className={styles.coursesContainer}>
          <h2>Clases de música virtuales personalizadas</h2>
          <h4 style={{ marginTop: "2rem", textAlign: "center" }}>
            No existe un único camino de aprendizaje,
            <strong> estructuramos un método de acuerdo tus objetivos.</strong>
          </h4>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <ContentWrapper>
            <a
              style={{ maxWidth: "400px", width: "100%", marginTop: "2rem" }}
              href="https://httpssitesgooglecomviewvirtuartecrinicio.simplybook.me/v2/"
            >
              <ReservarAhoraButton />
            </a>
          </ContentWrapper>
        </section>
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
        {testimonios.length > 0 && (
          <section style={{ marginTop: "1rem" }}>
            <ContentWrapper>
              <h2>Testimonios</h2>
              <TestimoniosCarousel testimonios={testimonios} />
            </ContentWrapper>
          </section>
        )}
      </ContentWrapper>
      <section>
        <div className={styles.coloredBackground}>
          <ContentWrapper>
            <h2 style={{ color: "white" }}>
              Más de 5 años formando personas a través de la música
            </h2>
          </ContentWrapper>
        </div>
      </section>
    </section>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allPrismicTestimonio(sort: { fields: first_publication_date }) {
      nodes {
        data {
          nombre {
            text
          }
          rol {
            text
          }
          texto {
            text
          }
        }
      }
    }
  }
`;
