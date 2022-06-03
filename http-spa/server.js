const http = require('http');
const PORT = 5001;
const { getBoards } = require('./controller/boardController.js')

const server = http.createServer((req, res) => {
    if (req.url === '/api/boards') {
        getBoards(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify({ messge: "missing routes.." }))
    }
})

server.listen(PORT, () => console.log("Server running.."))