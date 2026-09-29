import React from "react";
import { Button } from "../core/Button.jsx";

export function PriceTile({ eyebrow = "Most requested", title, description, price, action = "Book this", href }) {
  return (
    <div style={{ background: "var(--gradient-plum-panel)", color: "#fff", padding: "44px 42px",
      display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div>
        <div style={{ font: "600 10px/1 var(--font-sans)", letterSpacing: ".22em",
          textTransform: "uppercase", color: "var(--blush-150)", marginBottom: 20 }}>{eyebrow}</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 46,
          lineHeight: 1.05, margin: "0 0 16px" }}>{title}</h3>
        <p style={{ font: "var(--body-md)", opacity: 0.85, maxWidth: 340, margin: 0 }}>{description}</p>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 36 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 34 }}>{price}</span>
        <Button variant="light" size="md" href={href}>{action}</Button>
      </div>
    </div>
  );
}
