gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".hero-text", {
  y:100,
  opacity:0,
  duration:1.2
});

// Sections
gsap.utils.toArray(".section").forEach(sec => {
  gsap.from(sec, {
    scrollTrigger: sec,
    y:100,
    opacity:0,
    duration:1
  });
});
