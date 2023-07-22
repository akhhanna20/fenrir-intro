// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Hanna Akhramchuk  \u00A9 ${thisYear}`;
footer.appendChild(copyright);

//Create list of skills
const skills = [
  "JavaScript",
  "ReactJS",
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
  skill.className = "skill";
  skill.innerHTML = skills[i];
  console.log(skill);
  skillsList.appendChild(skill);
}

//Create message form
const messageForm = document.querySelector("[name='leave_message']");
console.log(messageForm);
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target.usersName;
  console.log(inputName.value);
  const inputEmail = e.target.usersEmail;
  console.log(inputEmail.value);
  const inputMessage = e.target.usersMessage;
  console.log(inputMessage.value);

  //create new message
  const messageSection = document.querySelector("#messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${inputEmail.value}">${inputName.value}</a> wrote: <span> ${inputMessage.value} </span>`;

  messageForm.reset();

  //Create button to remove message
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.className = "btn-remove";

  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    messageList.removeChild(entry);
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});

//Fetch GitHub Repositories
const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/akhhanna20/repos");

githubRequest.send();

githubRequest.addEventListener("load", function () {
  const repositories = JSON.parse(this.response);
  console.log(repositories);

  const projectSection = document.getElementById("projects");
  projectList = projectSection.querySelector("ul");
  console.log(projectList);
  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
    projectList.appendChild(project);
  }
});
