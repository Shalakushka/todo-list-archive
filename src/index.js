import './style.css'
import './fonts/fonts.css'
import {Task, Project} from './js/taskManager'

// Element Variables
const pomodoroButton = document.querySelector("#pomodoro-button");
const projectsContainer = document.querySelector(".projects-container");
const addButton = document.querySelector(".add-button");
const newTaskButton = document.querySelector(".new-task");
const newProjectButton = document.querySelector(".new-project");
const confirmTaskButton = document.querySelector(".task-confirm");
const cancelTaskButton = document.querySelector(".task-cancel");
const confirmProjectButton = document.querySelector(".project-confirm");
const cancelProjectButton = document.querySelector(".project-cancel");
const projectDialog = document.querySelector("#project-dialog");
const taskDialog = document.querySelector("#task-dialog");

// Status Variables
let addButtonActivated = false;

// Events Listeners
pomodoroButton.addEventListener("click", pomodoroButtonClicked);
addButton.addEventListener("click", addButtonClicked);
newTaskButton.addEventListener("click", newTaskButtonClicked);
newProjectButton.addEventListener("click", newProjectButtonClicked);
confirmTaskButton.addEventListener("click", confirmTaskButtonClicked);
cancelTaskButton.addEventListener("click", cancelTaskButtonClicked);
confirmProjectButton.addEventListener("click", confirmProjectButtonClicked);
cancelProjectButton.addEventListener("click", cancelProjectButtonClicked);


// Events Functions
function pomodoroButtonClicked(e) {
    console.log("PomodoroButtonClicked");
}

function addButtonClicked(e) {
    console.log("addButtonClicked");
    if (addButtonActivated) {
        newTaskButton.hidden = true;
        newProjectButton.hidden = true;
        addButton.textContent = "+";
        addButtonActivated = false;
    } else {
        newTaskButton.hidden = false;
        newProjectButton.hidden = false;
        addButton.textContent = "✓";
        addButtonActivated = true;
    }
}

function newTaskButtonClicked(e) {
    console.log("newTaskButtonClicked");
    taskDialog.showModal();
}

function newProjectButtonClicked(e) {
    console.log("newProjectButtonClicked");
    projectDialog.showModal();
}

function confirmTaskButtonClicked(e) {
    e.preventDefault();
}

function cancelTaskButtonClicked(e) {
    e.preventDefault();
    taskDialog.close();
}

function confirmProjectButtonClicked(e) {
    e.preventDefault();
    console.log("confirm project");
}

function cancelProjectButtonClicked(e) {
    e.preventDefault();
    projectDialog.close();
    console.log("cancel project");
}

function checkButtonClicked(e) {
    
}

//Default Script
let projectList = [new Project("Visit this TodoList", [])];
projectList[0].taskList.push(new Task("Checking this checkbox", false));
for (let i = 0; i < projectList.length; i++) {
    const project = document.createElement('div');
    project.classList.add("project");

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = `Project: ${projectList[i].title}`

    const taskContainer = document.createElement('div');
    taskContainer.classList.add("tasks-container");

    const taskHeader = document.createElement('h3');
    taskHeader.textContent = "Tasks";
    taskContainer.appendChild(taskHeader);

    const blankDiv = document.createElement('div');
    for (let j = 0; j < projectList[i].taskList.length; j++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        const taskDescription = document.createElement('p');
        taskDescription.textContent = projectList[i].taskList[j].description;
        taskDiv.appendChild(taskDescription);
        const checkButton = document.createElement('button');
        checkButton.addEventListener("click", checkButtonClicked);
        checkButton.classList.add("checkbox");
        if (projectList[i].taskList[j].status) {
            checkButton.classList.add("checked");
            checkButton.textContent = "✓";
        } else {
            checkButton.classList.add("unchecked");
        }
        taskDiv.appendChild(checkButton);
        blankDiv.appendChild(taskDiv);
    }
    taskContainer.appendChild(blankDiv);
    project.appendChild(projectTitle);
    project.appendChild(taskContainer);
    projectsContainer.appendChild(project);
}