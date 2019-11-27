const express = require('express');
const app = express();
const port = 3000;
const db = require('.././db.json');
const fs = require('fs');
const User = require('./models/User');
const Task = require('./models/Task');

let userReady = false;
let taskReady = false;

User.sync({ force: true }).then(() => {
    userReady = true;
});
Task.sync().then(() => {
    taskReady = true;
});

app.use(express.static('./client/'));
app.use('/tasks/:id', express.static('./client/'))
app.use(express.json());


app.get('/api/tasks/:id', (req, res, next) => {
    let idTask = req.params.id;
    if (taskReady) {
        if (idTask === '0') {
            Task.findOne()
            .then(task => {
                if (task === null) {
                    throw new Error('Wrong id');
                }
                res.json(task);
            })
            .catch(error => {
                res.json({error: 'empty DB'})
            })
        }
        else {
            Task.findOne({ where: { id: idTask} })
                .then(task => {
                    if (task === null) {
                        throw new Error('Wrong id');
                    }
                    res.json(task);
                })
                .catch(error => {
                    res.json({ error: 'Wrong id' });
                })
        }
    }
});

app.post('/api/newtask', (req, res, next) => {
    if (taskReady) {
        createNewTask(req, res);
    }
});

function createNewTask(req, res) {
    Task.create(req.body)
        .then(result => {
            res.status(201);
            res.json({ 'status': 'created' });
        })
        .catch(error => {
            console.log('error');
            res.status(500)
            res.json({ error: error })
        })
}
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});