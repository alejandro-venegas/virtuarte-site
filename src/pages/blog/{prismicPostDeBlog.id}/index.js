import React from "react";
import { graphql } from "gatsby";

import { PrismicRichText } from "@prismicio/react";
import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import * as styles from "./Post.module.scss";
import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

function Index({ data }) {
  const post = data.prismicPostDeBlog.data;
  console.log(post);
  const image = getImage(post.portada.gatsbyImageData);

  return (
    <section className={styles.post}>
      <Helmet>
        <title>{post.titulo}</title>
      </Helmet>
      <ParallaxTitle
        title={post.titulo}
        titleStyle={{ color: "white", fontSize: "50px" }}
        overlayColor={"rgba(33,33,33,0.6)"}
        height={"430px"}
        alt={post.titulo}
      >
        <GatsbyImage
          backgroundColor={"rgb(97, 170, 165)"}
          image={image}
          alt={"Portada"}
        />
      </ParallaxTitle>
      <ContentWrapper className={styles.contentWrapper}>
        <PrismicRichText
          field={post.contenido.richText}
          components={{
            embed: (props) => {
              console.log(props);
              return (
                <div
                  className={styles.embed}
                  dangerouslySetInnerHTML={{
                    __html: props.node?.oembed?.html,
                  }}
                />
              );
            },
          }}
        />
      </ContentWrapper>
    </section>
  );
}

export default Index;

export const query = graphql`
  query MyQuerys($id: String) {
    prismicPostDeBlog(id: { eq: $id }) {
      data {
        titulo
        contenido {
          richText
        }
        portada {
          gatsbyImageData
        }
      }
      first_publication_date
    }
  }
`;
