// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
// const footer = document.querySelector("footer");
// const copyright = document.createElement("p");
const copyright = document.querySelector("#copyright");
copyright.innerHTML = `\u00A9 Hanna Akhramchuk ${thisYear}`;
// footer.appendChild(copyright);

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

  let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailSection = document.querySelector("#email");
  const message = emailSection.querySelector("#error");

  if (regExp.test(e.target.usersEmail.value)) {
    console.log("RegExp res: correct");
    error.textContent = "";
  } else {
    error.textContent = "Please enter a valid E-mail address";
    error.style.color = "red";
    //console.log("err");

    // console.log(emailSection);

    // const wrongEmailMessage = "You shoul enter the correct E-mail address!";
    // console.log(message);
    // message.innerHTML = "You shoul enter the correct E-mail address!";
    //emailSection.appendChild(wrongEmailMessage);
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

  if (regExp.test(e.target.usersEmail.value)) {
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

  if (newMessage.innerHTML) {
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  }
});

// function errorMessage() {
//   const error = document.getElementById("error");
//   let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   if (regExp.test(document.querySelector("#email").value)) {
//     // Changing content and color of content
//     error.textContent = "Please enter a valid number";
//     error.style.color = "red";
//   } else {
//     error.textContent = "";
//   }
// }

//Lesson 6.1: Fetch GitHub Repositories using XMLHttpRequest;
// const githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/akhhanna20/repos");

// githubRequest.send();

// githubRequest.addEventListener("load", function () {
//   const repositories = JSON.parse(this.response);
//   console.log(repositories);

//   const projectSection = document.getElementById("projects");
//   projectList = projectSection.querySelector("ul");
//   console.log(projectList);
//   for (let i = 0; i < repositories.length; i++) {
//     const project = document.createElement("li");
//     project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
//     projectList.appendChild(project);
//   }
// });

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
