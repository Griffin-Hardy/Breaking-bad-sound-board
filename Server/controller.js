const characters = require('./db.json')
let globalId = 8

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
    },
   
    addCharacter: (req, res) => {
        const {name, picture, audio} = req.body

        const newCharacter = {
            id: globalId,
            name,
            picture,
            audio,
            favorite: false
        }
        globalId++
        
        characters.push(newCharacter)
        res.status(200).send(characters)
        
    },
    getNewCharacter: (req, res) => {
        const remove = characters.slice(7)
        res.status(200).send(remove)
    },

    deleteCharacter: (req, res) => {
        const index = characters.findIndex((el) => el.id === +req.params.id)

        characters.splice(index, 1)

        res.status(200).send(characters)
    },

    addFavorite: (req, res) => {
        const index = characters.findIndex((el) => el.id === +req.params.id)
        const {type} = req.body

        if(type === true){
            characters[6].push(...index.audio)
        }

        res.status(200).send(characters)

    },
    getFavorites: (req, res) => {
        res.status(200).send(characters[6])
    }
}