//cache DOM
const $contentDiv = document.querySelector('.content');

//function for creating project display for
function displayNewProjectForm() {
    //making header
    const $newProjectDiv = document.createElement('div');
    $newProjectDiv.classList.add('new-project-div');
    const header = document.createElement('h1');
    header.textContent = 'Add Project';
    //div to hold form
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    //label and input for name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Project Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    //label and input for date
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Due Date: ';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');
    //label and input for priority selector and options
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority: ';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');
    const priorityOptionOne = document.createElement('option');
    priorityOptionOne.setAttribute('value', 'Low');
    priorityOptionOne.textContent = 'Low';
    const priorityOptionTwo = document.createElement('option');
    priorityOptionTwo.setAttribute('value', 'Medium');
    priorityOptionTwo.textContent = 'Medium';
    const priorityOptionThree = document.createElement('option');
    priorityOptionThree.setAttribute('value', 'High');
    priorityOptionThree.textContent = 'High';
    //submit button
    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = ('Add Project');
    addProjectBtn.classList.add('add-project-btn-content');
    //appending all of it together
    projectDiv.appendChild(nameLabel);
    projectDiv.appendChild(nameInput);
    projectDiv.appendChild(dateLabel);
    projectDiv.appendChild(dateInput);
    projectDiv.appendChild(priorityLabel);
    projectDiv.appendChild(prioritySelect);
    prioritySelect.appendChild(priorityOptionOne);
    prioritySelect.appendChild(priorityOptionTwo);
    prioritySelect.appendChild(priorityOptionThree);
    projectDiv.appendChild(addProjectBtn);
    $newProjectDiv.appendChild(header);
    $newProjectDiv.appendChild(projectDiv);
    $contentDiv.appendChild($newProjectDiv);
};

function clearProjectDiv() {
    let $newProjectDiv = document.querySelector('.new-project-div');
    $contentDiv.removeChild($newProjectDiv);
}

function displayProjectPage() {
    //get form elements
    let $title = document.getElementById('name');
    let title = $title.value;
    let $date = document.getElementById('date');
    let date = $date.vaue;
    let $priority = document.getElementById('priority');
    let priority = $priority.value;

    //create elements
    let projTitle = document.createElement('h1');
    projTitle.textContent = `${title}`;
    let projDate = document.createElement('h3');
    projDate.textContent = `Due Date: ${date}`;
    let projPriority = document.createElement('h3');
    projPriority.textContent = `Priority: ${priority}`;
    let addingDiv = document.createElement('div');
    addingDiv.classList.add('list-div');
    let addingDivInput = document.createElement('input');
    addingDivInput.type = 'text';
    addingDivInput.setAttribute('id', 'taskInput');
    let addingDivButton = document.createElement('button');
    addingDivButton.textContent = 'Add';
    addingDivButton.classList.add('add-task-button');
    let toDoList = document.createElement('ul');
    //append elements to page
    $contentDiv.appendChild(projTitle);
    $contentDiv.appendChild(projDate);
    $contentDiv.appendChild(projPriority);
    addingDiv.appendChild(addingDivInput);
    addingDiv.appendChild(addingDivButton);
    $contentDiv.appendChild(addingDiv);
    $contentDiv.appendChild(toDoList);
}

function addTask(name) {
    let $taskList = document.querySelector('.list-div');
    let task = document.createElement('li');
    task.textContent = `${name}`;
    $taskList.appendChild(task);
}

export {displayNewProjectForm, clearProjectDiv, displayProjectPage, addTask }


