import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as styles from "./CustomPrismicRichText.module.scss";

function CustomPrismicRichText({ field }) {
  return (
    <PrismicRichText
      field={field}
      components={{
        image: (props) => {
          return (
            <div className={styles.imageContainer}>
              <img src={props.node.url} alt={props.node.alt || "Image"} />
            </div>
          );
        },
        embed: (props) => (
          <div
            className={styles.embed}
            dangerouslySetInnerHTML={{
              __html: props.node?.oembed?.html,
            }}
          />
        ),
      }}
    />
  );
}

export default CustomPrismicRichText;
