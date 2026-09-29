import React from "react";

export function StatBlock({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600,
        lineHeight: 1, color: "var(--plum-700)" }}>{value}</div>
      <div style={{ font: "600 10px/1.4 var(--font-sans)", letterSpacing: "var(--track-caps)",
        textTransform: "uppercase", color: "var(--text-accent)", marginTop: 6 }}>{label}</div>
    </div>
  );
}
