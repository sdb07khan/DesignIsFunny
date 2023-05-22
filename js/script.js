gsap.registerPlugin(ScrollTrigger);

// text reveal animation for marketing section HIGHLIGHT

const heroText = new SplitType(".headingText");

const heroTextReveal = gsap.timeline();

heroTextReveal.to(".char", {
  rotationX: 0,
  y: 0,
  stagger: 0.08,
  delay: 0.1,
  duration: 0.3,
  ease: "power3.out",
  skewY: 0,
  scaleY: 1,
});

ScrollTrigger.create({
  animation: heroTextReveal,
  trigger: ".hero",
  Start: "20%",
  end: "70% 10%",
  toggleActions: "play none none reverse",
});
