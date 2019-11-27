import { getDataFromServer } from "./js-modules/get-data"
import { createSamples } from "./js-modules/sample"
import 'whatwg-fetch'

document.addEventListener('DOMContentLoaded', () => {
    const regexp = document.querySelector('#regexp');
    const description = document.querySelector('#description');
    const pathname = window.location.pathname;
    const loc = /\/tasks\/(\d+)/.exec(pathname);
    const idTask = loc ? loc[1] : 0;
    console.log(idTask);
    getDataFromServer(`/api/tasks/${idTask}`, (db) => {
        if (db.error) {
            alert(db.error);
        }
        regexp.value = db.regexp;
        description.value = db.description;
        createSamples(db.samples);
    });
});