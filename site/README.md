# T&L Nails — website

Static build of the Claude Design handoff (`project/TL Nails Site.dc.html`). No build step and no dependencies. Open `index.html` or serve the folder (`npx http-server site`).

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Menu | `menu.html` |
| Service pages (one template for every service) | `services/?s=<service id>` → `services/index.html` |
| Locations | `locations.html` |

- `css/site.css`: tokens and components. Content, photos included, stays inside a centered 1440px frame (`--frame`, `--gutter`) at every width; only backgrounds run full width. The desktop layout (the 1440 comps) applies from 1024px up. Below 1024 the site uses the mobile layout (the 390 comps); from 768 to 1023 that layout gets the 56px gutter and two-column grids.
- `js/site.js`: petal-trail alignment, reveal on scroll, hero image drift, the mobile sticky bar (hidden over the hero), the nav drawer, menu scroll-spy, the add-on price total, and the forms.
- `js/catalog.js`: fills the service pages, the menu, and the homepage "from $" prices and featured service from the owner's intake answers. It reads the public read-only feed `site_catalog()` in the Supabase project `tl-nails`. Answers she saves show up on the next page load. Any field she hasn't answered shows "Still waiting for details". Services she marks "No, remove it" disappear from the menu. `services/citrus-scrub-pedicure.html` now just redirects to the template.
- `assets/petals/`: the four petal-trail tiles, extracted from the design.
- `assets/photos/`: the current photos, from the Claude Design export. They're placeholders: they came from the salon's current site and Yelp, so ask the client for the originals.

The header, drawer, contact band, map and footer are the same on every page. If you edit one, edit all five.

## Before launch

- **Search engines**: service pages and the menu load their content in the browser. Before launch, add a deploy step that saves a finished copy of each page from `site_catalog()`, so Google can index the full text.

- **Photos**: replace the files in `assets/photos/` with the client's originals. The striped placeholders (team portraits, interiors, service gallery, menu images) still need photography.
- **Forms** (booking and newsletter): put your form endpoint (Formspree, Netlify Forms, booking API…) in `data-endpoint=""` on each `<form>`. Without an endpoint, the form opens the visitor's email app, addressed to info@tlnailstampa.com.
- **Links still set to `#`** (search for `data-todo`): Facebook, Yelp, Terms of Service, Privacy Policy. Gift Cards currently links to the phone number.
- **Davis Islands hours**: the design listed these in conflicting ways. The site uses Mon closed, Tue–Thu 10–7, Sat 9–6, Sun 11–5, which leaves Friday unlisted. Please confirm.
- **Menu names and prices** were partly inferred during design. Please confirm them.
- **Logo**: the wordmark is set in Cormorant Garamond until a logo file is provided.
