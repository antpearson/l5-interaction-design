# Week 1 tutorial — image slots

The page is `Delivery/week-1-introduction-to-the-module.html`; images for it
live here in `images/week-1/` and are referenced as `images/week-1/name.png`.

Three full-bleed slots are marked up and styled but not yet filled. Each currently
shows a hatched placeholder so the layout is visible. Drop a file in this folder (`images/week-1/`)
and swap the placeholder for an `<img>`; nothing else needs to change.

## What each slot needs

| id | Where | Subject | Target size |
|---|---|---|---|
| `bleed-hero` | After "What is a scrolling narrative?" | Snow Fall opening screen | 2400 × 1030 |
| `bleed-kit` | End of Part two, after the naming box | VS Code with the starter open, Live Server running, Console visible | 2400 × 1030 |
| `bleed-publish` | After the GitHub Pages steps | Settings → Pages with the published address showing | 2400 × 1030 |

The aspect ratio is 21:9 (`.bleed`). Use `class="bleed bleed--tall"` for 16:9 if a
screenshot does not crop well at 21:9.

## How to swap one in

Replace the placeholder `<div>`:

```html
<div class="bleed__ph" role="img" aria-label="…"><span>Image slot 1 …</span></div>
```

with:

```html
<img src="images/week-1/snow-fall-opening.jpg" alt="The opening screen of Snow Fall: a
     photograph of a snow-covered ridge with the headline over it."
     width="2400" height="1030" loading="lazy">
```

Keep the `<figcaption>` that follows — it already carries the credit line.

Write a real `alt` description, not the filename. These pages are the example
students are marked against.

## Card thumbnails (optional)

`.card__thumb` is styled and ready if you want pictures on the screening-list and
archive cards. Add as the first child inside the `<a class="card">`:

```html
<img class="card__thumb" src="images/week-1/body-on-the-moor.jpg" alt=""
     width="900" height="600" loading="lazy">
```

`alt=""` is correct here — the card title next to it already names the link.
A card with no image yet uses a placeholder so the grid stays aligned:

```html
<span class="card__thumb card__thumb--ph" aria-hidden="true">Image needed &middot; 900&times;600</span>
```

Swap it for the `<img>` when you have the file. Thumbs are 900×600 JPEGs; the
full-bleed versions are 2400 wide. Source PNGs live in `Week-1/source-images/`.

## Sourcing

- **Screenshots of the canon** (Snow Fall, Body on the Moor, The Reykjavik
  Confessions, The Pudding): fair dealing for criticism and review, s.30 CDPA.
  Credit the publication and link to the piece — both are already in the markup.
- **Change-over-time imagery**: NASA Earth Observatory World of Change and USGS
  Earthshots are public domain. ESA needs its own credit line.
- **Anything else**: Unsplash or Pexels licence, or your own photography.

Put the credit in the `<span class="credit">` inside each caption.

## Note

These could not be fetched in the session that built this page — the network
policy blocked nytimes.com, bbc.co.uk, pudding.cool and nasa.gov, and the Chrome
extension's allowed-domain list only covered bbc.co.uk. Adding the other three in
the extension's site permissions would let them be pulled next time.

## Files present (18 Sep 2026)

`snow-fall.jpg` (hero), `snow-fall-thumb.jpg`, `body-moor.jpg`, `body-moor-thumb.jpg`,
`wonky.jpg`, `wonky-thumb.jpg`, `header.png`, `deep-sea-thumb.jpg`, `airpods-thumb.jpg`,
`pudding-thumb.jpg`, `the-boat-thumb.jpg`. Sources in `Week-1/source-images/`.

All seven screening cards now carry a real thumbnail. No placeholders remain.
