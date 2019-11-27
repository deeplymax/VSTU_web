import { getDataFromServer } from "./js-modules/get-data"
import { createSamples } from "./js-modules/sample"
import 'whatwg-fetch'
import mainTemplate from './templates/main-template'
import taskTemplate from './templates/task-template'

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname
    const loc = /\/tasks\/(\d+)/.exec(pathname);
    const container = document.querySelector('.container');
    if (pathname ===  '/'){
        container.innerHTML = mainTemplate;
        const taskslist = document.querySelector('.tasks-list')
        getDataFromServer(`/api/tasks/all`, (db) => {
            let allTasks = ``;
            for (let task of db) {
                allTasks += `<li class="task">
                <span class="id">${task.id}</span>
                <span class="description">${task.description}</span>
                <a class="go" href="tasks/${task.id}" target="_blank">Перейти</a>
            </li>`
            }
            taskslist.innerHTML = allTasks;
        })
    }
    else {
        container.innerHTML = taskTemplate;
        const regexp = document.querySelector('#regexp');
        const description = document.querySelector('#description');
        const idTask = loc ? loc[1] : 0;
        getDataFromServer(`/api/tasks/${idTask}`, (db) => {
            if (db.error) {
                alert(db.error);
            }
            regexp.value = db.regexp;
            description.value = db.description;
            createSamples(db.samples);
        });
    }
});