import React from "react";
import { PetalField } from "../../components/layout/PetalField.jsx";
import { Wordmark } from "../../components/layout/SiteHeader.jsx";
import { Field } from "../../components/core/Field.jsx";
import { Button } from "../../components/core/Button.jsx";
import { PlumBand } from "../../components/layout/PlumBand.jsx";

const LOCATIONS = [
  { name: "Kennedy Boulevard", addr: ["1506 W Kennedy Blvd Suite B", "Tampa, FL 33606"], phone: "(813) 304-0330",
    hours: ["Mon–Thurs: 10am – 7pm", "Fri: 9am – 7pm", "Sat: 9am – 6pm", "Sun: 11am – 5pm"] },
  { name: "Davis Islands", addr: ["304 E Davis Blvd #D", "Tampa, FL 33606"], phone: "(813) 259-9920",
    hours: ["Mon: Closed", "Tues–Thurs: 10am – 7pm", "Sat: 9am – 6pm", "Sun: 11am – 5pm"] }
];

export function SiteFooter() {
  return (
    <>
      <PlumBand tone="ink" style={{ padding: "90px 56px 200px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 72 }}>
          <div>
            <div style={{ font: "var(--eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase",
              color: "var(--rose-400)", marginBottom: 22 }}>Contact us</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 54, letterSpacing: ".09em",
              textTransform: "uppercase", lineHeight: 1.05, margin: "0 0 24px", color: "#fff" }}>Our locations</h2>
            <p style={{ font: "var(--body-md)", opacity: .7, maxWidth: 420, margin: "0 0 34px" }}>
              Experience luxury nail care at either of our Tampa salons — each one built for elegance, comfort, and unhurried service.</p>
            <div style={{ font: "600 10px/1 var(--font-sans)", letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--rose-400)", marginBottom: 12 }}>Email</div>
            <a href="mailto:info@tlnailstampa.com" style={{ font: "400 15px/1 var(--font-sans)", opacity: .85,
              color: "inherit", textDecoration: "underline", textUnderlineOffset: 5 }}>info@tlnailstampa.com</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {LOCATIONS.map(l => (
              <div key={l.name}>
                <div style={{ font: "600 14px/1 var(--font-sans)", color: "#fff", marginBottom: 12 }}>{l.name}</div>
                <p style={{ font: "400 13px/1.75 var(--font-sans)", opacity: .7, margin: "0 0 18px" }}>
                  {l.addr.map(a => <React.Fragment key={a}>{a}<br /></React.Fragment>)}</p>
                <div style={{ font: "600 9px/1 var(--font-sans)", letterSpacing: ".18em", textTransform: "uppercase",
                  color: "var(--rose-400)", marginBottom: 6 }}>Phone</div>
                <div style={{ font: "400 13px/1 var(--font-sans)", opacity: .8 }}>{l.phone}</div>
                <div style={{ font: "600 9px/1 var(--font-sans)", letterSpacing: ".18em", textTransform: "uppercase",
                  color: "var(--rose-400)", margin: "14px 0 6px" }}>Hours</div>
                <p style={{ font: "400 13px/1.85 var(--font-sans)", opacity: .7, margin: 0 }}>
                  {l.hours.map(h => <React.Fragment key={h}>{h}<br /></React.Fragment>)}</p>
              </div>
            ))}
          </div>
        </div>
      </PlumBand>

      <PetalField under="var(--gradient-footer)" style={{ display: "flow-root", padding: "0 56px 46px" }}>
        <div style={{ margin: "-110px 46px 0" }}>
          <div style={{ height: 440, position: "relative", overflow: "hidden", border: "var(--border-bezel)",
            boxShadow: "var(--shadow-overlay)", background:
            "repeating-linear-gradient(118deg,rgba(255,255,255,0) 0 56px,#FFFFFF 56px 64px)," +
            "repeating-linear-gradient(28deg,rgba(255,255,255,0) 0 92px,#FFFFFF 92px 99px),#E8E3D9" }}>
            {[["20%", "34%", "Kennedy", "var(--mauve-500)"], ["58%", "58%", "Davis", "var(--plum-700)"]].map(([l, t, n, c]) => (
              <div key={n} style={{ position: "absolute", left: l, top: t, display: "flex",
                flexDirection: "column", alignItems: "center", gap: 8 }}>
                <span style={{ width: 15, height: 15, borderRadius: "50%", background: c, boxShadow: `0 0 0 6px ${c}33` }} />
                <span style={{ padding: "7px 11px", background: "#fff", font: "600 9px/1 var(--font-sans)",
                  letterSpacing: ".14em", textTransform: "uppercase", color: "var(--plum-700)" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, paddingTop: 56 }}>
          <div>
            <div style={{ marginBottom: 18 }}><Wordmark size={26} /></div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px", font: "var(--nav)",
              letterSpacing: "var(--track-nav)", textTransform: "uppercase" }}>
              {["Services", "About", "Gallery", "Locations", "Gift Cards"].map(i =>
                <a key={i} href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "var(--tap-min)",
                  color: "inherit", textDecoration: "none" }}>{i}</a>)}
            </div>
          </div>
          <div>
            <p style={{ font: "var(--body-sm)", color: "var(--text-body)", margin: "0 0 16px", maxWidth: 340 }}>
              Get the latest updates about T&amp;L Nails, specials, discounts and news.</p>
            <div style={{ display: "flex" }}>
              <Field placeholder="Enter email address" />
              <Button variant="primary" size="md">Subscribe</Button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 26,
          marginTop: 26, borderTop: "1px solid rgba(58,42,46,.18)" }}>
          <div style={{ display: "flex", gap: 24, font: "600 11px/1 var(--font-sans)", letterSpacing: "var(--track-nav)",
            textTransform: "uppercase", color: "var(--text-accent)" }}>
            {["Instagram", "Facebook", "Yelp"].map(i => <a key={i} href="#" style={{ color: "inherit", textDecoration: "none" }}>{i}</a>)}
          </div>
          <div style={{ display: "flex", gap: 28, font: "400 12px/1 var(--font-sans)", color: "var(--text-quiet)" }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
            <span style={{ opacity: .75 }}>© 2026 T&amp;L Nails</span>
          </div>
        </div>
      </PetalField>
    </>
  );
}
