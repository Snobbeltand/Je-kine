import { useEffect, useState } from "react";
import styles from "./HeroCarousel.module.css";

type Slide = {
  src: string;
  /** CSS object-position, for photos cropped differently in the design */
  position?: string;
};

type HeroCarouselProps = {
  slides: Slide[];
  interval?: number;
};

export default function HeroCarousel({
  slides,
  interval = 5000,
}: HeroCarouselProps) {
  const [{ current, previous }, setIndex] = useState({
    current: 0,
    previous: -1,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(({ current }) => ({
        current: (current + 1) % slides.length,
        previous: current,
      }));
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={styles.carousel} aria-hidden>
      {slides.map((slide, i) => {
        const state =
          i === current ? styles.active : i === previous ? styles.leaving : "";
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            decoding="async"
            className={`${styles.slide} ${state}`}
            style={{ objectPosition: slide.position }}
          />
        );
      })}
    </div>
  );
}
