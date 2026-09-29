# UI kit — tlnailstampa.com

`index.html` frames the live five-page build (`TL Nails Site.dc.html`) — Home, About, Menu,
Service PDP and Locations, each at 1440px desktop and 390px mobile. That file is the source
of truth for the site itself.

The `.jsx` files beside it are the same five screens rebuilt from this system's components,
for engineers picking the design up in React:

| Screen | File |
| --- | --- |
| Home | `HomeScreen.jsx` |
| Menu | `MenuScreen.jsx` |
| Service PDP | `ServiceScreen.jsx` |
| About | `AboutScreen.jsx` |
| Locations | `LocationsScreen.jsx` |
| Shared footer + contact band | `SiteFooter.jsx` |

They are ES modules that import from `components/` and expect a bundler (Vite, Next, CRA) —
they are reference implementations, not something that runs by double-clicking. The JSX
covers desktop only; read the mobile treatments (hero chip rail, sticky action bar,
single-column stacks) out of the site file.

**Imagery is placeholder.** Every `FramedImage` renders the brand's hatch-over-blush
placeholder with a caption naming the shot required; pass `src` to swap in real photography.
The map is a CSS street weave, not a real map — drop in a Google Maps embed when available.
