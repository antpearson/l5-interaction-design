// Demo 1: Arrive. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".beat h2").forEach(function (heading) {
  gsap.from(heading, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: heading,
      start: "top 80%", // the heading's top meets 80% down the screen
      markers: true, // DELETE BEFORE YOU PUBLISH
    },
  });
});
