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
    let projDate = $projectDate.value;
    let projPriority = $projectPriority.value;

    let newProject = document.createElement('button');
    newProject.textContent = `${nameValue}`;
    if (projPriority === 'Low') {
        newProject.style.backgroundColor = 'lightgreen';
    } else if (projPriority === 'Medium') {
        newProject.style.backgroundColor = 'yellow';
    } else {
        newProject.style.backgroundColor = 'indianred';
    }
    $projectList.appendChild(newProject);
    
}

export { addProject }