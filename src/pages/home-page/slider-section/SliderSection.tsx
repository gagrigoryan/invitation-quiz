import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

import image1 from "../../../assets/images/intro1.jpeg";
import image2 from "../../../assets/images/intro2.jpeg";
import image3 from "../../../assets/images/intro3.jpeg";
import image4 from "../../../assets/images/intro4.jpeg";
import image5 from "../../../assets/images/intro5.jpeg";
import image6 from "../../../assets/images/intro6.jpeg";
import image7 from "../../../assets/images/intro7.jpeg";
import image8 from "../../../assets/images/intro8.jpeg";
import image9 from "../../../assets/images/intro9.jpeg";
import image10 from "../../../assets/images/intro10.jpeg";
import image11 from "../../../assets/images/intro11.jpeg";
import image12 from "../../../assets/images/intro12.jpeg";
import image13 from "../../../assets/images/intro13.jpeg";
import image14 from "../../../assets/images/intro14.jpeg";
import image15 from "../../../assets/images/intro15.jpeg";
import image16 from "../../../assets/images/intro16.jpeg";
import image17 from "../../../assets/images/intro17.jpeg";
import image18 from "../../../assets/images/intro18.jpeg";
import image19 from "../../../assets/images/intro19.jpeg";

const slideImages = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image1,
];

const sliderStyles: StyleObject = {
  width: "100%",
};

const slideWrapperStyles = (isActive: boolean): StyleObject => ({
  width: "84vw",
  height: "76vw",
  transform: `scale(${isActive ? 0.92 : 1})`,
  transition: "all 0.6s ease",
  overflow: "hidden",
});

const imageStyles = (isActive: boolean): StyleObject => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: `scale(${isActive ? 1.2 : 1})`,
  filter: `blur(${isActive ? 0 : 2}px)`,
  transition: "all 0.6s ease",
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
