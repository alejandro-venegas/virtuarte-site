import React from "react";
import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const Contactenos = () => {
  return (
    <section>
      <ParallaxTitle
        overlayColor={"rgba(33,33,33,0.6)"}
        title={"Contáctenos"}
        titleStyle={{ color: "white", fontSize: "61.3333px" }}
        height={"340px"}
        alt={""}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/contactenos_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>
      <iframe
        title="Contactenos"
        jsname="L5Fo6c"
        className="YMEQtf DnR2hf"
        sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals"
        aria-label="Google Forms, Envíanos un mensaje"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdO-_n49FUkjDYrbDmZDETf7jdQLksjOjBQi5V5oTIxTAUfCA/viewform?embedded=true"
        allowFullScreen=""
        frameBorder="0"
        style={{ width: "50%", height: "800px" }}
      />
    </section>
  );
};

export default Contactenos;
