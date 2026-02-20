window.addEventListener("load", () => {
  if (typeof Lenis === "undefined") {
    console.error("Lenis failed to load");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.06,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
});


