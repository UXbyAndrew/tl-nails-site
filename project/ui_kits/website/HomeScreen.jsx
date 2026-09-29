import React from "react";
import { SiteHeader, Wordmark } from "../../components/layout/SiteHeader.jsx";
import { PetalField } from "../../components/layout/PetalField.jsx";
import { PlumBand } from "../../components/layout/PlumBand.jsx";
import { FramedImage } from "../../components/layout/FramedImage.jsx";
import { Button } from "../../components/core/Button.jsx";
import { TextLink } from "../../components/core/TextLink.jsx";
import { Chip } from "../../components/core/Chip.jsx";
import { Field } from "../../components/core/Field.jsx";
import { Eyebrow } from "../../components/core/Eyebrow.jsx";
import { SectionHeading } from "../../components/content/SectionHeading.jsx";
import { ServiceRow } from "../../components/content/ServiceRow.jsx";
import { StatBlock } from "../../components/content/StatBlock.jsx";
import { Quote } from "../../components/content/Quote.jsx";
import { ValueColumn } from "../../components/content/ValueColumn.jsx";
import { PriceTile } from "../../components/content/PriceTile.jsx";
import { SiteFooter } from "./SiteFooter.jsx";

const SERVICES = [
  ["Manicures", "from $25", "Classic, gel, and French — shaped and finished properly."],
  ["Pedicures", "from $40", "Citrus scrub, CBD & mint, or the classic soak."],
  ["Acrylics", "from $45", "Full sets, fills, and any design you bring us."],
  ["Gel & Dip", "from $35", "Long-wearing color in every shade we stock."],
  ["Lash Extensions", "from $60", "Classic and hybrid sets, plus fills."],
  ["Waxing", "from $12", "Brows, lip, and full-body — quick and gentle."]
];

