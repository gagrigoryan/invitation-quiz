import React from "react";
import brand from "../../assets/images/brand.jpeg";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";
import { AnimatedDivider } from "../animated-divider";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const pageStyles: StyleObject = {
  paddingBottom: "100px",
};

const headerStyles: StyleObject = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  paddingTop: "8px",
  paddingBottom: "8px",
};

const dividerStyles: StyleObject = {
  position: "absolute",
  left: "0",
  bottom: "0",
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [css] = useStyletron();

  return (
    <div className={css(pageStyles)}>
      <header className={css(headerStyles)}>
        <img className={css({ width: "48%", objectFit: "contain" })} src={brand} alt="" />
        <AnimatedDivider className={css(dividerStyles)} isVisible />
      </header>
      <main>{children}</main>
    </div>
  );
};
