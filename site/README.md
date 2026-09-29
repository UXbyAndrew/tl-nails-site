# T&L Nails — website

Static build of the Claude Design handoff (`project/TL Nails Site.dc.html`). No build step and no dependencies. Open `index.html` or serve the folder (`npx http-server site`).

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Menu | `menu.html` |
| Service page template (Citrus Scrub Pedicure) | `services/citrus-scrub-pedicure.html` |
| Locations | `locations.html` |

- `css/site.css`: tokens and components. The base styles match the 1440px comps, the `max-width: 767px` block matches the 390px comps, and the 768–1180px range is an interpolated tablet layout.
- `js/site.js`: petal-trail alignment, reveal on scroll, hero image drift, the mobile sticky bar (hidden over the hero), the nav drawer, menu scroll-spy, the add-on price total, and the forms.
- `assets/petals/`: the four petal-trail tiles, extracted from the design.

The header, drawer, contact band, map and footer are the same on every page. If you edit one, edit all five.

## Before launch

- **Photos** are hotlinked from tlnailstampa.com, the same way the design did. Replace them with the original files. Striped placeholders (team portraits, interiors, service gallery, menu images) still need photography.
- **Forms** (booking and newsletter): put your form endpoint (Formspree, Netlify Forms, booking API…) in `data-endpoint=""` on each `<form>`. Without an endpoint, the form opens the visitor's email app, addressed to info@tlnailstampa.com.
- **Links still set to `#`** (search for `data-todo`): Facebook, Yelp, Terms of Service, Privacy Policy. Gift Cards currently links to the phone number.
- **Davis Islands hours**: the design listed these in conflicting ways. The site uses Mon closed, Tue–Thu 10–7, Sat 9–6, Sun 11–5, which leaves Friday unlisted. Please confirm.
- **Menu names and prices** were partly inferred during design. Please confirm them.
- **Logo**: the wordmark is set in Cormorant Garamond until a logo file is provided.
