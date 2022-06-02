const http = require('http');
const PORT = 5001;
const boards = require('./data/boards')

const server = http.createServer((req, res) => {
    if (req.ulr === '/api/boards') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(products))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify({ messge: "missing routes.." }))
    }
})

server.listen(PORT, () => console.log("Server running.."))