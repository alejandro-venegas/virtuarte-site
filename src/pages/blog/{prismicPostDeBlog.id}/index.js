import React from "react";
import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

import ContentWrapper from "../../../components/shared/ContentWrapper/ContentWrapper";
import * as styles from "./Post.module.scss";
import ParallaxTitle from "../../../components/shared/ParallaxTitle/ParallaxTitle";
import CustomPrismicRichText from "../../../components/shared/CustomPrismicRichText/CustomPrismicRichText";

function Index({ data }) {
  const post = data.prismicPostDeBlog.data;
  const date = new Date(data.prismicPostDeBlog.first_publication_date);
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
        <time dateTime={date}>
          Publicado el{" "}
          {date.toLocaleDateString("es-CR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
          .
        </time>
        <CustomPrismicRichText field={post.contenido.richText} />
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
