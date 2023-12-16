import type { StandardEngine } from "styletron-standard";

const JuraRegularUrl = "https://fonts.gstatic.com/s/jura/v31/z7NOdRfiaC4Vd8hhoPzfb5vBTP1d7ZumR_iJGursUpw.woff2";

export const getDefaultFonts = (instance: StandardEngine): string => {
  const juraRegular = instance.renderFontFace({
    src: `url("${JuraRegularUrl}")`,
    fontStyle: "normal",
    fontWeight: 400,
    unicodeRange:
      "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  });

  return juraRegular;
};
