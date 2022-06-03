const products = require('../data/boards.json')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(boards)
    })
}

module.exports = {
    findAll
}
