import React from "react";
import { SiteHeader } from "../../components/layout/SiteHeader.jsx";
import { PetalField } from "../../components/layout/PetalField.jsx";
import { PlumBand } from "../../components/layout/PlumBand.jsx";
import { FramedImage } from "../../components/layout/FramedImage.jsx";
import { Button } from "../../components/core/Button.jsx";
import { TextLink } from "../../components/core/TextLink.jsx";
import { Eyebrow } from "../../components/core/Eyebrow.jsx";
import { SectionHeading } from "../../components/content/SectionHeading.jsx";
import { StatBlock } from "../../components/content/StatBlock.jsx";
import { Quote } from "../../components/content/Quote.jsx";
import { ValueColumn } from "../../components/content/ValueColumn.jsx";
import { SiteFooter } from "./SiteFooter.jsx";

const SPOTS = [
  { name: "Kennedy Boulevard", hood: "Hyde Park", addr: "1506 W Kennedy Blvd, Suite B · Tampa, FL 33606",
    phone: "(813) 304-0330", hours: [["Mon–Thurs", "10am – 7pm"], ["Fri", "9am – 7pm"], ["Sat", "9am – 6pm"], ["Sun", "11am – 5pm"]] },
  { name: "Davis Islands", hood: "Davis Islands", addr: "304 E Davis Blvd #D · Tampa, FL 33606",
    phone: "(813) 259-9920", hours: [["Mon", "Closed"], ["Tues–Thurs", "10am – 7pm"], ["Sat", "9am – 6pm"], ["Sun", "11am – 5pm"]] }
];

export function LocationsScreen({ onNavigate = () => {} }) {
  const [active, setActive] = React.useState(0);
  return (
    <div style={{ background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <SiteHeader active="Locations" />
      <PetalField under="var(--gradient-hero)" offset={86} style={{ padding: "80px 56px 66px" }}>
        <div style={{ marginBottom: 22 }}><Eyebrow>Find us</Eyebrow></div>
        <h1 style={{ font: "var(--display-1)", fontSize: 76, margin: "0 0 20px" }}>
          Two Tampa <span style={{ fontStyle: "italic", color: "var(--text-accent)" }}>rooms</span></h1>
        <p style={{ font: "var(--body-lg)", color: "var(--text-body)", maxWidth: 520, margin: 0 }}>
          Same techs, same standard, five minutes apart. Walk in or book ahead — either works.</p>
      </PetalField>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, padding: "96px 56px 120px" }}>
        {SPOTS.map((s, i) => (
          <div key={s.name} onMouseEnter={() => setActive(i)}
            style={{ background: active === i ? "var(--surface-card)" : "transparent",
              border: "1px solid var(--rule-hairline)", transition: "background var(--dur-tint)" }}>
            <FramedImage caption="storefront" height={260} gradient={i ? "linear-gradient(200deg,#EFD8DC,#D9AFBB)" : undefined} />
            <div style={{ padding: "34px 36px" }}>
              <div style={{ marginBottom: 12 }}><Eyebrow>{s.hood}</Eyebrow></div>
              <h2 style={{ font: "var(--display-2)", fontSize: 40, margin: "0 0 16px" }}>{s.name}</h2>
              <p style={{ font: "var(--body-sm)", color: "var(--text-muted)", margin: "0 0 22px" }}>{s.addr}</p>
              <div style={{ borderTop: "1px solid var(--rule-hairline)", paddingTop: 18, marginBottom: 22 }}>
                {s.hours.map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between",
                    font: "var(--body-sm)", color: "var(--text-body)", padding: "6px 0" }}>
                    <span>{d}</span><span style={{ color: "var(--text-muted)" }}>{h}</span></div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <TextLink tone="accent" size={12}>{s.phone}</TextLink>
                <TextLink>Directions</TextLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PlumBand style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <div>
          <div style={{ marginBottom: 18 }}><Eyebrow tone="blush">Not sure which?</Eyebrow></div>
          <h2 style={{ font: "var(--display-1)", margin: 0, maxWidth: 620 }}>Whichever's closer. We'll see you there.</h2>
        </div>
        <Button variant="light" onClick={() => onNavigate("home")}>Book an appointment</Button>
      </PlumBand>
      <SiteFooter />
    </div>
  );
}
