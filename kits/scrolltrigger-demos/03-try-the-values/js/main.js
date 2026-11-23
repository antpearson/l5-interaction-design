// Demo 3: Try the values. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

gsap.registerPlugin(ScrollTrigger);

let ctx; // holds the animations so we can throw them away and rebuild

function build() {
  const start =
    document.getElementById("start-el").value +
    " " +
    document.getElementById("start-sc").value;
  const end =
    document.getElementById("end-el").value +
    " " +
    document.getElementById("end-sc").value;
  const scrub = document.getElementById("scrub").value === "true";

  if (ctx) ctx.revert(); // remove the old animations and markers

  ctx = gsap.context(function () {
    gsap.utils.toArray(".beat h2").forEach(function (heading) {
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: scrub ? "none" : "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: start, // first value: on the heading, second: on the screen
          end: end,
          scrub: scrub,
          markers: true,
        },
      });
    });
  });
}

document.querySelectorAll(".panel select").forEach(function (select) {
  select.addEventListener("change", build);
});

build();
