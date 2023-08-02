// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML = `\u00A9 Hanna Akhramchuk ${thisYear}`;

//Create list of skills
const skills = [
  "JavaScript",
  "ReactJS",
  "DOM",
  "APIs",
  "HTML, CSS",
  "Git",
  "Debugging",
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

  //Check e-mail for correct style, using regular expression
  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regExp.test(inputEmail.value)) {
    console.log("RegExp res: correct");
    error.textContent = "";
  } else {
    error.textContent = "Please enter a valid E-mail address";
    error.style.color = "red";
  }

  const inputMessage = e.target.usersMessage;
  console.log(inputMessage.value);

  //create new message
  const messageSection = document.querySelector("#messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);
  const newMessage = document.createElement("li");
  newMessage.className = "messages-item";

  // check for missing fields
  if (!inputName || !inputEmail || !inputMessage) {
    return (messageSection.style.display = "none");
  }
  //Check if style of e-mail is correct and then show the message in Message section
  if (regExp.test(inputEmail.value)) {
    newMessage.innerHTML = `<div>
  <a href="mailto:${inputEmail.value}">${inputName.value}</a> 
  <p> wrote: <span> ${inputMessage.value} </span></p>
  </div>`;
  } else {
    console.log("Wrong E-mail");
  }
  if (newMessage.innerHTML) {
    messageSection.style.display = "block";
  }

  //Reset form after submitting if e-mail is correct
  if (regExp.test(inputEmail.value)) {
    messageForm.reset();
  }
  //Remove error message after starting to type
  if (error.textContent !== "") {
    messageForm.addEventListener("click", (e) => {
      error.textContent = "";
    });
  }

  //Create button to remove message
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.className = "btn-remove";
  removeButton.addEventListener("click", (e) => {
    const entry = e.target.parentNode;

    //Check for messages section list
    const list = entry.parentNode;
    if (list.children.length <= 1) {
      messageSection.style.display = "none";
    }
    messageList.removeChild(entry);
  });

  if (newMessage.innerHTML) {
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  }
});

//Lesson 6.2: Working with Fetch API
fetch("https://api.github.com/users/akhhanna20/repos")
  .then((response) => response.json())
  .then((data) => {
    const filteredRepo = data.filter((repo) => repo.name.includes("intro"));
    console.log("i am filtered", filteredRepo);

    const projectSection = document.getElementById("projects");
    projectList = projectSection.querySelector("ul");
    console.log(projectList);

    for (let i = 0; i < filteredRepo.length; i++) {
      const project = document.createElement("li");
      project.innerHTML = `<a href="${filteredRepo[i].html_url}">${filteredRepo[i].name}</a>`;
      projectList.appendChild(project);
    }
  })
  .catch((err) => {
    console.log("Error:", err);
    const projectSection = document.getElementById("projects");
    projectList = projectSection.querySelector("ul");
    const project = document.createElement("li");
    project.innerHTML = "Sorry, progects will be here soon...";
    projectList.appendChild(project);
  });
