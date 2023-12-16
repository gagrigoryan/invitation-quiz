import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type AnimatedDividerProps = {
  isVisible?: boolean;
  className?: string;
};

const dividerStyles = (isFull: boolean, color: string): StyleObject => ({
  width: "100%",
  height: "1px",
  backgroundColor: color,
  transformOrigin: "left",
  transform: `scaleX(${isFull ? 1 : 0})`,
  transitionDelay: "1.2s",
  transition: "transform 1.6s cubic-bezier(0.03, 0.15, 0.16, 0.99)",
});

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({ isVisible, className }) => {
  const [css, theme] = useStyletron();
  const [isDividerFull, setDividerFull] = useState(false);

  const styles = dividerStyles(isDividerFull, theme.colors.primary300);

  useEffect(() => {
    setDividerFull(Boolean(isVisible));
  }, [isVisible]);

  return <div className={clsx(css(styles), className)} />;
};
