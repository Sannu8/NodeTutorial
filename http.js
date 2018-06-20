const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello Stranger');
        response.end();
    }

    if (request.url === '/sandhya/skills') {
        response.write(JSON.stringify([
            'React', 'Redux', 'Node.js/Express', 'MongoDB/SQL', 'HTML5', 'CSS/SASS/SCSS/LESS', 'And many more.... stay tuned ;)']));
        response.end();
    }
});


server.listen(3005);

console.log('Listening on port 3005...');