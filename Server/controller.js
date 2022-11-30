const characters = require('./db.json')

module.exports = {
    getWalter: (req, res) => {
        res.status(200).send(characters[0])
    }
}