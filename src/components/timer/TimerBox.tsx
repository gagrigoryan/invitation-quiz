import React from "react";
import { HeadingMedium, LabelLarge } from "baseui/typography";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type TimerBoxProps = {
  count: number;
  title: string;
};

const containerStyles: StyleObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const labelStyles: StyleObject = {
  textTransform: "uppercase",
};

export const TimerBox: React.FC<TimerBoxProps> = ({ count, title }) => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      <HeadingMedium marginBottom="12px">{`${count}`.padStart(2, "0")}</HeadingMedium>
      <LabelLarge className={css(labelStyles)}>{title}</LabelLarge>
    </div>
  );
};
