# T&L Nails — Design System

The visual and verbal system behind the 2026 redesign of **T&L Nails**, a two-location nail
salon in Tampa, Florida, in business since 2003 (Kennedy Boulevard / Hyde Park, and Davis
Islands). The brand's job is to make an everyday neighbourhood service feel unhurried and
expensive without becoming cold: warm blush field, sharp editorial serif, zero rounded
corners, and a faint trail of falling lotus petals that runs the whole length of every page.

## Sources

| Source | What it is |
| --- | --- |
| `TL Nails Site.dc.html` (this project) | The ground-truth build: five pages (Home, About, Menu, Service PDP, Locations), each at 1440px desktop and 390px mobile. Every token in this system was read out of that file. |
| `TL Nails Homepage Directions.dc.html` | Archive of the four homepage directions explored before direction 2a was chosen. Useful as rejected-alternatives context; not the system of record. |
| tlnailstampa.com | The live legacy site. Source of business facts (addresses, hours, phone numbers, service list) and of the original voice, which the redesign kept. |

There is **no logo file**. The site sets the wordmark in Cormorant Garamond 700, uppercase,
`.16em` tracking. Anywhere a mark belongs, set the name in type — do not draw one. If the
salon has a real mark, drop it in `assets/` and update the Wordmark component.

---

## Content fundamentals

**Voice.** Warm, plainspoken, a little playful. It sounds like the owner talking, not a spa
brochure. Never clinical, never luxury-parody ("indulge in an oasis of tranquility" is
exactly wrong).

**Person.** First-person plural for the salon, second person for the guest: "**We're**
constantly restocking the newest polishes" / "Tell us what **you're** after."

**Casing.** Sentence case for every headline and button label — headlines are set in a serif
at large sizes and never shout. ALL CAPS is reserved for the small stuff: eyebrows, nav,
buttons, labels, always with wide tracking (`.14em`–`.3em`) and 9–12px size. One deliberate
exception: the "OUR LOCATIONS" contact-band heading is uppercase serif at `.09em`.

**Headlines** are short, human, and often a little wry. Real examples:
"Let's add some *color* to your life" · "More than a manicure" · "First-rate services" ·
"Treat yo' self — you've earned it" · "Fresh off the table" · "Twenty-two years of *helping
Tampa glow*". One word per headline is often italicised in mauve for emphasis — that italic
is the brand's only text ornament.

**Body copy** runs 1–2 sentences, concrete, benefit-first, and usually ends on a warm note:
"Warm towels, a citrus scrub, and a massage worth falling asleep to. Our most-loved 50
minutes." Service descriptions state what you get, not adjectives about how you'll feel.

**Numbers earn their place.** 22 years · 4.9 from 500+ reviews · 2 locations · prices always
"from \$25" on category rows, exact ("\$55") on a specific service. Durations in plain
minutes ("50 minutes").

**Never:** emoji, exclamation-mark stacking, urgency copy ("Book now before spots fill!"),
invented awards, or stock-spa vocabulary (oasis, sanctuary, journey, pamper-scape). "Get
pampered" is fine — it's how the salon actually talks.

**Punctuation.** Middle dot `·` separates facts on one line (address · neighbourhood ·
hours). En dash for ranges (Mon–Thu 10–7). The four-point star `✦` is the only decorative
glyph, used between credential items on the plum band.

---

## Visual foundations

**Palette.** A single warm blush family, one deep plum, one gold. `#FBF4F1` is the page;
`#3A2A2E` is the ink; `#A76A78` mauve is the primary action colour; `#5E3A44` plum is the
weight; `#C9899A` rose draws the 1px underline on quiet links; `#BE9A46` gold appears only
on review stars. Two background colours per page maximum — the blush field and one dark
band. Nothing is neutral grey; even the "white" bezel is true white against warm surroundings.

**Type.** Two families, no exceptions. Cormorant Garamond carries every display size
(98px hero down to 21px pull-quotes) at weight 500/600, letter-spacing `-.015em` at hero
size, normal below. Manrope carries everything else: 17/15/14/13px body at 1.6–1.7 leading,
and all uppercase micro-type. The pairing is the brand — a light, high-contrast serif over a
low-contrast geometric sans.

**Radius: zero.** Every card, button, field, chip, and image frame is a hard rectangle. The
only round things on the site are map pins and review stars. This is the fastest way to
break the system — do not add `border-radius`.

