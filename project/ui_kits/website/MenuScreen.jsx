import React from "react";
import { SiteHeader } from "../../components/layout/SiteHeader.jsx";
import { PetalField } from "../../components/layout/PetalField.jsx";
import { PlumBand } from "../../components/layout/PlumBand.jsx";
import { FramedImage } from "../../components/layout/FramedImage.jsx";
import { Button } from "../../components/core/Button.jsx";
import { TextLink } from "../../components/core/TextLink.jsx";
import { Chip } from "../../components/core/Chip.jsx";
import { Eyebrow } from "../../components/core/Eyebrow.jsx";
import { SectionHeading } from "../../components/content/SectionHeading.jsx";
import { ServiceRow } from "../../components/content/ServiceRow.jsx";
import { StatBlock } from "../../components/content/StatBlock.jsx";
import { Quote } from "../../components/content/Quote.jsx";
import { ValueColumn } from "../../components/content/ValueColumn.jsx";
import { SiteFooter } from "./SiteFooter.jsx";

const MENU = [
  { cat: "Manicures", rows: [
    ["Classic Manicure", "$25", "20 min", "Shape, cuticles, buff, and the polish of your choice."],
    ["Gel Manicure", "$40", "40 min", "Two weeks of shine, cured and sealed."],
    ["French Manicure", "$35", "35 min", "The tip done by hand, not with a sticker."]] },
  { cat: "Pedicures", rows: [
    ["Classic Pedicure", "$40", "35 min", "Soak, shape, callus care, and a short massage."],
    ["Citrus Scrub Pedicure", "$55", "50 min", "Warm towels, a citrus scrub, and a massage worth falling asleep to."],
    ["CBD & Mint Pedicure", "$65", "55 min", "Cooling mint, CBD balm, and an extended leg massage."]] },
  { cat: "Acrylics & Extensions", rows: [
    ["Full Set", "$45", "60 min", "Any length, any shape, any design you bring us."],
    ["Fill", "$35", "45 min", "Every two to three weeks keeps a set looking new."]] },
  { cat: "Lashes & Waxing", rows: [
    ["Classic Lash Set", "$60", "90 min", "One extension per natural lash."],
    ["Lash Fill", "$40", "60 min", "Every two to three weeks."],
    ["Brow Wax", "$12", "15 min", "Shaped to your face, not to a stencil."]] }
];
const ADDONS = [["Nail art, per nail", "$5"], ["Gel removal", "$10"], ["Paraffin dip", "$12"], ["Extended massage, 10 min", "$15"]];

export function MenuScreen({ onNavigate = () => {} }) {
  const [active, setActive] = React.useState("Manicures");
  return (
    <div style={{ background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <SiteHeader active="Menu" />
      <PetalField under="var(--gradient-hero)" offset={86} style={{ padding: "76px 56px 60px" }}>
        <div style={{ marginBottom: 22 }}><Eyebrow>The full menu</Eyebrow></div>
        <h1 style={{ font: "var(--display-1)", fontSize: 76, margin: "0 0 20px", maxWidth: 780 }}>
          Everything we can <span style={{ fontStyle: "italic", color: "var(--text-accent)" }}>do for you</span></h1>
        <p style={{ font: "var(--body-lg)", color: "var(--text-body)", maxWidth: 520, margin: 0 }}>
          Prices are starting points — length, shape, and art change things. Ask when you book and we'll give you the real number.</p>
      </PetalField>

      <div style={{ position: "sticky", top: 0, zIndex: 5, display: "flex", gap: 0, padding: "0 56px",
        background: "rgba(251,244,241,.97)", borderBottom: "1px solid var(--rule-hairline)" }}>
        {MENU.map(m => (
          <a key={m.cat} href="#" onClick={e => { e.preventDefault(); setActive(m.cat); }}
            style={{ padding: "22px 26px", font: "600 11px/1 var(--font-sans)", letterSpacing: ".18em",
              textTransform: "uppercase", textDecoration: "none",
              color: active === m.cat ? "var(--text-strong)" : "#8a7178",
              borderBottom: active === m.cat ? "1px solid var(--mauve-500)" : "1px solid transparent" }}>{m.cat}</a>
        ))}
      </div>

      <div style={{ padding: "96px 56px 40px" }}>
        {MENU.map(m => (
          <div key={m.cat} style={{ marginBottom: 84 }}>
            <div style={{ marginBottom: 30 }}><SectionHeading title={m.cat} size={46} /></div>
            <div style={{ borderTop: "1px solid var(--rule-hairline)" }}>
              {m.rows.map(([n, p, d, desc]) => (
                <ServiceRow key={n} name={n} price={p} duration={d} description={desc} href="#service" />
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginBottom: 30 }}><SectionHeading eyebrow="Make it yours" title="Add-ons" size={46} /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--rule-hairline)" }}>
          {ADDONS.map(([n, p]) => (
            <div key={n} style={{ padding: "26px 30px 26px 0", borderBottom: "1px solid var(--rule-hairline)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600 }}>{n}</div>
              <div style={{ font: "var(--price)", color: "var(--text-accent)", marginTop: 8 }}>{p}</div>
            </div>
          ))}
        </div>
      </div>

      <PlumBand style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <h2 style={{ font: "var(--display-1)", margin: 0, maxWidth: 620 }}>Know what you want? Let's get you in the chair.</h2>
        <Button variant="light" onClick={() => onNavigate("home")}>Book an appointment</Button>
      </PlumBand>
      <SiteFooter />
    </div>
  );
}
