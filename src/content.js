//cache DOM
const $contentDiv = document.querySelector('.content');
const $sidebarDiv = document.querySelector('.sidebar');
const $projectList = document.querySelector('.projects');

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
    nameInput.setAttribute('maxlength', '40');
    //label and input for date
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Due Date: ';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('placeholder', 'MM-dd-yyyy');
    dateInput.setAttribute('maxlength', '10');
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

//function to clear content div
function clearContent() {
    let $contentDiv = document.querySelector('.content');
    while ($contentDiv.firstChild) {
        $contentDiv.removeChild($contentDiv.firstChild);
    }
}

//function that reads priority and sets color
function setPriorityColor(priority) {
    if (priority === 'Low') {
        return 'lightgreen';
    } else if (priority === 'Medium') {
        return 'yellow';
    } else {
        return 'indianred';
    }
}

//function to clear input in to do list 
function clearInput() {
    document.getElementById('taskInput').value = '';
}

// class to handle projects
class Project {
    //constructor that creates page for project
    constructor(title, date, priority) {
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.titleHeader = document.createElement('h1');
        this.dateHeader = document.createElement('h3');
        this.priorityHeader = document.createElement('h3');
        this.addingDiv = document.createElement('div');
        this.addingDivInput = document.createElement('input');
        this.addingDivButton = document.createElement('button');
        this.toDoList = document.createElement('ul');
        this.projectSidebarBtn = document.createElement('button');
    }

    //create elements, and assign attributes
    display() {
        this.titleHeader.textContent = `${this.title}`;
        this.dateHeader.textContent = `Due Date: ${this.date}`;
        this.priorityHeader.textContent = `Priority: ${this.priority}`;
        this.addingDiv.classList.add('list-div');
        this.addingDiv.style.backgroundColor = setPriorityColor(this.priority);
        this.addingDivInput.type = 'text';
        this.addingDivInput.setAttribute('id', 'taskInput');
        this.addingDivInput.setAttribute('placeholder', 'Add a task...');
        this.addingDivInput.setAttribute('maxlength', '50');
        this.addingDivButton.textContent = 'Add';
        this.addingDivButton.classList.add('add-task-button');
        this.toDoList.classList.add('to-do-list');

        //event listener to erase all project content
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Remove Project';
        deleteBtn.addEventListener('click', () => {
            this.eraseAll();
        });
        //append elements to page
        $contentDiv.appendChild(this.titleHeader);
        $contentDiv.appendChild(this.dateHeader);
        $contentDiv.appendChild(this.priorityHeader);
        this.addingDiv.appendChild(this.addingDivInput);
        this.addingDiv.appendChild(this.addingDivButton);
        $contentDiv.appendChild(this.addingDiv);
        $contentDiv.appendChild(this.toDoList);
        $contentDiv.appendChild(deleteBtn);
    }

    addToSidebar() {
        //values of new project
        let nameValue = this.title;
        let priorityValue = this.priority;
        
        //using values for sidebar functionality
        this.projectSidebarBtn.textContent = `${nameValue}`;
        this.projectSidebarBtn.style.backgroundColor = setPriorityColor(priorityValue);

        //event listener to display project when clicked on sidebar
        this.projectSidebarBtn.addEventListener('click', () => {
            clearContent();
            this.display();
        })

        $projectList.appendChild(this.projectSidebarBtn);
    }

    //function to add task in project page
    addTask(taskName) {
        if (taskName === '') {
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
            task.textContent = `${taskName}`;
            addCheckedToggle(task);
            task.appendChild(span);
            $taskList.appendChild(task);
            clearInput();
        }
    }

    //function to erase project from sidebar and content div
    eraseAll() {
        clearContent();
        $projectList.removeChild(this.projectSidebarBtn);
    }
}

//function to remove task by removing from parent element
function removeTask(event) {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}

//functipon to add checked class toggle to list elements
function addCheckedToggle(node) {
    node.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
}

export {displayNewProjectForm, clearContent, Project }


