const http = require('http');
const url = require('url');
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    response.write(JSON.stringify(parsedUrl));
    response.end();
});
const port = 3000;

server.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
})
