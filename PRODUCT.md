# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Clients:** local Tampa clients, new and returning, who want a manicure, pedicure, enhancement, lashes or waxing. They mostly visit on their phones, often while deciding where to go today. Their job is to check the service, price, time and which salon offers it, then call, walk in or request a time.
- **The salon owner:** keeps the content current through the private intake tool (`intake/`). She is not technical and works from a link on her phone.
- **The site maintainer:** Andrew. He tracks the owner's progress on the intake dashboard and ships site changes.

## Product Purpose

The website for T&L Nails, a nail salon in Tampa. It has three jobs, in this order:

1. **Calls and walk-ins (current main revenue).** Make it fast to find the right salon and its hours, see the menu and prices, and call or walk in.
2. **Brand upgrade (next goal).** Present the salon at the level of its service, so it reads as premium next to cheaper competitors.
3. **Bookings (future feature).** Online booking will become a new channel for the business. How it works is undecided (see Capabilities and Constraints).

Success means more calls and visits from the site now, and a site that later carries booking without a redesign.

## Positioning

- **Local since 2003:** the same neighborhood salon for more than 20 years, with two locations, Kennedy Blvd and Davis Islands.
- **Signature treatments:** house pedicures (Signature Citrus, Signature Cucumber, CBD & Mint and Luxury) that the salon names and owns.
- **Skilled enhancements:** acrylic, builder gel, Apres Gel-X and nail art.
- **A calm, clean experience:** relaxed, hygienic and upscale, at fair prices.

## Operating Context

- **Two locations,** each with its own phone number and hours:
  - Kennedy Blvd: (813) 304-0330
  - Davis Islands: (813) 259-9920
  - Davis Islands' Friday hours are unconfirmed.
- **Clients book today by calling or walking in.** The booking form sends a request that the salon confirms within the hour. Without a form endpoint, it opens the visitor's email app to info@tlnailstampa.com.
- **Service content comes from the owner.** She fills in the intake tool (Supabase project `tl-nails`). The site reads her answers live through `site_catalog()`, so the menu, the service pages and the homepage prices change when she saves.
- **The site is hosted on GitHub Pages** from this repo (`site/` plus `intake/`).

## Capabilities and Constraints

- **Pages:** Home, About, Menu, Locations, and one service-page template for every service (`services/?s=<id>`).
- **Service data:** price, time, locations, menu line, description, what's included, add-ons, notes and photos per service. Unanswered fields show "Still waiting for details".
- **Removed services:** a service the owner marks "No, remove it" disappears from the menu.
- **No build step:** plain static HTML, CSS and vanilla JS, and the shared chrome is the same on all five pages.
- **Open decision, booking:** request form, a booking system (Square, Fresha, Vagaro…), or phone only. Undecided.
- **Open before launch:**
  - SEO pre-rendering of the data-driven pages
  - form endpoint
  - Facebook/Yelp/legal links
  - logo file
  - confirmed menu names and prices

## Brand Commitments

- **Name:** "T&L Nails", in Tampa.
- **Voice:** plain, warm and specific, the way the front desk talks ("We'll confirm within the hour.").
- **Logo:** none is provided yet. The wordmark is set in type until one arrives.
- **Design source:** the visual identity comes from the Claude Design handoff (`project/TL Nails Site.dc.html`), which is the approved design.

## Evidence on Hand

- **Service menu:** about 40 services, with prices taken from the salon's current site. The owner is confirming them and adding descriptions in the intake tool.
- **Photos:** the files in `site/assets/photos/` came from the salon's current site and Yelp, so they're placeholders until the originals arrive. Team, interior and service photography is still missing. Uploads go through the intake tool.
- **Social:** Instagram @tl_nails813, plus Facebook and Yelp pages.
- **What's missing:** no verified client reviews or testimonials, press, or awards are on hand. Don't invent any. Guest reviews were left off the service pages for this reason.

## Product Principles

1. **Answer the visit question first.** Which salon, open when, how much and how long, and how to call should always be one tap away, on mobile above all.
2. **The owner's answers are the source of truth.** Never hard-code service content. If she hasn't said it, the site says it's coming.
3. **Premium through restraint and accuracy,** never through claims the salon can't back up.
4. **Build for booking without depending on it.** Calls and walk-ins have to keep working whatever booking becomes.
5. **Keep it simple enough for the owner.** Anything she touches must work from a phone with no account.
