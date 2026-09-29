import React from "react";
import { Button } from "../core/Button.jsx";

export function SiteHeader({ active = "Home", phone = "(813) 304-0330", compact }) {
  const items = ["Home", "About", "Menu", "Locations"];
  if (compact) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 20px", borderBottom: "1px solid var(--rule-soft)" }}>
        <Wordmark size={18} />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[20, 20, 13].map((w, i) => <span key={i} style={{ width: w, height: 1, background: "var(--ink-900)" }} />)}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "24px 56px", borderBottom: "1px solid var(--rule-soft)" }}>
      <Wordmark size={27} />
      <div style={{ display: "flex", gap: 38, font: "var(--nav)", letterSpacing: "var(--track-nav)", textTransform: "uppercase" }}>
        {items.map(i => (
          <a key={i} href={"#" + i.toLowerCase()} style={{ color: "inherit", textDecoration: "none",
            opacity: i === active ? 1 : 0.55, paddingBottom: 4,
            borderBottom: i === active ? "1px solid var(--mauve-500)" : "none" }}>{i}</a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <a href={"tel:" + phone} style={{ font: "600 12px/1 var(--font-sans)", letterSpacing: ".06em",
          color: "var(--text-accent)", textDecoration: "none" }}>{phone}</a>
        <Button variant="deep" size="md">Book now</Button>
      </div>
    </div>
  );
}

export function Wordmark({ size = 27, color = "var(--plum-700)" }) {
  return (
    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size,
      letterSpacing: ".16em", textTransform: "uppercase", color }}>T&amp;L Nails</span>
  );
}
