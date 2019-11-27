const express = require('express');
const app = express();
const port = 3000;
const db = require('.././db.json');
const fs = require('fs');

app.use(express.static('./client/'));
app.use(express.json());

app.get('/api/tasks/:id', (req, res, next) => {
    let taskResponse;
    if (db[req.params.id]) {
        taskResponse = db[req.params.id];
    }
    else {
        taskResponse = { error: 'Wrong id' }
    }
    res.json(taskResponse);
});

app.post('/api/newtask', (req, res, next) => {
    createNewTask(req, res);
});

function createNewTask(req, res) {
    let data = req.body;
    db.push(data)
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), () => {
        res.json({ status: "success" })
    })
}


app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});