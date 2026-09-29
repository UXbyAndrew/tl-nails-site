import React from "react";
import { PetalField } from "./PetalField.jsx";

export function PlumBand({ tone = "plum", width = "desktop", children, style }) {
  const under = tone === "ink" ? "var(--surface-dark)" : "var(--gradient-plum)";
  return (
    <PetalField on="dark" width={width} under={under}
      style={{ color: "var(--text-on-dark)", padding: width === "mobile" ? "44px 20px" : "112px 56px", ...style }}>
      {children}
    </PetalField>
  );
}
