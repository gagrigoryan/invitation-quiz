import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <BaseButton overrides={{ Root: { style: () => ({ borderRadius: "0", textTransform: "uppercase" }) } }} {...props} />
  );
};
