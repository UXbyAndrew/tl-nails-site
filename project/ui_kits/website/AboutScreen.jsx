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

const CREDS = ["Est. 2003", "Davis Islands", "Kennedy Boulevard", "500+ five-star reviews", "Walk-ins welcome"];
const PROMISES = [["Tools that are actually clean", "Every implement is autoclaved between clients. Files and buffers are single-use, no exceptions."],
  ["Time to do it right", "We don't overbook. Your appointment gets the minutes it needs, not the minutes that fit the schedule."],
  ["Honest pricing", "The price we quote is the price you pay. Add-ons are offered, never assumed."]];

export function AboutScreen({ onNavigate = () => {} }) {
  return (
    <div style={{ background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <SiteHeader active="About" />
      <PetalField under="var(--gradient-hero)" offset={86}
        style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: 40, padding: "80px 56px 70px", alignItems: "center" }}>
        <div>
          <div style={{ marginBottom: 22 }}><Eyebrow>Since 2003</Eyebrow></div>
          <h1 style={{ font: "var(--display-1)", fontSize: 78, margin: "0 0 22px" }}>
            Twenty-two years of <span style={{ fontStyle: "italic", color: "var(--text-accent)" }}>helping Tampa glow</span></h1>
          <p style={{ font: "var(--body-lg)", color: "var(--text-body)", maxWidth: 440, margin: 0 }}>
            Just down the street from Downtown Tampa and JC Newman, one of the last cigar rollers in the area —
            specializing in doing everything we can to help you find your glow. Give us an hour or a lunch hour to
            meet us, well, we're ready.</p>
        </div>
        <FramedImage caption="the team · 4:3" height={430} drift={18} />
      </PetalField>

      <PlumBand style={{ padding: "22px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center",
          gap: "10px 38px", padding: "0 56px", fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 21, color: "var(--blush-150)" }}>
          {CREDS.map((c, i) => (
            <React.Fragment key={c}>
              {i ? <span style={{ color: "var(--rose-400)", fontStyle: "normal", fontSize: 11, opacity: .75 }}>✦</span> : null}
              <span>{c}</span>
            </React.Fragment>
          ))}
        </div>
      </PlumBand>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, padding: "124px 56px" }}>
        <div>
          <div style={{ marginBottom: 26 }}><SectionHeading eyebrow="Our story" title="From one small Davis Islands shop" /></div>
          <p style={{ font: "var(--body-md)", color: "var(--text-body)", margin: "0 0 18px" }}>
            We opened on Davis Boulevard in 2003 with a handful of chairs and a simple idea: take the time to do it
            right, and treat everyone who walks in like a regular. Twenty-two years later, a lot of them are.</p>
          <p style={{ font: "var(--body-md)", color: "var(--text-body)", margin: "0 0 34px" }}>
            In 2012 we opened our Kennedy Boulevard location in Hyde Park — same techs, same standard. A little more
            room to breathe. Some of our clients have been coming for eighteen years and still bring us photos of
            their vacations.</p>
          <div style={{ display: "flex", gap: 40, borderTop: "1px solid var(--rule-hairline)", paddingTop: 26 }}>
            <StatBlock value="2003" label="year one" />
            <StatBlock value="2012" label="second shop" />
            <StatBlock value="16" label="techs on staff" />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          <FramedImage caption="tech portrait" height={280} />
          <FramedImage caption="tech portrait" height={280} gradient="linear-gradient(200deg,#EFD8DC,#D9AFBB)" />
          <FramedImage caption="the room" height={200} gradient="linear-gradient(150deg,#F5DCE1,#EAC4CE)" />
          <FramedImage caption="detail" height={200} />
        </div>
      </div>

      <div style={{ padding: "0 56px 124px" }}>
        <div style={{ marginBottom: 56 }}><SectionHeading align="center" eyebrow="The standard" title="What you can count on" /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--rule-hairline)" }}>
          {PROMISES.map(([t, d], i) => (
            <div key={t} style={{ padding: "34px 34px 0 0", paddingLeft: i ? 34 : 0,
              borderRight: i < 2 ? "1px solid var(--rule-hairline)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, marginBottom: 12 }}>{t}</div>
              <p style={{ font: "var(--body-sm)", color: "var(--text-muted)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <PlumBand style={{ textAlign: "center", padding: "112px 160px" }}>
        <Quote tone="plain" stars={false} attribution="Dana R. · client since 2009">
          <span style={{ fontSize: 34, lineHeight: 1.3 }}>"The staff is welcoming and friendly and make an effort to
          remember their clients. That kind of service makes a lasting impression."</span>
        </Quote>
        <div style={{ marginTop: 34 }}><Button variant="light" onClick={() => onNavigate("home")}>Book an appointment</Button></div>
      </PlumBand>
      <SiteFooter />
    </div>
  );
}
