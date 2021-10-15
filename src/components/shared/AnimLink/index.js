import React, { createRef, useEffect, useState } from "react";
import { globalHistory } from "@reach/router";

import TransitionLink from "gatsby-plugin-transition-link";
import anime from "animejs";

import * as styles from "./AnimLink.module.scss";

const AnimLink = (props) => {
  const durationInSeconds = 0.25;
  const [className, setClassName] = useState(styles.link);
  useEffect(() => {
    if (props.to === window.location.pathname) {
      setClassName(`${styles.link} ${styles.selected}`);
    } else {
      setClassName(styles.link);
    }
    return globalHistory.listen(({ action }) => {
      console.log(window.location.pathname);
      if (props.to === window.location.pathname) {
        setClassName(`${styles.link} ${styles.selected}`);
      } else {
        setClassName(styles.link);
      }
    });
  }, []);
  return (
    <TransitionLink
      to={props.to}
      className={className + " " + props.className || ""}
      exit={{
        length: durationInSeconds,
        trigger: ({ node, e, exit, entry }) => {
          node.setAttribute("style", "opacity: 1");
          anime({
            duration: durationInSeconds * 1000,
            targets: "." + node.className.replaceAll(" ", "."),
            opacity: 0,
            easing: "linear",
          });
        },
      }}
      entry={{
        delay: durationInSeconds,
        length: durationInSeconds,
        trigger: ({ node, e, exit, entry }) => {
          node.setAttribute("style", "opacity: 0");
          anime({
            duration: durationInSeconds * 1000,
            targets: "." + node.className.replaceAll(" ", "."),
            opacity: 1,
            easing: "linear",
          });
        },
      }}
    >
      {props.children}
    </TransitionLink>
  );
};
export default AnimLink;
