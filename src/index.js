import './styles.css';
import { displayNewProjectForm, clearContent, displayProjectPage, addTask } from './content';
import { addProject } from './sidebar';

//cache DOM
const $addProjectBtnSidebar = document.querySelector('.add-project-btn-sidebar');
const $contentDiv = document.querySelector('.content');

//handle event listeners
$addProjectBtnSidebar.addEventListener('click', () => {
    clearContent();
    displayNewProjectForm();
    const $addProjectBtnContent = document.querySelector('.add-project-btn-content');
    $addProjectBtnContent.addEventListener('click', () => {
        addProject();
        let $title = document.getElementById('name');
        let title = $title.value;
        let $date = document.getElementById('date');
        let date = $date.vaue;
        let $priority = document.getElementById('priority');
        let priority = $priority.value;
        clearContent();
        displayProjectPage(title, date, priority);

        const $addTaskButton = document.querySelector('.add-task-button');
        const taskInput = document.getElementById('taskInput');
        $addTaskButton.addEventListener('click', () => {
            addTask(taskInput.value);
        })
    });
});



