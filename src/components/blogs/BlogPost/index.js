import React from "react";
import * as styles from "./BlogPost.module.scss";
import AnimLink from "../../shared/AnimLink/AnimLink";

function BlogPost({ post }) {
  const { titulo, portada, id, resumen } = post;
  return (
    <AnimLink to={"/blog/" + id}>
      <article className={styles.blogPost}>
        <img src={portada.url} alt="Portada del Post" />
        <div className={styles.textContainer}>
          <h3>{titulo}</h3>
          <p>{resumen}</p>
        </div>
      </article>
    </AnimLink>
  );
}

export default BlogPost;
