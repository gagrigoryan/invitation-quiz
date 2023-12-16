import React from "react";
import brand from "../../assets/images/brand.jpeg";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const pageStyles: StyleObject = {
  paddingBottom: "60px",
};

const headerStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  paddingTop: "8px",
  paddingBottom: "8px",
  borderBottom: "1px solid #CBCBCB",
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [css] = useStyletron();

  return (
    <div className={css(pageStyles)}>
      <header className={css(headerStyles)}>
        <img className={css({ width: "48%", objectFit: "contain" })} src={brand} alt="" />
      </header>
      <main>{children}</main>
    </div>
  );
};
