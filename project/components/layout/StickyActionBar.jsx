import React from "react";

export function StickyActionBar({ phone = "(813) 304-0330", visible = true }) {
  return (
    <div style={{ display: "flex", gap: 8, padding: "12px 14px",
      background: "rgba(251,244,241,.97)", borderTop: "1px solid var(--rule-hairline)",
      boxShadow: "var(--shadow-sticky)",
      transform: visible ? "none" : "translateY(100%)",
      transition: "transform var(--dur-tint) var(--ease-out-soft)" }}>
      <a href="#book" style={{ flex: 1.9, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 3, minHeight: "var(--tap-min)", padding: "11px 8px",
        background: "var(--mauve-500)", color: "#fff", textDecoration: "none" }}>
        <span style={{ font: "600 11px/1 var(--font-sans)", letterSpacing: "var(--track-caps)", textTransform: "uppercase" }}>Book an appointment</span>
        <span style={{ font: "500 10px/1 var(--font-sans)", opacity: 0.8 }}>{phone}</span>
      </a>
      <a href="#menu" style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center",
        minHeight: "var(--tap-min)", padding: "11px 8px", border: "1px solid var(--plum-700)",
        color: "var(--plum-700)", font: "600 11px var(--font-sans)", letterSpacing: "var(--track-nav)",
        textTransform: "uppercase", textDecoration: "none" }}>Menu</a>
    </div>
  );
}
