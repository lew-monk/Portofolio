const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", (e) => {
    skill.children[0].classList.add("animate");
  });
  skill.addEventListener("mouseleave", (e) => {
    skill.children[0].classList.remove("animate");
  });
});
