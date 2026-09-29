import React from "react";

export function Eyebrow({ tone = "accent", size = "md", children }) {
  const color = { accent: "var(--text-accent)", blush: "var(--blush-150)", rose: "var(--rose-400)" }[tone];
  return (
    <div style={{ font: size === "sm" ? "var(--eyebrow-sm)" : "var(--eyebrow)",
      letterSpacing: size === "sm" ? ".26em" : "var(--track-eyebrow)",
      textTransform: "uppercase", color }}>{children}</div>
  );
}
