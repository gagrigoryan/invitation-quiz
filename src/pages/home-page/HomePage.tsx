import React from "react";
import { HeadingLarge, HeadingMedium, LabelLarge, LabelMedium } from "baseui/typography";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";
import { SliderSection } from "./slider-section";

import "swiper/css";
import { Timer } from "../../components/timer/Timer";

const introStyles: StyleObject = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const containerStyles: StyleObject = {
  width: "90vw",
  marginLeft: "auto",
  marginRight: "auto",
};

const actionStyles: StyleObject = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "48px",
};

const headingStyles: StyleObject = {
  maxWidth: "80%",
  textAlign: "center",
};

export const HomePage: React.FC = () => {
  const [css, theme] = useStyletron();

  return (
    <div>
      <section className={css({ ...introStyles, ...containerStyles })}>
        <HeadingLarge marginBottom="24px">
          Студия <span className={css({ color: theme.colors.negative200 })}>EXPROMT</span> приветствует Тебя
        </HeadingLarge>
        <div className={css({ marginBottom: "48px" })}>
          <LabelLarge>
            Если Ты получила пригласительное, значит мы ждем Тебя на&nbsp;семейной фотосессии студии EXPROMT
          </LabelLarge>
          <LabelMedium marginTop="8px" color={theme.colors.negative100}>
            Дата и&nbsp;время фотосессии будет известно в&nbsp;скором времени!
          </LabelMedium>
        </div>
      </section>
      <SliderSection />
      <section className={css(actionStyles)}>
        <HeadingMedium className={css(headingStyles)} marginBottom="8px">
          До Нового Года осталось
        </HeadingMedium>
        <Timer />
      </section>
    </div>
  );
};
