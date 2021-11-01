import React, { useEffect, useRef, useState } from "react";

import * as styles from "./Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";

import HeaderNavigator from "./components/HeaderNavigator";
import { Spin } from "hamburger-react";
import { globalHistory } from "@reach/router";
const Header = (props) => {
  const [activeUrl, setActiveUrl] = useState("");
  const [linksColor, setLinksColor] = useState("white");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const headerRef = useRef();
  const checkLocation = () => {
    const pathname = window.location.pathname.replaceAll("/", "");
    setActiveUrl(pathname);
    switch (pathname) {
      case "quienes-somos":
      case "docentes":
        setLinksColor("black");
        break;
      default:
        setLinksColor("white");
        break;
    }
  };
  // Check location hook
  useEffect(() => {
    checkLocation();
    globalHistory.listen(({ action }) => {
      checkLocation();
      setIsMenuToggled(false);
    });
  }, []);
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
          color={
            linksColor === "white" || isMenuToggled || props.isScrolled
              ? "white"
              : "var(--black)"
          }
        />
      </div>
      <StaticImage
        width={50}
        src="../../../../images/logo.png"
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
        activeUrl={activeUrl}
        isToggled={isMenuToggled}
        isScrolled={props.isScrolled}
        topPadding={headerRef?.current?.clientHeight || 0}
        color={linksColor}
      />
    </header>
  );
};
export default Header;
