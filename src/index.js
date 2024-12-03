import './styles.css';
import { displayNewProjectForm, clearContent, Project } from './content';
import { format } from 'date-fns';

//cache DOM
const $addProjectBtnSidebar = document.querySelector('.add-project-btn-sidebar');

//handle event listeners
$addProjectBtnSidebar.addEventListener('click', () => {
    clearContent();
    displayNewProjectForm();
    const $addProjectBtnContent = document.querySelector('.add-project-btn-content');
    $addProjectBtnContent.addEventListener('click', () => {
        //get values of form at submit event
        let $title = document.getElementById('name');
        let title = $title.value;
        let $date = document.getElementById('date');
        let date = format($date.value, 'MM-dd-yyyy');
        let $priority = document.getElementById('priority');
        let priority = $priority.value;
        // clear content div and add project 
        clearContent();
        let newProject = new Project(title, date, priority);
        newProject.addToSidebar();
        newProject.display();

        //event listener to add task when button is clicked
        const $addTaskButton = document.querySelector('.add-task-button');
        const taskInput = document.getElementById('taskInput');
        $addTaskButton.addEventListener('click', () => {
            newProject.addTask(taskInput.value);
        })
    });
});



