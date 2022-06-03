const Board = require('../model/boardModel.js')


async function getBoards(req, res) {
    try {
        const boards = await Board.findAll()

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(boards))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getBoards
}