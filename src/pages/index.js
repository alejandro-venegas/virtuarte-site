import * as React from "react";

import ParallaxTitle from "../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Index.module.scss";

const IndexPage = () => {
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
      <div className={"content-margin"}>
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
          <div className={styles.coursesContainer}></div>
        </section>
      </div>
    </section>
  );
};

export default IndexPage;
