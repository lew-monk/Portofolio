import anime from "animejs";

const createOpacityAnimationConfig = (animatingIn) => ({
  value: animatingIn ? [0, 1] : 0,
  easing: "linear",
  duration: 300,
});
const ANIMATION_DONE_EVENT = "animation::done";

const easing = "spring(1, 150, 10)";

const triggerAnimationDoneEvent = (node) =>
  node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));

export const animateProjectsIn = (gridContainer) => {
  anime
    .timeline()
    .add({
      targets: gridContainer,
      translateX: [-100, 0],
      opacity: createOpacityAnimationConfig(true),
      easing,
      duration: 1000,
    })
    .add(
      {
        targets: gridContainer.querySelectorAll(".project-container"),
        easing,
        opacity: createOpacityAnimationConfig(true),
        translateY: 0,
        delay: anime.stagger(70),
        duration: 1000,
      },
      "-=1100"
    )
    .add(
      {
        targets: gridContainer.querySelectorAll(".skills"),
        easing,
        opacity: createOpacityAnimationConfig(true),
        translateY: 0,
        delay: anime.stagger(70),
        duration: 1000,
      },
      "-=1000"
    );
};

export const animateProjectsOut = (gridContainer) =>
  anime
    .timeline()
    .add({
      targets: gridContainer.querySelectorAll(".project-container"),
      easing,
      opacity: createOpacityAnimationConfig(false),
      translateY: -30,
      delay: anime.stagger(50),
    })
    .add(
      {
        targets: gridContainer,
        translateX: 1000,
        opacity: createOpacityAnimationConfig(false),
        easing,
        complete: () => triggerAnimationDoneEvent(gridContainer),
      },
      "-=1400"
    );
