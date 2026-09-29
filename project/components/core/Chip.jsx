import React from "react";

export function Chip({ selected, children, onClick, href, ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} {...rest}
      style={{ display: "inline-flex", alignItems: "center", minHeight: "var(--tap-min)",
        padding: "11px 18px", borderRadius: 0, cursor: "pointer",
        background: selected ? "var(--mauve-500)" : "transparent",
        color: selected ? "#fff" : "var(--text-strong)",
        border: selected ? "1px solid var(--mauve-500)" : "1px solid var(--rule-strong)",
        font: "var(--label)", letterSpacing: ".06em", textDecoration: "none",
        transition: "background var(--dur-tint), color var(--dur-tint)" }}>
      {children}
    </Tag>
  );
}
