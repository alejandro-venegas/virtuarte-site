import React from "react";
import AnimLink from "../shared/AnimLink/AnimLink";

const CursoItem = (props) => {
  return (
    <AnimLink to={props.id}>
      <section style={{ width: "min-content", margin: "2rem" }}>
        <img
          src={props.imgUrl}
          style={{ width: "250px", height: "250px", borderRadius: "100%" }}
          alt=""
        />
        <h2 style={{ color: "white", fontWeight: "500", margin: "1rem 0 0" }}>
          {props.name}
        </h2>
      </section>
    </AnimLink>
  );
};

export default CursoItem;
