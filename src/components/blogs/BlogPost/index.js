import React from "react";
import * as styles from "./BlogPost.module.scss";
import AnimLink from "../../shared/AnimLink/AnimLink";

function BlogPost({ post }) {
  const { titulo, portada, id, resumen, date } = post;
  return (
    <AnimLink to={"/blog/" + id}>
      <article className={styles.blogPost}>
        <img src={portada.url} alt="Portada del Post" />
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <h3>{titulo}</h3>
            {date && (
              <time datetime={date}>
                {new Date(date).toLocaleDateString("es-CR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            )}
          </div>
          <p>{resumen}</p>
        </div>
      </article>
    </AnimLink>
  );
}

export default BlogPost;
