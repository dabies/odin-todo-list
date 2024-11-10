import './styles.css';
import { displayNewProjectForm, clearProjectDiv, displayProjectPage, addTask } from './content';
import { addProject } from './sidebar';

//cache DOM
const $addProjectBtnSidebar = document.querySelector('.add-project-btn-sidebar');

//handle event listeners
$addProjectBtnSidebar.addEventListener('click', () => {
    displayNewProjectForm();
    const $addProjectBtnContent = document.querySelector('.add-project-btn-content');
    $addProjectBtnContent.addEventListener('click', () => {
        addProject();
        displayProjectPage();
        clearProjectDiv();
        const $addTaskButton = document.querySelector('.add-task-button');
        const taskInput = document.getElementById('taskInput');
        $addTaskButton.addEventListener('click', () => {
            addTask(taskInput.value);
        })
    });
});



