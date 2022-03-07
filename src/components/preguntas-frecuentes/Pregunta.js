import React, { useRef, useState } from "react";

import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import * as styles from "./Pregunte.module.scss";
import CustomPrismicRichText from "../shared/CustomPrismicRichText/CustomPrismicRichText";

function Pregunta({ pregunta, respuesta }) {
  const iconSettings = { fontSize: "large", color: "action" };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const respuestaContainerRef = useRef(null);

  return (
    <article className={styles.preguntaContainer}>
      <div className={styles.titleContainer}>
        <h2 className={"h3"}>{pregunta}</h2>

        <div onClick={toggleOpen}>
          {isOpen ? (
            <ExpandLessRoundedIcon {...iconSettings} />
          ) : (
            <ExpandMoreRoundedIcon {...iconSettings} />
          )}
        </div>
      </div>
      <div aria-hidden="true" className={styles.separatorBar} />
      <div
        className={`${styles.respuesta}`}
        style={{
          maxHeight: isOpen
            ? respuestaContainerRef.current.clientHeight + "px"
            : 0,
        }}
      >
        <div style={{ padding: "0.1px" }} ref={respuestaContainerRef}>
          <CustomPrismicRichText field={respuesta.richText} />
        </div>
      </div>
    </article>
  );
}

export default Pregunta;