**Borders and rules.** Hairlines at `rgba(58,42,46,.16)` do the structural work: they
separate the four value columns, underline every service row, and cap the header. Fields get
a slightly stronger `.22`. Framed imagery (the location maps) gets a 9px solid white bezel
and a heavy drop shadow, and overlaps the band above it by ~110px.

**Backgrounds.** Flat blush fields, two plum gradients (`140deg` for full-width bands,
`150deg` for the feature panel), and one warm footer wash (`165deg`). Photography is
full-bleed inside hard rectangles; until real photos land, placeholders are a diagonal hatch
over a blush gradient — never a grey box, never an icon-in-a-box.

**The petal field.** The signature. A vertically seamless SVG tile of curled lotus petals —
random sizes from flecks to ~270px, random rotation, ~80% outlined with a fine fold line and
~20% filled — scattered around a sine path that enters at the upper-left of the hero and
wanders right as it falls. Pink `#E8629B` at ~10% on light surfaces, blush `#FFC2D8` on plum
and ink bands so the trail never dead-ends. It is always a *background layer* (stacked above
a section's own gradient, below its content), never an element in flow.

**Motion.** Restrained and slow. Colour and background hovers `.25s`; buttons lift 2px in
`.2s`; images scale to 1.05 over `.6s`. On scroll, sections fade up 30px over `.85s`
`cubic-bezier(.22,.61,.36,1)` with a 90ms stagger between siblings; framed hero imagery
drifts ±16–22px against the scroll inside its frame. One marquee only — the Instagram strip,
52s linear, paused on hover, built from two identical groups so the loop is seamless. No
bounce, no spring, no scrolling text banners.

**Hover / press.** Solid buttons darken mauve → plum and lift 2px. Ghost buttons take a
`#F6E5E9` tint. Quiet links carry a 1px rose underline at rest and go from 55% to 100% ink on
hover. Nav items use opacity, not colour. Nothing scales on press.

**Layout.** Desktop 1440 / mobile 390. Gutters 56px and 20px. Section rhythm is generous:
112–136px of vertical padding desktop, 44–52px mobile. Grids sit nearly flush (5px gutters)
so images read as one mosaic. Mobile adds a sticky action bar (Book + Menu) that reveals once
the hero scrolls out, and a horizontal service-chip rail inside the hero.

**Accessibility.** Every interactive element holds a 44px minimum height independent of its
padding and font metrics. Body copy never goes below 13px; slide/print minimums don't apply
here but 12px is the floor for legal/footer type.

---

## Iconography

The source site is nearly icon-free by design — structure and type do the work. What exists:

- **Four 1px line icons** in the "More than a manicure" value columns, on a 24px grid with
  `stroke-width:1.1`, no fill, drawn to match the hairline rules: a precision brush
  (`detail`), two figures (`people`), three overlapping swatch circles (`swatches`), and a
  two-size sparkle (`sparkle`). They live in `assets/icons/` and are the canonical style.
- **`★★★★★`** unicode stars in gold for review ratings — not an icon font.
- **`✦`** four-point star as a copy separator on the credential band.
- **A three-line hamburger** on mobile, drawn as three 1px `<span>` rules (20/20/13px wide).

There is **no icon font and no icon library** in the source. If you need a glyph the four
above don't cover, use **Lucide** (CDN, 24px grid, 1.5px stroke) and set
`stroke-width="1.1"` so it matches — that is a **substitution, flagged here**, not something
the brand ships. Never use emoji.

---

## Index

- `styles.css` — the single entry point; `@import`s everything below.
- `tokens/` — `fonts`, `colors`, `typography`, `spacing`, `effects`, `motion`, `texture`.
- `assets/textures/` — the four petal-field tiles (desktop/mobile × pink/blush).
- `assets/icons/` — the four line icons.
- `guidelines/foundations.html` — **the full reference**: every colour, type step, spacing value,
  effect and motion token in one browsable page. Start here.
- `guidelines/` — plus focused specimen cards (Type, Colors, Spacing, Brand).
- `components/core/` — Button, TextLink, Chip, Field, Eyebrow.
- `components/content/` — SectionHeading, ServiceRow, StatBlock, Quote, ValueColumn, PriceTile.
- `components/layout/` — SiteHeader, PetalField, FramedImage, PlumBand, StickyActionBar.
- `ui_kits/website/` — the five site pages: the live build, plus React reference implementations.
- `SKILL.md` — lets this folder be used as an Agent Skill outside this tool.

### Intentional additions

- **PetalField** and **FramedImage** are wrappers around techniques the site applies inline
  (background-layer texture; overflow-hidden frame + parallax child). They exist so the
  technique survives being reused; both mirror the source exactly.
