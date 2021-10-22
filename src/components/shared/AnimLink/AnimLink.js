import React from "react";

import TransitionLink from "gatsby-plugin-transition-link";
import anime from "animejs";

import * as styles from "./AnimLink.module.scss";

const AnimLink = (props) => {
  const durationInSeconds = 0.25;
  const isActive =
    props.activeUrl.replaceAll("/", "") === props.to.replaceAll("/", "");
  return (
    <TransitionLink
      to={props.to}
      className={`${styles.link} ${props.className} ${
        isActive && styles.selected
      }`}
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
