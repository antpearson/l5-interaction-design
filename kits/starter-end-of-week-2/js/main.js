/* =========================================================================
   Interaction Design — your JavaScript
   State: end of Week 2.

   Two things happen here, and nothing else:
     1. Chapters fade up as they arrive.
     2. The pinned scene notices which step you are on.

   Everything is wrapped in gsap.matchMedia() so that a reader who has asked
   for reduced motion gets the page with no animation at all — which is
   already a complete, readable version of the story.
   ========================================================================= */

gsap.registerPlugin(ScrollTrigger);

console.log('GSAP', gsap.version, '— main.js connected');

var mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', function () {

  /* ---------------------------------------------------------------------
     1. Fade each chapter up as it arrives.

     gsap.from() means the END state is whatever your CSS already says.
     If this script never runs, the chapters are simply visible — which is
     the no-JavaScript baseline the brief asks for. Do not swap this for
     gsap.to() with opacity:0 in the CSS; that breaks without JavaScript.
     --------------------------------------------------------------------- */

  gsap.utils.toArray('.chapter__text').forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%'
        // markers: true   <- switch on while you are building, off before you publish
      }
    });
  });

  /* ---------------------------------------------------------------------
     2. Make the pinned scene react to the step the reader has reached.

     The scene is already pinned by CSS position:sticky — that works with no
     JavaScript. What we are adding is awareness of WHICH step is active.
     --------------------------------------------------------------------- */

  var sceneFigure = document.querySelector('.scene__figure');
  if (!sceneFigure) { return; }

  gsap.utils.toArray('.step').forEach(function (step, i) {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 65%',
      end: 'bottom 65%',
      onEnter:     function () { showStep(i); },
      onEnterBack: function () { showStep(i); }
    });
  });

  function showStep(i) {
    /* Week 3 onwards: swap the image, move a map, redraw a chart.
       For now, a small acknowledgement that the step changed. */
    gsap.fromTo(sceneFigure,
      { scale: 0.98, opacity: 0.75 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: true }
    );
    sceneFigure.setAttribute('data-step', i + 1);
  }

});

/* Reduced motion: deliberately empty. The page is already correct without us. */
mm.add('(prefers-reduced-motion: reduce)', function () {
  console.log('Reduced motion is on — animations skipped.');
});
