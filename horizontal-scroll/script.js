// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// gsap animation code

// wait to load the dom
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let horizontalSection = document.querySelector(".horizontal");

  gsap.to(".horizontal", {
    x: () => -(horizontalSection.scrollWidth - window.innerWidth),
    scrollTrigger: {
      trigger: ".horizontal",
      start: "center center",
      end: () => "+=" + horizontalSection.scrollWidth,
      pin: "#horizontal-scroll",
      scrub: true,
      invalidateOnRefresh: true,
      markers: true,
    },
  });
});
