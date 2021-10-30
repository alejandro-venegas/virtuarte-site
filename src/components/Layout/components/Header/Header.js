import React, { useEffect, useRef, useState } from "react";

import * as styles from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";

import HeaderNavigator from "./components/HeaderNavigator";
import { Spin } from "hamburger-react";
const Header = (props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const headerRef = useRef();
  const menuToggleHandler = (toggled) => {
    setIsMenuToggled(toggled);
  };
  return (
    <header
      ref={headerRef}
      className={styles.header}
      style={{
        backgroundColor: props.isScrolled ? "var(--black)" : "transparent",
      }}
    >
      <div className={styles.hamburger}>
        <Spin
          direction={"right"}
          onToggle={menuToggleHandler}
          toggled={isMenuToggled}
        />
      </div>
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
      <div
        aria-hidden={true}
        onClick={() => setIsMenuToggled(false)}
        className={`${styles.backdrop} ${isMenuToggled && styles.toggled}`}
      ></div>
      <HeaderNavigator
        isToggled={isMenuToggled}
        onRouteChanged={() => setIsMenuToggled(false)}
        isScrolled={props.isScrolled}
        topPadding={headerRef?.current?.clientHeight || 0}
      />
    </header>
  );
};
export default Header;
