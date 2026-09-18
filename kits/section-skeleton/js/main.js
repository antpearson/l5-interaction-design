/* ============================================================
   Deliberately almost empty.

   Week 5 is the readable baseline: structure, headings, captions,
   credits. No animation. If you disable JavaScript entirely, the
   page you get should be the page you just built — that is the
   no-JavaScript baseline the brief requires, and it is a marked
   criterion in Component 2.

   What arrives here later:

   Week 7   gsap.registerPlugin(ScrollTrigger)
            Chapter entrances with gsap.from() — never gsap.to()
            from a hidden state, or the baseline above breaks.
            Timelines and scrub.

   Week 8   Scene steps: a ScrollTrigger per .step that reports
            which one the reader has reached, so the held figure
            can change. Your steps already carry data-step.

   Week 9   The designed interaction moment, marked in the HTML
            with <!-- INTERACTION: ... -->. Built as an upgrade on
            top of the readable version, not a replacement for it.

   All of it wrapped in gsap.matchMedia() so that a reader who has
   asked for reduced motion gets the baseline instead. You did this
   in Week 2; keep doing it from the first line rather than
   retrofitting it in Week 10.
   ============================================================ */

console.log('Section skeleton — structure only. Behaviour starts in Week 7.');
