import React from "react";
import Button from "../shared/Button/Button";
const DocenteItem = (props) => {
  const { nombre, apellidos, titulo, resumen, foto, originalId } =
    props.docente;
  return (
    <article
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "1000px",
        margin: "2rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={foto.url} alt={"Foto de " + nombre} />
        <h2 style={{ fontSize: "16px", color: "#212121", margin: "1rem" }}>
          {titulo}. {nombre} {apellidos}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 2rem",
        }}
      >
        <p style={{ wrapSpace: "pre-wrap" }}>{resumen}</p>
        <Button>Ver más</Button>
      </div>
    </article>
  );
};

export default DocenteItem;
