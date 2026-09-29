import React from "react";

const BASE = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  minHeight: "var(--tap-min)", border: "0", borderRadius: "0", cursor: "pointer",
  font: "var(--label)", letterSpacing: "var(--track-button)", textTransform: "uppercase",
  textDecoration: "none", transition: "background var(--dur-tint), color var(--dur-tint), transform var(--dur-lift)"
};

const SIZES = {
  lg: { padding: "18px 34px", fontSize: "12px" },
  md: { padding: "13px 26px", fontSize: "11px" },
  sm: { padding: "11px 18px", fontSize: "11px" }
};

export function Button({ variant = "primary", size = "lg", block, href, children, onClick, disabled, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = {
    primary: {
      background: hover ? "var(--plum-700)" : "var(--mauve-500)", color: "#fff",
      boxShadow: "var(--shadow-button)", transform: hover ? "translateY(-2px)" : "none"
    },
    deep: { background: hover ? "var(--mauve-500)" : "var(--plum-700)", color: "#fff" },
    ghost: {
      background: hover ? "var(--surface-tint-hover)" : "transparent",
      color: "var(--plum-700)", border: "1px solid var(--plum-700)"
    },
    light: { background: hover ? "var(--blush-150)" : "var(--surface-page)", color: "var(--plum-700)" }
  }[variant];

  const style = { ...BASE, ...SIZES[size], ...v, width: block ? "100%" : undefined,
    opacity: disabled ? 0.45 : 1, pointerEvents: disabled ? "none" : undefined };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} style={style} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}
