import React from "react";

export function Quote({ children, attribution, stars = true, tone = "plum" }) {
  const dark = tone === "plum";
  return (
    <div style={{ background: dark ? "var(--gradient-plum)" : "transparent",
      color: dark ? "#fff" : "var(--text-strong)", padding: dark ? "26px 24px" : 0,
      display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {stars ? <span style={{ font: "600 15px/1 var(--font-sans)", color: "var(--gold-500)",
        letterSpacing: ".18em", marginBottom: 12 }}>★★★★★</span> : null}
      <p style={{ font: "var(--quote)", margin: 0 }}>{children}</p>
      {attribution ? <span style={{ font: "600 10px/1 var(--font-sans)", letterSpacing: "var(--track-caps)",
        textTransform: "uppercase", opacity: 0.8, marginTop: 10 }}>{attribution}</span> : null}
    </div>
  );
}
