import { getDataFromServer } from "./js-modules/get-data"
import { createSamples } from "./js-modules/sample"
import 'whatwg-fetch'

document.addEventListener('DOMContentLoaded', () => {
    const regexp = document.querySelector('#regexp');
    const description = document.querySelector('#description');
    getDataFromServer('/api/tasks?id=1', (db) => {
        regexp.value = db.regexp;
        description.value = db.description;
        createSamples(db.samples);
    });
});