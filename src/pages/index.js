import * as React from "react";

import ParallaxTitle from "../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div>
      <ParallaxTitle
        overlayColor={"rgba(33,33,33,0.4)"}
        title={"Virtuartecr"}
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
      <div>Index Page</div>
    </div>
  );
};

export default IndexPage;
