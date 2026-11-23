// Demo 5: Slider. The script for this page.
// index.html loads it at the bottom, just as your page loads
// your own js/main.js.

// No GSAP needed.
const slider = document.querySelector("#slider");
const then = document.querySelector("#pic-1900s");
const divider = document.querySelector("#divider");

slider.addEventListener("input", function () {
  // slider.value is a number from 0 to 100.
  // Cut the postcard off that far across, and move the line to match.
  then.style.clipPath = "inset(0 " + (100 - slider.value) + "% 0 0)";
  divider.style.left = slider.value + "%";
});
