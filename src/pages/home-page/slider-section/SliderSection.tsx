import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

import image1 from "../../../assets/images/intro1.jpeg";
import image2 from "../../../assets/images/intro2.jpeg";
import image3 from "../../../assets/images/intro3.jpeg";
import image4 from "../../../assets/images/intro4.jpeg";
import image5 from "../../../assets/images/intro5.jpeg";

const slideImages = [image2, image3, image4, image5, image1];

const sliderStyles: StyleObject = {
  width: "100%",
};

const slideWrapperStyles = (isActive: boolean): StyleObject => ({
  width: "84vw",
  height: "76vw",
  transform: `scale(${isActive ? 0.92 : 1})`,
  transition: "transform 0.6s ease",
  overflow: "hidden",
});

const imageStyles = (isActive: boolean): StyleObject => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: `scale(${isActive ? 1.2 : 1})`,
  filter: `blur(${isActive ? 0 : 2}px)`,
  transition: "transform 0.6s ease",
});

export const SliderSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(-1);
  const [css] = useStyletron();

  return (
    <section className={css(sliderStyles)}>
      <Swiper
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides
        loop
      >
        {slideImages.map((slideItem, index) => (
          <SwiperSlide key={slideItem}>
            <div className={css(slideWrapperStyles(activeSlide === index))}>
              <img className={css(imageStyles(activeSlide === index))} src={slideItem} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
