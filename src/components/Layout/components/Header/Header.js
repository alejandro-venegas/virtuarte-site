import React, { useEffect, useState } from "react";

import * as styles from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";

import HeaderNavigator from "./components/HeaderNavigator";
const Header = (props) => {
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: props.isScrolled ? "var(--black)" : "transparent",
      }}
    >
      <StaticImage
        width={50}
        src="../../../../images/logo.jpeg"
        objectFit={"contain"}
        imgStyle={{ opacity: 1, transition: "none" }}
        loading={"eager"}
        style={{
          margin: "10px 20px",
          overflow: "hidden",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        alt="Logo"
      />
      <HeaderNavigator isScrolled={props.isScrolled} />
    </header>
  );
};
export default Header;
