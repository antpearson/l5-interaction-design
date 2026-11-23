// Demo 1: Hotspot. The script for this page.
// index.html loads it at the bottom, just as your page loads
// your own js/main.js.

// No GSAP needed: a button, a listener, and a change.

// Hotspot 1898
const button1898 = document.querySelector("#button-1898");
const note1898 = document.querySelector("#note-1898");

note1898.hidden = true; // the script hides the note, so with no script it still shows

button1898.addEventListener("click", function () {
  note1898.hidden = !note1898.hidden; // ! means "not": shown becomes hidden, and back again
  button1898.setAttribute("aria-expanded", !note1898.hidden); // tells a screen reader it is open
});

// Hotspot 1909
const button1909 = document.querySelector("#button-1909");
const note1909 = document.querySelector("#note-1909");

note1909.hidden = true;

button1909.addEventListener("click", function () {
  note1909.hidden = !note1909.hidden;
  button1909.setAttribute("aria-expanded", !note1909.hidden);
});

// Hotspot 1915
const button1915 = document.querySelector("#button-1915");
const note1915 = document.querySelector("#note-1915");

note1915.hidden = true;

button1915.addEventListener("click", function () {
  note1915.hidden = !note1915.hidden;
  button1915.setAttribute("aria-expanded", !note1915.hidden);
});
