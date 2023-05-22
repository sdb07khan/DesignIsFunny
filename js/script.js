gsap.registerPlugin(ScrollTrigger);

// Infinite rotation banner HIGHLIGHT
window.addEventListener("load", animation);

function animation() {
  const TL = gsap.timeline({ repeat: -1 });

  TL.to(".rotatingStar", { rotate: "+=360", duration: 4, ease: "none" });
}

// text reveal animation hero section HIGHLIGHT

const heroText = new SplitType(".headingText");

const heroTextReveal = gsap.timeline();

heroTextReveal.set("#heroHeadingText-js .char", {
  autoAlpha: 0,
  yPercent: 60,
  rotateX: 70,
});
heroTextReveal.to(
  "#heroHeadingText-js .char",
  {
    autoAlpha: 1,
    rotateX: 0,
    yPercent: 0,
    stagger: 0.05,
    delay: 0.25,
    duration: 1.5,
    ease: "expo.out",
  },
  0.05
);

ScrollTrigger.create({
  animation: heroTextReveal,
  trigger: ".hero",
  Start: "20%",
  end: "70% 10%",
  toggleActions: "play none none reverse",
});

// text reveal animation about section heading HIGHLIGHT

const aboutHeading = new SplitType(".introHeading");

const aboutHeadingReveal = gsap.timeline();

// aboutHeadingReveal.fromTo(
//   "#introHeadingText-js .word",
//   { autoAlpha: 0, y: 10 },
//   {
//     autoAlpha: 1,
//     y: 0,
//     stagger: 0.04,
//     delay: 0.2,
//     duration: 1.2,
//     ease: "power2.out",
//   }
// );

aboutHeadingReveal.set("#introHeadingText-js .word", {
  autoAlpha: 0,
  yPercent: 60,
  rotateX: 70,
});
aboutHeadingReveal.to("#introHeadingText-js .word", {
  autoAlpha: 1,
  rotateX: 0,
  yPercent: 0,
  stagger: 0.05,
  delay: 0.25,
  duration: 1.5,
  ease: "expo.out",
});

ScrollTrigger.create({
  animation: aboutHeadingReveal,
  trigger: ".aboutContainer",
  Start: "20% top",
  end: "70% 10%",
  toggleActions: "play none none reverse",
});

// text reveal animation about para section HIGHLIGHT

const aboutPara = new SplitType(".para");

const aboutParaReveal = gsap.timeline();

// aboutHeadingReveal.set("#contentPara-js .line", {
//   autoAlpha: 0,
//   y: 4,
// });

aboutHeadingReveal.from("#contentPara-js .line", {
  autoAlpha: 0,
  y: 10,
  stagger: 0.05,
  duration: 1.5,
  ease: "expo.out",
});

ScrollTrigger.create({
  animation: aboutHeadingReveal,
  trigger: ".contentBox",
  Start: "20% top",
  end: "70% 10%",
  toggleActions: "play none none reverse",
  markers: true,
});
