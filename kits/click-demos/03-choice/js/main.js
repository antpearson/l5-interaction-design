// Demo 3: Choice. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

const outcomePool = document.querySelector("#outcome-pool");
const outcomeCinema = document.querySelector("#outcome-cinema");

outcomePool.hidden = true; // the script hides both outcomes, so with no script both show
outcomeCinema.hidden = true;

const marker = gsap.from("#marker-1915", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  ease: "back.out(2)",
  paused: true, // hidden now; either choice plays it
});

document.querySelector("#choose-pool").addEventListener("click", function () {
  outcomePool.hidden = false; // show this outcome
  outcomeCinema.hidden = true; // and hide the other one
  marker.play();
});

document.querySelector("#choose-cinema").addEventListener("click", function () {
  outcomeCinema.hidden = false;
  outcomePool.hidden = true;
  marker.play();
});
