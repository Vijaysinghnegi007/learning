window.addEventListener("load", () => {

  if (typeof Lenis === "undefined") {
    console.error("Lenis failed to load");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.06,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  const container = document.querySelector(".horizontal");
  const card = container.querySelector(".card");

  gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth + card.offsetWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#horizontal-scroll",
      start: "top 10%",
      end: () => "+=" + (container.scrollWidth + card.offsetWidth),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  ScrollTrigger.refresh();

});