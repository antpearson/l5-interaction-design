# Section skeleton — a worked example

Interaction Design (L5) · Week 5

The HTML structure a scrolling narrative is built from. Twelve sections, two scenes,
one marked interaction point, and a credits block. Read it, take what is useful,
do not hand it in.

## Open it

Double-click `index.html`, or open this folder in VS Code and use Live Server.
Both work — there is no JavaScript doing anything yet and nothing loads from a CDN.

## What to look at

- **`index.html`** — the comments are the lesson. Each block explains what that kind
  of section is for.
- **`css/style.css`** — note that nothing is hidden. No `opacity: 0` anywhere. That is
  what keeps the no-JavaScript baseline readable.
- **`js/main.js`** — almost empty, with a roadmap of what arrives in Weeks 7, 8 and 9.

## The two things worth copying exactly

**Section IDs are numbered, then named.** `chapter-02-then-and-now`, not `section2`. Same
prefix and same `-heading` suffix as your starter, with a slug added because twelve sections
need one. Use the same names for your Figma frames.

**The scene is pinned in CSS.** `position: sticky` on `.scene__sticky` does the holding, with
no script involved — which is why it survives JavaScript being switched off, and why it unpins
cleanly under `prefers-reduced-motion`. Note that the sticky block and the steps sit in the
*same* grid cell, so the steps scroll over the figure rather than beside it. What Week 7 adds
is knowing *which step* the reader has reached, which is the part CSS cannot do.

## Class names

Keep these. Every recipe from Week 7 onwards assumes them:

`chapter` · `chapter--figure` · `chapter__text` · `chapter__figure` ·
`scene` · `scene__sticky` · `scene__steps` · `step` (with `data-step`, numbered from 1)

These are your starter's names, not new ones. `chapter--reverse` and `scene__caption` are
the only additions here.

Renaming them is a quiet way to make every example on the module site stop working
for you.

## Images

`images/placeholder.svg` stands in for everything. Replace it with your own material and
write real `alt` text as you go — retrofitting alt text across forty images is tedious,
and it is a marked accessibility requirement.
