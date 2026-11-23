// Demo 2: Toggle. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

const swap = gsap.from("#pic-1900s", {
  opacity: 0,
  duration: 1,
  ease: "none",
  paused: true, // hidden now; plays when a button tells it to
});

document.querySelector("#button-then").addEventListener("click", function () {
  swap.play();
});

document.querySelector("#button-now").addEventListener("click", function () {
  swap.reverse();
});
