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
  toggleActions: "play none none none",
});

// text reveal animation about section heading HIGHLIGHT

const aboutHeading = new SplitType(".introHeading");

const aboutHeadingReveal = gsap.timeline();

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
  toggleActions: "play none none none",
  // onComplete: () => {},
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
  animation: aboutParaReveal,
  trigger: ".about",
  start: "top bottom",
  end: "10% 50%",
  toggleActions: "play none none none",
});

// text reveal animation footer section HIGHLIGHT

const footerText = new SplitType("#footerHeading-js");

const footerTextReveal = gsap.timeline();

footerTextReveal.set("#footerHeading-js .char", {
  autoAlpha: 0,
  yPercent: 60,
  rotateX: 70,
});
footerTextReveal.to(
  "#footerHeading-js .char",
  {
    autoAlpha: 1,
    rotateX: 0,
    yPercent: 0,
    stagger: 0.05,
    delay: 0.4,
    duration: 2.5,
    ease: "expo.out",
  },
  0.05
);

ScrollTrigger.create({
  animation: footerTextReveal,
  trigger: ".footerContainer",
  Start: "20%",
  end: "70% 10%",
  toggleActions: "play none none none",
});

// // work section text reveal HIGHLIGHT

// const workHeading = new SplitType(".para");

// const workHeadingReveal = gsap.timeline();

// function animateOnHover() {
//   workHeadingReveal.from("#workHeading-js .char", {
//     autoAlpha: 0,
//     y: 20,
//     stagger: 0.05,
//     duration: 1.5,
//     ease: "expo.out",
//   });
// }

// const itemLink = document.querySelector(".item");
// itemLink.addEventListener("mouseenter", animateOnHover);
// itemLink.addEventListener("mouseleave", () => {
//   workHeadingReveal.kill(); // Optional: Kill the animation on mouseleave
// });

// adding hover class to work list section HIGHLIGHT
$(document).ready(function () {
  $(".item").hover(
    function () {
      $(".item").not(this).addClass("hovered");
    },
    function () {
      $(".item").not(this).removeClass("hovered");
    }
  );
});
