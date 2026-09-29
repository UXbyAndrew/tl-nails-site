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

const INCLUDED = ["Warm towel soak and nail prep", "Cuticle care and shaping", "Citrus sugar scrub to the knee",
  "Hot towel wrap", "Ten-minute massage", "Polish of your choice"];
const STEPS = [["Soak", "Ten minutes in warm water with citrus oil while we talk through the shape you want."],
  ["Scrub", "A sugar scrub to the knee, then a hot towel wrap and a proper massage."],
  ["Finish", "Shape, cuticles, and your polish — cured, sealed, and checked in daylight."]];

export function ServiceScreen({ onNavigate = () => {} }) {
  const [shot, setShot] = React.useState(0);
  const gradients = ["linear-gradient(160deg,#F3D6DD,#E3BCC6)", "linear-gradient(200deg,#EFD8DC,#D9AFBB)", "linear-gradient(150deg,#F5DCE1,#EAC4CE)"];
  return (
    <div style={{ background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <SiteHeader active="Menu" />
      <div style={{ padding: "22px 56px", font: "500 11px/1 var(--font-sans)", letterSpacing: ".14em",
        textTransform: "uppercase", color: "var(--text-quiet)" }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate("menu"); }} style={{ color: "inherit", textDecoration: "none" }}>Menu</a>
        {" · Pedicures · "}<span style={{ color: "var(--text-accent)" }}>Citrus Scrub</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "52% 48%", gap: 5, padding: "0 56px 120px" }}>
        <div style={{ display: "grid", gap: 5 }}>
          <FramedImage caption="citrus scrub · 4:5" height={560} gradient={gradients[shot]} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
            {gradients.map((g, i) => (
              <div key={i} onClick={() => setShot(i)} style={{ cursor: "pointer", outline: shot === i ? "2px solid var(--mauve-500)" : "none" }}>
                <FramedImage height={120} gradient={g} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 0 0 48px", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>Most requested</Eyebrow></div>
          <h1 style={{ font: "var(--display-1)", fontSize: 62, margin: "0 0 20px" }}>The Citrus Scrub Pedicure</h1>
          <div style={{ display: "flex", gap: 28, alignItems: "baseline", marginBottom: 26 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 42, color: "var(--plum-700)" }}>$55</span>
            <span style={{ font: "600 11px/1 var(--font-sans)", letterSpacing: ".18em", textTransform: "uppercase",
              color: "var(--text-accent)" }}>50 minutes</span>
          </div>
          <p style={{ font: "var(--body-lg)", color: "var(--text-body)", margin: "0 0 32px" }}>
            The one people book again before they've left the chair. Warm towels, a citrus sugar scrub to the knee,
            and a massage worth falling asleep to — then the shape and polish you came in for.</p>
          <div style={{ borderTop: "1px solid var(--rule-hairline)", paddingTop: 26, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}><Eyebrow>What's included</Eyebrow></div>
            <div style={{ display: "grid", gap: 10 }}>
              {INCLUDED.map(i => (
                <div key={i} style={{ display: "flex", gap: 12, font: "var(--body-sm)", color: "var(--text-body)" }}>
                  <span style={{ color: "var(--rose-400)" }}>✦</span>{i}</div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            {["Kennedy Blvd", "Davis Islands"].map((l, i) => <Chip key={l} selected={i === 0}>{l}</Chip>)}
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Button variant="primary">Book this service</Button>
            <TextLink tone="accent" size={12}>(813) 304-0330</TextLink>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 56px 124px" }}>
        <div style={{ marginBottom: 48 }}><SectionHeading eyebrow="How it goes" title="Fifty minutes, start to finish" /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--rule-hairline)" }}>
          {STEPS.map(([t, d], i) => (
            <div key={t} style={{ padding: "34px 34px 0 0", borderRight: i < 2 ? "1px solid var(--rule-hairline)" : "none",
              paddingLeft: i ? 34 : 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--rose-400)", marginBottom: 14 }}>0{i + 1}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, marginBottom: 10 }}>{t}</div>
              <p style={{ font: "var(--body-sm)", color: "var(--text-muted)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <PlumBand style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <Quote tone="plain" attribution="Renee K. · Davis Islands">
          "Fifty minutes and I forgot I had a job. I've booked it every three weeks since."</Quote>
        <Quote tone="plain" attribution="Marisol P. · Kennedy Blvd">
          "The scrub is the part everyone talks about. The massage is the part I'm actually there for."</Quote>
      </PlumBand>
      <SiteFooter />
    </div>
  );
}
