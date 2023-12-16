import React from "react";
import { HeadingLarge, LabelMedium, LabelSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";
import { Button } from "../../components/button";
import { SliderSection } from "./slider-section";

import "swiper/css";

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
  justifyContent: "center",
  marginTop: "48px",
};

export const HomePage: React.FC = () => {
  const [css, theme] = useStyletron();

  return (
    <div>
      <section className={css({ ...introStyles, ...containerStyles })}>
        <HeadingLarge marginBottom="24px">
          Студия <span className={css({ color: theme.colors.warning400 })}>EXPROMT</span> приветствует Тебя
        </HeadingLarge>
        <div className={css({ marginBottom: "48px" })}>
          <LabelMedium>
            Если Ты получила пригласительное, значит мы ждем Тебя на&nbsp;семейной фотосессии студии EXPROMT
          </LabelMedium>
          <LabelSmall marginTop="8px" color={theme.colors.warning200}>
            Дата и&nbsp;время фотосессии будет известно в&nbsp;скором времени!
          </LabelSmall>
        </div>
      </section>
      <SliderSection />
      <section className={css(actionStyles)}>
        <Button>Пройти Опрос</Button>
      </section>
    </div>
  );
};
