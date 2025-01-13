const http = require('http');
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    if (method === 'GET' && url === '/') {
        console.log('Home Page');
        res.statusCode = 201;
        res.end();
    }

    if (method === 'GET' && url === '/help') {
        console.log('Help Page');
        console.log('URL ' + req.url);
        console.log('Method ' + req.method);
        console.log('Headers ' + req.headers);

        res.setHeader('Content-Type', 'text/html');
        res.write('<p>Welcome</p>');

        res.end();
    }


});

server.listen(3000);