import { Project, clearContent } from './content';
import { format } from 'date-fns';

//cache DOM
const $contentDiv = document.querySelector('.content');
const $sidebarDiv = document.querySelector('.sidebar');
const $projectList = document.querySelector('.projects');

//function to add project to sidebar
function addProject() {
    //values of new project
    const $projectName = document.querySelector('#name');
    const $projectDate = document.querySelector('#date');
    const $projectPriority = document.querySelector('#priority');
    let nameValue = $projectName.value;
    let dateValue = format($projectDate.value, 'MM-dd-yyyy');
    let priorityValue = $projectPriority.value;

    let projectSidebarBtn = document.createElement('button');
    projectSidebarBtn.textContent = `${nameValue}`;
    if (priorityValue === 'Low') {
        projectSidebarBtn.style.backgroundColor = 'lightgreen';
    } else if (priorityValue === 'Medium') {
        projectSidebarBtn.style.backgroundColor = 'yellow';
    } else {
        projectSidebarBtn.style.backgroundColor = 'indianred';
    }

    let newProject = new Project(nameValue, dateValue, priorityValue);

    projectSidebarBtn.addEventListener('click', () => {
        clearContent();
        newProject.display();
    })



    $projectList.appendChild(projectSidebarBtn);
    
}

export { addProject }