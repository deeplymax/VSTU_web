const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/'));

app.get('/api/tasks/:id', (req, res, next) => {
    console.log(req.params)
    res.end('test')
});


app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});