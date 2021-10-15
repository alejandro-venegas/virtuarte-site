import * as React from "react";

import loadable from "@loadable/component";

import paintedPiano from "../images/painted_piano.jpg";
const ParallaxTitle = loadable(() =>
  import("../components/shared/ParallaxTitle")
);

const IndexPage = () => {
  return (
    <div>
      <ParallaxTitle src={paintedPiano} height={"520px"} alt={""} />
      <div>Index Page</div>
    </div>
  );
};

export default IndexPage;
