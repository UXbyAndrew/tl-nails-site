import React from "react";
import { Eyebrow } from "../core/Eyebrow.jsx";
import { TextLink } from "../core/TextLink.jsx";

export function SectionHeading({ eyebrow, title, align = "left", size = 54, action, actionHref }) {
  const heading = (
    <div>
      {eyebrow ? <div style={{ marginBottom: 16 }}><Eyebrow>{eyebrow}</Eyebrow></div> : null}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: size,
        lineHeight: 1.05, margin: 0 }}>{title}</h2>
    </div>
  );
  if (align === "center") return <div style={{ textAlign: "center" }}>{heading}</div>;
  if (!action) return heading;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32 }}>
      {heading}
      <TextLink href={actionHref}>{action}</TextLink>
    </div>
  );
}
