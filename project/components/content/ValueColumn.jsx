import React from "react";

const ICONS = {
  detail: <><path d="M4.2 19.8l3.4-1.1 9.5-9.5-2.3-2.3-9.5 9.5-1.1 3.4z" /><path d="M15.6 5.4l1.7-1.7 3 3-1.7 1.7" /><path d="M6.6 15.2l2.2 2.2" /></>,
  people: <><circle cx="9.2" cy="8.4" r="3.2" /><path d="M3.4 20.2c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8" /><path d="M16 5.8a3.2 3.2 0 010 5.4" /><path d="M17.4 14.8c1.9.8 3.2 2.9 3.2 5.4" /></>,
  swatches: <><circle cx="9" cy="9.2" r="4.8" /><circle cx="15" cy="9.2" r="4.8" /><circle cx="12" cy="14.6" r="4.8" /></>,
  sparkle: <><path d="M10.4 2.8l1.7 5 5 1.7-5 1.7-1.7 5-1.7-5-5-1.7 5-1.7 1.7-5z" /><path d="M17.6 14.2l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" /></>
};

export function ValueColumn({ icon, title, children, divider = true }) {
  return (
    <div style={{ padding: "0 34px", borderRight: divider ? "1px solid var(--rule-hairline)" : "none" }}>
      <div style={{ width: 56, height: 56, border: "1px solid var(--mauve-500)", marginBottom: 26,
        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mauve-500)" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.1" strokeLinejoin="round">{ICONS[icon]}</svg>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 12 }}>{title}</div>
      <p style={{ font: "var(--body-sm)", color: "var(--text-muted)", margin: 0 }}>{children}</p>
    </div>
  );
}
