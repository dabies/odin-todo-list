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

function clearContent() {
    let $contentDiv = document.querySelector('.content');
    while ($contentDiv.firstChild) {
        $contentDiv.removeChild($contentDiv.firstChild);
    }
}

function setPriorityColor(priority) {
    if (priority === 'Low') {
        return 'lightgreen';
    } else if (priority === 'Medium') {
        return 'yellow';
    } else {
        return 'indianred';
    }
}

function clearInput() {
    document.getElementById('taskInput').value = '';
}

function displayProjectPage(title, date, priority) {
    // //get form elements
    // let $title = document.getElementById('name');
    // let title = $title.value;
    // let $date = document.getElementById('date');
    // let date = $date.vaue;
    // let $priority = document.getElementById('priority');
    // let priority = $priority.value;

    //create elements
    let projTitle = document.createElement('h1');
    projTitle.textContent = `${title}`;
    let projDate = document.createElement('h3');
    projDate.textContent = `Due Date: ${date}`;
    let projPriority = document.createElement('h3');
    projPriority.textContent = `Priority: ${priority}`;
    let addingDiv = document.createElement('div');
    addingDiv.classList.add('list-div');
    addingDiv.style.backgroundColor = setPriorityColor(priority);
    let addingDivInput = document.createElement('input');
    addingDivInput.type = 'text';
    addingDivInput.setAttribute('id', 'taskInput');
    addingDivInput.setAttribute('placeholder', 'Add a task...');
    let addingDivButton = document.createElement('button');
    addingDivButton.textContent = 'Add';
    addingDivButton.classList.add('add-task-button');
    let toDoList = document.createElement('ul');
    toDoList.classList.add('to-do-list');
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
    if (name === '') {
        clearInput();
    } else {
        let $taskList = document.querySelector('.to-do-list');
        let task = document.createElement('li');    
        let span = document.createElement("span");
        span.textContent = ('X');
        span.classList.add('close');
        span.addEventListener('click', (e) => {
            removeTask(e);
        });
        task.textContent = `${name}`;
        addCheckedToggle(task);
        task.appendChild(span);
        $taskList.appendChild(task);
        clearInput();
    }
}

function addCheckedToggle(node) {
    node.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
}

function removeTask(event) {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}

export {displayNewProjectForm, clearContent, displayProjectPage, addTask }


