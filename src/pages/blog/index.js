import React from "react";
import ParallaxTitle from "../../components/shared/ParallaxTitle/ParallaxTitle";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Blog.module.scss";
import { graphql } from "gatsby";
import BlogPost from "../../components/blogs/BlogPost";
import ContentWrapper from "../../components/shared/ContentWrapper/ContentWrapper";

const ExperienciasMusicales = ({ data }) => {
  const posts = data.allPrismicPostDeBlog.nodes;

  const blogPostsElements = posts.map((post) => {
    const postData = {
      ...post.data,
      resumen: post.data.resumen?.text,
      id: post.id,
      date: post.first_publication_date,
    };
    console.log(postData);
    return <BlogPost key={postData.id} post={postData} />;
  });

  return (
    <section>
      <ParallaxTitle
        title={"Blog"}
        overlayColor={"rgba(33,33,33,0.3)"}
        titleStyle={{ color: "white", fontSize: "60px" }}
        height={"340px"}
        alt={""}
      >
        <StaticImage
          backgroundColor={"rgb(97, 170, 165)"}
          src={"../../images/experiencias_musicales_hero.jpg"}
          alt={"Hero"}
        />
      </ParallaxTitle>

      <ContentWrapper>
        <div className={styles.postsGrid}>{blogPostsElements}</div>
      </ContentWrapper>
    </section>
  );
};

export default ExperienciasMusicales;
export const query = graphql`
  query {
    allPrismicPostDeBlog(
      sort: { fields: first_publication_date, order: DESC }
    ) {
      nodes {
        first_publication_date
        id
        data {
          portada {
            url(imgixParams: { w: 350 })
          }
          titulo
          resumen {
            text
          }
        }
      }
    }
  }
`;