export function HomeScreen({ onNavigate = () => {} }) {
  const [service, setService] = React.useState("Manicure");
  return (
    <div style={{ background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <SiteHeader active="Home" />

      <PetalField under="var(--gradient-hero)" offset={86}
        style={{ display: "grid", gridTemplateColumns: "44% 56%", minHeight: 790 }}>
        <div style={{ padding: "76px 54px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ marginBottom: 28 }}><Eyebrow>Tampa's nail lounge — est. 2003</Eyebrow></div>
          <h1 style={{ font: "var(--display-hero)", letterSpacing: "var(--track-display)", margin: "0 0 28px" }}>
            Let's add some <span style={{ fontStyle: "italic", color: "var(--text-accent)" }}>color</span> to your life</h1>
          <p style={{ font: "var(--body-lg)", color: "var(--text-body)", maxWidth: 400, margin: "0 0 38px" }}>
            Get pampered and spark a little joy with a fresh coat of polish. Detail-obsessed techs, endless colors, 22 years of Tampa's trust.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 26, marginBottom: 44 }}>
            <Button variant="primary">Book an appointment</Button>
            <TextLink size={12} onClick={() => onNavigate("menu")}>The menu</TextLink>
          </div>
          <div style={{ display: "flex", gap: 34, borderTop: "1px solid var(--rule-hairline)", paddingTop: 24 }}>
            <StatBlock value="22" label="years in tampa" />
            <StatBlock value="4.9" label="500+ reviews" />
            <StatBlock value="2" label="locations" />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1.25fr 1fr 1fr", gap: 5 }}>
          <div style={{ gridColumn: 1, gridRow: "1 / span 2" }}><FramedImage caption="hero · hands 3:4" height="100%" drift={22} /></div>
          <div style={{ gridColumn: 2, gridRow: 1 }}><FramedImage caption="salon interior" height="100%" drift={-16} gradient="linear-gradient(200deg,#EFD8DC,#D9AFBB)" /></div>
          <div style={{ gridColumn: 2, gridRow: "2 / span 2" }}><FramedImage caption="nail art detail" height="100%" drift={18} gradient="linear-gradient(150deg,#F5DCE1,#EAC4CE)" /></div>
          <div style={{ gridColumn: 1, gridRow: 3 }}>
            <Quote attribution="Lynn M. · Kennedy Blvd">"It truly is a hidden gem — the vibe is on point."</Quote>
          </div>
        </div>
      </PetalField>

      <div style={{ padding: "136px 56px 128px" }}>
        <div style={{ marginBottom: 74 }}>
          <SectionHeading align="center" eyebrow="What we're about" title="More than a manicure" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          <ValueColumn icon="detail" title="Detail-obsessed">Attentive, meticulous, fastidious — whatever you call it, our techs make sure it comes out just right.</ValueColumn>
          <ValueColumn icon="people" title="Warm &amp; friendly">Years of experience, warm personalities, and plenty of funny stories. Come meet the team.</ValueColumn>
          <ValueColumn icon="swatches" title="Every color">We're constantly restocking the newest polishes, so today's trends are ready and waiting.</ValueColumn>
          <ValueColumn icon="sparkle" title="Immaculate" divider={false}>Cleanliness and calm are our top priorities. Step in and let go of every worry.</ValueColumn>
        </div>
      </div>

      <div style={{ padding: "0 56px 132px" }}>
        <div style={{ marginBottom: 56 }}>
          <SectionHeading eyebrow="The menu" title="First-rate services" action="View full menu" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "minmax(0,1fr)",
          borderTop: "1px solid var(--rule-hairline)" }}>
          <div style={{ gridColumn: "1 / span 2", gridRow: "1 / span 3" }}>
            <PriceTile title="The Citrus Scrub Pedicure" price="$55"
              description="Warm towels, a citrus scrub, and a massage worth falling asleep to. Our most-loved 50 minutes." />
          </div>
          {SERVICES.map(([n, p, d]) => (
            <div key={n} style={{ padding: "32px 30px", borderBottom: "1px solid var(--rule-hairline)",
              borderLeft: "1px solid var(--rule-hairline)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 600 }}>{n}</span>
                <span style={{ font: "var(--price)", letterSpacing: ".06em", color: "var(--text-accent)" }}>{p}</span>
              </div>
              <p style={{ font: "var(--body-xs)", color: "var(--text-muted)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <PlumBand style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <div style={{ marginBottom: 20 }}><Eyebrow tone="blush">Reserve your seat</Eyebrow></div>
          <h2 style={{ font: "var(--display-1)", margin: "0 0 22px" }}>Treat yo' self —<br />you've earned it</h2>
          <p style={{ font: "var(--body-lg)", opacity: .85, maxWidth: 400, margin: "0 0 30px" }}>
            Tell us what you're after and when. We'll confirm within the hour. Walk-ins always welcome, too.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid var(--rule-on-dark)", paddingTop: 24 }}>
            <span style={{ font: "600 11px/1 var(--font-sans)", letterSpacing: "var(--track-caps)",
              textTransform: "uppercase", opacity: .7 }}>Rather call?</span>
            <a href="tel:8133040330" style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#fff", textDecoration: "none" }}>(813) 304-0330</a>
          </div>
        </div>
        <div style={{ background: "var(--surface-page)", color: "var(--text-strong)", padding: 38 }}>
          <div style={{ marginBottom: 18 }}><Eyebrow>What can we do for you?</Eyebrow></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {["Manicure", "Pedicure", "Gel & Dip", "Acrylics", "Lashes", "Waxing"].map(s => (
              <Chip key={s} selected={service === s} onClick={() => setService(s)}>{s}</Chip>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <Field placeholder="Preferred date" /><Field placeholder="Time" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <Field placeholder="Kennedy Blvd" /><Field placeholder="Name" />
          </div>
          <div style={{ marginBottom: 18 }}><Field placeholder="Phone number" /></div>
          <Button variant="deep" block>Request my appointment</Button>
        </div>
      </PlumBand>

      <div style={{ padding: "128px 56px 124px" }}>
        <div style={{ marginBottom: 52 }}>
          <SectionHeading eyebrow="Find us" title="Two Tampa locations" size={50}
            action="All location details" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {[["Kennedy Boulevard", "1506 W Kennedy Blvd, Suite B", "Tampa, FL 33606 · Hyde Park", "Mon–Thu 10–7 · Fri 9–7 · Sat 9–6 · Sun 11–5", "(813) 304-0330"],
            ["Davis Islands", "304 E Davis Blvd #D", "Tampa, FL 33606 · Davis Islands", "Tue–Thu 10–7 · Sat 9–6 · Sun 11–5 · Mon closed", "(813) 259-9920"]].map(([n, a1, a2, h, ph]) => (
            <div key={n} style={{ background: "var(--surface-card)" }}>
              <FramedImage caption="storefront" height={210} />
              <div style={{ padding: "30px 32px" }}>
                <h3 style={{ font: "var(--display-4)", margin: "0 0 14px" }}>{n}</h3>
                <p style={{ font: "var(--body-sm)", color: "var(--text-muted)", margin: "0 0 18px" }}>{a1}<br />{a2}<br />{h}</p>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <TextLink tone="accent">{ph}</TextLink>
                  <TextLink>Directions</TextLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
