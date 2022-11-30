const characters = require('./db.json')

module.exports = {
    getWalter: (req, res) => {
        res.status(200).send(characters[0])
    },
    getJesse: (req, res) => {
        res.status(200).send(characters[1])
    },
    getSaul: (req, res) => {
        res.status(200).send(characters[2])
    },
    getGus: (req, res) => {
        res.status(200).send(characters[3])
    },
    getMike: (req, res) => {
        res.status(200).send(characters[4])
    },
    getHector: (req, res) => {
        res.status(200).send(characters[5])
    }
}