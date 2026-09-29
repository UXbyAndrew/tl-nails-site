import React from "react";

export function Field({ placeholder, value, onChange, type = "text", ...rest }) {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} {...rest}
      style={{ width: "100%", minHeight: "var(--tap-min)", padding: "16px",
        background: "#fff", border: "var(--border-field)", borderRadius: 0,
        font: "500 14px var(--font-sans)", color: "var(--text-strong)", outline: "none" }} />
  );
}
