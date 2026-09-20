# Interaction Design — starter project

Level 5 · BSc (Hons) Content Creation · Leeds Beckett University

This is the file you build on all term. It is a working one-page scrolling
narrative with the structure, the stylesheet and the accessibility baseline
already in place, so you can spend your time on the story rather than on
plumbing.

## What is in here

```
interaction-design-starter/
├── index.html          the page — semantic HTML, commented section by section
├── css/
│   └── style.css       the stylesheet — change the tokens at the top first
├── js/
│   └── main.js         empty on purpose. Week 5 onwards.
├── images/             placeholder graphics. Replace with your own.
└── README.md           this file
```

## Getting it running

1. Open the folder in VS Code: **File → Open Folder…**
2. Install the **Live Server** extension if you have not already.
3. Right-click `index.html` → **Open with Live Server**.

Do not open the file by double-clicking it in Finder. Live Server runs a real
local web server, which is what you need once JavaScript and media are involved.

## Where the module takes it

| Week | What you add |
|------|--------------|
| 1 | Your kit, your project folder, your first commit, your live URL |
| 2 | Layout re-levelled, the sticky scene understood, first story ideas |
| 5 | Your storyboard translated into real sections; GSAP linked, first fade |
| 7 | Tweens, timelines, triggers, scrub |
| 8 | Pinning and layered scenes |
| 9 | Your designed moment of interaction |
| 10 | Testing, accessibility, polish |

## The two baselines

The brief requires both, and they are already working here:

- **No JavaScript.** Turn JS off and the page is still a readable story. The
  sticky scene uses CSS `position: sticky`, not a script.
- **Reduced motion.** Turn on macOS *Reduce motion* and the animation stops,
  the scene unpins, and the story reads as a normal page. Section 9 of
  `style.css` does this. Keep it working as you build.

## Credit your sources

`index.html` ends with a credits block. Fill it in as you go, not the night
before hand-in. Component 1 is marked on verified sourcing, and any sourced
media must be credited.
