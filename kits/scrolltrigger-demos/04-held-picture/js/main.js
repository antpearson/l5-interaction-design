// Demo 4: Held picture. The script for this page.
// index.html loads it at the bottom, after GSAP, just as your page loads
// your own js/main.js.

gsap.registerPlugin(ScrollTrigger);

// Beat 02: a swap
gsap.from("#pic-1900s", {
  opacity: 0,
  duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#beat-02-swap",
    start: "top center",
    toggleActions: "play none none reverse",
    markers: true, // DELETE BEFORE YOU PUBLISH
  },
});

// Beat 03: one after another
gsap.from(".marker", {
  opacity: 0,
  scale: 0,
  duration: 0.4,
  stagger: 0.2,
  ease: "back.out(2)",
  scrollTrigger: {
    trigger: "#beat-03-markers",
    start: "top center",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

// Beat 04: slide in
gsap.from("#label", {
  x: -300,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#beat-04-slide",
    start: "top center",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

// Beat 05: two changes, in order
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#beat-05-in-order",
    start: "top center",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
tl.from("#pic-c", { opacity: 0, duration: 1 }).from("#caption-c", {
  opacity: 0,
  y: 40,
});
