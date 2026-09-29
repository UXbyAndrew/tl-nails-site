One of the four "More than a manicure" value columns: outlined 56px icon square, serif title, muted paragraph.

```jsx
<ValueColumn icon="detail" title="Detail-obsessed">Attentive, meticulous, fastidious — our techs make sure it comes out just right.</ValueColumn>
```

Always four across on desktop, separated by hairlines (`divider={false}` on the last). On mobile they collapse to a hairline list with no icons.

Icons are inlined as SVG, not `<img>` — they are drawn with `stroke="currentColor"` so they
take the mauve from the wrapper. Referencing the same files through an `<img>` tag renders
them black, because `currentColor` cannot cross into an image's own document.
