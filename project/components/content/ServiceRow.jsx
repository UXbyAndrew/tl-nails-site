import React from "react";

export function ServiceRow({ name, price, description, duration, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "block", padding: "22px 0", borderBottom: "1px solid var(--rule-hairline)",
        textDecoration: "none", color: "inherit", transition: "opacity var(--dur-tint)",
        opacity: hover && href ? 0.72 : 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 27 }}>{name}</span>
        <span style={{ font: "var(--price)", letterSpacing: ".06em", color: "var(--text-accent)" }}>{price}</span>
      </div>
      {description ? <p style={{ font: "var(--body-xs)", color: "var(--text-muted)", margin: "8px 0 0", maxWidth: 520 }}>{description}</p> : null}
      {duration ? <div style={{ font: "500 10px/1 var(--font-mono)", letterSpacing: ".14em",
        textTransform: "uppercase", color: "var(--text-quiet)", marginTop: 10 }}>{duration}</div> : null}
    </a>
  );
}
