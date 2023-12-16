import { createDarkTheme as baseCreateTheme } from "baseui";
import { Theme } from "baseui";
import type { StandardEngine } from "styletron-standard";

export type CreateTheme = (instance: StandardEngine) => Theme;

export const createTheme: CreateTheme = () => {
  // const defaultFonts = getDefaultFonts(instance);

  return baseCreateTheme({ primaryFontFamily: "'Jura', sans-serif" });
};
