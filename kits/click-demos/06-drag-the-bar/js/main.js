// Demo 6: Drag the bar. The script for this page.
// index.html loads it at the bottom, just as your page loads
// your own js/main.js.

// No GSAP needed.
const held = document.querySelector(".held");
const then = document.querySelector("#pic-1900s");
const divider = document.querySelector("#divider");
const slider = document.querySelector("#slider");

// Show the postcard this far across the picture, from 0 to 100,
// and put the bar and the slider in the same place.
function showAt(percent) {
  if (percent < 0) percent = 0; // never past the left edge
  if (percent > 100) percent = 100; // or the right edge
  then.style.clipPath = "inset(0 " + (100 - percent) + "% 0 0)";
  divider.style.left = percent + "%";
  slider.value = percent;
}

let dragging = false; // let, not const: it changes as the reader drags

// 1 Press on the bar: start dragging
divider.addEventListener("pointerdown", function (event) {
  event.preventDefault(); // stops the browser selecting text as you drag
  dragging = true;
});

// 2 Move: while dragging, put the bar where the pointer is
window.addEventListener("pointermove", function (event) {
  if (dragging) {
    const box = held.getBoundingClientRect(); // where the picture is on the screen
    showAt(((event.clientX - box.left) / box.width) * 100);
  }
});

// 3 Let go: stop dragging
window.addEventListener("pointerup", function () {
  dragging = false;
});

// The slider does the same job, from the keyboard too
slider.addEventListener("input", function () {
  showAt(slider.value);
});
