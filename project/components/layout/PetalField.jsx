import React from "react";

const TILE = {
  light: { desktop: "petal-field-desktop-pink.svg", mobile: "petal-field-mobile-pink.svg" },
  dark: { desktop: "petal-field-desktop-blush.svg", mobile: "petal-field-mobile-blush.svg" }
};

/**
 * Paints the falling-petal texture as a background LAYER on whatever it wraps.
 * Any gradient or colour you pass as `under` sits below the petals; children sit above both.
 */
export function PetalField({ on = "light", width = "desktop", under, offset = 0, style, children, ...rest }) {
  const src = `../../assets/textures/${TILE[on][width]}`;
  const size = width === "mobile" ? "390px 1700px" : "1440px 2600px";
  const layered = under
    ? { backgroundImage: `url(${src}), ${under}`, backgroundRepeat: "repeat-y, no-repeat",
        backgroundPosition: `0 -${offset}px, center`, backgroundSize: `${size}, auto` }
    : { backgroundImage: `url(${src})`, backgroundRepeat: "repeat-y",
        backgroundPosition: `0 -${offset}px`, backgroundSize: size };
  return <div style={{ ...layered, ...style }} {...rest}>{children}</div>;
}
