// Demo 2: Scrub. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".beat h2").forEach(function (heading) {
  gsap.from(heading, {
    opacity: 0,
    y: 40,
    ease: "none", // with scrub, your scrolling sets the pace
    scrollTrigger: {
      trigger: heading,
      start: "top 80%", // begins when the heading's top is 80% down the screen
      end: "top 40%", // finishes when the heading's top is 40% down the screen
      scrub: true, // the scroll position drives it
      markers: true, // DELETE BEFORE YOU PUBLISH
    },
  });
});
