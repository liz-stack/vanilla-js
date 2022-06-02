const http = require('http');
const port = 5000;

const users = {};

http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 259200, //30일 
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (['GET', 'POST'].indexOf(req.method) > -1) {
        res.writeHead(200, headers);
        res.end('Hello World');
        return;
    }

    res.writeHeade(405, headers);
    res.end(`${req.method} is not allowed for request.`)
}).listen(port);