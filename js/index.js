const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Hanna Akhramchuk  \u00A9 ${thisYear}`;
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

  const messageSection = document.querySelector("#messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${inputEmail.value}">${inputName.value}</a> wrote: <span> ${inputMessage.value} </span>`;

  messageForm.reset();

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.className = "btnRemove";

  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    messageList.removeChild(entry);
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});
