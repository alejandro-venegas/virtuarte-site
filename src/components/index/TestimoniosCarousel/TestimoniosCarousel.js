import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonioItem from "./TestimonioItem";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

import * as styles from "./TestimonioCarousel.module.scss";

export const TestimoniosCarousel = ({ testimonios }) => {
  const [testimoniosItems, setTestimoniosItems] = useState([]);

  const func = useCallback(() => {
    const maxItems = Math.floor(window.innerWidth / 350) || 1;

    const data = testimonios.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / maxItems);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    setTestimoniosItems(data);
  }, [testimonios]);

  useEffect(() => {
    if (!window) {
      return;
    }

    func();

    window.addEventListener("resize", func);
    return () => {
      window.removeEventListener("resize", func);
    };
  }, [func]);

  return (
    <Carousel
      className={styles.carouselRoot}
      showStatus={false}
      emulateTouch
      showThumbs={false}
      centerMode
      centerSlidePercentage={100}
    >
      {testimoniosItems.map((testimonios, i) => (
        <div key={i} className={styles.itemsContainer}>
          {testimonios.map((item) => {
            const { nombre, rol, texto } = item.data;

            return (
              <TestimonioItem
                key={nombre.text}
                nombre={nombre.text}
                rol={rol.text}
                texto={texto.text}
              />
            );
          })}
        </div>
      ))}
    </Carousel>
  );
};
