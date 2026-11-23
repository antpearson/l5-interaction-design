// Demo 4: Pop-up. The script for this page.
// index.html loads it at the bottom, just as your page loads
// your own js/main.js.

// No GSAP needed.
const postcard = document.querySelector("#postcard");

document.querySelector("#open-postcard").addEventListener("click", function () {
  postcard.showModal(); // opens it over the page; Esc closes it too
});

document
  .querySelector("#close-postcard")
  .addEventListener("click", function () {
    postcard.close();
  });
