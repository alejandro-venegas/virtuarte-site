import React from "react";

import * as styles from "./index.module.scss";
import AnimLink from "../../../shared/AnimLink";
import { StaticImage } from "gatsby-plugin-image";
const Header = () => {
  return (
    <header className={styles.header}>
      <StaticImage
        width={56}
        src="../../../../images/logo.jpeg"
        objectFit={"contain"}
        loading={"eager"}
        alt="Logo"
      />
    </header>
  );
};
export default Header;
