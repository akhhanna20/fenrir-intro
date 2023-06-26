const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Hanna Akhramchuk \u00A9 ${thisYear}`;
footer.appendChild(copyright);

const skills = [
  "Java Script",
  "React framework",
  "DOM",
  "APIs",
  "HTML, CSS",
  "Git",
  "Testing, debugging",
  "Communication",
  "Creativity",
  "Time managment",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  console.log(skill);
  skillsList.appendChild(skill);
}
