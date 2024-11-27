import './styles.css';
import { displayNewProjectForm, clearContent, Project } from './content';
import { addProject } from './sidebar';
import { format } from 'date-fns';

//cache DOM
const $addProjectBtnSidebar = document.querySelector('.add-project-btn-sidebar');
const $contentDiv = document.querySelector('.content');

//handle event listeners
$addProjectBtnSidebar.addEventListener('click', () => {
    clearContent();
    displayNewProjectForm();
    const $addProjectBtnContent = document.querySelector('.add-project-btn-content');
    $addProjectBtnContent.addEventListener('click', () => {
        let $title = document.getElementById('name');
        let title = $title.value;
        let $date = document.getElementById('date');
        let date = format($date.value, 'MM-dd-yyyy');
        let $priority = document.getElementById('priority');
        let priority = $priority.value;
        clearContent();
        let newProject = new Project(title, date, priority);
        newProject.addToSidebar();
        newProject.display();

        const $addTaskButton = document.querySelector('.add-task-button');
        const taskInput = document.getElementById('taskInput');
        $addTaskButton.addEventListener('click', () => {
            newProject.addTask(taskInput.value);
        })
    });
});



