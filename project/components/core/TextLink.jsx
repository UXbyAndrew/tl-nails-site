import React from "react";

export function TextLink({ href, children, tone = "rule", size = 11, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    rule: { color: "var(--text-strong)", borderBottom: "1px solid var(--rule-accent)", paddingBottom: "6px" },
    accent: { color: "var(--text-accent)" },
    quiet: { color: "var(--text-strong)", opacity: hover ? 1 : 0.55 },
    underline: { color: "inherit", textDecoration: "underline", textUnderlineOffset: "5px" }
  }[tone];
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "inline-flex", alignItems: "center", minHeight: "var(--tap-min)",
        font: `600 ${size}px/1 var(--font-sans)`, letterSpacing: "var(--track-caps)",
        textTransform: "uppercase", textDecoration: "none",
        transition: "color var(--dur-tint), opacity var(--dur-tint)", ...tones }} {...rest}>
      {children}
    </a>
  );
}
